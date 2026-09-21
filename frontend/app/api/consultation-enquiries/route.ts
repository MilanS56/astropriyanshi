import {
  type ConsultationEnquiryApiResponse,
  validateConsultationEnquiry,
} from "@/lib/consultation-enquiries";
import { getConsultationsByIds } from "@/lib/consultations";
import { Resend } from "resend";
import { createConsultationEmailTemplates } from "@/lib/consultation-email-templates";

const noStoreHeaders = { "Cache-Control": "no-store" };

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      {
        success: false,
        message: "Invalid enquiry details.",
      } satisfies ConsultationEnquiryApiResponse,
      { status: 400, headers: noStoreHeaders },
    );
  }

  const validation = validateConsultationEnquiry(body);

  if (!validation.data) {
    return Response.json(
      {
        success: false,
        message: "Invalid enquiry details.",
      } satisfies ConsultationEnquiryApiResponse,
      { status: 400, headers: noStoreHeaders },
    );
  }

  const consultations = getConsultationsByIds(validation.data.consultationIds);

  if (consultations.length !== validation.data.consultationIds.length) {
    return Response.json(
      {
        success: false,
        message: "Invalid enquiry details.",
      } satisfies ConsultationEnquiryApiResponse,
      { status: 400, headers: noStoreHeaders },
    );
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.MAIL_FROM;
    const to = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !from || !to) {
      throw new Error("Consultation email configuration is missing.");
    }

    const resend = new Resend(apiKey);
    const { name, email, phone, message } = validation.data;
    const selectedNames = consultations.map(({ name }) => `- ${name}`).join("\n");
    const { notificationHtml, acknowledgementHtml } = createConsultationEmailTemplates(validation.data, consultations);
    const { data, error } = await resend.batch.send(
      [
        {
          from,
          to: [to],
          replyTo: email,
          subject: `New Consultation Enquiry — ${name}`,
          html: notificationHtml,
          text: `Selected Consultations:\n${selectedNames}\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nDetailed Concern:\n\n${message}`,
        },
        {
          from,
          to: [email],
          subject: "Your Consultation Enquiry — PRIYANSHII AASTTRO",
          html: acknowledgementHtml,
          text: `Dear ${name},\n\nThank you for contacting PRIYANSHII AASTTRO. We have received your consultation enquiry for:\n\n${selectedNames}\n\nThis confirms receipt of your enquiry. An appointment has not been booked.\n\nWarm regards,\nPRIYANSHII AASTTRO`,
        },
      ],
      { batchValidation: "strict" },
    );

    if (error || data?.data.length !== 2) {
      throw new Error("Consultation emails were not accepted by Resend.");
    }

    return Response.json(
      { success: true } satisfies ConsultationEnquiryApiResponse,
      { headers: noStoreHeaders },
    );
  } catch {
    return Response.json(
      {
        success: false,
        message: "Your enquiry could not be submitted. Please try again.",
      } satisfies ConsultationEnquiryApiResponse,
      { status: 502, headers: noStoreHeaders },
    );
  }
}
