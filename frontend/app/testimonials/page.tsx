import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Testimonials | PRIYANSHII AASTTRO",
  description: "Experiences and reflections from those who connect with PRIYANSHII AASTTRO. Testimonials coming soon.",
};

export default function TestimonialsPage() {
  return <ComingSoonPage eyebrow="TESTIMONIALS" heading="Real experiences will be shared here soon." description="We are preparing a space where visitors can explore experiences and reflections from people who have connected with Priyanshii through consultation." />;
}
