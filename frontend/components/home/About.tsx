"use client";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

export function About() {
  const { c } = useLanguage();
  return (
    <section
      aria-labelledby="about-priyanshii-heading"
      className="relative isolate overflow-hidden bg-[#f8f4ec] px-6 py-16 text-[#030c1c] md:px-8 md:py-20 lg:px-10 lg:py-28 xl:px-14"
    >
      <img
        src="/images/decorators/star.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-6 top-14 h-9 w-9 opacity-25 md:left-10 md:top-20 lg:left-[7%] lg:top-24"
      />

      <div className="mx-auto grid max-w-[1440px] items-center gap-12 md:grid-cols-[0.92fr_1.08fr] md:gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="relative z-10 max-w-xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#f4b94f] md:text-[13px]">
            {c.aboutEyebrow}
          </p>

          <h2
            id="about-priyanshii-heading"
            className="font-serif text-[2.35rem] leading-[1.08] tracking-[-0.02em] text-[#030c1c] min-[390px]:text-[2.7rem] md:text-[2.7rem] lg:text-[3.2rem] xl:text-[3.5rem]"
          >
            {c.aboutHeading}
          </h2>

          <p className="mt-6 max-w-[36rem] text-base leading-8 text-[#030c1c]/75 md:text-[17px] md:leading-8">
            {c.aboutBody}
          </p>

          <Link
            href="/about"
            className="mt-8 inline-flex min-h-12 items-center justify-center rounded-full bg-[#F0B957] px-7 font-serif text-sm text-[#030c1c] transition-colors duration-300 hover:bg-[#f4b94f] focus:outline-none focus:ring-2 focus:ring-[#030c1c] focus:ring-offset-4 focus:ring-offset-[#f8f4ec]"
          >
            {c.aboutCta}&nbsp;&rarr;
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-[32rem] md:max-w-none">
          <img
            src="/images/decorators/moon.svg"
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-3 -top-5 z-0 h-16 w-16 opacity-25 md:-right-5 md:-top-7 md:h-20 md:w-20"
          />

          <figure className="relative z-10 ml-auto max-w-[26rem] md:max-w-[28rem] lg:max-w-[34rem]">
            <div className="absolute -inset-3 rounded-[2rem] border border-[#F0B957]/45 md:-inset-4 md:rounded-[2.25rem]" />
            <div className="relative overflow-hidden rounded-[1.75rem] border border-[#F0B957]/65 bg-[#f8f4ec] shadow-[0_28px_80px_rgba(3,12,28,0.16)] md:rounded-[2rem]">
              <img
                src="/images/author/priyanshii-aasttro.webp"
                alt="Priyanshii — Astrology Consultant"
                className="aspect-[4/5] h-auto w-full object-cover object-[center_28%]"
              />
            </div>
          </figure>
        </div>
      </div>
    </section>
  );
}
