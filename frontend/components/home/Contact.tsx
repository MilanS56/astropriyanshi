"use client";

import { FormEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;
type FormStatus = "idle" | "submitting" | "success" | "error";

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

const zodiacDecorators = [
  "aries.svg",
  "taurus.svg",
  "gemini.svg",
  "leo.svg",
  "virgo.svg",
  "libra.svg",
  "scorpio.svg",
  "sagittarius.svg",
  "capricorn.svg",
];

function validateForm(values: FormValues) {
  const errors: FormErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your name.";
  }

  if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email.";
  }

  if (values.message.trim().length < 10) {
    errors.message = "Please tell us a little about your enquiry.";
  }

  return errors;
}

export function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");

  function updateField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus("idle");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validateForm(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setStatus("error");
      return;
    }

    setStatus("submitting");

    // TODO: Connect this handler to the NestJS contact API once the Resend integration is ready.
    setStatus("success");
  }

  const fieldClass =
    "mt-2.5 w-full rounded-2xl border border-[#f8f4ec]/12 bg-[#f8f4ec]/[0.035] px-4 py-3.5 text-base leading-6 text-[#f8f4ec] outline-none transition-colors duration-300 placeholder:text-[#f8f4ec]/38 hover:border-[#f8f4ec]/24 focus:border-[#F0B957]/80 focus:bg-[#f8f4ec]/[0.055] focus:ring-2 focus:ring-[#F0B957]/20";
  const errorClass = "border-[#F0B957]/85 focus:border-[#F0B957]";
  const labelClass =
    "text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f4b94f]";
  const errorTextClass = "mt-2 min-h-5 text-xs leading-5 text-[#F0B957]";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden bg-[#030c1c] px-6 py-16 text-[#f8f4ec] md:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-14"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_16%,rgba(240,185,87,0.10),transparent_28%),linear-gradient(180deg,rgba(248,244,236,0.035),transparent_44%)]" />

      <img
        src="/images/decorators/moon.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-6 top-12 h-16 w-16 opacity-[0.09] md:right-[7%] md:top-16 md:h-24 md:w-24 lg:right-[9%] lg:top-20"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-5 px-6 md:bottom-7 md:px-8 lg:bottom-8 lg:px-10 xl:px-14"
      >
        <div className="mx-auto flex max-w-[1440px] items-center justify-between opacity-55 md:opacity-65">
          {zodiacDecorators.map((name) => (
            <img
              key={name}
              src={`/images/decorators/${name}`}
              alt=""
              className="h-4 w-4 shrink-0 object-contain opacity-[0.10] brightness-0 invert sepia saturate-[1.15] hue-rotate-[350deg] min-[390px]:h-5 min-[390px]:w-5 md:h-6 md:w-6 md:opacity-[0.12] lg:h-7 lg:w-7"
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[0.44fr_0.56fr] lg:items-center lg:gap-14 xl:gap-20">
        <div>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#f4b94f] md:text-[13px]">
            LET&apos;S CONNECT
          </p>

          <h2
            id="contact-heading"
            className="font-serif text-[2.55rem] leading-[1.08] tracking-[-0.02em] text-[#f8f4ec] min-[390px]:text-[2.95rem] md:text-[3.35rem] lg:text-[4rem]"
          >
            Have a question?
            <br />
            <span className="text-[#f4b94f]">Let&apos;s talk.</span>
          </h2>

          <p className="mt-6 max-w-[31rem] text-base leading-8 text-[#f8f4ec]/72 md:text-[17px]">
            Whether you&apos;re curious about a consultation or simply want to
            know more, feel free to reach out.
          </p>
        </div>

        <form
          className="relative w-full max-w-[46rem] overflow-hidden rounded-[1.25rem] border border-[#f8f4ec]/10 bg-[#f8f4ec]/[0.035] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-6 md:p-7 lg:ml-auto lg:p-8"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#F0B957]/45 to-transparent" />

          <div className="grid gap-5 md:grid-cols-2 md:gap-x-5 lg:gap-x-6">
            <div>
              <label htmlFor="contact-name" className={labelClass}>
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Your name"
                aria-invalid={Boolean(errors.name)}
                aria-describedby="contact-name-error"
                required
                disabled={status === "submitting"}
                className={`${fieldClass} ${errors.name ? errorClass : ""}`}
              />
              <p id="contact-name-error" className={errorTextClass}>
                {errors.name}
              </p>
            </div>

            <div>
              <label htmlFor="contact-email" className={labelClass}>
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={values.email}
                onChange={(event) => updateField("email", event.target.value)}
                placeholder="you@example.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby="contact-email-error"
                required
                disabled={status === "submitting"}
                className={`${fieldClass} ${errors.email ? errorClass : ""}`}
              />
              <p id="contact-email-error" className={errorTextClass}>
                {errors.email}
              </p>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="contact-phone" className={labelClass}>
                Phone <span className="text-[#f8f4ec]/45">(optional)</span>
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={values.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                placeholder="Your phone number"
                disabled={status === "submitting"}
                className={fieldClass}
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="contact-message" className={labelClass}>
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={values.message}
                onChange={(event) =>
                  updateField("message", event.target.value)
                }
                placeholder="How can we help you?"
                rows={5}
                aria-invalid={Boolean(errors.message)}
                aria-describedby="contact-message-error"
                required
                disabled={status === "submitting"}
                className={`${fieldClass} min-h-[8.25rem] resize-y ${errors.message ? errorClass : ""}`}
              />
              <p id="contact-message-error" className={errorTextClass}>
                {errors.message}
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={status === "submitting"}
              className="group mx-auto inline-flex min-h-14 w-full max-w-[18rem] items-center justify-center gap-4 rounded-full bg-[#F0B957] px-8 py-4 font-serif text-[15px] text-[#030c1c] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f4b94f] focus:outline-none focus:ring-2 focus:ring-[#F0B957] focus:ring-offset-4 focus:ring-offset-[#030c1c] disabled:cursor-not-allowed disabled:opacity-70 sm:mx-0 sm:w-auto"
            >
              <span>{status === "submitting" ? "Preparing" : "Send Message"}</span>
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            <p
              className="min-h-6 text-center text-sm leading-6 text-[#f8f4ec]/62 sm:text-left"
              aria-live="polite"
            >
              {status === "success"
                ? "Your message is ready to be connected to the contact service."
                : status === "error"
                  ? "Please review the highlighted fields."
                  : ""}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

