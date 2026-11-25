"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { HeartHandshake, ShieldCheck } from "lucide-react";

import { serviceCategories } from "@/data/services";
import type { ServiceCategoryId } from "@/types/service";

const categoryIcons = {
  ndis: HeartHandshake,
  dva: ShieldCheck,
} as const;

const themeStyles = {
  blue: {
    active: "bg-blue-50 text-blue-700",
    inactive: "text-slate-600 hover:bg-blue-50",
    icon: "text-blue-600",
    indicator: "bg-blue-600",
  },

  green: {
    active: "bg-green-50 text-green-700",
    inactive: "text-slate-600 hover:bg-green-50",
    icon: "text-green-700",
    indicator: "bg-green-700",
  },
} as const;

export default function ServicesNavigation() {
  const [activeCategory, setActiveCategory] =
    useState<ServiceCategoryId>("ndis");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const category = serviceCategories.find(
            (item) => item.slug === entry.target.id,
          );

          if (category) {
            setActiveCategory(category.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-25% 0px -60% 0px",
        threshold: 0,
      },
    );

    serviceCategories.forEach((category) => {
      const section = document.getElementById(category.slug);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Service categories"
      className="
        sticky top-20 z-30
        border-y border-slate-200
        bg-white/95 shadow-sm backdrop-blur-md
      "
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 py-3 sm:gap-6">
          {serviceCategories.map((category) => {
            const Icon = categoryIcons[category.id];
            const theme = themeStyles[category.theme];

            const isActive = activeCategory === category.id;

            return (
              <Link
                key={category.id}
                href={`#${category.slug}`}
                aria-current={isActive ? "location" : undefined}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  relative flex flex-col items-center
                  justify-center gap-2 rounded-xl
                  px-3 py-3 text-center
                  transition-colors duration-300
                  sm:px-6 sm:py-4
                  focus-visible:outline-2
                  focus-visible:outline-offset-2
                  focus-visible:outline-blue-600
                  ${isActive ? theme.active : theme.inactive}
                `}
              >
                {/* Category Title */}
                <div className="flex items-center justify-center gap-2 sm:gap-3">
                  <Icon
                    aria-hidden="true"
                    className={`
                      size-5 shrink-0 sm:size-6
                      ${theme.icon}
                    `}
                  />

                  <span className="text-sm font-semibold sm:text-lg">
                    {category.title}
                  </span>
                </div>

                {/* Category Information */}
                <span className="text-xs text-slate-600 sm:text-sm">
                  {category.id === "ndis"
                    ? `${category.services.length} support services`
                    : `${category.services.length} support and enquiry options`}
                </span>

                {/* Active Indicator */}
                <span
                  aria-hidden="true"
                  className={`
                    absolute inset-x-4 bottom-0
                    h-0.5 rounded-full
                    transition-colors
                    ${isActive ? theme.indicator : "bg-transparent"}
                  `}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
