import Hero from "@/components/home/Hero";
import { About } from "@/components/home/About";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
export default function Home() {
  return (
    <>
    <Navbar/>
    <main>
      <Hero/>
      <About/>
    </main>
    <Footer/>
    </>

  );
}
