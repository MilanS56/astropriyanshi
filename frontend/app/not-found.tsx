import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-[70svh] items-center justify-center bg-[#030c1c] px-6 py-32 text-center text-[#f8f4ec]">
        <div className="max-w-xl">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#F0B957]">PAGE NOT FOUND</p>
          <h1 className="font-serif text-5xl md:text-7xl">This page has moved beyond the horizon.</h1>
          <p className="mx-auto mt-6 max-w-md text-base leading-8 text-[#f8f4ec]/70">The page you’re looking for could not be found.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="inline-flex min-h-12 items-center rounded-full bg-[#F0B957] px-7 font-serif text-[#030c1c]">Back Home →</Link>
            <Link href="/consultations" className="inline-flex min-h-12 items-center rounded-full border border-[#F0B957]/60 px-7 font-serif text-[#f8f4ec]">Explore Consultations →</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
