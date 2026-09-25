import type { Testimonial } from "@/lib/testimonials";
import { OriginalScreenshot } from "./OriginalScreenshot";

export function TestimonialQuote({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="min-w-0">
      <h3 className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#F0B957]">{testimonial.category}</h3>
      <blockquote lang={testimonial.language === "Hindi" ? "hi" : "en"} className="whitespace-pre-line text-lg leading-[1.9] text-[#f8f4ec]/90 md:text-xl">
        {testimonial.quote}
      </blockquote>
      <p className="mt-7 inline-flex items-center gap-2 text-sm font-semibold tracking-wide">
        <span aria-hidden="true" className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#F0B957] text-xs font-bold text-[#030c1c]">✓</span>
        <span>{testimonial.clientLabel}</span>
      </p>
      <OriginalScreenshot testimonial={testimonial} />
    </div>
  );
}
