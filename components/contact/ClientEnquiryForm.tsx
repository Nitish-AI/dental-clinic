"use client";

import { useId, useState } from "react";

import { useForm, useWatch } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Send, Info, LockKeyhole } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { clientEnquiryFormContent } from "@/data/contact";
import { serviceCategories } from "@/data/services";
import { contactConfig } from "@/config/contact";

import {
  clientEnquirySchema,
  clientEnquiryDefaultValues,
  type ClientEnquiryFormInput,
  type ClientEnquiryFormValues,
} from "@/lib/validations/client-enquiry";

const selectClassName = `
    h-11 w-full rounded-lg
    border border-slate-300
    bg-white px-3
    text-sm text-slate-900
    outline-none
    transition-colors
    focus:border-blue-500
    focus:ring-2 focus:ring-blue-100
    disabled:cursor-not-allowed
    disabled:bg-slate-100
    disabled:text-slate-500
`;

const inputClassName = `
    h-11 rounded-lg
    border-slate-300 bg-white
    text-slate-900
`;

const labelClassName = `
    text-sm font-medium text-slate-700
`;

function FieldError({ message, id }: { message?: string; id?: string }) {
  if (!message) return null;

  return (
    <p id={id} role="alert" className="mt-1 text-xs text-red-600">
      {message}
    </p>
  );
}

