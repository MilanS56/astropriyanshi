import type { Metadata } from "next";
import Link from "next/link";
import { ConsultationEnquiryForm } from "@/components/consultations/ConsultationEnquiryForm";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { getConsultationsByIds } from "@/lib/consultations";

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
  const selectedConsultations = getConsultationsByIds(serviceIds);

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
                    <ul className="mt-3 divide-y divide-[#f8f4ec]/10">
                      {selectedConsultations.map((consultation) => (
                        <li key={consultation.id} className="py-3 first:pt-0">
                          <p className="font-serif text-xl text-[#f8f4ec] md:text-2xl">
                            {consultation.name}
                          </p>
                          {consultation.hindiName && (
                            <p lang="hi" className="mt-1 text-sm text-[#f8f4ec]/62 md:text-base">
                              {consultation.hindiName}
                            </p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    href="/consultations"
                    className="mt-7 inline-flex rounded-full py-2 text-sm text-[#f8f4ec]/65 underline decoration-[#F0B957]/45 underline-offset-4 transition-colors hover:text-[#F0B957] focus:outline-none focus:ring-2 focus:ring-[#F0B957]"
                  >
                    ← Change consultation
                  </Link>
                </div>

                <ConsultationEnquiryForm consultations={selectedConsultations} />
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
