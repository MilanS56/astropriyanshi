import {
  type ConsultationEnquiryApiResponse,
  validateConsultationEnquiry,
} from "@/lib/consultation-enquiries";
import { getConsultationById } from "@/lib/consultations";

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

  const consultation = getConsultationById(validation.data.consultationId);

  if (!consultation) {
    return Response.json(
      {
        success: false,
        message: "Invalid enquiry details.",
      } satisfies ConsultationEnquiryApiResponse,
      { status: 400, headers: noStoreHeaders },
    );
  }

  // TODO: Add rate limiting before connecting an external delivery provider.
  // TODO: Use the resolved consultation to send the Priyanshii notification
  // and client acknowledgement through Resend.
  return Response.json(
    {
      success: false,
      message:
        "Enquiry submission will be available once the contact service is connected.",
    } satisfies ConsultationEnquiryApiResponse,
    { status: 503, headers: noStoreHeaders },
  );
}
