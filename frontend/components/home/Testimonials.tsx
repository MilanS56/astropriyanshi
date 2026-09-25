"use client";
import Link from "next/link";
import { testimonials } from "@/lib/testimonials";
import { TestimonialQuote } from "@/components/testimonials/TestimonialQuote";
import { useLanguage } from "@/lib/i18n";

export function Testimonials() {
  const { c } = useLanguage();
  const featured = testimonials.filter(({ id }) => id !== "testimonial-two");

  return (
    <section aria-labelledby="testimonials-heading" className="bg-[#030c1c] px-6 py-16 text-[#f8f4ec] md:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-14">
      <div className="mx-auto max-w-[1440px] border-t border-[#f8f4ec]/15 pt-12">
        <div className="max-w-3xl">
          <p className="mb-5 text-xs font-semibold tracking-[0.28em] text-[#F0B957]">{c.testimonialsEyebrow}</p>
          <h2 id="testimonials-heading" className="font-serif text-[2.45rem] leading-[1.12] tracking-[-0.02em] md:text-5xl">{c.testimonialsHeading}</h2>
          <p className="mt-6 text-base leading-8 text-[#f8f4ec]/70">{c.testimonialsBody}</p>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-16 lg:gap-24">
          {featured.map((testimonial) => (
            <article key={testimonial.id} className="border-t border-[#F0B957]/30 pt-8">
              <TestimonialQuote testimonial={testimonial} />
            </article>
          ))}
        </div>
        <Link href="/testimonials" className="mt-12 inline-flex min-h-12 items-center gap-4 text-sm text-[#F0B957] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F0B957]">{c.viewAll} <span aria-hidden="true">→</span></Link>
      </div>
    </section>
  );
}
