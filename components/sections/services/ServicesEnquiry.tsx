"use client";

import { useState } from "react";
import { Mail, Phone } from "lucide-react";

import ContactOptionCard from "@/components/contact/ContactOptionCard";
import ContactReceptionImage from "@/components/contact/ContactReceptionImage";

import { contactConfig } from "@/config/contact";
import { contactSectionContent } from "@/data/contact";

import type { ContactOptionId } from "@/types/contact";

import EnquiryDialog from "@/components/contact/EnquiryDialog";
import CallbackDialog from "@/components/contact/CallbackDialog";

import ContactActions from "@/components/contact/ContactActions";

export default function ServicesEnquiry() {
  const { eyebrow, title, description, options } = contactSectionContent;

  const [activeDialog, setActiveDialog] = useState<
    "enquiry" | "callback" | null
  >(null);

  const handleContactSelect = (id: ContactOptionId) => {
    if (id === "enquiry" || id === "callback") {
      setActiveDialog(id);
    }
  };

  return (
    <section
      id="services-enquiry"
      aria-labelledby="services-enquiry-heading"
      className="
        relative isolate overflow-hidden
        scroll-mt-52 bg-[#102B50]
        pb-12 pt-12 text-white
        sm:pb-16 sm:pt-16
        lg:pb-20 lg:pt-20
      "
    >
      {/* Section Heading */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <span aria-hidden="true" className="h-px w-8 bg-sky-300/70 sm:w-20" />

          <p className="text-xs font-semibold tracking-widest text-sky-300 sm:text-base">
            {eyebrow}
          </p>

          <span aria-hidden="true" className="h-px w-8 bg-sky-300/70 sm:w-20" />
        </div>

        {/* Main Heading */}
        <h2
          id="services-enquiry-heading"
          className="
            mt-5 text-3xl font-semibold
            leading-tight tracking-tight
            text-white sm:text-4xl
            lg:text-5xl xl:text-6xl
          "
        >
          {title}
        </h2>

        {/* Description */}
        <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg lg:text-xl">
          {description}
        </p>
      </div>

      {/* Receptionist Photograph */}
      <div className="relative mx-auto mt-2 max-w-[1920px]">
        <ContactReceptionImage />
      </div>

      {/* Contact Options */}
      <div
        className="
          relative z-20 mx-auto
          -mt-10 max-w-[1600px]
          px-5 sm:-mt-16 sm:px-8
          lg:-mt-24 lg:px-12
        "
      >
        <div
          className="
            grid grid-cols-1 gap-4
            sm:grid-cols-2
            lg:gap-5
            xl:grid-cols-4
          "
        >
          {options.map((option) => (
            <ContactOptionCard
              key={option.id}
              option={option}
              onSelect={handleContactSelect}
            />
          ))}
        </div>

        {/* Business Contact Information */}
        <div
          className="
            mt-10 border-t border-sky-300/50
            pt-8 text-center
            sm:mt-12 sm:pt-10
            lg:mt-14
          "
        >
          {/* Business Name */}
          <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {contactConfig.brandName}
          </h3>

          {/* Email and Phone */}
          <div
            className="
              mt-6 flex flex-col
              items-center justify-center
              gap-4 text-slate-100
              sm:flex-row sm:gap-8
            "
          >
            {/* Email Address */}
            {contactConfig.email && (
              <a
                href={`mailto:${contactConfig.email}`}
                className="
                  flex items-center gap-3
                  text-sm transition-colors
                  hover:text-sky-300
                  sm:text-lg
                "
              >
                <Mail
                  aria-hidden="true"
                  className="size-6 shrink-0"
                  strokeWidth={1.8}
                />

                <span className="break-all">{contactConfig.email}</span>
              </a>
            )}

            {/* Vertical Divider */}
            {contactConfig.email && contactConfig.phone.international && (
              <span
                aria-hidden="true"
                className="hidden h-7 w-px bg-sky-200/50 sm:block"
              />
            )}

            {/* Phone Number */}
            {contactConfig.phone.international && (
              <a
                href={`tel:${contactConfig.phone.international}`}
                className="
                  flex items-center gap-3
                  text-sm transition-colors
                  hover:text-sky-300
                  sm:text-lg
                "
              >
                <Phone
                  aria-hidden="true"
                  className="size-6 shrink-0"
                  strokeWidth={1.8}
                />

                <span>
                  {contactConfig.phone.display ||
                    contactConfig.phone.international}
                </span>
              </a>
            )}
          </div>

          {/* Brand Tagline */}
          <div className="mt-6 flex items-center justify-center gap-4 sm:gap-6">
            <span
              aria-hidden="true"
              className="h-px w-8 bg-sky-300/60 sm:w-24"
            />

            <p className="text-lg font-medium italic text-sky-300 sm:text-2xl lg:text-3xl">
              {contactConfig.tagline}
            </p>

            <span
              aria-hidden="true"
              className="h-px w-8 bg-sky-300/60 sm:w-24"
            />
          </div>
        </div>
      </div>

      {/* Enquiry Selection Dialog */}
      <EnquiryDialog
        open={activeDialog === "enquiry"}
        onOpenChange={(open) => setActiveDialog(open ? "enquiry" : null)}
      />

      {/* Callback Dialog */}
      <CallbackDialog
        open={activeDialog === "callback"}
        onOpenChange={(open) => setActiveDialog(open ? "callback" : null)}
      />
    </section>
  );
}
