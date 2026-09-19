"use client";

import { useRouter } from "next/navigation";
import type { Consultation } from "@/lib/consultations";
import {
  clearSelectedConsultationIds,
  saveSelectedConsultationIds,
} from "@/lib/consultation-selection";

type SelectedEnquiryConsultationsProps = {
  consultations: Consultation[];
};

export function SelectedEnquiryConsultations({
  consultations,
}: SelectedEnquiryConsultationsProps) {
  const router = useRouter();

  function removeConsultation(consultationId: string) {
    const remainingIds = consultations
      .filter((consultation) => consultation.id !== consultationId)
      .map((consultation) => consultation.id);

    if (remainingIds.length === 0) {
      clearSelectedConsultationIds();
      router.replace("/consultations/contact", { scroll: false });
      return;
    }

    saveSelectedConsultationIds(remainingIds);
    router.replace(
      `/consultations/contact?services=${remainingIds.join(",")}`,
      { scroll: false },
    );
  }

  return (
    <ul className="mt-3 divide-y divide-[#f8f4ec]/10">
      {consultations.map((consultation) => (
        <li
          key={consultation.id}
          className="flex items-center justify-between gap-4 py-3 first:pt-0"
        >
          <span className="min-w-0">
            <span className="block font-serif text-xl text-[#f8f4ec] md:text-2xl">
              {consultation.name}
            </span>
            {consultation.hindiName && (
              <span
                lang="hi"
                className="mt-1 block text-sm text-[#f8f4ec]/62 md:text-base"
              >
                {consultation.hindiName}
              </span>
            )}
          </span>
          <button
            type="button"
            aria-label={`Remove ${consultation.name}`}
            onClick={() => removeConsultation(consultation.id)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#f8f4ec]/15 text-lg text-[#f8f4ec]/65 transition-colors hover:border-[#F0B957]/55 hover:bg-[#F0B957]/10 hover:text-[#F0B957] focus:outline-none focus:ring-2 focus:ring-[#F0B957]"
          >
            ×
          </button>
        </li>
      ))}
    </ul>
  );
}
