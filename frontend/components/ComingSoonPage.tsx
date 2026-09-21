import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const decorators = [
  { file: "aries.svg", position: "left-[5%] top-[24%] -rotate-12" },
  { file: "taurus.svg", position: "right-[8%] top-[19%] rotate-12" },
  { file: "gemini.svg", position: "left-[13%] top-[49%] hidden lg:block" },
  { file: "cancer.svg", position: "right-[20%] top-[24%] hidden md:block rotate-6" },
  { file: "leo.svg", position: "right-[3%] top-[47%] hidden md:block" },
  { file: "virgo.svg", position: "left-[4%] bottom-[17%] rotate-12" },
  { file: "libra.svg", position: "right-[12%] bottom-[14%] -rotate-12" },
  { file: "scorpio.svg", position: "left-[30%] bottom-[5%] hidden md:block" },
  { file: "sagittarius.svg", position: "right-[30%] top-[13%] hidden lg:block" },
  { file: "capricorn.svg", position: "right-[35%] bottom-[4%] hidden lg:block" },
  { file: "aquarius.svg", position: "left-[22%] top-[12%] hidden lg:block -rotate-6" },
  { file: "pisces.svg", position: "left-[42%] bottom-[10%] hidden md:block rotate-6" },
];

type Props = { eyebrow: string; heading: string; description: string };

export function ComingSoonPage({ eyebrow, heading, description }: Props) {
  return (
    <>
      <Navbar />
      <main className="bg-[#030c1c] text-[#f8f4ec]">
        <section className="relative isolate flex min-h-[70vh] items-center justify-center overflow-hidden px-6 pb-20 pt-40 md:px-10 md:pb-24 md:pt-44">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            {decorators.map(({ file, position }) => (
              <Image key={file} src={`/images/decorators/${file}`} alt="" width={64} height={64} className={`absolute h-8 w-8 opacity-[0.07] brightness-0 invert sepia md:h-12 md:w-12 ${position}`} />
            ))}
          </div>
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.28em] text-[#F0B957]">{eyebrow}</p>
            <h1 className="font-serif text-[2.6rem] leading-[1.12] tracking-[-0.025em] md:text-6xl">{heading}</h1>
            <p className="mx-auto mt-7 max-w-xl text-base leading-8 text-[#f8f4ec]/75 md:text-lg">{description}</p>
            <div className="my-8 flex items-center justify-center gap-4">
              <span aria-hidden="true" className="h-px w-10 bg-[#F0B957]/35" />
              <p className="text-[10px] font-semibold tracking-[0.25em] text-[#F0B957]">COMING SOON</p>
              <span aria-hidden="true" className="h-px w-10 bg-[#F0B957]/35" />
            </div>
            <Link href="/" className="inline-flex min-h-14 items-center justify-center rounded-full border border-[#F0B957]/60 px-8 py-4 font-serif text-base text-[#f8f4ec] transition-colors hover:bg-[#F0B957]/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F0B957]">Back to Home →</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
