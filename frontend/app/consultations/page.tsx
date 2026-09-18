import type { Metadata } from "next";
import Image from "next/image";
import { ConsultationList } from "@/components/consultations/ConsultationList";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Consultations | Priyanshii Aasttro",
  description:
    "Explore consultation services offered by Priyanshii Aasttro across marriage, relationships, career, finances, education, property, numerology and other matters.",
};

export default function ConsultationsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative isolate overflow-hidden bg-[#030c1c] px-6 pb-16 pt-36 text-[#f8f4ec] md:px-8 md:pb-20 md:pt-44 lg:px-10 lg:pb-24 xl:px-14 xl:pt-40">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_28%,rgba(240,185,87,0.12),transparent_28%),linear-gradient(180deg,rgba(248,244,236,0.035),transparent_55%)]" />
          <Image
            src="/images/decorators/moon.svg"
            alt=""
            aria-hidden="true"
            width={112}
            height={112}
            className="pointer-events-none absolute right-[7%] top-[38%] h-20 w-20 opacity-[0.08] md:h-28 md:w-28"
          />

          <div className="relative z-10 mx-auto max-w-[1440px]">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#f4b94f] md:text-[13px]">
              CONSULTATIONS
            </p>
            <h1 className="max-w-[56rem] font-serif text-[2.65rem] leading-[1.05] tracking-[-0.03em] min-[390px]:text-[3.1rem] md:text-[4rem] lg:text-[4.6rem]">
              Explore the right consultation for your questions.
            </h1>
            <p className="mt-7 max-w-[42rem] text-base leading-8 text-[#f8f4ec]/72 md:text-[18px] md:leading-9">
              Every situation is different. Explore the consultation areas
              available through Vedic Astrology, Lal Kitab and Numerology.
            </p>
          </div>
        </section>

        <ConsultationList />
      </main>
      <Footer />
    </>
  );
}
