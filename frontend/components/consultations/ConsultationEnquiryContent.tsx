"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Consultation } from "@/lib/consultations";
import { ConsultationEnquiryForm } from "./ConsultationEnquiryForm";
import { SelectedEnquiryConsultations } from "./SelectedEnquiryConsultations";
import { EnquirySuccessToast } from "@/components/EnquirySuccessToast";

export function ConsultationEnquiryContent({ consultations }: { consultations: Consultation[] }) {
  const [submitted, setSubmitted] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    if (submitted) {
      headingRef.current?.focus({ preventScroll: true });
      headingRef.current?.scrollIntoView({ block: "center" });
    }
  }, [submitted]);
  if (submitted) {
    return (
      <div className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center py-8 text-center md:py-14">
        <EnquirySuccessToast />
        <div aria-hidden="true" className="mb-8 h-px w-24 bg-[#F0B957]/50" />
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#F0B957]">ENQUIRY RECEIVED</p>
        <h1 ref={headingRef} tabIndex={-1} className="font-serif text-4xl leading-tight tracking-[-0.02em] outline-none md:text-6xl">Thank you for reaching out.</h1>
        <p className="mt-6 max-w-xl text-base leading-8 text-[#f8f4ec]/75 md:text-lg">Your consultation enquiry has been received successfully. Priyanshii will review the details you&apos;ve shared and get back to you using your contact information.</p>
        <Link href="/consultations" className="mt-9 inline-flex min-h-14 items-center justify-center rounded-full bg-[#F0B957] px-8 py-4 font-serif text-base text-[#030c1c] transition-colors hover:bg-[#f4b94f] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F0B957]">Back to Consultations →</Link>
      </div>
    );
  }
  return (
              <div className="grid gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start lg:gap-14 xl:gap-20">
                <div className="lg:sticky lg:top-32">
                  <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#f4b94f] md:text-[13px]">
                    CONSULTATION ENQUIRY
                  </p>
                  <h1 className="font-serif text-[2.65rem] leading-[1.06] tracking-[-0.03em] min-[390px]:text-[3rem] md:text-[3.65rem] lg:text-[4rem]">
                    Tell us a little more about what you&apos;d like to explore.
                  </h1>

                  <div className="mt-8 border-l-2 border-[#F0B957] pl-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#F0B957]">
                      Selected consultations
                    </p>
                    <SelectedEnquiryConsultations
                      consultations={consultations}
                    />
                  </div>

                  <Link
                    href="/consultations"
                    className="mt-7 inline-flex rounded-full py-2 text-sm text-[#f8f4ec]/65 underline decoration-[#F0B957]/45 underline-offset-4 transition-colors hover:text-[#F0B957] focus:outline-none focus:ring-2 focus:ring-[#F0B957]"
                  >
                    ← Change consultation
                  </Link>
                </div>

                <ConsultationEnquiryForm consultations={consultations} onSuccess={() => setSubmitted(true)} />
              </div>
  );
}
