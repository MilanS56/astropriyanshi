import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BookingCTA } from "@/components/home/BookingCTA";
import { TestimonialQuote } from "@/components/testimonials/TestimonialQuote";
import { testimonials } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Client Testimonials | PRIYANSHII AASTTRO",
  description: "Read experiences and reflections shared by clients following their consultations with PRIYANSHII AASTTRO.",
  alternates: { canonical: "/testimonials" },
  openGraph: { title: "Client Testimonials | PRIYANSHII AASTTRO", description: "Read experiences and reflections shared by clients following their consultations with PRIYANSHII AASTTRO.", url: "https://priyanshiiaasttro.com/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#030c1c] text-[#f8f4ec]">
        <section className="px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-48">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-6 text-xs font-semibold tracking-[0.28em] text-[#F0B957]">CLIENT EXPERIENCES</p>
            <h1 className="font-serif text-[2.6rem] leading-[1.12] tracking-[-0.025em] md:text-6xl">Real experiences. Meaningful journeys.</h1>
            <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-[#f8f4ec]/75 md:text-lg">Explore reflections shared by clients who have connected with Priyanshii through consultation.</p>
          </div>
        </section>
        <section aria-label="Client testimonials" className="mx-auto max-w-6xl px-6 pb-16 md:px-10 md:pb-24">
          {testimonials.map((testimonial, index) => (
            <article key={testimonial.id} className="grid items-center gap-10 border-t border-[#f8f4ec]/15 py-12 md:grid-cols-2 md:gap-16 md:py-20">
              <div className={index % 2 === 1 ? "min-w-0 md:col-start-2 md:row-start-1" : "min-w-0"}>
                <TestimonialQuote testimonial={testimonial} />
              </div>
              <div className={index % 2 === 1 ? "min-w-0 md:col-start-1 md:row-start-1" : "min-w-0"}>
                <Image
                  src={testimonial.screenshot}
                  width={testimonial.screenshotWidth}
                  height={testimonial.screenshotHeight}
                  alt="Client testimonial shared with PRIYANSHII AASTTRO"
                  unoptimized
                  className="mx-auto h-auto w-full max-w-[320px] rounded-md"
                />
              </div>
            </article>
          ))}
        </section>
        <BookingCTA />
      </main>
      <Footer />
    </>
  );
}
