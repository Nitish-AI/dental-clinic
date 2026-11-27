"use client";

import { useId, useState } from "react";

import { useForm, useWatch } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { Send, Info, LockKeyhole } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { professionalEnquiryFormContent } from "@/data/contact";
import { serviceCategories } from "@/data/services";
import { contactConfig } from "@/config/contact";

import {
  professionalEnquirySchema,
  professionalEnquiryDefaultValues,
  type ProfessionalEnquiryFormInput,
  type ProfessionalEnquiryFormValues,
} from "@/lib/validations/professional-enquiry";

const selectClassName = `
    h-11 w-full rounded-lg
    border border-slate-300
    bg-white px-3
    text-sm text-slate-900
    outline-none
    transition-colors
    focus:border-emerald-500
    focus:ring-2 focus:ring-emerald-100
    disabled:cursor-not-allowed
    disabled:bg-slate-100
    disabled:text-slate-500
`;

const inputClassName = `
    h-11 rounded-lg
    border-slate-300
    bg-white text-slate-900
`;

const labelClassName = `
    text-sm font-medium text-slate-700
`;

const sectionHeadingClassName = `
    border-b border-slate-200
    pb-3 text-lg font-semibold
    text-[#102B50]
`;

function FieldError({ message, id }: { message?: string; id?: string }) {
  if (!message) return null;

  return (
    <p id={id} role="alert" className="mt-1 text-xs text-red-600">
      {message}
    </p>
  );
}

