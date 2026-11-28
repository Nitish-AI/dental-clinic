"use client";

import { MapPin, MapPinned, ArrowRight, Info } from "lucide-react";
import ScrollToButton from "@/components/common/ScrollToButton";
import { Button } from "@/components/ui/button";
import { contactConfig } from "@/config/contact";
import { contactPageContent } from "@/data/contact";

// ==========================================
// CONTACT SERVICE COVERAGE
// ==========================================

export default function ContactServiceCoverage() {
  const content = contactPageContent.serviceCoverage;

  const serviceAreas = contactConfig.serviceCoverage.areas;

  const hasServiceAreas = serviceAreas.length > 0;
  const handleEnquiryClick = () => {
    const target = document.getElementById("contact-options");

    if (!target) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    target.scrollIntoView({
      behavior: prefersReducedMotion ? "instant" : "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="service-coverage"
      aria-labelledby="service-coverage-heading"
      className="scroll-mt-28 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Section icon */}
          <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-blue-50 text-[#102B50] sm:size-20">
            <MapPin aria-hidden="true" className="size-8 sm:size-10" />
          </div>

          {/* Eyebrow */}
          <div className="mb-4 flex items-center justify-center gap-3">
            <span aria-hidden="true" className="h-0.5 w-8 bg-blue-600" />

            <span className="text-xs font-semibold tracking-[0.2em] text-blue-700 sm:text-sm">
              {content.eyebrow}
            </span>

            <span aria-hidden="true" className="h-0.5 w-8 bg-blue-600" />
          </div>

          {/* Section title */}
          <h2
            id="service-coverage-heading"
            className="text-3xl font-semibold tracking-tight text-[#102B50] sm:text-4xl lg:text-5xl"
          >
            {content.title}
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {content.description}
          </p>
        </div>

        {/* Confirmed service locations */}
        {hasServiceAreas && (
          <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceAreas.map((area) => (
              <li
                key={area}
                className="flex items-center gap-4 rounded-2xl border border-blue-100 bg-blue-50/50 p-5"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-blue-700">
                  <MapPin aria-hidden="true" className="size-5" />
                </span>

                <span className="font-medium text-[#102B50]">{area}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Service availability enquiry */}
        <div className="mx-auto mt-10 max-w-5xl rounded-3xl border border-blue-100 bg-linear-to-br from-blue-50 to-slate-50 p-6 sm:p-10">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white text-[#102B50] shadow-sm">
                <MapPinned aria-hidden="true" className="size-7" />
              </div>

              <div>
                <h3 className="text-xl font-semibold text-[#102B50] sm:text-2xl">
                  Find support in your area
                </h3>

                <p className="mt-2 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
                  Contact our team to discuss service availability in your
                  suburb.
                </p>
              </div>
            </div>

            {/* Enquiry action */}
            <ScrollToButton
              targetId={content.action.href.replace(/^#/, "")}
              className="group min-h-12 w-full shrink-0 rounded-xl bg-[#102B50] px-6 py-3 text-sm font-medium text-white hover:bg-[#1D4270] sm:w-auto"
            >
              {content.action.label}

              <ArrowRight
                aria-hidden="true"
                className="ml-2 size-4 transition-transform motion-safe:group-hover:translate-x-1 motion-reduce:transition-none"
              />
            </ScrollToButton>
          </div>
        </div>

        {/* Service availability notice */}
        <div className="mx-auto mt-6 flex max-w-3xl items-start justify-center gap-2">
          <Info
            aria-hidden="true"
            className="mt-0.5 size-4 shrink-0 text-slate-500"
          />

          <p className="text-sm leading-relaxed text-slate-500">
            {content.notice}
          </p>
        </div>
      </div>
    </section>
  );
}
