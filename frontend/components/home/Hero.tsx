"use client";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/i18n";

export default function Hero() {
  const { language } = useLanguage();
  const heroRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hero = heroRef.current;

    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.35,
      },
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative isolate overflow-hidden bg-[#030c1c] lg:min-h-screen lg:portrait:min-h-[min(100svh,60rem)]"
    >
      {/* Background */}
      <picture aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <source
          media="(max-width: 767px)"
          srcSet="/images/hero/hero-mobile.webp"
        />

        <source
          media="(min-width: 768px) and (max-width: 1023px)"
          srcSet="/images/hero/hero-tablet.webp"
        />

        <img
          src="/images/hero/hero-desktop-no-moon.webp"
          alt=""
          className="h-full w-full object-cover"
        />
      </picture>
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: `
      linear-gradient(
        90deg,
        rgba(3, 12, 28, 0.74) 0%,
        rgba(3, 12, 28, 0.48) 45%,
        rgba(3, 12, 28, 0.12) 72%,
        transparent 100%
      )
    `,
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-36 bg-gradient-to-b from-[#030c1c]/45 to-transparent"
      />
      {/* Animated Moon */}
      <img
        src="/images/hero/hero-moon.webp"
        alt=""
        aria-hidden="true"
        className={`pointer-events-none absolute right-16 top-[88px] z-20 w-[68px] transition-[translate,opacity] duration-[3000ms] ease-out md:right-8 md:top-40 md:w-[150px] lg:right-auto lg:left-[84%] lg:top-[20%] lg:w-[300px] lg:-translate-x-1/2 lg:portrait:w-[220px] lg:portrait:top-[24%] ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 md:translate-y-12 lg:translate-y-[180px]"
        }`}
      />

      <img
        src="/images/hero/hero-mountains.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-25 h-[360px] w-full object-cover object-bottom opacity-80 md:h-[440px] md:opacity-90 lg:inset-0 lg:h-full lg:object-center lg:opacity-100"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[26] h-[400px] md:h-[360px] lg:h-[260px]"
        style={{
          background:
            "linear-gradient(to top, rgba(3, 12, 28, 0.86) 0%, rgba(3, 12, 28, 0.68) 38%, rgba(3, 12, 28, 0.28) 72%, transparent 100%)",
        }}
      />

      {/* Temporary Hero Content */}
      <div className="relative z-30 flex min-h-[100svh] lg:min-h-screen lg:portrait:min-h-[min(100svh,60rem)]">
        <div className="flex w-full max-w-[1600px] items-start px-6 pb-24 pt-44 md:px-8 md:pb-28 md:pt-40 lg:px-16 lg:pb-32 lg:pt-[clamp(9rem,19vh,13rem)] xl:px-20">
          <div className="w-full max-w-[720px] lg:ml-[4%] lg:max-w-[48%]">
            {/* Eyebrow */}
            <p className={`mb-5 text-[10px] font-medium text-[#E8B85C] md:text-xs lg:text-sm ${language === "hi" ? "tracking-[0.08em]" : "uppercase tracking-[0.24em] md:tracking-[0.3em] lg:tracking-[0.32em]"}`}>
              {language === "hi" ? "समझें  ·  जानें  ·  आगे बढ़ें" : "ALIGN  ·  UNDERSTAND  ·  EMPOWER"}
            </p>

            {/* Main Heading */}
            <h1 className={`mt-5 max-w-[680px] font-serif text-[#f8f4ec] ${language === "hi" ? "text-[clamp(2.35rem,8vw,4.6rem)] leading-[1.12] tracking-[-0.035em] md:text-[clamp(3.2rem,5vw,5rem)]" : "text-[clamp(2.15rem,6vw,4.35rem)] leading-[1.02] tracking-[-0.045em] md:text-[clamp(2.75rem,5.8vw,4.5rem)]"}`}>
              {language === "hi" ? <><span className="block">सितारों की भाषा को</span><span className="block">समझते हुए,</span><span className="block">आपकी राह को <span className="text-[#f4b94f]">स्पष्टता</span> दें।</span></> : <><span className="block">Guiding You Through</span><span className="block">the <span className="text-[#f4b94f]">Language</span></span><span className="block">of the Stars.</span></>}
            </h1>

            {/* Description */}
            <p className={`mt-7 max-w-[560px] text-[#f3eadc]/90 md:max-w-[540px] ${language === "hi" ? "text-[1.05rem] leading-[1.85]" : "text-[1rem] leading-[1.75]"}`}>
              {language === "hi" ? "जीवन के महत्वपूर्ण सवालों और परिस्थितियों को बेहतर समझने के लिए व्यक्तिगत ज्योतिषीय मार्गदर्शन।" : "Personalized astrological insights for a more balanced, confident and purposeful life."}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex max-w-[360px] flex-col items-stretch gap-3 md:max-w-none md:flex-row md:flex-wrap md:items-center md:gap-4">
              {/* Primary CTA */}

              <a
                href="/consultations"
                className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-[#F0B957] px-6 py-3 font-serif text-[15px] text-[#071222] transition-all duration-300 hover:bg-[#F6C96F] focus:outline-none focus:ring-2 focus:ring-[#F0B957] focus:ring-offset-4 focus:ring-offset-[#030c1c] sm:px-7"
              >
                <span>{language === "hi" ? "परामर्श लें" : "Book a Consultation"}</span>

                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* Secondary CTA */}
              <a
                href="#services"
                className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full border border-[#d9a441]/70 bg-[#030c1c]/25 px-7 py-3.5 text-[#f8f4ec] backdrop-blur-[2px] transition-all duration-300 hover:bg-[#030c1c]/50 focus:outline-none focus:ring-2 focus:ring-[#F0B957] focus:ring-offset-4 focus:ring-offset-[#030c1c]"
              >
                <span>{language === "hi" ? "परामर्श देखें" : "Explore Services"}</span>

                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            <div className="relative mt-12 grid w-full max-w-[620px] grid-cols-2 gap-y-5 overflow-hidden rounded-[1.1rem] border-y border-[#F0B957]/25 px-3 py-4 md:mt-14 lg:flex lg:max-w-[700px] lg:items-stretch lg:gap-y-0 lg:px-2 lg:py-3">
              {" "}
              <div
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(3, 12, 28, 0.78) 0%, rgba(3, 12, 28, 0.60) 52%, rgba(3, 12, 28, 0.38) 100%)",
                }}
              />
              {/* Clarity */}
              <div className="flex min-w-0 flex-col items-start pr-4 lg:flex-1 lg:px-4 first:pl-0">
                {" "}
                <img
                  src="/images/decorators/lotus.svg"
                  alt=""
                  aria-hidden="true"
                  className="mb-1.5 h-5 w-5 opacity-95 lg:h-6 lg:w-6"
                />
                <h3 className="font-serif font-medium text-[15px] text-[#f8f4ec]/95 md:text-base">
                  {language === "hi" ? "स्पष्टता" : "Clarity"}
                </h3>
                <p className="mt-1 text-[13px] leading-5 text-[#f8f4ec]/80 md:text-sm">
                  {language === "hi" ? "वर्तमान को समझने के लिए" : "for your present"}
                </p>
              </div>
              {/* Divider */}
              <div className="my-1 hidden h-12 w-px bg-[#F0B957]/25 lg:block" />
              {/* Guidance */}
              <div className="flex min-w-0 flex-col items-start border-l border-[#F0B957]/25 pl-5 pr-2 lg:flex-1 lg:border-0 lg:px-4">
                {" "}
                <img
                  src="/images/decorators/moon.svg"
                  alt=""
                  aria-hidden="true"
                  className="mb-1.5 h-5 w-5 opacity-95 lg:h-6 lg:w-6"
                />
                <h3 className="font-serif font-medium text-[15px] text-[#f8f4ec]/95 md:text-base">
                  {language === "hi" ? "मार्गदर्शन" : "Guidance"}
                </h3>
                <p className="mt-1 text-[13px] leading-5 text-[#f8f4ec]/80 md:text-sm">
                  {language === "hi" ? "आगे की राह के लिए" : "for your future"}
                </p>
              </div>
              {/* Divider */}
              <div className="my-1 hidden h-12 w-px bg-[#F0B957]/25 lg:block" />
              {/* Balance */}
              <div className="flex min-w-0 flex-col items-start pr-4 lg:flex-1 lg:px-4">
                {" "}
                <img
                  src="/images/decorators/star.svg"
                  alt=""
                  aria-hidden="true"
                  className="mb-1.5 h-5 w-5 opacity-95 lg:h-6 lg:w-6"
                />
                <h3 className="font-serif font-medium text-[15px] text-[#f8f4ec]/95 md:text-base">
                  {language === "hi" ? "संतुलन" : "Balance"}
                </h3>
                <p className="mt-1 text-[13px] leading-5 text-[#f8f4ec]/80 md:text-sm">
                  {language === "hi" ? "जीवन के सफर में" : "in your journey"}
                </p>
              </div>
              {/* Divider */}
              <div className="my-1 hidden h-12 w-px bg-[#F0B957]/25 lg:block" />
              {/* Fulfillment */}
              <div className="flex min-w-0 flex-col items-start border-l border-[#F0B957]/25 pl-5 pr-2 lg:flex-1 lg:border-0 lg:px-4">
                {" "}
                <img
                  src="/images/decorators/sun.svg"
                  alt=""
                  aria-hidden="true"
                  className="mb-1.5 h-5 w-5 opacity-95 lg:h-6 lg:w-6"
                />
                <h3 className="font-serif font-medium text-[15px] text-[#f8f4ec]/95 md:text-base">
                  {language === "hi" ? "समृद्धि" : "Abundance"}
                </h3>
                <p className="mt-1 text-[13px] leading-5 text-[#f8f4ec]/80 md:text-sm">
                  {language === "hi" ? "जीवन और रिश्तों में" : "in life and love"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
