import Hero from "@/components/home/Hero";
import { About } from "@/components/home/About";
import { WhyExperience } from "@/components/home/WhyExperience";
import { BookingCTA } from "@/components/home/BookingCTA";
import { Contact } from "@/components/home/Contact";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
export default function Home() {
  return (
    <>
    <Navbar/>
    <main>
      <Hero/>
      <About/>
      <WhyExperience/>
      <BookingCTA/>
      <Contact/>
    </main>
    <Footer/>
    </>

  );
}
