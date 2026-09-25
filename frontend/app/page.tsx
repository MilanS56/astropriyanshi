import { Testimonials } from "@/components/home/Testimonials";
import Hero from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { Services } from "@/components/home/Services";
import { WhyExperience } from "@/components/home/WhyExperience";
import { BookingCTA } from "@/components/home/BookingCTA";
import { Contact } from "@/components/home/Contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PRIYANSHII AASTTRO | Astrology Consultant",
  description: "Personalized astrological guidance through Vedic Astrology, Lal Kitab and Numerology.",
  alternates: { canonical: "/" },
  openGraph: { title: "PRIYANSHII AASTTRO | Astrology Consultant", description: "Personalized astrological guidance through Vedic Astrology, Lal Kitab and Numerology.", url: "https://priyanshiiaasttro.com/" },
};
export default function Home() {
  return (
    <>
    <Navbar/>
    <main>
      <Hero/>
      <About/>
      <Services/>
      <WhyExperience/>
      <Testimonials/>
      <BookingCTA/>
      <Contact/>
    </main>
    <Footer/>
    </>

  );
}
