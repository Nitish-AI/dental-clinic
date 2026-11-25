"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

import { ChevronRight, HeartHandshake, ShieldCheck } from "lucide-react";

import type { ServiceCategory } from "@/types/service";

import ServiceDetail from "./ServiceDetail";

interface ServiceCategorySectionProps {
  category: ServiceCategory;
}

const categoryIcons = {
  ndis: HeartHandshake,
  dva: ShieldCheck,
} as const;

const themeStyles = {
  blue: {
    section: "bg-slate-50",
    eyebrow: "text-blue-700",
    icon: "bg-blue-100 text-blue-700",
    active: "border-blue-200 bg-blue-50 text-blue-700",
    inactive:
      "border-transparent text-slate-600 hover:bg-slate-50 hover:text-blue-700",
    indicator: "text-blue-600",
  },

  green: {
    section: "bg-white",
    eyebrow: "text-green-700",
    icon: "bg-green-100 text-green-700",
    active: "border-green-200 bg-green-50 text-green-700",
    inactive:
      "border-transparent text-slate-600 hover:bg-slate-50 hover:text-green-700",
    indicator: "text-green-700",
  },
} as const;

export default function ServiceCategorySection({
  category,
}: ServiceCategorySectionProps) {
  const [selectedServiceId, setSelectedServiceId] = useState(
    category.services[0]?.id ?? "",
  );

  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const styles = themeStyles[category.theme];
  const Icon = categoryIcons[category.id];

  // Handle direct links to individual services
  useEffect(() => {
    function syncServiceFromHash() {
      const hash = window.location.hash.slice(1);

      const matchedService = category.services.find(
        (service) => service.id === hash,
      );

      if (matchedService) {
        setSelectedServiceId(matchedService.id);

        requestAnimationFrame(() => {
          document
            .getElementById(category.slug)
            ?.scrollIntoView({ block: "start" });
        });
      }
    }

    syncServiceFromHash();

    window.addEventListener("hashchange", syncServiceFromHash);

    return () => {
      window.removeEventListener("hashchange", syncServiceFromHash);
    };
  }, [category.services, category.slug]);

  // Update selected service and URL
  function selectService(serviceId: string) {
    setSelectedServiceId(serviceId);

    window.history.replaceState(window.history.state, "", `#${serviceId}`);
  }

  // Accessible keyboard navigation
  function handleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number,
  ) {
    const total = category.services.length;

    let nextIndex = currentIndex;

    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        nextIndex = (currentIndex + 1) % total;
        break;

      case "ArrowUp":
      case "ArrowLeft":
        nextIndex = (currentIndex - 1 + total) % total;
        break;

      case "Home":
        nextIndex = 0;
        break;

      case "End":
        nextIndex = total - 1;
        break;

      default:
        return;
    }

    event.preventDefault();

    selectService(category.services[nextIndex].id);

    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <section
      id={category.slug}
      aria-labelledby={`${category.id}-category-heading`}
      className={`
        scroll-mt-52 py-16
        sm:scroll-mt-56 sm:py-20 lg:py-24
        ${styles.section}
      `}
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
        {/* Category Introduction */}
        <div className="mb-10 max-w-3xl lg:mb-14">
          <div
            className={`
              mb-6 flex size-16 items-center
              justify-center rounded-2xl
              ${styles.icon}
            `}
          >
            <Icon aria-hidden="true" className="size-8" />
          </div>

          <p
            className={`
              mb-4 text-sm font-semibold
              tracking-widest
              ${styles.eyebrow}
            `}
          >
            {category.eyebrow}
          </p>

          <h2
            id={`${category.id}-category-heading`}
            className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            {category.title}
          </h2>

          <p className="mt-3 text-lg font-medium text-slate-700 sm:text-xl">
            {category.fullName}
          </p>

          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            {category.description}
          </p>
        </div>

        {/* Service Explorer Layout */}
        <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] lg:gap-10">
          {/* Service Navigation */}
          <aside className="lg:sticky lg:top-56">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
              <p
                id={`${category.id}-navigation-heading`}
                className="mb-4 px-2 text-xs font-semibold tracking-widest text-slate-500"
              >
                EXPLORE OUR SUPPORT
              </p>

              <div
                role="tablist"
                aria-labelledby={`${category.id}-navigation-heading`}
                aria-orientation="vertical"
                className="space-y-2"
              >
                {category.services.map((service, index) => {
                  const isSelected = selectedServiceId === service.id;

                  return (
                    <button
                      key={service.id}
                      ref={(element) => {
                        tabRefs.current[index] = element;
                      }}
                      type="button"
                      role="tab"
                      id={`${service.id}-tab`}
                      aria-selected={isSelected}
                      aria-controls={`${service.id}-panel`}
                      tabIndex={isSelected ? 0 : -1}
                      onClick={() => selectService(service.id)}
                      onKeyDown={(event) => handleKeyDown(event, index)}
                      className={`
                          group flex w-full cursor-pointer
                          items-center justify-between
                          gap-3 rounded-xl border
                          px-4 py-4 text-left
                          text-sm font-medium
                          transition-colors duration-200
                          sm:text-base
                          focus-visible:outline-2
                          focus-visible:outline-offset-2
                          focus-visible:outline-blue-600
                          ${isSelected ? styles.active : styles.inactive}
                        `}
                    >
                      <span>{service.title}</span>

                      <ChevronRight
                        aria-hidden="true"
                        className={`
                            size-4 shrink-0
                            ${isSelected ? styles.indicator : "text-slate-400"}
                          `}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Individual Service Panels */}
          <div className="min-w-0">
            {category.services.map((service) => (
              <div
                key={service.id}
                id={`${service.id}-panel`}
                role="tabpanel"
                aria-labelledby={`${service.id}-tab`}
                hidden={selectedServiceId !== service.id}
                tabIndex={0}
                className="rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
              >
                <ServiceDetail service={service} theme={category.theme} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
