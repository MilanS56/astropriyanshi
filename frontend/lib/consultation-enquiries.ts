import { getConsultationsByIds } from "@/lib/consultations";

export type ConsultationEnquiry = {
  consultationIds: string[];
  name: string;
  email: string;
  phone: string;
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
  phoneMax: 30,
  messageMin: 10,
  messageMax: 4000,
} as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function readStringArray(value: unknown) {
  if (!Array.isArray(value)) return [];

  return [
    ...new Set(
      value
        .filter((item): item is string => typeof item === "string")
        .map((item) => item.trim())
        .filter(Boolean),
    ),
  ];
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
    consultationIds: readStringArray(source.consultationIds),
    name: readString(source.name),
    email: readString(source.email),
    phone: readString(source.phone),
    message: readString(source.message),
  };
  const errors: ConsultationEnquiryErrors = {};

  if (
    data.consultationIds.length === 0 ||
    getConsultationsByIds(data.consultationIds).length !==
      data.consultationIds.length
  ) {
    errors.consultationIds = "Please choose at least one valid consultation.";
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

  const phoneDigits = data.phone.replace(/\D/g, "");
  const phonePattern = /^\+?[\d\s()-]+$/;

  if (
    data.phone.length > enquiryLimits.phoneMax ||
    !phonePattern.test(data.phone) ||
    phoneDigits.length < 7 ||
    phoneDigits.length > 15
  ) {
    errors.phone = "Please enter a valid phone number.";
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
