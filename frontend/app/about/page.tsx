import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const portraitSrc = "/images/author/priyanshii-aasttro.webp";

const timeline = [
  {
    year: "2017",
    title: "Beginning the journey",
    text: "Started studying and exploring astrology.",
  },
  {
    year: "2023",
    title: "Taking the knowledge forward professionally",
    text: "Began carrying her knowledge forward professionally through consultations.",
  },
  {
    year: "TODAY",
    title: "Continuing to learn",
    text: "Continues to study, explore and improve her understanding with every experience.",
  },
];

const process = [
  {
    number: "01",
    title: "UNDERSTAND",
    text: "I begin by understanding the main concern and the questions the person wants to explore.",
  },
  {
    number: "02",
    title: "ANALYSE",
    text: "I study the relevant details of the birth chart or numbers and connect different factors to understand the overall picture.",
  },
  {
    number: "03",
    title: "EXPLAIN",
    text: "I believe that astrology should not be explained only through difficult terms. My focus is to explain my observations in simple and clear language.",
  },
  {
    number: "04",
    title: "GUIDE",
    text: "Each consultation is approached individually, because every person and every situation is different.",
  },
];

const areas = [
  "Marriage",
  "Relationships",
  "Career",
  "Business",
  "Family",
  "Finances",
];

