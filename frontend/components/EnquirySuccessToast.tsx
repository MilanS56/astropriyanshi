"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function EnquirySuccessToast() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 6000);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return createPortal(
    <div className="fixed right-4 top-6 z-[100] flex w-[calc(100%-2rem)] max-w-md items-start gap-3 rounded-2xl border border-[#F0B957]/40 bg-[#030c1c] p-5 text-[#f8f4ec] shadow-xl sm:right-6">
      <span aria-hidden="true" className="text-xl text-[#F0B957]">✓</span>
      <p role="status" aria-live="polite" aria-atomic="true" className="flex-1 text-sm leading-6">
        Thank you. Your enquiry has been submitted successfully.
      </p>
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Dismiss notification"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xl text-[#F0B957] hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F0B957]"
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>,
    document.body,
  );
}
