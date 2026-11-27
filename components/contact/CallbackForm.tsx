"use client";

import { useId, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { PhoneCall, Info, Clock, LockKeyhole } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { callbackFormContent } from "@/data/contact";
import { contactConfig } from "@/config/contact";

import {
  callbackSchema,
  callbackDefaultValues,
  type CallbackFormInput,
  type CallbackFormValues,
} from "@/lib/validations/callback";

// ==========================================
// SHARED FIELD STYLES
// ==========================================

const inputClassName =
  "h-11 w-full rounded-lg border border-slate-300 bg-white text-slate-900";

const selectClassName =
  "h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-slate-900 outline-none transition-colors focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-100";

const labelClassName = "text-sm font-medium text-slate-700";

const sectionHeadingClassName =
  "border-b border-slate-200 pb-3 text-base font-semibold text-[#102B50]";

// ==========================================
// FIELD ERROR COMPONENT
// ==========================================

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;

  return (
    <p id={id} role="alert" className="mt-1 text-sm text-red-600">
      {message}
    </p>
  );
}

// ==========================================
// CALLBACK FORM
// ==========================================

export default function CallbackForm() {
  const formId = useId();

  const content = callbackFormContent;

  const [submissionNotice, setSubmissionNotice] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<CallbackFormInput, unknown, CallbackFormValues>({
    resolver: zodResolver(callbackSchema),
    defaultValues: callbackDefaultValues,
    mode: "onTouched",
  });

  // Watch message for character counter
  const message = useWatch({
    control,
    name: "message",
  });

  const messageLength = message?.length ?? 0;

  // Generate unique field IDs
  const fieldId = (name: string) => `${formId}-${name}`;

  const errorId = (name: string) => `${formId}-${name}-error`;

  // Temporary submission handler
  const onSubmit = () => {
    setSubmissionNotice(
      "Form validation is complete. Online callback requests are not available yet.",
    );
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      onChange={() => {
        if (submissionNotice) {
          setSubmissionNotice("");
        }
      }}
      className="space-y-7"
    >
      {/* ============================= */}
      {/* CONTACT DETAILS */}
      {/* ============================= */}

      <section className="space-y-5">
        <h3 className={sectionHeadingClassName}>
          {content.sections.contactDetails}
        </h3>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* First name */}
          <div className="space-y-2">
            <Label htmlFor={fieldId("firstName")} className={labelClassName}>
              First name
              <span className="ml-1 text-red-500">*</span>
            </Label>

            <Input
              id={fieldId("firstName")}
              placeholder="First name"
              autoComplete="given-name"
              maxLength={50}
              required
              className={inputClassName}
              aria-invalid={!!errors.firstName}
              aria-describedby={
                errors.firstName ? errorId("firstName") : undefined
              }
              {...register("firstName")}
            />

            <FieldError
              id={errorId("firstName")}
              message={errors.firstName?.message}
            />
          </div>

          {/* Last name */}
          <div className="space-y-2">
            <Label htmlFor={fieldId("lastName")} className={labelClassName}>
              Last name
              <span className="ml-1 text-red-500">*</span>
            </Label>

            <Input
              id={fieldId("lastName")}
              placeholder="Last name"
              autoComplete="family-name"
              maxLength={50}
              required
              className={inputClassName}
              aria-invalid={!!errors.lastName}
              aria-describedby={
                errors.lastName ? errorId("lastName") : undefined
              }
              {...register("lastName")}
            />

            <FieldError
              id={errorId("lastName")}
              message={errors.lastName?.message}
            />
          </div>

          {/* Phone number */}
          <div className="space-y-2">
            <Label htmlFor={fieldId("phone")} className={labelClassName}>
              Phone number
              <span className="ml-1 text-red-500">*</span>
            </Label>

            <Input
              id={fieldId("phone")}
              type="tel"
              placeholder="04XX XXX XXX"
              autoComplete="tel"
              maxLength={30}
              required
              className={inputClassName}
              aria-invalid={!!errors.phone}
              aria-describedby={errors.phone ? errorId("phone") : undefined}
              {...register("phone")}
            />

            <FieldError id={errorId("phone")} message={errors.phone?.message} />
          </div>

          {/* Email address */}
          <div className="space-y-2">
            <Label htmlFor={fieldId("email")} className={labelClassName}>
              Email address
              <span className="ml-1 font-normal text-slate-400">
                (optional)
              </span>
            </Label>

            <Input
              id={fieldId("email")}
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              maxLength={254}
              className={inputClassName}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? errorId("email") : undefined}
              {...register("email")}
            />

            <FieldError id={errorId("email")} message={errors.email?.message} />
          </div>
        </div>

        {/* Support category */}
        <div className="space-y-2">
          <Label
            htmlFor={fieldId("supportCategory")}
            className={labelClassName}
          >
            What support are you interested in?
            <span className="ml-1 font-normal text-slate-400">(optional)</span>
          </Label>

          <select
            id={fieldId("supportCategory")}
            className={selectClassName}
            aria-invalid={!!errors.supportCategory}
            aria-describedby={
              errors.supportCategory ? errorId("supportCategory") : undefined
            }
            {...register("supportCategory")}
          >
            <option value="">Select support category</option>

            {content.supportCategoryOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <FieldError
            id={errorId("supportCategory")}
            message={errors.supportCategory?.message}
          />
        </div>
      </section>

      {/* ============================= */}
      {/* CALLBACK PREFERENCES */}
      {/* ============================= */}

      <section className="space-y-5">
        <h3 className={sectionHeadingClassName}>
          {content.sections.callbackPreference}
        </h3>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Preferred day */}
          <div className="space-y-2">
            <Label htmlFor={fieldId("preferredDay")} className={labelClassName}>
              Preferred day
            </Label>

            <select
              id={fieldId("preferredDay")}
              className={selectClassName}
              aria-invalid={!!errors.preferredDay}
              aria-describedby={
                errors.preferredDay ? errorId("preferredDay") : undefined
              }
              {...register("preferredDay")}
            >
              {content.preferredDayOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <FieldError
              id={errorId("preferredDay")}
              message={errors.preferredDay?.message}
            />
          </div>

          {/* Preferred time */}
          <div className="space-y-2">
            <Label
              htmlFor={fieldId("preferredTime")}
              className={labelClassName}
            >
              Preferred time
            </Label>

            <select
              id={fieldId("preferredTime")}
              className={selectClassName}
              aria-invalid={!!errors.preferredTime}
              aria-describedby={
                errors.preferredTime ? errorId("preferredTime") : undefined
              }
              {...register("preferredTime")}
            >
              {content.preferredTimeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <FieldError
              id={errorId("preferredTime")}
              message={errors.preferredTime?.message}
            />
          </div>
        </div>

        {/* Timezone notice */}
        <div className="flex items-start gap-3 rounded-lg bg-slate-50 p-3">
          <Clock
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-slate-500"
          />

          <p className="text-xs leading-relaxed text-slate-600">
            {content.timezoneNotice}
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* ADDITIONAL INFORMATION */}
      {/* ============================= */}

      <section className="space-y-4">
        <h3 className={sectionHeadingClassName}>
          {content.sections.additionalInformation}
        </h3>

        <div className="space-y-2">
          <Label htmlFor={fieldId("message")} className={labelClassName}>
            Is there anything else you would like us to know?
            <span className="ml-1 font-normal text-slate-400">(optional)</span>
          </Label>

          <Textarea
            id={fieldId("message")}
            placeholder="Please provide any additional information..."
            maxLength={500}
            rows={4}
            className="min-h-28 resize-y rounded-lg border border-slate-300 bg-white text-slate-900"
            aria-invalid={!!errors.message}
            aria-describedby={
              errors.message
                ? `${fieldId("counter")} ${errorId("message")}`
                : fieldId("counter")
            }
            {...register("message")}
          />

          <div className="flex items-start justify-between gap-3">
            <FieldError
              id={errorId("message")}
              message={errors.message?.message}
            />

            <p
              id={fieldId("counter")}
              className="ml-auto text-xs text-slate-500"
            >
              {messageLength}/500 characters
            </p>
          </div>
        </div>

        {/* Privacy information */}
        <div className="flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4">
          <Info
            aria-hidden="true"
            className="mt-0.5 size-5 shrink-0 text-blue-600"
          />

          <p className="text-sm leading-relaxed text-blue-800">
            {content.privacyNotice}
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* PRIVACY CONSENT */}
      {/* ============================= */}

      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <input
            id={fieldId("privacyConsent")}
            type="checkbox"
            required
            className="mt-1 size-4 shrink-0 cursor-pointer accent-[#102B50]"
            aria-invalid={!!errors.privacyConsent}
            aria-describedby={
              errors.privacyConsent ? errorId("privacyConsent") : undefined
            }
            {...register("privacyConsent")}
          />

          <Label
            htmlFor={fieldId("privacyConsent")}
            className="cursor-pointer text-sm leading-relaxed text-slate-700"
          >
            {content.privacyConsent}

            <span className="ml-1 text-red-500">*</span>
          </Label>
        </div>

        <FieldError
          id={errorId("privacyConsent")}
          message={errors.privacyConsent?.message}
        />

        <p className="text-xs leading-relaxed text-slate-500">
          Our privacy policy will be available before online callback requests
          are enabled.
        </p>
      </div>

      {/* ============================= */}
      {/* SUBMIT BUTTON */}
      {/* ============================= */}

      <div className="space-y-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="min-h-12 w-full rounded-xl bg-[#102B50] text-base font-semibold text-white hover:bg-[#1D4675]"
        >
          <PhoneCall aria-hidden="true" className="mr-2 size-5" />

          {isSubmitting ? content.submittingLabel : content.submitLabel}
        </Button>

        {submissionNotice && (
          <div
            role="status"
            className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-center text-sm text-blue-800"
          >
            {submissionNotice}
          </div>
        )}

        <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
          <LockKeyhole aria-hidden="true" className="size-3.5" />

          <span>Your privacy matters to us.</span>
        </div>
      </div>

      {/* ============================= */}
      {/* BRAND FOOTER */}
      {/* ============================= */}

      <div className="space-y-1 border-t border-slate-200 pt-5 text-center">
        <p className="text-sm font-semibold text-[#102B50]">
          {contactConfig.brandName}
        </p>

        <p className="text-xs italic text-slate-500">{contactConfig.tagline}</p>
      </div>
    </form>
  );
}
