import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { aboutData } from "@/data/about";

export default function WhyChooseUs() {
  const { whyChooseUs } = aboutData;

  return (
    <section
      id="why-choose-us"
      aria-labelledby="why-choose-us-heading"
      className="scroll-mt-36 bg-white py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* Content Column */}
          <div>
            {/* Section Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-blue-600" />

              <span className="text-xs font-semibold tracking-[0.18em] text-blue-700 sm:text-sm">
                {whyChooseUs.eyebrow}
              </span>
            </div>

            {/* Section Heading */}
            <h2
              id="why-choose-us-heading"
              className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
            >
              {whyChooseUs.title}
            </h2>

            {/* Subtitle */}
            <p className="mt-5 text-lg font-medium leading-relaxed text-slate-700 sm:text-xl">
              {whyChooseUs.subtitle}
            </p>

            {/* Description */}
            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              {whyChooseUs.description}
            </p>

            {/* Patient Benefits */}
            <ul className="mt-8 space-y-6 border-t border-slate-200 pt-8">
              {whyChooseUs.benefits.map((benefit) => (
                <li key={benefit.id} className="flex items-start gap-4">
                  {/* Check Icon */}
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700">
                    <Check
                      className="size-5"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Benefit Content */}
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {benefit.title}
                    </h3>

                    <p className="mt-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                      {benefit.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* Appointment Action */}
            <div className="mt-10">
              <Button
                data-appointment-cta="true"
                render={<Link href={whyChooseUs.action.href} />}
                nativeButton={false}
                className="h-14 w-full rounded-full bg-blue-700 px-8 text-base font-semibold text-white transition-colors hover:bg-blue-800 sm:w-auto"
              >
                {whyChooseUs.action.label}

                <ArrowRight className="ml-2 size-5" aria-hidden="true" />
              </Button>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src={whyChooseUs.image.src}
              alt={whyChooseUs.image.alt}
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
