"use client";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
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
      className="relative isolate min-h-screen overflow-hidden"
    >
      {/* Background */}
      <picture className="absolute inset-0 z-0">
        <source
          media="(max-width: 767px)"
          srcSet="/images/hero/hero-mobile.webp"
        />

        <source
          media="(max-width: 1023px)"
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
        rgba(3, 12, 28, 0.65) 0%,
        rgba(3, 12, 28, 0.35) 55%,
        transparent 100%
      )
    `,
        }}
      />
      {/* Animated Moon */}
      <img
        src="/images/hero/hero-moon.webp"
        alt=""
        aria-hidden="true"
        className={`absolute left-[84%] top-[20%] z-20 w-[220px] -translate-x-1/2 transition-all duration-[3000ms] ease-out md:w-[260px] lg:w-[300px] ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-[180px] opacity-0"
        }`}
      />

      <img
        src="/images/hero/hero-mountains.webp"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-25 h-full w-full object-cover"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[26] h-[260px]"
        style={{
          background:
            "linear-gradient(to top, rgba(3, 12, 28, 0.82) 0%, rgba(3, 12, 28, 0.58) 45%, rgba(3, 12, 28, 0.18) 75%, transparent 100%)",
        }}
      />

      {/* Temporary Hero Content */}
      <div className="relative z-30 flex min-h-screen">
        <div className="w-full max-w-[1600px] px-6 pt-32 pb-20 sm:px-10 sm:pt-36 lg:px-16 lg:pt-40 xl:px-20">
          <div className="w-full max-w-[850px] lg:ml-[5%]">
            {/* Eyebrow */}
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-[#E8B85C] sm:text-sm">
              ALIGN&nbsp;&nbsp;·&nbsp;&nbsp;UNDERSTAND&nbsp;&nbsp;·&nbsp;&nbsp;EMPOWER
            </p>

            {/* Main Heading */}
            <h1 className="mt-5 max-w-[780px] font-serif text-[clamp(3rem,8vw,4.75rem)] leading-[0.96] tracking-[-0.05em] text-[#f8f4ec]">
              <span className="block">Guiding You Through</span>

              <span className="block italic text-[#f4b94f]">the Language</span>

              <span className="block italic text-[#f4b94f]">of the Stars.</span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-[540px] text-[1rem] leading-[1.75] text-[#f3eadc]">
              Personalized astrological insights for a more balanced, confident
              and purposeful life.
            </p>

            {/* CTA Buttons */}
            <div className="mt-7 flex items-center gap-4 sm:flex-row">
              {/* Primary CTA */}

              <a
                href="/consultations"
                className="group inline-flex items-center justify-center gap-4 rounded-full bg-[#F0B957] px-6 py-3.5 font-serif text-[15px] text-[#071222] transition-all duration-300 hover:bg-[#F6C96F] sm:px-7"
              >
                <span>Book a Consultation</span>

                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>

              {/* Secondary CTA */}
              <a
                href="#services"
                className="group inline-flex items-center gap-3 rounded-full border border-[#d9a441]/70 bg-[#030c1c]/30 px-8 py-4 text-[#f8f4ec] backdrop-blur-[2px] transition-all duration-300 hover:bg-[#030c1c]/50"
              >
                <span>Explore Services</span>

                <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>

            <div className="relative mt-10 flex w-full max-w-[700px] overflow-hidden border-y border-[#c9963e]/20 py-4 sm:flex sm:items-stretch">
              {" "}
              <div
                className="pointer-events-none absolute inset-0 -z-10"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(3, 12, 28, 0.72) 0%, rgba(3, 12, 28, 0.48) 55%, rgba(3, 12, 28, 0.12) 100%)",
                }}
              />
              {/* Clarity */}
              <div className="flex w-1/2 flex-col items-start px-4 py-3 sm:w-auto sm:flex-1 sm:py-0 first:pl-0">
                {" "}
                <img
                  src="/images/decorators/lotus.svg"
                  alt=""
                  className="mb-2 h-7 w-7"
                />
                <h3 className="font-serif font-medium text-base text-[#f6efe4]">
                  Clarity
                </h3>
                <p className="mt-1 text-xs leading-5 text-[#c9c0b2] sm:text-sm">
                  for your present
                </p>
              </div>
              {/* Divider */}
              <div className="my-1 h-12 w-px bg-[#c9963e]/25" />
              {/* Guidance */}
              <div className="flex w-1/2 flex-col items-start px-4 py-3 sm:w-auto sm:flex-1 sm:py-0">
                {" "}
                <img
                  src="/images/decorators/moon.svg"
                  alt=""
                  className="mb-2 h-7 w-7"
                />
                <h3 className="font-serif font-medium text-base text-[#f6efe4]">
                  Guidance
                </h3>
                <p className="mt-1 text-xs leading-5 text-[#c9c0b2] sm:text-sm">
                  for your future
                </p>
              </div>
              {/* Divider */}
              <div className="my-1 h-12 w-px bg-[#c9963e]/25" />
              {/* Balance */}
              <div className="flex w-1/2 flex-col items-start px-4 py-3 sm:w-auto sm:flex-1 sm:py-0">
                {" "}
                <img
                  src="/images/decorators/star.svg"
                  alt=""
                  className="mb-2 h-7 w-7"
                />
                <h3 className="font-serif font-medium text-base text-[#f6efe4]">
                  Balance
                </h3>
                <p className="mt-1 text-xs leading-5 text-[#c9c0b2] sm:text-sm">
                  in your journey
                </p>
              </div>
              {/* Divider */}
              <div className="my-1 h-12 w-px bg-[#c9963e]/25" />
              {/* Fulfillment */}
              <div className="flex w-1/2 flex-col items-start px-4 py-3 sm:w-auto sm:flex-1 sm:py-0">
                {" "}
                <img
                  src="/images/decorators/sun.svg"
                  alt=""
                  className="mb-2 h-7 w-7"
                />
                <h3 className="font-serif font-medium text-base text-[#f6efe4]">
                  Abundance
                </h3>
                <p className="mt-1 text-xs leading-5 text-[#c9c0b2] sm:text-sm">
                  in life and love
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
