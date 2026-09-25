import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

export const metadata: Metadata = {
  metadataBase: new URL("https://priyanshiiaasttro.com"),
  title: {
    default: "PRIYANSHII AASTTRO | Astrology Consultant",
    template: "%s",
  },
  description:
    "Personalized astrological guidance through Vedic Astrology, Lal Kitab and Numerology.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "PRIYANSHII AASTTRO",
    title: "PRIYANSHII AASTTRO | Astrology Consultant",
    description:
      "Personalized astrological guidance through Vedic Astrology, Lal Kitab and Numerology.",
    url: "https://priyanshiiaasttro.com/",
    images: [{ url: "/images/hero/hero-desktop-no-moon.webp", width: 1920, height: 1080, alt: "PRIYANSHII AASTTRO celestial background" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PRIYANSHII AASTTRO | Astrology Consultant",
    description:
      "Personalized astrological guidance through Vedic Astrology, Lal Kitab and Numerology.",
    images: ["/images/hero/hero-desktop-no-moon.webp"],
  },
  icons: { icon: "/images/logo/priyanshii-logo.svg", apple: "/images/logo/priyanshii-logo.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>{children}</LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://priyanshiiaasttro.com/#organization",
                  name: "PRIYANSHII AASTTRO",
                  url: "https://priyanshiiaasttro.com/",
                  logo: "https://priyanshiiaasttro.com/images/logo/priyanshii-logo.png",
                },
                {
                  "@type": "Person",
                  "@id": "https://priyanshiiaasttro.com/about#person",
                  name: "Priyanshii",
                  jobTitle: "Vedic Astrologer, Lal Kitab Practitioner and Numerologist",
                  url: "https://priyanshiiaasttro.com/about",
                  image: "https://priyanshiiaasttro.com/images/author/priyanshii-aasttro.webp",
                  worksFor: { "@id": "https://priyanshiiaasttro.com/#organization" },
                },
                {
                  "@type": "WebSite",
                  "@id": "https://priyanshiiaasttro.com/#website",
                  name: "PRIYANSHII AASTTRO",
                  url: "https://priyanshiiaasttro.com/",
                  publisher: { "@id": "https://priyanshiiaasttro.com/#organization" },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
