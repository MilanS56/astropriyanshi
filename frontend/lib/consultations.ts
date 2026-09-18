export type Consultation = {
  id: string;
  number: string;
  name: string;
  hindiName?: string;
};

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
    id: "other-matters",
    number: "11",
    name: "Other Matters",
  },
];

export function getConsultationById(id: string | null | undefined) {
  if (!id) return undefined;

  return consultations.find((consultation) => consultation.id === id);
}
