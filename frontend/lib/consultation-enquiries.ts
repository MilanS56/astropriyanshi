import { getConsultationById } from "@/lib/consultations";

export type ConsultationEnquiry = {
  consultationId: string;
  name: string;
  email: string;
  message: string;
};

export type ConsultationEnquiryField = keyof ConsultationEnquiry;
export type ConsultationEnquiryErrors = Partial<
  Record<ConsultationEnquiryField, string>
>;

export type ConsultationEnquiryApiResponse =
  | { success: true }
  | { success: false; message: string };

export const enquiryLimits = {
  nameMin: 2,
  nameMax: 100,
  emailMax: 254,
  messageMin: 10,
  messageMax: 4000,
} as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export function validateConsultationEnquiry(input: unknown): {
  data: ConsultationEnquiry | null;
  errors: ConsultationEnquiryErrors;
} {
  const source =
    typeof input === "object" && input !== null
      ? (input as Record<string, unknown>)
      : {};

  const data: ConsultationEnquiry = {
    consultationId: readString(source.consultationId),
    name: readString(source.name),
    email: readString(source.email),
    message: readString(source.message),
  };
  const errors: ConsultationEnquiryErrors = {};

  if (!getConsultationById(data.consultationId)) {
    errors.consultationId = "Please choose a valid consultation.";
  }

  if (
    data.name.length < enquiryLimits.nameMin ||
    data.name.length > enquiryLimits.nameMax
  ) {
    errors.name = "Please enter your name.";
  }

  if (
    data.email.length > enquiryLimits.emailMax ||
    !emailPattern.test(data.email)
  ) {
    errors.email = "Please enter a valid email address.";
  }

  if (
    data.message.length < enquiryLimits.messageMin ||
    data.message.length > enquiryLimits.messageMax
  ) {
    errors.message = `Please enter between ${enquiryLimits.messageMin} and ${enquiryLimits.messageMax} characters.`;
  }

  return {
    data: Object.keys(errors).length === 0 ? data : null,
    errors,
  };
}
