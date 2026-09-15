export function BookingCTA() {
  return (
    <section
      aria-labelledby="booking-cta-heading"
      className="relative isolate overflow-hidden bg-[#f8f4ec] px-6 py-16 text-[#030c1c] md:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-14"
    >
      <img
        src="/images/decorators/star.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-10 h-8 w-8 -translate-x-1/2 opacity-20 md:top-12"
      />

      <div className="relative z-10 mx-auto max-w-[1440px]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#f4b94f] md:text-[13px]">
            READY WHEN YOU ARE
          </p>

          <h2
            id="booking-cta-heading"
            className="font-serif text-[2.4rem] leading-[1.08] tracking-[-0.02em] text-[#030c1c] min-[390px]:text-[2.85rem] md:text-[3.35rem] lg:text-[4rem]"
          >
            Begin your journey with
            <br />
            <span className="text-[#f4b94f]">greater clarity.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-[36rem] text-base leading-8 text-[#030c1c]/72 md:text-[17px]">
            A personalized consultation can be a space to pause, reflect and
            explore what matters most to you.
          </p>

          <div className="mx-auto mt-8 h-px w-24 bg-[#F0B957]/35" />

          <a
            href="/consultations"
            className="group mt-8 inline-flex min-h-14 w-full max-w-[20rem] items-center justify-center gap-4 rounded-full bg-[#F0B957] px-8 py-4 font-serif text-[15px] text-[#030c1c] transition-colors duration-300 hover:bg-[#f4b94f] focus:outline-none focus:ring-2 focus:ring-[#030c1c] focus:ring-offset-4 focus:ring-offset-[#f8f4ec] sm:w-auto"
          >
            <span>Book a Consultation</span>
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
