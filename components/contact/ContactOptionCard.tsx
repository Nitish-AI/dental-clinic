"use client";

import {
  ArrowRight,
  Phone,
  Mail,
  MessageSquare,
  PhoneCall,
} from "lucide-react";

import { contactConfig } from "@/config/contact";

import type { ContactOption, ContactOptionId } from "@/types/contact";

// ==========================================
// CONTACT CARD ICONS
// ==========================================

const contactIcons = {
  call: Phone,
  email: Mail,
  enquiry: MessageSquare,
  callback: PhoneCall,
};

// ==========================================
// CONTACT CARD THEME
// ==========================================

export type ContactCardTheme = "light" | "dark";

const themeStyles = {
  dark: {
    card: `
            border-sky-300/60
            bg-[#193C60]/90
            backdrop-blur-md
            hover:border-sky-200
            hover:bg-[#244B73]
            hover:shadow-lg
            hover:shadow-sky-400/10
            focus-visible:outline-sky-300
        `,

    iconBox: "bg-[#356595] text-sky-200",

    title: "text-white",

    description: "text-slate-200",

    action: "text-sky-300",
  },

  light: {
    card: `
            border-slate-200
            bg-white
            shadow-sm
            hover:border-blue-300
            hover:bg-blue-50/40
            hover:shadow-lg
            hover:shadow-blue-900/5
            focus-visible:outline-blue-500
        `,

    iconBox: "bg-blue-50 text-[#102B50]",

    title: "text-[#102B50]",

    description: "text-slate-600",

    action: "text-blue-700",
  },
};

// ==========================================
// CONTACT CARD PROPS
// ==========================================

interface ContactOptionCardProps {
  option: ContactOption;

  onSelect: (id: ContactOptionId) => void;

  theme?: ContactCardTheme;
}

// ==========================================
// CONTACT OPTION CARD
// ==========================================

export default function ContactOptionCard({
  option,
  onSelect,
  theme = "dark",
}: ContactOptionCardProps) {
  const Icon = contactIcons[option.id];

  const styles = themeStyles[theme];

  // ======================================
  // CONTACT LINKS
  // ======================================

  const href =
    option.id === "call" && contactConfig.phone.international
      ? `tel:${contactConfig.phone.international}`
      : option.id === "email" && contactConfig.email
        ? `mailto:${contactConfig.email}`
        : undefined;

  const isUnavailable =
    (option.id === "call" || option.id === "email") && !href;

  // ======================================
  // SHARED CARD STYLES
  // ======================================

  const cardClassName = `
        group
        relative
        flex
        h-full
        w-full
        items-start
        gap-4
        rounded-2xl
        border
        p-5
        text-left
        transition-all
        duration-300
        motion-safe:hover:-translate-y-1
        motion-reduce:transition-none
        focus-visible:outline-2
        focus-visible:outline-offset-4
        disabled:cursor-not-allowed
        disabled:opacity-60
        disabled:transform-none
        sm:p-6
        ${styles.card}
    `;

  // ======================================
  // SHARED CARD CONTENT
  // ======================================

  const cardContent = (
    <>
      {/* Contact icon */}
      <span
        className={`
                    flex
                    size-14
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    xl:size-16
                    ${styles.iconBox}
                `}
      >
        <Icon aria-hidden="true" className="size-7 xl:size-8" />
      </span>

      {/* Contact information */}
      <span className="flex min-w-0 flex-1 flex-col self-stretch">
        <span
          className={`
                        block
                        text-lg
                        font-semibold
                        sm:text-xl
                        ${styles.title}
                    `}
        >
          {option.title}
        </span>

        <span
          className={`
                        mt-3
                        block
                        flex-1
                        text-sm
                        leading-relaxed
                        sm:text-base
                        ${styles.description}
                    `}
        >
          {option.description}
        </span>

        <span
          className={`
                        mt-5
                        flex
                        flex-wrap
                        items-center
                        gap-2
                        text-sm
                        font-semibold
                        ${styles.action}
                    `}
        >
          {isUnavailable ? "Coming soon" : option.actionLabel}

          {!isUnavailable && (
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform motion-safe:group-hover:translate-x-1 motion-reduce:transition-none"
            />
          )}
        </span>
      </span>
    </>
  );

  // ======================================
  // PHONE AND EMAIL LINKS
  // ======================================

  if (href) {
    return (
      <a href={href} className={cardClassName}>
        {cardContent}
      </a>
    );
  }

  // ======================================
  // ENQUIRY AND CALLBACK BUTTONS
  // ======================================

  return (
    <button
      type="button"
      disabled={isUnavailable}
      onClick={() => onSelect(option.id)}
      className={cardClassName}
    >
      {cardContent}
    </button>
  );
}
