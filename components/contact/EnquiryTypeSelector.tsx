"use client";

import Image from "next/image";

import { ArrowRight, Users, BriefcaseMedical } from "lucide-react";

import { Button } from "@/components/ui/button";
import { enquirySelectionContent } from "@/data/contact";
import { contactConfig } from "@/config/contact";

import type { EnquiryType } from "@/types/contact";

interface EnquiryTypeSelectorProps {
  onSelect: (type: EnquiryType) => void;
}

const enquiryStyles = {
  client: {
    icon: Users,
    card: "border-blue-200 bg-blue-50/60 hover:border-blue-400",
    iconBox: "bg-blue-100 text-blue-700",
  },

  professional: {
    icon: BriefcaseMedical,
    card: "border-emerald-200 bg-emerald-50/60 hover:border-emerald-400",
    iconBox: "bg-emerald-100 text-emerald-700",
  },
} as const;

export default function EnquiryTypeSelector({
  onSelect,
}: EnquiryTypeSelectorProps) {
  return (
    <div>
      {/* Enquiry Options */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {enquirySelectionContent.options.map((option) => {
          const styles = enquiryStyles[option.id];
          const Icon = styles.icon;

          return (
            <article
              key={option.id}
              className={`
                                group flex h-full flex-col
                                overflow-hidden rounded-2xl
                                border
                                transition-all duration-300
                                hover:shadow-lg
                                motion-reduce:transition-none
                                ${styles.card}
                            `}
            >
              {/* Enquiry Photograph */}
              <div
                className="
                                    relative aspect-[16/9]
                                    w-full overflow-hidden
                                    bg-slate-100
                                "
              >
                <Image
                  src={option.image.src}
                  alt={option.image.alt}
                  fill
                  sizes="(max-width: 640px) 90vw, 400px"
                  className="
                                        object-cover
                                        transition-transform duration-500
                                        motion-safe:group-hover:scale-105
                                        motion-reduce:transition-none
                                    "
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                {/* Category Icon */}
                <div
                  className={`
                                        mb-4 flex size-12
                                        items-center justify-center
                                        rounded-xl
                                        ${styles.iconBox}
                                    `}
                >
                  <Icon
                    aria-hidden="true"
                    className="size-6"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Card Title */}
                <h3
                  className="
                                        text-xl font-semibold
                                        leading-tight
                                        text-[#102B50]
                                        sm:text-2xl
                                    "
                >
                  {option.title}
                </h3>

                {/* Card Description */}
                <p
                  className="
                                        mt-3 flex-1 text-sm
                                        leading-relaxed
                                        text-slate-600
                                        sm:text-base
                                    "
                >
                  {option.description}
                </p>

                {/* Enquiry Button */}
                <Button
                  type="button"
                  onClick={() => onSelect(option.id)}
                  className="
                                        group/button mt-6
                                        h-auto min-h-12 w-full
                                        whitespace-normal
                                        rounded-xl
                                        bg-[#102B50]
                                        px-4 py-3
                                        font-semibold text-white
                                        hover:bg-[#1D4775]
                                    "
                >
                  {option.actionLabel}

                  <ArrowRight
                    aria-hidden="true"
                    className="
                                            ml-2 size-4 shrink-0
                                            transition-transform
                                            duration-300
                                            motion-safe:group-hover/button:translate-x-1
                                            motion-reduce:transition-none
                                        "
                  />
                </Button>
              </div>
            </article>
          );
        })}
      </div>

      {/* Brand Information */}
      <div
        className="
                    mt-6 border-t border-slate-200
                    pt-5 text-center
                "
      >
        <p className="text-lg font-semibold text-[#102B50]">
          {contactConfig.brandName}
        </p>

        <p className="mt-1 text-sm italic text-slate-500">
          {contactConfig.tagline}
        </p>
      </div>
    </div>
  );
}