export default function ProfessionalEnquiryForm() {
  const formId = useId();

  const [submissionNotice, setSubmissionNotice] = useState("");

  const {
    register,
    handleSubmit,
    control,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<
    ProfessionalEnquiryFormInput,
    unknown,
    ProfessionalEnquiryFormValues
  >({
    resolver: zodResolver(professionalEnquirySchema),
    defaultValues: professionalEnquiryDefaultValues,
    mode: "onTouched",
  });

  const content = professionalEnquiryFormContent;

  // Watch support category
  const supportCategory = useWatch({
    control,
    name: "supportCategory",
  });

  // Watch message for character counter
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

  // Temporary submission handler
  const onSubmit = () => {
    setSubmissionNotice(
      "Form validation is complete. Online professional enquiry submissions are not available yet.",
    );
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      onChange={() => setSubmissionNotice("")}
      className="space-y-7"
    >
      {/* ================================= */}
      {/* PROFESSIONAL DETAILS */}
      {/* ================================= */}

      <section className="space-y-5">
        <h3 className={sectionHeadingClassName}>
          {content.sections.professionalDetails}
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

          {/* Organisation Name */}
          <div className="space-y-2">
            <Label
              htmlFor={`${formId}-organisationName`}
              className={labelClassName}
            >
              Organisation name *
            </Label>

            <Input
              id={`${formId}-organisationName`}
              placeholder="Organisation name"
              autoComplete="organization"
              maxLength={150}
              required
              aria-invalid={!!errors.organisationName}
              aria-describedby={
                errors.organisationName
                  ? `${formId}-organisationName-error`
                  : undefined
              }
              className={inputClassName}
              {...register("organisationName")}
            />

            <FieldError
              id={`${formId}-organisationName-error`}
              message={errors.organisationName?.message}
            />
          </div>

          {/* Professional Role */}
          <div className="space-y-2">
            <Label
              htmlFor={`${formId}-professionalRole`}
              className={labelClassName}
            >
              Professional role *
            </Label>

            <select
              id={`${formId}-professionalRole`}
              className={selectClassName}
              required
              aria-invalid={!!errors.professionalRole}
              aria-describedby={
                errors.professionalRole
                  ? `${formId}-professionalRole-error`
                  : undefined
              }
              {...register("professionalRole")}
            >
              <option value="" disabled>
                Select your role
              </option>

              {content.roleOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <FieldError
              id={`${formId}-professionalRole-error`}
              message={errors.professionalRole?.message}
            />
          </div>

          {/* Work Email */}
          <div className="space-y-2">
            <Label htmlFor={`${formId}-email`} className={labelClassName}>
              Work email *
            </Label>

            <Input
              id={`${formId}-email`}
              type="email"
              placeholder="you@organisation.com.au"
              autoComplete="email"
              maxLength={254}
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

          {/* Contact Number */}
          <div className="space-y-2">
            <Label htmlFor={`${formId}-phone`} className={labelClassName}>
              Contact number *
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
      {/* REFERRAL AND SUPPORT DETAILS */}
      {/* ================================= */}

      <section className="space-y-5">
        <h3 className={sectionHeadingClassName}>
          {content.sections.referralDetails}
        </h3>

        {/* Enquiry Purpose */}
        <div className="space-y-2">
          <Label
            htmlFor={`${formId}-enquiryPurpose`}
            className={labelClassName}
          >
            Purpose of enquiry *
          </Label>

          <select
            id={`${formId}-enquiryPurpose`}
            className={selectClassName}
            required
            aria-invalid={!!errors.enquiryPurpose}
            aria-describedby={
              errors.enquiryPurpose
                ? `${formId}-enquiryPurpose-error`
                : undefined
            }
            {...register("enquiryPurpose")}
          >
            <option value="" disabled>
              Select enquiry purpose
            </option>

            {content.purposeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>

          <FieldError
            id={`${formId}-enquiryPurpose-error`}
            message={errors.enquiryPurpose?.message}
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
                errors.supportCategory
                  ? `${formId}-supportCategory-error`
                  : undefined
              }
              {...categoryRegistration}
              onChange={(event) => {
                setValue("service", "", {
                  shouldDirty: true,
                });

                clearErrors("service");

                categoryRegistration.onChange(event);
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
              id={`${formId}-supportCategory-error`}
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
                  : "Select category first"}
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

          {/* Service Suburb */}
          <div className="space-y-2">
            <Label htmlFor={`${formId}-suburb`} className={labelClassName}>
              Service suburb (optional)
            </Label>

            <Input
              id={`${formId}-suburb`}
              placeholder="Enter suburb"
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
      </section>

      {/* ================================= */}
      {/* ADDITIONAL INFORMATION */}
      {/* ================================= */}

      <section className="space-y-5">
        <h3 className={sectionHeadingClassName}>
          {content.sections.additionalInformation}
        </h3>

        <div className="space-y-2">
          <Label htmlFor={`${formId}-message`} className={labelClassName}>
            Tell us about your enquiry *
          </Label>

          <Textarea
            id={`${formId}-message`}
            placeholder="Please provide a brief overview of your referral or professional enquiry..."
            maxLength={1000}
            required
            aria-invalid={!!errors.message}
            aria-describedby={[
              `${formId}-privacy-notice`,
              errors.message ? `${formId}-message-error` : "",
            ]
              .filter(Boolean)
              .join(" ")}
            className="
                            min-h-32 resize-y
                            rounded-lg
                            border-slate-300
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
                            rounded-lg bg-emerald-50
                            p-3 text-xs
                            leading-relaxed
                            text-slate-600
                        "
          >
            <Info
              aria-hidden="true"
              className="
                                mt-0.5 size-4
                                shrink-0 text-emerald-600
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
          className={`
                        w-full
                        ${sectionHeadingClassName}
                    `}
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
                                hover:bg-emerald-50
                                has-checked:border-emerald-500
                                has-checked:bg-emerald-50
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
              errors.privacyConsent
                ? `${formId}-privacyConsent-error`
                : undefined
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
                            leading-relaxed
                            text-slate-600
                        "
          >
            {content.privacyConsent} *
          </label>
        </div>

        <FieldError
          id={`${formId}-privacyConsent-error`}
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
                        text-sm font-semibold
                        text-white
                        hover:bg-[#1D4775]
                        sm:text-base
                    "
        >
          {content.submitLabel}

          <Send aria-hidden="true" className="ml-2 size-4" />
        </Button>

        {submissionNotice && (
          <div
            role="status"
            className="
                            rounded-lg
                            border border-emerald-200
                            bg-emerald-50
                            p-4 text-sm
                            text-emerald-800
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