export default function ClientEnquiryForm() {
  const formId = useId();

  const [submissionNotice, setSubmissionNotice] = useState("");

  const {
    register,
    handleSubmit,
    control,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<ClientEnquiryFormInput, unknown, ClientEnquiryFormValues>({
    resolver: zodResolver(clientEnquirySchema),
    defaultValues: clientEnquiryDefaultValues,
    mode: "onTouched",
  });

  // Watch selected support category
  const supportCategory = useWatch({
    control,
    name: "supportCategory",
  });

  // Watch enquiry message
  const message = useWatch({
    control,
    name: "message",
  });

  // Retrieve services from central catalogue
  const selectedCategory = serviceCategories.find(
    (category) => category.id === supportCategory,
  );

  const availableServices = selectedCategory?.services ?? [];

  const categoryRegistration = register("supportCategory");

  const content = clientEnquiryFormContent;

  // Temporary submission handler
  const onSubmit = () => {
    setSubmissionNotice(
      "Form validation is complete. Online enquiry submissions are not available yet.",
    );
  };

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-7">
      {/* ================================= */}
      {/* CONTACT DETAILS */}
      {/* ================================= */}

      <section className="space-y-5">
        <h3
          className="
                        border-b border-slate-200
                        pb-3 text-lg font-semibold
                        text-[#102B50]
                    "
        >
          {content.sections.contactDetails}
        </h3>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* First Name */}
          <div className="space-y-2">
            <Label htmlFor={`${formId}-firstName`} className={labelClassName}>
              First name *
            </Label>

            <Input
              id={`${formId}-firstName`}
              placeholder="First name"
              autoComplete="given-name"
              maxLength={50}
              required
              aria-invalid={!!errors.firstName}
              aria-describedby={
                errors.firstName ? `${formId}-firstName-error` : undefined
              }
              className={inputClassName}
              {...register("firstName")}
            />

            <FieldError
              id={`${formId}-firstName-error`}
              message={errors.firstName?.message}
            />
          </div>

          {/* Last Name */}
          <div className="space-y-2">
            <Label htmlFor={`${formId}-lastName`} className={labelClassName}>
              Last name *
            </Label>

            <Input
              id={`${formId}-lastName`}
              placeholder="Last name"
              autoComplete="family-name"
              maxLength={50}
              required
              aria-invalid={!!errors.lastName}
              aria-describedby={
                errors.lastName ? `${formId}-lastName-error` : undefined
              }
              className={inputClassName}
              {...register("lastName")}
            />

            <FieldError
              id={`${formId}-lastName-error`}
              message={errors.lastName?.message}
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor={`${formId}-email`} className={labelClassName}>
              Email address *
            </Label>

            <Input
              id={`${formId}-email`}
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
              aria-invalid={!!errors.email}
              aria-describedby={
                errors.email ? `${formId}-email-error` : undefined
              }
              className={inputClassName}
              {...register("email")}
            />

            <FieldError
              id={`${formId}-email-error`}
              message={errors.email?.message}
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor={`${formId}-phone`} className={labelClassName}>
              Phone number *
            </Label>

            <Input
              id={`${formId}-phone`}
              type="tel"
              placeholder="04XX XXX XXX"
              autoComplete="tel"
              maxLength={30}
              required
              aria-invalid={!!errors.phone}
              aria-describedby={
                errors.phone ? `${formId}-phone-error` : undefined
              }
              className={inputClassName}
              {...register("phone")}
            />

            <FieldError
              id={`${formId}-phone-error`}
              message={errors.phone?.message}
            />
          </div>
        </div>
      </section>

      {/* ================================= */}
      {/* SUPPORT NEEDS */}
      {/* ================================= */}

      <section className="space-y-5">
        <h3
          className="
                        border-b border-slate-200
                        pb-3 text-lg font-semibold
                        text-[#102B50]
                    "
        >
          {content.sections.supportNeeds}
        </h3>

        {/* Relationship */}
        <div className="space-y-2">
          <Label htmlFor={`${formId}-relationship`} className={labelClassName}>
            Who are you enquiring for? *
          </Label>

          <select
            id={`${formId}-relationship`}
            className={selectClassName}
            required
            aria-invalid={!!errors.relationship}
            aria-describedby={
              errors.relationship ? `${formId}-relationship-error` : undefined
            }
            {...register("relationship")}
          >
            <option value="" disabled>
              Please select
            </option>

            {content.relationshipOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <FieldError
            id={`${formId}-relationship-error`}
            message={errors.relationship?.message}
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {/* Support Category */}
          <div className="space-y-2">
            <Label
              htmlFor={`${formId}-supportCategory`}
              className={labelClassName}
            >
              Support category *
            </Label>

            <select
              id={`${formId}-supportCategory`}
              className={selectClassName}
              required
              aria-invalid={!!errors.supportCategory}
              aria-describedby={
                errors.supportCategory ? `${formId}-category-error` : undefined
              }
              {...categoryRegistration}
              onChange={(event) => {
                categoryRegistration.onChange(event);

                setValue("service", "", {
                  shouldDirty: true,
                });

                clearErrors("service");
              }}
            >
              <option value="" disabled>
                Select support category
              </option>

              {content.supportCategoryOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <FieldError
              id={`${formId}-category-error`}
              message={errors.supportCategory?.message}
            />
          </div>

          {/* Dynamic Service Selection */}
          <div className="space-y-2">
            <Label htmlFor={`${formId}-service`} className={labelClassName}>
              Specific service (optional)
            </Label>

            <select
              id={`${formId}-service`}
              className={selectClassName}
              disabled={availableServices.length === 0}
              aria-invalid={!!errors.service}
              aria-describedby={
                errors.service ? `${formId}-service-error` : undefined
              }
              {...register("service")}
            >
              <option value="">
                {availableServices.length > 0
                  ? "Select a service"
                  : "Select an applicable category first"}
              </option>

              {availableServices.map((service) => (
                <option key={service.id} value={service.id}>
                  {service.title}
                </option>
              ))}
            </select>

            <FieldError
              id={`${formId}-service-error`}
              message={errors.service?.message}
            />
          </div>

          {/* Suburb */}
          <div className="space-y-2">
            <Label htmlFor={`${formId}-suburb`} className={labelClassName}>
              Suburb (optional)
            </Label>

            <Input
              id={`${formId}-suburb`}
              placeholder="Enter suburb"
              autoComplete="address-level2"
              maxLength={100}
              className={inputClassName}
              aria-invalid={!!errors.suburb}
              aria-describedby={
                errors.suburb ? `${formId}-suburb-error` : undefined
              }
              {...register("suburb")}
            />

            <FieldError
              id={`${formId}-suburb-error`}
              message={errors.suburb?.message}
            />
          </div>

          {/* Postcode */}
          <div className="space-y-2">
            <Label htmlFor={`${formId}-postcode`} className={labelClassName}>
              Postcode (optional)
            </Label>

            <Input
              id={`${formId}-postcode`}
              placeholder="e.g. 2000"
              inputMode="numeric"
              autoComplete="postal-code"
              maxLength={4}
              className={inputClassName}
              aria-invalid={!!errors.postcode}
              aria-describedby={
                errors.postcode ? `${formId}-postcode-error` : undefined
              }
              {...register("postcode")}
            />

            <FieldError
              id={`${formId}-postcode-error`}
              message={errors.postcode?.message}
            />
          </div>
        </div>

        {/* Enquiry Message */}
        <div className="space-y-2">
          <Label htmlFor={`${formId}-message`} className={labelClassName}>
            How can we help you? *
          </Label>

          <Textarea
            id={`${formId}-message`}
            placeholder="Tell us a little about the support you're looking for..."
            maxLength={1000}
            required
            aria-invalid={!!errors.message}
            aria-describedby={`${formId}-privacy-notice ${formId}-message-error`}
            className="
                            min-h-32 resize-y
                            rounded-lg border-slate-300
                            bg-white text-slate-900
                        "
            {...register("message")}
          />

          {/* Character Counter */}
          <div className="flex justify-end">
            <span className="text-xs text-slate-500">
              {message?.length ?? 0}/1000 characters
            </span>
          </div>

          <FieldError
            id={`${formId}-message-error`}
            message={errors.message?.message}
          />

          {/* Privacy Notice */}
          <div
            id={`${formId}-privacy-notice`}
            className="
                            flex items-start gap-2
                            rounded-lg bg-blue-50
                            p-3 text-xs
                            leading-relaxed text-slate-600
                        "
          >
            <Info
              aria-hidden="true"
              className="
                                mt-0.5 size-4
                                shrink-0 text-blue-600
                            "
            />

            <p>{content.privacyNotice}</p>
          </div>
        </div>
      </section>

      {/* ================================= */}
      {/* CONTACT PREFERENCE */}
      {/* ================================= */}

      <fieldset className="space-y-4">
        <legend
          className="
                        w-full border-b border-slate-200
                        pb-3 text-lg font-semibold
                        text-[#102B50]
                    "
        >
          {content.sections.contactPreference}
        </legend>

        <p className="text-sm font-medium text-slate-700">
          Preferred contact method
        </p>

        <div className="flex flex-wrap gap-3">
          {content.contactMethodOptions.map((option) => (
            <label
              key={option.value}
              className="
                                    flex min-h-11 cursor-pointer
                                    items-center gap-2
                                    rounded-lg border
                                    border-slate-200
                                    px-4 py-2.5
                                    text-sm text-slate-700
                                    transition-colors
                                    hover:bg-blue-50
                                    has-checked:border-blue-500
                                    has-checked:bg-blue-50
                                "
            >
              <input
                type="radio"
                value={option.value}
                className="size-4 accent-[#102B50]"
                {...register("preferredContactMethod")}
              />

              {option.label}
            </label>
          ))}
        </div>

        <FieldError message={errors.preferredContactMethod?.message} />
      </fieldset>

      {/* ================================= */}
      {/* PRIVACY ACKNOWLEDGEMENT */}
      {/* ================================= */}

      <div className="space-y-3 border-t border-slate-200 pt-5">
        <div className="flex items-start gap-3">
          <input
            id={`${formId}-privacyConsent`}
            type="checkbox"
            required
            aria-invalid={!!errors.privacyConsent}
            aria-describedby={
              errors.privacyConsent ? `${formId}-consent-error` : undefined
            }
            className="
                            mt-1 size-5 shrink-0
                            cursor-pointer
                            accent-[#102B50]
                        "
            {...register("privacyConsent")}
          />

          <label
            htmlFor={`${formId}-privacyConsent`}
            className="
                            cursor-pointer text-sm
                            leading-relaxed text-slate-600
                        "
          >
            {content.privacyConsent} *
          </label>
        </div>

        <FieldError
          id={`${formId}-consent-error`}
          message={errors.privacyConsent?.message}
        />

        <p className="text-xs text-slate-500">
          Privacy policy and online submissions will be available before launch.
        </p>
      </div>

      {/* ================================= */}
      {/* SUBMIT BUTTON */}
      {/* ================================= */}

      <div className="space-y-4">
        <Button
          type="submit"
          className="
                        h-12 w-full rounded-xl
                        bg-[#102B50]
                        text-base font-semibold
                        text-white
                        hover:bg-[#1D4775]
                    "
        >
          {content.submitLabel}

          <Send aria-hidden="true" className="ml-2 size-4" />
        </Button>

        {submissionNotice && (
          <div
            role="status"
            className="
                            rounded-lg border border-blue-200
                            bg-blue-50 p-4
                            text-sm text-blue-800
                        "
          >
            {submissionNotice}
          </div>
        )}

        <div
          className="
                        flex items-center
                        justify-center gap-2
                        text-xs text-slate-500
                    "
        >
          <LockKeyhole aria-hidden="true" className="size-3.5" />
          Your privacy matters to us.
        </div>
      </div>

      {/* ================================= */}
      {/* BRAND INFORMATION */}
      {/* ================================= */}

      <div className="border-t border-slate-200 pt-5 text-center">
        <p className="text-lg font-semibold text-[#102B50]">
          {contactConfig.brandName}
        </p>

        <p className="mt-1 text-sm italic text-slate-500">
          {contactConfig.tagline}
        </p>
      </div>
    </form>
  );
}
