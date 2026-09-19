export type Consultation = {
  id: string;
  number: string;
  name: string;
  hindiName?: string;
  description?: string;
};

export const FULL_HOROSCOPE_CONSULTATION_ID = "full-horoscope";

export const consultations: Consultation[] = [
  {
    id: "marriage",
    number: "01",
    name: "Marriage Consultation",
    hindiName: "विवाह परामर्श",
  },
  {
    id: "relationship",
    number: "02",
    name: "Relationship Consultation",
    hindiName: "रिलेशनशिप परामर्श",
  },
  {
    id: "career",
    number: "03",
    name: "Career Consultation",
    hindiName: "करियर परामर्श",
  },
  {
    id: "finance-loan",
    number: "04",
    name: "Finance & Loan Consultation",
    hindiName: "वित्त एवं लोन परामर्श",
  },
  {
    id: "court-property-disputes",
    number: "05",
    name: "Court Case & Property Disputes Consultation",
    hindiName: "कोर्ट केस एवं संपत्ति विवाद परामर्श",
  },
  {
    id: "education",
    number: "06",
    name: "Education Consultation",
    hindiName: "शिक्षा परामर्श",
  },
  {
    id: "property-assets-vehicle",
    number: "07",
    name: "Property, Assets & Vehicle Consultation",
    hindiName: "संपत्ति, एसेट्स एवं वाहन परामर्श",
  },
  {
    id: "health-children",
    number: "08",
    name: "Health & Children Consultation",
    hindiName: "स्वास्थ्य एवं संतान परामर्श",
  },
  {
    id: "numerology",
    number: "09",
    name: "Numerology Consultation",
    hindiName: "न्यूमेरोलॉजी परामर्श",
  },
  {
    id: "remedies",
    number: "10",
    name: "Remedies Consultation",
    hindiName: "उपाय परामर्श",
  },
  {
    id: FULL_HOROSCOPE_CONSULTATION_ID,
    number: "11",
    name: "Full Horoscope Consultation",
    description:
      "An all-in-one consultation covering career, finance, marriage, children and future.",
  },
  {
    id: "other-matters",
    number: "12",
    name: "Other Matters",
  },
];

export function getConsultationById(id: string | null | undefined) {
  if (!id) return undefined;

  return consultations.find((consultation) => consultation.id === id);
}

export function getConsultationsByIds(ids: string[]) {
  const uniqueIds = [...new Set(ids)];

  return uniqueIds
    .map((id) => getConsultationById(id))
    .filter((consultation): consultation is Consultation =>
      Boolean(consultation),
    );
}

export function normalizeConsultationSelectionIds(ids: string[]) {
  const validIds = getConsultationsByIds(ids).map(
    (consultation) => consultation.id,
  );

  return validIds.includes(FULL_HOROSCOPE_CONSULTATION_ID)
    ? [FULL_HOROSCOPE_CONSULTATION_ID]
    : validIds;
}
