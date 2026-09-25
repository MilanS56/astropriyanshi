import type { Metadata } from "next";
import { ConsultationHero } from "@/components/consultations/ConsultationHero";
import { ConsultationList } from "@/components/consultations/ConsultationList";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Astrology Consultations | PRIYANSHII AASTTRO",
  description: "Explore personalized consultations for marriage, relationships, career, finance, education, numerology, remedies and other important areas of life.",
  alternates: { canonical: "/consultations" },
  openGraph: { title: "Astrology Consultations | PRIYANSHII AASTTRO", description: "Explore personalized consultations for marriage, relationships, career, finance, education, numerology, remedies and other important areas of life.", url: "https://priyanshiiaasttro.com/consultations" },
};

export default function ConsultationsPage() {
  return (
    <>
      <Navbar />
      <main>
        <ConsultationHero />

        <ConsultationList />
      </main>
      <Footer />
    </>
  );
}
