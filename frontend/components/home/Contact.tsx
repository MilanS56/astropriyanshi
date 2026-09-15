"use client";

import { FormEvent, useState } from "react";

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;
type FormStatus = "idle" | "submitting" | "success" | "error";

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
};

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

  const inputBaseClass =
    "mt-3 w-full rounded-none border-0 border-b border-[#f8f4ec]/22 bg-transparent px-0 py-3 text-base text-[#f8f4ec] outline-none transition-colors duration-300 placeholder:text-[#f8f4ec]/38 hover:border-[#F0B957]/55 focus:border-[#F0B957] focus:ring-0";
  const errorClass = "border-[#F0B957]";

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden bg-[#030c1c] px-6 py-16 text-[#f8f4ec] md:px-8 md:py-20 lg:px-10 lg:py-24 xl:px-14"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_84%_20%,rgba(240,185,87,0.12),transparent_30%),linear-gradient(180deg,rgba(248,244,236,0.04),transparent_42%)]" />

      <img
        src="/images/decorators/moon.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-8 top-14 h-12 w-12 opacity-20 md:right-[8%] md:top-20 md:h-16 md:w-16"
      />

      <div className="relative z-10 mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[0.45fr_0.55fr] lg:items-start lg:gap-16">
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
          className="w-full max-w-[42rem] lg:ml-auto"
          onSubmit={handleSubmit}
          noValidate
        >
          <div className="grid gap-7 md:grid-cols-2 md:gap-x-8 lg:gap-x-10">
            <div>
              <label
                htmlFor="contact-name"
                className="font-serif text-sm text-[#f4b94f]"
              >
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
                className={`${inputBaseClass} ${errors.name ? errorClass : ""}`}
              />
              <p
                id="contact-name-error"
                className="mt-2 min-h-5 text-xs leading-5 text-[#F0B957]"
              >
                {errors.name}
              </p>
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="font-serif text-sm text-[#f4b94f]"
              >
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
                className={`${inputBaseClass} ${errors.email ? errorClass : ""}`}
              />
              <p
                id="contact-email-error"
                className="mt-2 min-h-5 text-xs leading-5 text-[#F0B957]"
              >
                {errors.email}
              </p>
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="contact-message"
                className="font-serif text-sm text-[#f4b94f]"
              >
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
                className={`${inputBaseClass} min-h-[8rem] resize-y ${errors.message ? errorClass : ""}`}
              />
              <p
                id="contact-message-error"
                className="mt-2 min-h-5 text-xs leading-5 text-[#F0B957]"
              >
                {errors.message}
              </p>
            </div>
          </div>

          <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <button
              type="submit"
              className="group inline-flex min-h-14 w-full max-w-[18rem] items-center justify-center gap-4 rounded-full bg-[#F0B957] px-8 py-4 font-serif text-[15px] text-[#030c1c] transition-colors duration-300 hover:bg-[#f4b94f] focus:outline-none focus:ring-2 focus:ring-[#F0B957] focus:ring-offset-4 focus:ring-offset-[#030c1c] sm:w-auto"
            >
              <span>Send Message</span>
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            <p
              className="min-h-6 text-sm leading-6 text-[#f8f4ec]/62"
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
