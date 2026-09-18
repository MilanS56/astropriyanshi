"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { consultations, getConsultationsByIds } from "@/lib/consultations";
import {
  clearSelectedConsultationIds,
  getSelectedConsultationIds,
  saveSelectedConsultationIds,
} from "@/lib/consultation-selection";

export function ConsultationList() {
  const [selectedConsultationIds, setSelectedConsultationIds] = useState<string[]>([]);
  const [isSelectionOpen, setIsSelectionOpen] = useState(false);
  const selectedConsultations = getConsultationsByIds(selectedConsultationIds);
  const selectedCount = selectedConsultations.length;
  const continueHref = `/consultations/contact?services=${selectedConsultationIds.join(",")}`;
  const summaryNames = selectedConsultations.slice(0, 2).map((item) => item.name).join(" · ");
  const remainingCount = Math.max(selectedCount - 2, 0);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      setSelectedConsultationIds(getSelectedConsultationIds());
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  function toggleConsultation(consultationId: string) {
    setSelectedConsultationIds((current) => {
      const nextIds = current.includes(consultationId)
        ? current.filter((id) => id !== consultationId)
        : [...current, consultationId];

      saveSelectedConsultationIds(nextIds);
      return nextIds;
    });
  }

  function removeConsultation(consultationId: string) {
    setSelectedConsultationIds((current) => {
      const nextIds = current.filter((id) => id !== consultationId);

      saveSelectedConsultationIds(nextIds);
      return nextIds;
    });
  }

  function clearConsultations() {
    setSelectedConsultationIds([]);
    setIsSelectionOpen(false);
    clearSelectedConsultationIds();
  }

  return (
    <section
      aria-labelledby="consultation-list-heading"
      className="relative bg-[#f8f4ec] px-6 py-16 text-[#030c1c] md:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-14"
    >
      <div className="mx-auto max-w-[1440px]">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#f4b94f] md:text-[13px]">
            SELECT CONSULTATIONS
          </p>
          <h2
            id="consultation-list-heading"
            className="font-serif text-[2.35rem] leading-[1.08] tracking-[-0.02em] min-[390px]:text-[2.75rem] md:text-[3.3rem]"
          >
            Choose the areas you would like to explore.
          </h2>
          <p className="mt-5 text-sm leading-7 text-[#030c1c]/62 md:text-base">
            Select one or more consultations to continue.
          </p>
        </div>

        <ul className="mt-10 grid border-t border-[#030c1c]/12 md:mt-12 md:grid-cols-2">
          {consultations.map((service, index) => {
            const isSelected = selectedConsultationIds.includes(service.id);

            return (
              <li
                key={service.id}
                className={`border-b border-[#030c1c]/12 ${index % 2 === 1 ? "md:border-l" : ""}`}
              >
                <button
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => toggleConsultation(service.id)}
                  className={`group grid min-h-[10.5rem] w-full grid-cols-[2.6rem_1fr] gap-3 px-0 py-6 text-left transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#F0B957] md:grid-cols-[3rem_1fr_auto] md:gap-4 md:px-7 md:py-7 ${
                    isSelected
                      ? "bg-[#F0B957]/12 shadow-[inset_3px_0_0_#F0B957]"
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
                    {service.description && (
                      <span className="mt-2 block max-w-[32rem] text-sm leading-6 text-[#030c1c]/58">
                        {service.description}
                      </span>
                    )}
                  </span>
                  <span
                    className={`col-start-2 mt-3 inline-flex items-center gap-2 self-start whitespace-nowrap font-serif text-sm transition-colors md:col-start-3 md:row-start-1 md:mt-1 ${
                      isSelected ? "text-[#030c1c]" : "text-[#030c1c]/58 group-hover:text-[#f4b94f]"
                    }`}
                  >
                    {isSelected ? "Selected" : "Select"}
                    <span className="text-base" aria-hidden="true">
                      {isSelected ? "✓" : "→"}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {selectedCount > 0 && <div aria-hidden="true" className="h-32 md:h-24" />}
      </div>

      {selectedCount > 0 && (
        <div
          className="fixed inset-x-3 z-50 mx-auto max-w-[1200px]"
          style={{ bottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        >
          <div className="relative rounded-2xl border border-[#F0B957]/30 bg-[#030c1c]/[0.97] text-[#f8f4ec] shadow-[0_18px_60px_rgba(3,12,28,0.3)] backdrop-blur-md">
            {isSelectionOpen && (
              <div
                id="selected-consultations-panel"
                className="absolute inset-x-0 bottom-[calc(100%+0.5rem)] max-h-52 overflow-y-auto rounded-2xl border border-[#F0B957]/25 bg-[#030c1c] p-4 shadow-[0_16px_45px_rgba(3,12,28,0.28)] md:p-5"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#F0B957]">
                  Your consultations
                </p>
                <ul className="mt-3 divide-y divide-[#f8f4ec]/10">
                  {selectedConsultations.map((consultation) => (
                    <li key={consultation.id} className="flex items-center justify-between gap-4 py-3">
                      <span className="min-w-0">
                        <span className="block truncate font-serif text-sm md:text-base">
                          {consultation.name}
                        </span>
                        {consultation.hindiName && (
                          <span lang="hi" className="mt-0.5 block text-xs text-[#f8f4ec]/55">
                            {consultation.hindiName}
                          </span>
                        )}
                      </span>
                      <button
                        type="button"
                        aria-label={`Remove ${consultation.name}`}
                        onClick={() => removeConsultation(consultation.id)}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#f8f4ec]/15 text-lg text-[#f8f4ec]/65 transition-colors hover:border-[#F0B957]/50 hover:text-[#F0B957] focus:outline-none focus:ring-2 focus:ring-[#F0B957]"
                      >
                        ×
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="grid gap-3 px-4 py-3.5 sm:grid-cols-[1fr_auto] sm:items-center sm:px-5 md:px-6">
              <div className="min-w-0">
                <button
                  type="button"
                  aria-expanded={isSelectionOpen}
                  aria-controls="selected-consultations-panel"
                  onClick={() => setIsSelectionOpen((open) => !open)}
                  className="flex items-center gap-2 rounded-lg text-left focus:outline-none focus:ring-2 focus:ring-[#F0B957]"
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F0B957] md:text-xs">
                    {selectedCount} consultation{selectedCount === 1 ? "" : "s"} selected
                  </span>
                  <span className="text-xs text-[#F0B957]" aria-hidden="true">
                    {isSelectionOpen ? "↓" : "↑"}
                  </span>
                </button>
                <p className="mt-1 truncate text-sm text-[#f8f4ec]/70">
                  {summaryNames}{remainingCount > 0 ? ` · +${remainingCount} more` : ""}
                </p>
              </div>

              <div className="grid grid-cols-[auto_1fr] items-center gap-2.5 sm:flex sm:gap-3">
                <button
                  type="button"
                  onClick={clearConsultations}
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-[#f8f4ec]/25 px-4 font-serif text-sm text-[#f8f4ec]/75 transition-colors hover:border-[#F0B957]/60 hover:text-[#F0B957] focus:outline-none focus:ring-2 focus:ring-[#F0B957]"
                >
                  Clear all
                </button>
                <Link
                  href={continueHref}
                  className="group inline-flex min-h-12 min-w-0 items-center justify-center gap-2 rounded-full bg-[#F0B957] px-4 font-serif text-sm text-[#030c1c] transition-colors hover:bg-[#f4b94f] focus:outline-none focus:ring-2 focus:ring-[#F0B957] focus:ring-offset-4 focus:ring-offset-[#030c1c] sm:px-7"
                >
                  Continue to Enquiry
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
