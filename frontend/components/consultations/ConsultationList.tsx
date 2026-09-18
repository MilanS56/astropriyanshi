"use client";

import { useState } from "react";
import Link from "next/link";
import { consultations, getConsultationById } from "@/lib/consultations";

export function ConsultationList() {
  const [selectedConsultationId, setSelectedConsultationId] = useState<
    string | null
  >(null);
  const selectedConsultation = getConsultationById(selectedConsultationId);

  return (
    <section
      aria-labelledby="consultation-list-heading"
      className="relative bg-[#f8f4ec] px-6 py-16 text-[#030c1c] md:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-14"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#f4b94f] md:text-[13px]">
            SELECT A CONSULTATION
          </p>
          <h2
            id="consultation-list-heading"
            className="font-serif text-[2.35rem] leading-[1.08] tracking-[-0.02em] min-[390px]:text-[2.75rem] md:text-[3.3rem]"
          >
            Choose the area you would like to explore.
          </h2>
        </div>

        <ul className="mt-10 grid border-t border-[#030c1c]/12 md:mt-12 md:grid-cols-2">
          {consultations.map((service, index) => {
            const isSelected = selectedConsultationId === service.id;

            return (
              <li
                key={service.id}
                className={`border-b border-[#030c1c]/12 ${
                  index % 2 === 1 ? "md:border-l" : ""
                }`}
              >
                <button
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => setSelectedConsultationId(service.id)}
                  className={`group grid min-h-[10.5rem] w-full grid-cols-[2.6rem_1fr] gap-3 px-0 py-6 text-left transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#F0B957] md:grid-cols-[3rem_1fr_auto] md:gap-4 md:px-7 md:py-7 ${
                    isSelected
                      ? "bg-[#F0B957]/12"
                      : "hover:bg-[#030c1c]/[0.025]"
                  }`}
                >
                  <span className="pt-1 font-serif text-sm tracking-[0.16em] text-[#f4b94f]">
                    {service.number}
                  </span>

                  <span className="min-w-0">
                    <span className="block font-serif text-xl leading-7 text-[#030c1c] md:text-[1.35rem]">
                      {service.name}
                    </span>
                    {service.hindiName && (
                      <span lang="hi" className="mt-2 block text-base leading-7 text-[#030c1c]/60">
                        {service.hindiName}
                      </span>
                    )}
                  </span>

                  <span
                    className={`col-start-2 mt-3 inline-flex items-center gap-2 self-start whitespace-nowrap font-serif text-sm transition-colors md:col-start-3 md:row-start-1 md:mt-1 ${
                      isSelected
                        ? "text-[#030c1c]"
                        : "text-[#030c1c]/58 group-hover:text-[#f4b94f]"
                    }`}
                  >
                    {isSelected ? "Selected" : "Select"}
                    <span
                      className={`text-lg transition-transform duration-300 ${
                        isSelected ? "translate-x-1" : "group-hover:translate-x-1"
                      }`}
                    >
                      →
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        <div
          aria-live="polite"
          className={`mt-8 border-l-2 border-[#F0B957] bg-[#030c1c] px-5 py-5 text-[#f8f4ec] transition-opacity duration-300 md:mt-10 md:flex md:items-center md:justify-between md:px-7 ${
            selectedConsultation
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          {selectedConsultation && (
            <>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#F0B957]">
                  Selected consultation
                </p>
                <p className="mt-2 font-serif text-xl">
                  {selectedConsultation.name}
                </p>
                {selectedConsultation.hindiName && (
                  <p lang="hi" className="mt-1 text-sm text-[#f8f4ec]/62">
                    {selectedConsultation.hindiName}
                  </p>
                )}
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-5 md:mt-0 md:justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedConsultationId(null)}
                  className="rounded-full py-2 text-sm text-[#f8f4ec]/65 underline decoration-[#F0B957]/45 underline-offset-4 transition-colors hover:text-[#F0B957] focus:outline-none focus:ring-2 focus:ring-[#F0B957]"
                >
                  Clear selection
                </button>
                <Link
                  href={`/consultations/contact?service=${selectedConsultation.id}`}
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#F0B957] px-7 font-serif text-sm text-[#030c1c] transition-colors hover:bg-[#f4b94f] focus:outline-none focus:ring-2 focus:ring-[#F0B957] focus:ring-offset-4 focus:ring-offset-[#030c1c]"
                >
                  Continue
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
