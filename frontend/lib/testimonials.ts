export type Testimonial = {
  id: string;
  category: "Career Consultation" | "Relationship Consultation";
  language: "Hindi" | "English";
  clientLabel: "Verified Client";
  quote: string;
  screenshot: string;
  screenshotWidth: number;
  screenshotHeight: number;
};

export const testimonials: readonly Testimonial[] = [
  {
    id: "testimonial-one",
    category: "Career Consultation",
    language: "Hindi",
    clientLabel: "Verified Client",
    quote: `राधे कृष्णा जी

मैंने आपसे अपने जॉब के लिए बात की थी।

आपने जो सलाह दी हैं वो मेरे लिए राम बाण की तरह काम कर गई।

उसके लिए बहुत बहुत धन्यवाद आपका।

आपकी वजह से आज मेरी जिंदगी में मुझे मेरी राह मिल गई।

फिर से दिल से धन्यवाद आपका बहुत बहुत शुक्रिया 🙏🙏🙏`,
    screenshot: "/images/testimonials/testimonial_one.webp",
    screenshotWidth: 779,
    screenshotHeight: 1600,
  },
  {
    id: "testimonial-two",
    category: "Relationship Consultation",
    language: "Hindi",
    clientLabel: "Verified Client",
    quote: `राधे राधे मैम, आपने मेरी relationship को लेकर जो guidance दी, उसके लिए दिल से धन्यवाद। ❤️

आपने मेरी situation को बहुत अच्छे से समझकर सही रास्ता बताया।

आपकी बताई हुई बातें धीरे-धीरे सच होती दिखाई दे रही हैं।

मेरे और मेरे partner के बीच पहले से काफी improvement आया है।

अब मुझे अपने relationship को लेकर ज्यादा confidence और positivity महसूस होती है।

आपकी सलाह ने मुझे बहुत मुश्किल समय में संभाला।

बहुत-बहुत धन्यवाद मैम, आपका guidance मेरे लिए बहुत मायने रखता है। 🙏❤️`,
    screenshot: "/images/testimonials/testimonial_two.webp",
    screenshotWidth: 777,
    screenshotHeight: 1600,
  },
  {
    id: "testimonial-three",
    category: "Career Consultation",
    language: "English",
    clientLabel: "Verified Client",
    quote: `Ma’am, I really appreciate the guidance you gave me regarding my career. 🙏

Your advice gave me a clear direction, and thankfully I have now got a good job opportunity.

Thank you so much! ❤️`,
    screenshot: "/images/testimonials/testimonial_three.webp",
    screenshotWidth: 779,
    screenshotHeight: 1600,
  },
];
