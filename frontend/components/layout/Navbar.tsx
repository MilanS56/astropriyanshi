"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Consultations", href: "/consultations" },
  { label: "Insights", href: "/insights" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/#contact" },
];

const drawerItems = navItems.filter((item) =>
  ["Home", "About", "Consultations", "Contact"].includes(item.label),
);

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const [navHeight, setNavHeight] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const navElement = navRef.current;
    if (!navElement) return;

    const updateNavHeight = () => {
      setNavHeight(navElement.getBoundingClientRect().height);
    };

    updateNavHeight();

    const resizeObserver = new ResizeObserver(updateNavHeight);
    resizeObserver.observe(navElement);
    window.addEventListener("resize", updateNavHeight);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateNavHeight);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalScrollbarGutter = document.documentElement.style.scrollbarGutter;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.documentElement.style.scrollbarGutter = "stable";
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.documentElement.style.scrollbarGutter = originalScrollbarGutter;
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-[90] border-b border-[#F4EDE2]/10 bg-[#030c1c]/72 backdrop-blur-md xl:absolute xl:border-b-0 xl:bg-transparent xl:backdrop-blur-0">
      <nav ref={navRef} className="relative z-[90] mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 lg:px-10 xl:px-14">
        {/* Brand */}
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 whitespace-nowrap sm:gap-3"
          aria-label="Priyanshii Aasttro home"
        >
          <img
            src="/images/logo/priyanshii-logo.png"
            alt="Priyanshii Aasttro"
            className="h-[52px] w-[52px] shrink-0 object-contain min-[360px]:h-14 min-[360px]:w-14 sm:h-20 sm:w-20"
          />

          <div>
            <div className="font-serif text-[11px] tracking-[0.04em] text-[#F4EDE2] min-[360px]:text-xs sm:text-xl sm:tracking-[0.08em] sm:text-[#F2C875]">
              PRIYANSHII AASTTRO
            </div>

            <div className="mt-1 flex items-center gap-2 text-[7px] tracking-[0.16em] text-[#E7D9C4] min-[360px]:text-[8px] sm:text-[10px] sm:tracking-[0.28em]">
              <span className="hidden h-px w-7 bg-[#A87932] sm:block" />
              ASTROLOGY CONSULTANT
              <span className="hidden h-px w-7 bg-[#A87932] sm:block" />
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 xl:flex xl:gap-10">
          {navItems.map((item) => {
            const route = item.href.split("#")[0];
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : Boolean(route && route !== "/" && pathname.startsWith(route));

            return (
              <Link
                key={item.label}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`relative py-2 font-serif text-[15px] transition-colors ${
                  isActive
                    ? "text-[#F2C875]"
                    : "text-[#F4EDE2] hover:text-[#F2C875]"
                }`}
              >
                {item.label}

                {isActive && (
                  <span className="absolute -bottom-1 left-0 h-px w-full bg-[#F2C875]" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTA */}
        <Link
          href="/consultations"
          className="hidden shrink-0 items-center gap-3 whitespace-nowrap rounded-full border border-[#B98942] px-7 py-3 text-sm text-[#F4EDE2] transition-all duration-300 hover:bg-[#B98942]/10 hover:text-[#F2C875] xl:flex"
        >
          <span className="flex items-center"><img src="/images/decorators/calendar.svg" alt="Calendar" aria-hidden="true" className="h-5 w-5 object-contain" /></span>
          <span className="font-serif">Book a Session</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation-drawer"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#B98942]/70 transition-colors duration-300 hover:border-[#F2C875] focus:outline-none focus:ring-2 focus:ring-[#F2C875] focus:ring-offset-4 focus:ring-offset-[#030c1c] xl:hidden"
        >
          <span
            className={`absolute h-px w-5 bg-[#F2C875] transition-transform duration-300 motion-reduce:transition-none ${
              isMenuOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-px w-5 bg-[#F2C875] transition-opacity duration-300 motion-reduce:transition-none ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-px w-5 bg-[#F2C875] transition-transform duration-300 motion-reduce:transition-none ${
              isMenuOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </nav>

      {/* Mobile / Tablet Navigation Drawer */}
      <button
        type="button"
        aria-label="Close navigation backdrop"
        tabIndex={isMenuOpen ? 0 : -1}
        onClick={() => setIsMenuOpen(false)}
        style={{ top: navHeight }} className={`fixed inset-x-0 bottom-0 z-[60] bg-[#030c1c]/45 backdrop-blur-[6px] transition-opacity duration-300 motion-reduce:transition-none xl:hidden ${
          isMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        id="mobile-navigation-drawer"
        aria-hidden={!isMenuOpen}
        style={{ top: navHeight, height: `calc(100dvh - ${navHeight}px)` }} className={`fixed right-0 z-[70] flex w-[86vw] max-w-[420px] flex-col border-l border-t border-[#B98942]/30 bg-[#06101F]/96 px-7 pb-8 pt-7 shadow-[-28px_0_80px_rgba(0,0,0,0.34)] backdrop-blur-xl transition-transform duration-300 ease-out motion-reduce:transition-none min-[768px]:w-[400px] xl:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.32em] text-[#F2C875]">
            Navigation
          </p>

          <div className="flex flex-col border-y border-[#F4EDE2]/10">
            {drawerItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                tabIndex={isMenuOpen ? 0 : -1}
                onClick={() => setIsMenuOpen(false)}
                className="group flex items-center justify-between border-b border-[#F4EDE2]/10 py-5 font-serif text-lg text-[#F4EDE2] transition-colors duration-300 last:border-b-0 hover:text-[#F2C875] focus:outline-none focus:text-[#F2C875]"
              >
                <span>{item.label}</span>
                <span className="text-base text-[#F2C875] opacity-60 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            ))}
          </div>

          <Link
            href="/consultations"
            tabIndex={isMenuOpen ? 0 : -1}
            onClick={() => setIsMenuOpen(false)}
            className="mt-7 inline-flex min-h-14 items-center justify-center rounded-full bg-[#F0B957] px-6 font-serif text-[15px] text-[#030c1c] transition-colors duration-300 hover:bg-[#f4b94f] focus:outline-none focus:ring-2 focus:ring-[#F0B957] focus:ring-offset-4 focus:ring-offset-[#06101F]"
          >
            Book a Consultation
            <span className="ml-3 text-lg">→</span>
          </Link>
        </div>
      </aside>
    </header>
  );
}
