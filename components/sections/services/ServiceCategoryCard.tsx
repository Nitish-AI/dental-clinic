import Image from "next/image";
import Link from "next/link";

import { ArrowRight, HeartHandshake, ShieldCheck } from "lucide-react";

import type { ServiceCategory } from "@/types/service";

interface ServiceCategoryCardProps {
  category: ServiceCategory;
}

const categoryIcons = {
  ndis: HeartHandshake,
  dva: ShieldCheck,
} as const;

const themeStyles = {
  blue: {
    icon: "bg-blue-50 text-blue-600",
    link: "text-blue-700",
    border: "hover:border-blue-200",
  },

  green: {
    icon: "bg-green-50 text-green-700",
    link: "text-green-700",
    border: "hover:border-green-200",
  },
} as const;

export default function ServiceCategoryCard({
  category,
}: ServiceCategoryCardProps) {
  const Icon = categoryIcons[category.id];
  const theme = themeStyles[category.theme];

  return (
    <Link
      href={category.action.href}
      className={`
        group flex h-full flex-col overflow-hidden
        rounded-2xl border border-slate-200
        bg-white shadow-sm
        transition-all duration-300
        hover:shadow-lg
        motion-safe:hover:-translate-y-1
        motion-reduce:transition-none
        focus-visible:outline-2
        focus-visible:outline-offset-4
        focus-visible:outline-blue-600
        ${theme.border}
      `}
    >
      {/* Cover Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <Image
          src={category.image.src}
          alt={category.image.alt}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1600px) 50vw, 720px"
          className="
            object-cover
            transition-transform duration-700
            motion-safe:group-hover:scale-105
            motion-reduce:transition-none
          "
        />
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-4 sm:p-6 lg:p-8">
        {/* Category Icon */}
        <div
          className={`
            mb-4 flex size-11 items-center
            justify-center rounded-xl
            sm:size-14
            ${theme.icon}
          `}
        >
          <Icon className="size-5 sm:size-7" aria-hidden="true" />
        </div>

        {/* Category Title */}
        <h3 className="text-lg font-semibold tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
          {category.title}
        </h3>

        {/* Category Description */}
        <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
          {category.shortDescription}
        </p>

        {/* Explore Action */}
        <div
          className={`
            mt-auto flex items-center gap-2
            pt-5 text-sm font-semibold
            sm:text-base
            ${theme.link}
          `}
        >
          <span>{category.action.label}</span>

          <ArrowRight
            className="
              size-4 shrink-0
              transition-transform duration-300
              motion-safe:group-hover:translate-x-1
              motion-reduce:transition-none
              sm:size-5
            "
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  );
}
