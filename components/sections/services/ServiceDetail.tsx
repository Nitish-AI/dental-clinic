import Image from "next/image";
import Link from "next/link";

import { ArrowRight, CheckCircle2, HeartHandshake } from "lucide-react";

import { Button } from "@/components/ui/button";

import type { Service, ServiceTheme } from "@/types/service";

interface ServiceDetailProps {
  service: Service;
  theme: ServiceTheme;
}

const themeStyles = {
  blue: {
    eyebrow: "text-blue-700",
    icon: "text-blue-600",
    benefits: "border-blue-100 bg-blue-50",
    benefitsTitle: "text-blue-900",
    button: "bg-blue-700 text-white hover:bg-blue-800",
  },

  green: {
    eyebrow: "text-green-700",
    icon: "text-green-700",
    benefits: "border-green-100 bg-green-50",
    benefitsTitle: "text-green-900",
    button: "bg-green-700 text-white hover:bg-green-800",
  },
} as const;

export default function ServiceDetail({ service, theme }: ServiceDetailProps) {
  const styles = themeStyles[theme];

  const action = service.action ?? {
    label: "Enquire About This Service",
    href: `/contact?service=${encodeURIComponent(service.id)}`,
  };

  return (
    <article
      id={service.id}
      aria-labelledby={`${service.id}-heading`}
      className="
        scroll-mt-48 overflow-hidden
        rounded-2xl border border-slate-200
        bg-white shadow-sm
      "
    >
      {/* Service Image */}
      <div className="group relative aspect-[16/9] overflow-hidden bg-slate-100">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          sizes="(max-width: 1023px) 100vw, 65vw"
          className="
            object-cover
            transition-transform duration-700
            motion-safe:group-hover:scale-105
            motion-reduce:transition-none
          "
        />
      </div>

      {/* Service Content */}
      <div className="p-6 sm:p-8 lg:p-10">
        {/* Service Category */}
        <p
          className={`
            mb-3 text-xs font-semibold
            uppercase tracking-widest
            ${styles.eyebrow}
          `}
        >
          {service.category.toUpperCase()}{" "}
          {service.kind === "enquiry" ? "Enquiries" : "Support Services"}
        </p>

        {/* Service Title */}
        <h3
          id={`${service.id}-heading`}
          className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl"
        >
          {service.title}
        </h3>

        {/* Short Description */}
        <p className="mt-4 text-lg font-medium leading-relaxed text-slate-700">
          {service.shortDescription}
        </p>

        {/* Detailed Description */}
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          {service.description}
        </p>

        {/* Service Highlights */}
        <div className="mt-8">
          <h4 className="text-xl font-semibold text-slate-900">
            {service.kind === "enquiry"
              ? "What you can enquire about"
              : "How we can support you"}
          </h4>

          <ul className="mt-5 space-y-4">
            {service.highlights.map((highlight) => (
              <li key={highlight} className="flex items-start gap-3">
                <CheckCircle2
                  aria-hidden="true"
                  className={`
                    mt-0.5 size-5 shrink-0
                    ${styles.icon}
                  `}
                />

                <span className="leading-relaxed text-slate-600">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Benefits */}
        <div
          className={`
            mt-8 rounded-xl border p-5
            sm:p-6
            ${styles.benefits}
          `}
        >
          <div className="flex items-center gap-3">
            <HeartHandshake
              aria-hidden="true"
              className={`size-6 shrink-0 ${styles.icon}`}
            />

            <h4
              className={`
                text-lg font-semibold
                ${styles.benefitsTitle}
              `}
            >
              {service.kind === "enquiry"
                ? "How we can help"
                : "Potential benefits of this support"}
            </h4>
          </div>

          <ul className="mt-4 space-y-3">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className={`
                    mt-2 size-1.5 shrink-0
                    rounded-full bg-current
                    ${styles.icon}
                  `}
                />

                <span className="text-sm leading-relaxed text-slate-700 sm:text-base">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Enquiry Action */}
        <div className="mt-8">
          <Button
            render={<Link href={action.href} />}
            nativeButton={false}
            size="lg"
            className={`
              group h-auto min-h-12
              w-full whitespace-normal
              rounded-xl px-6 py-3
              text-base font-semibold
              sm:w-auto
              ${styles.button}
            `}
          >
            {action.label}

            <ArrowRight
              aria-hidden="true"
              className="
                ml-2 size-5 shrink-0
                transition-transform duration-300
                motion-safe:group-hover:translate-x-1
                motion-reduce:transition-none
              "
            />
          </Button>
        </div>
      </div>
    </article>
  );
}
