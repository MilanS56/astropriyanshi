"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

export type Language = "en" | "hi";
const STORAGE_KEY = "astro-priyanshii:language";

const copy = {
  en: {
    nav: ["Home", "About", "Consultations", "Insights", "Testimonials", "Contact"],
    navHi: "Switch language to Hindi", navEn: "Switch language to English", navigation: "Navigation",
    book: "Book a Consultation", footerTag: "Guiding you toward clarity, balance & purpose.",
    aboutEyebrow: "ABOUT PRIYANSHII", aboutHeading: "A thoughtful approach to understanding life's questions.",
    aboutBody: "Through Vedic Astrology, Lal Kitab and Numerology, Priyanshii combines continuous learning with thoughtful analysis to help people explore their situations with greater clarity and understanding.",
    aboutCta: "Explore About Priyanshii", whyEyebrow: "WHY THIS EXPERIENCE?", whyHeading: "More than answers. A clearer way forward.",
    whyIntro: "Every consultation is an opportunity to pause, reflect and understand the patterns shaping your journey.",
    principles: ["PERSONALIZED GUIDANCE", "THOUGHTFUL CONVERSATIONS", "CLARITY WITH PURPOSE"],
    principleText: ["Your journey deserves a perspective that feels personal, relevant and meaningful.", "Explore the questions that matter with space to reflect, understand and move forward.", "Turn reflection into a clearer understanding of where you are and where you want to go."],
    ready: "READY WHEN YOU ARE", bookingHeading: "Begin your journey with greater clarity.", bookingBody: "A personalized consultation can be a space to pause, reflect and explore what matters most to you.",
    connect: "LET'S CONNECT", contactHeading: "Have a question? Let's talk.", contactBody: "Whether you're curious about a consultation or simply want to know more, feel free to reach out.",
    testimonialsEyebrow: "CLIENT EXPERIENCES", testimonialsHeading: "Words from those who have connected with Priyanshii.", testimonialsBody: "Real experiences shared by clients following their consultations.", viewAll: "View All Testimonials", viewOriginal: "View Original",
    consultationEyebrow: "CONSULTATIONS", consultationHeading: "Guidance for the questions that matter to you.", consultationBody: "Explore the consultation areas and select one or more that best match what you'd like to understand.", selected: "Selected Consultations", select: "Select", selectedWord: "Selected", continue: "Continue to Enquiry", clear: "Clear all",
  },
  hi: {
    nav: ["होम", "परिचय", "परामर्श", "ज्योतिषीय विचार", "क्लाइंट अनुभव", "संपर्क"],
    navHi: "अंग्रेज़ी चुनें", navEn: "हिंदी चुनें", navigation: "नेविगेशन",
    book: "परामर्श लें", footerTag: "स्पष्टता, संतुलन और उद्देश्य की ओर आपका मार्गदर्शन।",
    aboutEyebrow: "PRIYANSHII के बारे में", aboutHeading: "जिंदगी के सवालों को समझने का एक विचारशील दृष्टिकोण।",
    aboutBody: "वैदिक ज्योतिष, लाल किताब और न्यूमेरोलॉजी के माध्यम से Priyanshii निरंतर सीखने और गहन विश्लेषण को साथ लेकर लोगों को अपनी परिस्थितियों को अधिक स्पष्टता और समझ के साथ देखने में सहायता करती हैं।",
    aboutCta: "Priyanshii के बारे में जानें", whyEyebrow: "यह अनुभव क्यों?", whyHeading: "सिर्फ उत्तर नहीं, आगे बढ़ने की स्पष्ट दिशा।",
    whyIntro: "हर परामर्श एक ऐसा अवसर हो सकता है, जहाँ आप ठहरकर अपनी परिस्थितियों को समझें और आगे की राह को अधिक स्पष्टता से देखें।",
    principles: ["व्यक्तिगत मार्गदर्शन", "विचारपूर्ण संवाद", "स्पष्टता के साथ उद्देश्य"],
    principleText: ["हर व्यक्ति की परिस्थिति अलग होती है। इसलिए आपका मार्गदर्शन भी आपकी स्थिति और आपके सवालों के अनुरूप होना चाहिए।", "उन सवालों पर खुलकर बात करने की जगह, जो आपके लिए वास्तव में मायने रखते हैं।", "आप जहाँ हैं, उसे समझने और जहाँ जाना चाहते हैं, उसकी दिशा को अधिक स्पष्टता से देखने में सहायता।"],
    ready: "जब आप तैयार हों", bookingHeading: "अधिक स्पष्टता के साथ अपनी यात्रा की शुरुआत करें।", bookingBody: "एक व्यक्तिगत परामर्श आपको अपनी परिस्थितियों, सवालों और जीवन के महत्वपूर्ण पहलुओं को समझने का अवसर दे सकता है।",
    connect: "आइए बात करें", contactHeading: "कोई सवाल है? हमसे बात करें।", contactBody: "यदि आप किसी परामर्श के बारे में जानना चाहते हैं या बस कुछ पूछना चाहते हैं, तो बेझिझक हमसे संपर्क करें।",
    testimonialsEyebrow: "क्लाइंट अनुभव", testimonialsHeading: "उन लोगों की बातें, जिन्होंने Priyanshii से परामर्श लिया।", testimonialsBody: "परामर्श के बाद क्लाइंट्स द्वारा साझा किए गए वास्तविक अनुभव।", viewAll: "सभी क्लाइंट अनुभव देखें", viewOriginal: "मूल संदेश देखें",
    consultationEyebrow: "परामर्श", consultationHeading: "आपके महत्वपूर्ण सवालों को समझने के लिए व्यक्तिगत मार्गदर्शन।", consultationBody: "उन परामर्श क्षेत्रों को देखें जो आपकी स्थिति और सवालों से जुड़े हैं। आप एक या अधिक विकल्प चुन सकते हैं।", selected: "चयनित परामर्श", select: "चुनें", selectedWord: "चयनित", continue: "परामर्श अनुरोध भेजें", clear: "सब हटाएँ",
  },
} as const;

