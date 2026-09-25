import type { Metadata } from "next";
import { ComingSoonPage } from "@/components/ComingSoonPage";

export const metadata: Metadata = {
  title: "Insights | PRIYANSHII AASTTRO",
  description: "Thoughtful astrological insights and perspectives from PRIYANSHII AASTTRO. Insights coming soon.",
  alternates: { canonical: "/insights" },
  robots: { index: false, follow: true },
};

export default function InsightsPage() {
  return <ComingSoonPage eyebrow="INSIGHTS" heading="Thoughtful perspectives are coming soon." description="We are preparing a collection of thoughtful insights on astrology, relationships, career, life and the questions that shape our journeys." />;
}
