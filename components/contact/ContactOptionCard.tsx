"use client";

import {
  ArrowRight,
  Phone,
  Mail,
  MessageSquare,
  PhoneCall,
} from "lucide-react";

import type { ContactOption, ContactOptionId } from "@/types/contact";

import { contactConfig } from "@/config/contact";

const contactIcons = {
  call: Phone,
  email: Mail,
  enquiry: MessageSquare,
  callback: PhoneCall,
} as const;

interface ContactOptionCardProps {
  option: ContactOption;
  onSelect: (id: ContactOptionId) => void;
}

export default function ContactOptionCard({
  option,
  onSelect,
}: ContactOptionCardProps) {
  const Icon = contactIcons[option.id];

  const href =
    option.id === "call"
      ? contactConfig.phone.international
        ? `tel:${contactConfig.phone.international}`
        : undefined
      : option.id === "email"
        ? contactConfig.email
          ? `mailto:${contactConfig.email}`
          : undefined
        : undefined;

  const isUnavailable =
    (option.id === "call" || option.id === "email") && !href;

  const cardClassName = `
    group relative flex h-full w-full
    items-start gap-4
    rounded-2xl
    border border-sky-300/60
    bg-[#193C60]/90
    p-5 text-left
    backdrop-blur-md
    transition-all duration-300
    hover:border-sky-200
    hover:bg-[#244B73]
    hover:shadow-lg
    hover:shadow-sky-400/10
    motion-safe:hover:-translate-y-1
    motion-reduce:transition-none
    focus-visible:outline-2
    focus-visible:outline-offset-4
    focus-visible:outline-sky-300
    disabled:cursor-not-allowed
    disabled:opacity-60
    disabled:transform-none
    sm:p-6
  `;

  const content = (
    <>
      {/* Circular Icon */}
      <div
        className="
          flex size-14 shrink-0
          items-center justify-center
          rounded-full bg-[#356595]
          text-sky-200
          transition-colors duration-300
          group-hover:bg-[#4279AD]
          motion-reduce:transition-none
          xl:size-16
        "
      >
        <Icon
          aria-hidden="true"
          className="size-7 xl:size-8"
          strokeWidth={1.8}
        />
      </div>

      {/* Card Content */}
      <div className="flex min-w-0 flex-1 flex-col self-stretch">
        <h3
          className="
            text-lg font-semibold
            leading-tight text-white
            sm:text-xl
          "
        >
          {option.title}
        </h3>

        <p
          className="
            mt-3 flex-1 text-sm
            leading-relaxed text-slate-200
            sm:text-base
          "
        >
          {option.description}
        </p>

        {/* Action */}
        <div
          className="
            mt-5 flex flex-wrap
            items-center gap-2
            text-sm font-semibold
            text-sky-300
          "
        >
          <span>{isUnavailable ? "Coming soon" : option.actionLabel}</span>

          {!isUnavailable && (
            <ArrowRight
              aria-hidden="true"
              className="
                size-5 shrink-0
                transition-transform duration-300
                motion-safe:group-hover:translate-x-1
                motion-reduce:transition-none
              "
            />
          )}
        </div>
      </div>
    </>
  );

  // Call and email links
  if (href) {
    return (
      <a href={href} className={cardClassName}>
        {content}
      </a>
    );
  }

  // Enquiry and callback actions
  return (
    <button
      type="button"
      disabled={isUnavailable}
      onClick={() => onSelect(option.id)}
      className={cardClassName}
    >
      {content}
    </button>
  );
}
