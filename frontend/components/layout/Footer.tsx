"use client";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Consultations", href: "/consultations" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  const { c } = useLanguage();
  return (
    <footer className="bg-[#f8f4ec] px-6 py-8 text-[#030c1c] md:px-8 md:py-9 lg:px-10 lg:py-10 xl:px-14">
      <div className="mx-auto max-w-[1440px]">
        <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-center md:gap-x-10 md:gap-y-5 lg:grid-cols-[1fr_auto_1fr] lg:gap-x-12">
          <div className="justify-self-start">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5"
              aria-label="Priyanshii Aasttro home"
            >
              <img
                src="/images/logo/priyanshii-logo.png"
                alt="Priyanshii Aasttro"
                className="h-12 w-12 shrink-0 object-contain min-[360px]:h-[52px] min-[360px]:w-[52px] lg:h-14 lg:w-14"
              />

              <span className="text-left">
                <span className="block font-serif text-[11px] tracking-[0.08em] text-[#030c1c] min-[360px]:text-xs lg:text-base">
                  PRIYANSHII AASTTRO
                </span>

                <span className="mt-1 block text-[7px] uppercase tracking-[0.22em] text-[#f4b94f] min-[360px]:text-[8px] lg:text-[9px] lg:tracking-[0.28em]">
                  ASTROLOGY CONSULTANT
                </span>
              </span>
            </Link>
          </div>

          <p className="max-w-[18rem] text-sm leading-6 text-[#030c1c]/68 md:col-span-2 md:max-w-md lg:col-span-1 lg:max-w-none lg:justify-self-center lg:whitespace-nowrap lg:text-center">
            {c.footerTag}
          </p>

          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-[#030c1c]/75 min-[360px]:gap-x-6 min-[360px]:gap-y-2 sm:gap-x-8 md:justify-end lg:flex-nowrap lg:gap-x-8 lg:justify-self-end"
          >
            {footerLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full py-2 font-serif transition-colors duration-300 hover:text-[#f4b94f] focus:outline-none focus:ring-2 focus:ring-[#F0B957] focus:ring-offset-4 focus:ring-offset-[#f8f4ec]"
              >
                {index === 0 ? c.nav[0] : index === 1 ? c.nav[1] : index === 2 ? c.nav[2] : c.nav[5]}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-7 border-t border-[#030c1c]/10 pt-5 text-center lg:mt-8">
          <p className="text-xs tracking-[0.08em] text-[#030c1c]/55">
            &copy; 2026 Priyanshii Aasttro
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
