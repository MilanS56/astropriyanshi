"use client";

import Image from "next/image";
import { useEffect, useId, useRef } from "react";
import type { Testimonial } from "@/lib/testimonials";

export function OriginalScreenshot({ testimonial }: { testimonial: Testimonial }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const previousOverflow = useRef<string | null>(null);
  const titleId = useId();

  function restoreScroll() {
    if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current;
      previousOverflow.current = null;
    }
  }

  useEffect(() => () => {
    if (previousOverflow.current !== null) {
      document.body.style.overflow = previousOverflow.current;
    }
  }, []);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="dialog"
        onClick={() => {
          dialogRef.current?.showModal();
          previousOverflow.current = document.body.style.overflow;
          document.body.style.overflow = "hidden";
        }}
        className="mt-3 inline-flex min-h-12 items-center gap-3 border-b border-[#F0B957]/60 text-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F0B957]"
      >
        View Original <span aria-hidden="true">→</span>
      </button>
      <dialog
        ref={dialogRef}
        aria-labelledby={titleId}
        onClose={() => {
          restoreScroll();
          triggerRef.current?.focus({ preventScroll: true });
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close();
        }}
        className="fixed inset-0 m-auto max-h-[100dvh] max-w-none overflow-y-auto border-0 bg-transparent p-4 text-[#f8f4ec] backdrop:bg-[#030c1c]/90 backdrop:backdrop-blur-sm"
      >
        <div className="mx-auto w-fit max-w-full rounded-lg bg-[#030c1c] p-3 shadow-2xl sm:p-5">
          <div className="mb-3 flex items-center justify-between gap-4">
            <h2 id={titleId} className="flex items-center gap-2 text-sm">
              <span aria-hidden="true" className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#F0B957] text-xs font-bold text-[#030c1c]">✓</span>
              <span>Original testimonial · {testimonial.clientLabel}</span>
            </h2>
            <button
              type="button"
              autoFocus
              onClick={() => dialogRef.current?.close()}
              aria-label="Close original testimonial"
              className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[#f8f4ec]/30 text-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0B957]"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <Image
            src={testimonial.screenshot}
            width={testimonial.screenshotWidth}
            height={testimonial.screenshotHeight}
            alt="Client testimonial shared with PRIYANSHII AASTTRO"
            unoptimized
            className="mx-auto h-auto max-h-[calc(100dvh-9rem)] w-auto max-w-full object-contain"
          />
        </div>
      </dialog>
    </>
  );
}