export const metadata: Metadata = {
  title: "About Priyanshii | PRIYANSHII AASTTRO",
  description: "Learn about Priyanshii's approach to Vedic Astrology, Lal Kitab and Numerology, and her journey of continuous learning and consultation.",
  alternates: { canonical: "/about" },
  openGraph: { title: "About Priyanshii | PRIYANSHII AASTTRO", description: "Learn about Priyanshii's approach to Vedic Astrology, Lal Kitab and Numerology, and her journey of continuous learning and consultation.", url: "https://priyanshiiaasttro.com/about" },
};

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p
      className={`mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#f4b94f] md:text-[13px] ${
        dark ? "" : ""
      }`}
    >
      {children}
    </p>
  );
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative isolate overflow-hidden bg-[#f8f4ec] px-6 pb-16 pt-32 text-[#030c1c] md:px-8 md:pb-20 md:pt-40 lg:px-10 lg:pb-24 xl:px-14 xl:pt-36">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[#030c1c] xl:h-32" />
          <div className="pointer-events-none absolute right-8 top-36 h-24 w-24 rounded-full border border-[#F0B957]/25 opacity-40 md:right-[8%] md:top-44 md:h-36 md:w-36" />
          <div className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-12 md:grid-cols-[0.95fr_1.05fr] md:gap-10 lg:gap-16">
            <div className="max-w-2xl">
              <Eyebrow>ABOUT PRIYANSHII</Eyebrow>
              <h1 className="font-serif text-[2.65rem] leading-[1.05] tracking-[-0.03em] text-[#030c1c] min-[390px]:text-[3.1rem] md:text-[4rem] lg:text-[4.6rem]">
                Understanding the journey behind the guidance.
              </h1>
              <p className="mt-7 max-w-[40rem] text-base leading-8 text-[#030c1c]/74 md:text-[18px] md:leading-9">
                I&apos;m Priyanshii, a Vedic Astrologer, Lal Kitab Practitioner and Numerologist, with a deep and continuously growing connection with the world of astrology.
              </p>
            </div>

            <figure className="relative mx-auto w-full max-w-[30rem] md:max-w-[34rem]">
              <div className="absolute -inset-3 rounded-[2rem] border border-[#F0B957]/40 md:-inset-4 md:rounded-[2.5rem]" />
              <div className="relative overflow-hidden rounded-[1.75rem] border border-[#F0B957]/55 bg-[#f8f4ec] shadow-[0_28px_80px_rgba(3,12,28,0.16)] md:rounded-[2.15rem]">
                <img
                  src={portraitSrc}
                  alt="Priyanshii — Vedic Astrologer, Lal Kitab Practitioner and Numerologist"
                  className="aspect-[4/5] w-full object-cover object-[center_28%]"
                />
              </div>
            </figure>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#030c1c] px-6 py-16 text-[#f8f4ec] md:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(240,185,87,0.10),transparent_30%)]" />
          <div className="relative mx-auto max-w-[1440px]">
            <Eyebrow dark>THE JOURNEY</Eyebrow>
            <div className="grid gap-10 lg:grid-cols-[0.32fr_0.68fr] lg:items-start">
              <h2 className="font-serif text-[2.35rem] leading-[1.08] tracking-[-0.02em] md:text-[3.2rem]">
                A path shaped by study, practice and experience.
              </h2>
              <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] md:items-start md:gap-4">
                {timeline.map((item, index) => (
                  <div key={item.year} className="contents">
                    <article className="relative py-2 md:py-0">
                      <p className="font-serif text-4xl leading-none text-[#F0B957] md:text-[2.65rem] lg:text-[2.8rem]">
                        {item.year}
                      </p>
                      <h3 className="mt-4 font-serif text-xl leading-7 text-[#f8f4ec] md:text-[1.35rem] lg:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-sm text-sm leading-7 text-[#f8f4ec]/68 md:text-[15px] lg:text-base">
                        {item.text}
                      </p>
                    </article>

                    {index < timeline.length - 1 && (
                      <div
                        aria-hidden="true"
                        className="flex items-center justify-center py-1 md:pt-1.5"
                      >
                        <span className="flex h-9 w-9 rotate-90 items-center justify-center rounded-full border border-[#F0B957]/30 font-serif text-xl text-[#F0B957] md:rotate-0">
                          &rarr;
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#f8f4ec] px-6 py-16 text-[#030c1c] md:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-14">
          <img src="/images/decorators/star.svg" alt="" aria-hidden="true" className="pointer-events-none absolute right-8 top-12 h-10 w-10 opacity-20 md:right-[12%] md:top-16 md:h-14 md:w-14" />
          <div className="mx-auto max-w-[1040px] text-center">
            <Eyebrow>A CONTINUOUS JOURNEY OF LEARNING</Eyebrow>
            <h2 className="font-serif text-[2.7rem] leading-[1.06] tracking-[-0.03em] min-[390px]:text-[3.15rem] md:text-[4.5rem]">
              Astrology is like a deep ocean.
            </h2>
            <p className="mx-auto mt-7 max-w-[48rem] text-lg leading-9 text-[#030c1c]/74 md:text-xl">
              Every chart, every combination and every case brings something new to learn.
            </p>
            <p className="mx-auto mt-5 max-w-[42rem] text-base leading-8 text-[#030c1c]/68 md:text-[17px]">
              This is why I continue to study, explore and improve my understanding with every experience.
            </p>
          </div>
        </section>

        <section className="bg-[#030c1c] px-6 py-16 text-[#f8f4ec] md:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-14">
          <div className="mx-auto max-w-[1440px]">
            <div className="max-w-4xl">
              <Eyebrow dark>LET&apos;S LOOK AT MY WORK</Eyebrow>
              <h2 className="font-serif text-[2.45rem] leading-[1.08] tracking-[-0.02em] min-[390px]:text-[2.9rem] md:text-[4rem]">
                Understanding first. Analysing thoughtfully. Explaining clearly.
              </h2>
            </div>
            <div className="mt-12 grid border-t border-[#f8f4ec]/12 md:grid-cols-2 lg:grid-cols-4">
              {process.map((item) => (
                <article key={item.number} className="border-b border-[#f8f4ec]/12 py-8 md:px-6 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:border-[#f8f4ec]/12">
                  <p className="font-serif text-3xl text-[#F0B957]">{item.number}</p>
                  <h3 className="mt-5 font-serif text-xl tracking-[0.08em] text-[#f8f4ec]">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#f8f4ec]/68 md:text-[15px]">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f8f4ec] px-6 py-16 text-[#030c1c] md:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-14">
          <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.42fr_0.58fr] lg:items-start lg:gap-16">
            <div>
              <Eyebrow>AREAS OF LIFE</Eyebrow>
              <h2 className="font-serif text-[2.45rem] leading-[1.08] tracking-[-0.02em] min-[390px]:text-[2.9rem] md:text-[4rem]">
                Questions can take many forms.
              </h2>
              <p className="mt-6 max-w-[36rem] text-base leading-8 text-[#030c1c]/72 md:text-[17px]">
                Life can bring situations where we feel confused, uncertain or unable to understand why something is happening. Understanding the astrological perspective can help bring more clarity to the situation.
              </p>
            </div>
            <div className="grid grid-cols-1 border-y border-[#030c1c]/12 sm:grid-cols-2">
              {areas.map((area) => (
                <div key={area} className="border-b border-[#030c1c]/12 py-6 font-serif text-2xl text-[#030c1c] last:border-b-0 sm:border-r sm:px-7 sm:even:border-r-0 sm:nth-last-[-n+2]:border-b-0">
                  {area}
                </div>
              ))}
              <div className="py-6 text-base leading-8 text-[#030c1c]/64 sm:col-span-2 sm:px-7">
                and other important areas of life
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#030c1c] px-6 py-16 text-[#f8f4ec] md:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-14">
          <img src="/images/decorators/moon.svg" alt="" aria-hidden="true" className="pointer-events-none absolute right-8 top-10 h-20 w-20 opacity-[0.08] md:right-[10%] md:top-16 md:h-28 md:w-28" />
          <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-start lg:gap-16">
            <div>
              <Eyebrow dark>MY APPROACH</Eyebrow>
              <h2 className="font-serif text-[2.55rem] leading-[1.06] tracking-[-0.02em] min-[390px]:text-[3rem] md:text-[4.2rem]">
                Stay curious. Keep learning.
              </h2>
            </div>
            <div className="space-y-6 text-base leading-8 text-[#f8f4ec]/72 md:text-[17px] md:leading-9">
              <p>My approach is based on continuous learning, thoughtful analysis and meaningful guidance.</p>
              <p>I do not believe that becoming an astrologer means reaching a point where there is nothing more to learn.</p>
              <p>For me, it means staying curious, learning from every chart and every case, and becoming better with every experience.</p>
              <p>Where appropriate, I also suggest traditional remedies and practical guidance based on the analysis.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#f8f4ec] px-6 py-16 text-center text-[#030c1c] md:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-14">
          <div className="mx-auto max-w-[900px]">
            <Eyebrow>READY TO EXPLORE YOUR QUESTIONS?</Eyebrow>
            <h2 className="font-serif text-[2.55rem] leading-[1.06] tracking-[-0.03em] min-[390px]:text-[3rem] md:text-[4.25rem]">
              Begin your journey with greater clarity.
            </h2>
            <p className="mx-auto mt-6 max-w-[46rem] text-base leading-8 text-[#030c1c]/72 md:text-[17px]">
              If you are looking for someone to understand your concerns through the perspective of Vedic Astrology, Lal Kitab or Numerology, I am here to guide you in exploring your situation with greater clarity and understanding.
            </p>
            <Link href="/consultations" className="mt-8 inline-flex min-h-14 items-center justify-center rounded-full bg-[#F0B957] px-8 font-serif text-[15px] text-[#030c1c] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f4b94f] focus:outline-none focus:ring-2 focus:ring-[#030c1c] focus:ring-offset-4 focus:ring-offset-[#f8f4ec]">
              Book a Consultation&nbsp;&rarr;
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
