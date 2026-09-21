import type { Metadata } from "next";
import Link from "next/link";
import { ConsultationEnquiryContent } from "@/components/consultations/ConsultationEnquiryContent";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import {
  getConsultationsByIds,
  normalizeConsultationSelectionIds,
} from "@/lib/consultations";

export const metadata: Metadata = {
  title: "Consultation Enquiry | Priyanshii Aasttro",
  description:
    "Share your consultation enquiry with Priyanshii Aasttro after choosing the area you would like to explore.",
};

type ConsultationContactPageProps = {
  searchParams: Promise<{ services?: string | string[] }>;
};

export default async function ConsultationContactPage({
  searchParams,
}: ConsultationContactPageProps) {
  const servicesParam = (await searchParams).services;
  const serviceIds =
    typeof servicesParam === "string"
      ? servicesParam.split(",").map((id) => id.trim()).filter(Boolean)
      : [];
  const selectedConsultations = getConsultationsByIds(
    normalizeConsultationSelectionIds(serviceIds),
  );

  return (
    <>
      <Navbar />
      <main className="bg-[#030c1c] text-[#f8f4ec]">
        <section className="relative isolate overflow-hidden px-6 pb-16 pt-36 md:px-8 md:pb-20 md:pt-44 lg:px-10 lg:pb-24 xl:px-14 xl:pt-40">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(240,185,87,0.11),transparent_28%),linear-gradient(180deg,rgba(248,244,236,0.035),transparent_48%)]" />

          <div className="relative z-10 mx-auto max-w-[1440px]">
            {selectedConsultations.length === 0 ? (
              <div className="mx-auto max-w-2xl text-center">
                <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#f4b94f] md:text-[13px]">
                  CONSULTATION ENQUIRY
                </p>
                <h1 className="font-serif text-[2.65rem] leading-[1.06] tracking-[-0.03em] min-[390px]:text-[3rem] md:text-[4rem]">
                  Please choose a consultation first.
                </h1>
                <p className="mx-auto mt-6 max-w-[35rem] text-base leading-8 text-[#f8f4ec]/70 md:text-[17px]">
                  Select the consultation area that best matches what you would
                  like to explore.
                </p>
                <Link
                  href="/consultations"
                  className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-[#F0B957] px-8 font-serif text-[15px] text-[#030c1c] transition-colors hover:bg-[#f4b94f] focus:outline-none focus:ring-2 focus:ring-[#F0B957] focus:ring-offset-4 focus:ring-offset-[#030c1c]"
                >
                  Back to Consultations&nbsp;→
                </Link>
              </div>
            ) : (
              <ConsultationEnquiryContent consultations={selectedConsultations} />
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
