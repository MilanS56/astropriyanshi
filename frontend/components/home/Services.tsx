"use client";
import Link from "next/link";
import { consultations } from "@/lib/consultations";
import { useLanguage } from "@/lib/i18n";

export function Services() {
  const { language, c } = useLanguage();
  return (
    <section
      id="services"
      aria-labelledby="home-services-heading"
      className="relative isolate overflow-hidden border-t border-[#f8f4ec]/12 bg-[#030c1c] px-6 py-16 text-[#f8f4ec] md:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-14"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-8 lg:grid-cols-[0.42fr_0.58fr] lg:items-end lg:gap-16">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#f4b94f] md:text-[13px]">
              {c.consultationEyebrow}
            </p>
            <h2
              id="home-services-heading"
              className="max-w-[42rem] font-serif text-[2.4rem] leading-[1.08] tracking-[-0.02em] min-[390px]:text-[2.8rem] md:text-[3.25rem] lg:text-[3.7rem]"
            >
              {c.consultationHeading}
            </h2>
          </div>

          <p className="max-w-[42rem] text-base leading-8 text-[#f8f4ec]/72 md:text-[17px] lg:justify-self-end">
            {language === "hi" ? "रिश्तों, करियर, वित्त, शिक्षा, संपत्ति और जीवन के अन्य महत्वपूर्ण विषयों से जुड़े परामर्श क्षेत्रों को जानें।" : "Explore consultation areas across relationships, career, finances, education, property and other important matters."}
          </p>
        </div>

        <ol className="mt-10 grid border-t border-[#f8f4ec]/14 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {consultations.map((service, index) => (
            <li
              key={service.id}
              className={`grid grid-cols-[2.5rem_1fr] gap-3 border-b border-[#f8f4ec]/14 py-5 md:min-h-[8rem] md:px-6 md:py-6 lg:min-h-[8.5rem] ${
                index % 2 === 1 ? "md:border-l" : ""
              } ${index % 3 !== 0 ? "lg:border-l" : "lg:border-l-0"}`}
            >
              <span className="pt-0.5 font-serif text-sm tracking-[0.16em] text-[#f4b94f]">
                {service.number}
              </span>
              <span>
                <span className="block font-serif text-[1.05rem] leading-6 text-[#f8f4ec] md:text-lg">
                  {language === "hi" ? (service.hindiName ?? service.name) : service.name}
                </span>
                {language === "en" && service.hindiName && <span lang="hi" className="mt-2 block text-[15px] leading-6 text-[#f8f4ec]/60">{service.hindiName}</span>}
                {service.description && (
                  <span className="mt-2 block text-sm leading-6 text-[#f8f4ec]/58">
                    {service.description}
                  </span>
                )}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-9 text-center md:mt-10">
          <Link
            href="/consultations"
            className="group inline-flex min-h-14 w-full max-w-[20rem] items-center justify-center gap-4 rounded-full bg-[#F0B957] px-8 font-serif text-[15px] text-[#030c1c] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f4b94f] focus:outline-none focus:ring-2 focus:ring-[#F0B957] focus:ring-offset-4 focus:ring-offset-[#030c1c] sm:w-auto"
          >
            {language === "hi" ? "परामर्श देखें" : "Explore Consultations"}
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
