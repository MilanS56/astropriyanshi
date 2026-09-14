"use client";

import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Consultations", href: "/consultations" },
  { label: "Insights", href: "/insights" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 ">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 lg:px-10 xl:px-14">
        {/* Brand */}
        <a
          href="/"
          className="flex items-center gap-3"
          aria-label="Priyanshii Aasttro home"
        >
          <img
            src="/images/logo/priyanshii-logo.png"
            alt="Priyanshii Aasttro"
            className="h-20 w-20 object-contain"
          />

          <div className="hidden sm:block">
            <div className="font-serif text-xl tracking-[0.08em] text-[#F2C875]">
              PRIYANSHII AASTTRO
            </div>

            <div className="mt-1 flex items-center gap-2 text-[10px] tracking-[0.28em] text-[#E7D9C4]">
              <span className="h-px w-7 bg-[#A87932]" />
              ASTROLOGY CONSULTANT
              <span className="h-px w-7 bg-[#A87932]" />
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex xl:gap-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`relative py-2 font-serif text-[15px] transition-colors ${
                item.label === "Home"
                  ? "text-[#F2C875]"
                  : "text-[#F4EDE2] hover:text-[#F2C875]"
              }`}
            >
              {item.label}

              {item.label === "Home" && (
                <span className="absolute -bottom-1 left-0 h-px w-full bg-[#F2C875]" />
              )}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="/consultations"
          className="hidden items-center gap-3 rounded-full border border-[#B98942] px-7 py-3 text-sm text-[#F4EDE2] transition-all duration-300 hover:bg-[#B98942]/10 hover:text-[#F2C875] lg:flex"
        >
          <span className="flex items-center"><img src="/images/decorators/calendar.svg" alt="Calendar" aria-hidden="true" className="h-5 w-5 object-contain" /></span>
          <span className="font-serif">Book a Session</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-[#B98942]/70 lg:hidden"
        >
          <span className="h-px w-5 bg-[#F2C875]" />
          <span className="h-px w-5 bg-[#F2C875]" />
          <span className="h-px w-5 bg-[#F2C875]" />
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="mx-4 rounded-2xl border border-[#B98942]/30 bg-[#06101F]/95 p-5 backdrop-blur-md lg:hidden">
          <div className="flex flex-col">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="border-b border-white/10 py-4 font-serif text-base text-[#F4EDE2] last:border-b-0 hover:text-[#F2C875]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/consultations"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 rounded-full border border-[#B98942] px-5 py-3 text-center font-serif text-[#F2C875]"
            >
              Book a Session
            </a>
          </div>
        </div>
      )}
    </header>
  );
}