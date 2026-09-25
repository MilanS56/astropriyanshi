"use client";

import { useLanguage } from "@/lib/i18n";

const principles = [
  {
    number: "01",
    title: "PERSONALIZED GUIDANCE",
    description:
      "Your journey deserves a perspective that feels personal, relevant and meaningful.",
  },
  {
    number: "02",
    title: "THOUGHTFUL CONVERSATIONS",
    description:
      "Explore the questions that matter with space to reflect, understand and move forward.",
  },
  {
    number: "03",
    title: "CLARITY WITH PURPOSE",
    description:
      "Turn reflection into a clearer understanding of where you are and where you want to go.",
  },
];

export function WhyExperience() {
  const { c } = useLanguage();
  return (
    <section
      aria-labelledby="why-experience-heading"
      className="relative isolate overflow-hidden bg-[#f8f4ec] px-6 py-16 text-[#030c1c] md:px-8 md:py-20 lg:px-10 lg:py-28 xl:px-14"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(240,185,87,0.13),transparent_34%)]" />

      <img
        src="/images/decorators/star.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-8 top-16 h-9 w-9 opacity-35 md:right-[12%] md:top-24"
      />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#f4b94f] md:text-[13px]">
            {c.whyEyebrow}
          </p>

          <h2
            id="why-experience-heading"
            className="font-serif text-[2.45rem] leading-[1.08] tracking-[-0.02em] text-[#030c1c] min-[390px]:text-[2.85rem] md:text-[3.25rem] lg:text-[3.75rem]"
          >
            {c.whyHeading}
          </h2>

          <p className="mx-auto mt-6 max-w-[35rem] text-base leading-8 text-[#030c1c]/72 md:text-[17px]">
            {c.whyIntro}
          </p>
        </div>

        <div className="mt-10 grid gap-0 border-y border-[#030c1c]/12 md:mt-14 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {principles.map((principle, index) => (
            <article
              key={principle.number}
              className={`py-6 md:px-8 md:py-9 lg:px-10 ${
                index > 0
                  ? "border-t border-[#030c1c]/12 md:border-t-0 md:border-l"
                  : ""
              } ${
                index === 2
                  ? "md:col-span-2 md:border-t md:border-l-0 lg:col-span-1 lg:border-t-0 lg:border-l"
                  : ""
              }`}
            >
              <p className="font-serif text-sm tracking-[0.22em] text-[#F0B957]">
                {principle.number}
              </p>

              <h3 className="mt-4 max-w-[18rem] font-serif text-[1.35rem] leading-tight tracking-[0.08em] text-[#030c1c] md:mt-5 md:text-[1.45rem]">
                {c.principles[index]}
              </h3>

              <p className="mt-3 max-w-[22rem] text-sm leading-7 text-[#030c1c]/68 md:mt-4 md:text-[15px]">
                {c.principleText[index]}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