type Copy = (typeof copy)[Language];
const LanguageContext = createContext<{ language: Language; setLanguage: (language: Language) => void; c: Copy }>({ language: "en", setLanguage: () => {}, c: copy.en });

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [language, setLanguageState] = useState<Language>("en");
  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "hi" || stored === "en") window.requestAnimationFrame(() => setLanguageState(stored));
  }, []);
  useEffect(() => {
    document.documentElement.lang = language === "hi" ? "hi" : "en";
    const titles: Record<string, [string, string]> = {
      "/": ["PRIYANSHII AASTTRO | ज्योतिषीय परामर्श", "वैदिक ज्योतिष, लाल किताब और न्यूमेरोलॉजी के माध्यम से व्यक्तिगत ज्योतिषीय मार्गदर्शन।"],
      "/about": ["Priyanshii के बारे में | PRIYANSHII AASTTRO", "Priyanshii के बारे में जानें और उनके ज्योतिषीय परामर्श दृष्टिकोण को समझें।"],
      "/consultations": ["परामर्श | PRIYANSHII AASTTRO", "अपनी स्थिति और सवालों के अनुरूप परामर्श क्षेत्र चुनें।"],
      "/testimonials": ["क्लाइंट अनुभव | PRIYANSHII AASTTRO", "PRIYANSHII AASTTRO से परामर्श लेने वाले क्लाइंट्स के अनुभव पढ़ें।"],
      "/insights": ["ज्योतिषीय विचार | PRIYANSHII AASTTRO", "ज्योतिष और जीवन से जुड़े विचार जल्द उपलब्ध होंगे।"],
    };
    if (language === "hi" && titles[pathname]) {
      document.title = titles[pathname][0];
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) { meta = document.createElement("meta"); meta.setAttribute("name", "description"); document.head.appendChild(meta); }
      meta.setAttribute("content", titles[pathname][1]);
    }
  }, [language, pathname]);
  function setLanguage(next: Language) { setLanguageState(next); window.localStorage.setItem(STORAGE_KEY, next); document.documentElement.lang = next === "hi" ? "hi" : "en"; }
  const value = useMemo(() => ({ language, setLanguage, c: copy[language] }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
export function useLanguage() { return useContext(LanguageContext); }
