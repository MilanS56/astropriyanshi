"use client";

import { FormEvent, useState } from "react";
import { EnquirySuccessToast } from "@/components/EnquirySuccessToast";
import type { Consultation } from "@/lib/consultations";
import { clearSelectedConsultationIds } from "@/lib/consultation-selection";
import {
  type ConsultationEnquiry,
  type ConsultationEnquiryApiResponse,
  type ConsultationEnquiryErrors,
  enquiryLimits,
  validateConsultationEnquiry,
} from "@/lib/consultation-enquiries";

type ConsultationEnquiryFormProps = {
  consultations: Consultation[];
};

type FormValues = Pick<
  ConsultationEnquiry,
  "name" | "email" | "phone" | "message"
>;
type FormStatus = "idle" | "submitting" | "success" | "error";

const initialValues: FormValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export function ConsultationEnquiryForm({
  consultations,
}: ConsultationEnquiryFormProps) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<ConsultationEnquiryErrors>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [successfulSubmissions, setSuccessfulSubmissions] = useState(0);

  function updateField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setStatus("idle");
    setStatusMessage("");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const payload: ConsultationEnquiry = {
      consultationIds: consultations.map((consultation) => consultation.id),
      ...values,
    };
    const validation = validateConsultationEnquiry(payload);

    if (!validation.data) {
      setErrors(validation.errors);
      setStatus("error");
      setStatusMessage("Please review the highlighted fields.");
      return;
    }

    setErrors({});
    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/consultation-enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });
      const result = (await response.json()) as ConsultationEnquiryApiResponse;

      if (!response.ok || !result.success) {
        setStatus("error");
        setStatusMessage(
          result.success
            ? "The enquiry could not be submitted."
            : result.message,
        );
        return;
      }

      clearSelectedConsultationIds();
      setStatus("success");
      setSuccessfulSubmissions((count) => count + 1);
      setStatusMessage("Your consultation enquiry has been submitted.");
      setValues(initialValues);
    } catch {
      setStatus("error");
      setStatusMessage(
        "The enquiry service is unavailable right now. Please try again later.",
      );
    }
  }

  const fieldClass =
    "mt-2.5 w-full rounded-2xl border border-[#f8f4ec]/12 bg-[#f8f4ec]/[0.035] px-4 py-3.5 text-base leading-6 text-[#f8f4ec] outline-none transition-colors duration-300 placeholder:text-[#f8f4ec]/38 hover:border-[#f8f4ec]/24 focus:border-[#F0B957]/80 focus:bg-[#f8f4ec]/[0.055] focus:ring-2 focus:ring-[#F0B957]/20 disabled:cursor-not-allowed disabled:opacity-65";
  const errorClass = "border-[#F0B957]/85 focus:border-[#F0B957]";
  const labelClass =
    "text-[11px] font-semibold uppercase tracking-[0.24em] text-[#f4b94f]";
  const errorTextClass = "mt-2 min-h-5 text-xs leading-5 text-[#F0B957]";
  const isSubmitting = status === "submitting";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="relative overflow-hidden rounded-[1.25rem] border border-[#f8f4ec]/10 bg-[#f8f4ec]/[0.035] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:p-6 md:p-8"
    >
      {successfulSubmissions > 0 && <EnquirySuccessToast key={successfulSubmissions} />}
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#F0B957]/45 to-transparent" />

      <fieldset disabled={isSubmitting}>
        <legend className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f4b94f]">
          Your details
        </legend>

        <div className="mt-6 grid gap-5 md:grid-cols-2 md:gap-x-6">
          <div>
            <label htmlFor="enquiry-name" className={labelClass}>
              Name
            </label>
            <input
              id="enquiry-name"
              name="name"
              type="text"
              autoComplete="name"
              value={values.name}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder="Your name"
              maxLength={enquiryLimits.nameMax}
              required
              aria-invalid={Boolean(errors.name)}
              aria-describedby="enquiry-name-error"
              className={`${fieldClass} ${errors.name ? errorClass : ""}`}
            />
            <p id="enquiry-name-error" className={errorTextClass}>
              {errors.name}
            </p>
          </div>

          <div>
            <label htmlFor="enquiry-email" className={labelClass}>
              Email
            </label>
            <input
              id="enquiry-email"
              name="email"
              type="email"
              autoComplete="email"
              value={values.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="you@example.com"
              maxLength={enquiryLimits.emailMax}
              required
              aria-invalid={Boolean(errors.email)}
              aria-describedby="enquiry-email-error"
              className={`${fieldClass} ${errors.email ? errorClass : ""}`}
            />
            <p id="enquiry-email-error" className={errorTextClass}>
              {errors.email}
            </p>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="enquiry-phone" className={labelClass}>
              Phone
            </label>
            <input
              id="enquiry-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              placeholder="Your phone number"
              maxLength={enquiryLimits.phoneMax}
              required
              aria-invalid={Boolean(errors.phone)}
              aria-describedby="enquiry-phone-error"
              className={`${fieldClass} ${errors.phone ? errorClass : ""}`}
            />
            <p id="enquiry-phone-error" className={errorTextClass}>
              {errors.phone}
            </p>
          </div>
        </div>

        <div className="mt-5 border-t border-[#f8f4ec]/10 pt-6">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-[#f4b94f]">
            Your concern
          </p>
          <label htmlFor="enquiry-message" className={labelClass}>
            Message
          </label>
          <textarea
            id="enquiry-message"
            name="message"
            value={values.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder="Tell us what you'd like to explore..."
            rows={6}
            minLength={enquiryLimits.messageMin}
            maxLength={enquiryLimits.messageMax}
            required
            aria-invalid={Boolean(errors.message)}
            aria-describedby="enquiry-message-help enquiry-message-error"
            className={`${fieldClass} min-h-[9rem] resize-y ${
              errors.message ? errorClass : ""
            }`}
          />
          <div className="flex items-start justify-between gap-4">
            <p id="enquiry-message-error" className={errorTextClass}>
              {errors.message}
            </p>
            <p
              id="enquiry-message-help"
              className="mt-2 shrink-0 text-xs leading-5 text-[#f8f4ec]/42"
            >
              {values.message.length}/{enquiryLimits.messageMax}
            </p>
          </div>
        </div>
      </fieldset>

      <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row">
        <button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="group inline-flex min-h-14 w-full max-w-[19rem] items-center justify-center gap-4 rounded-full bg-[#F0B957] px-8 py-4 font-serif text-[15px] text-[#030c1c] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f4b94f] focus:outline-none focus:ring-2 focus:ring-[#F0B957] focus:ring-offset-4 focus:ring-offset-[#030c1c] disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          <span>{isSubmitting ? "Submitting..." : "Send Enquiry"}</span>
          <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </button>

        <p
          className={`min-h-6 text-center text-sm leading-6 sm:text-left ${
            status === "success" ? "text-[#F0B957]" : "text-[#f8f4ec]/65"
          }`}
          role={status === "error" ? "alert" : "status"}
          aria-live="polite"
        >
          {statusMessage}
        </p>
      </div>
    </form>
  );
}
