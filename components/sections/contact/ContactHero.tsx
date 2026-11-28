import Image from "next/image";
import Link from "next/link";

import { ArrowRight, ChevronRight } from "lucide-react";

import ScrollToButton from "@/components/common/ScrollToButton";
import { contactPageContent } from "@/data/contact";

// ==========================================
// CONTACT HERO SECTION
// ==========================================

export default function ContactHero() {
  const hero = contactPageContent.hero;

  return (
    <section
      aria-labelledby="contact-hero-heading"
      className="relative isolate overflow-hidden bg-linear-to-br from-blue-50 via-white to-slate-50"
    >
      <div className="mx-auto max-w-[1600px] px-6 pb-14 pt-6 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24 lg:pt-8 xl:px-24">
        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-10 flex flex-wrap items-center gap-2 text-sm sm:mb-14"
        >
          <Link
            href="/"
            className="text-slate-600 transition-colors hover:text-blue-700"
          >
            Home
          </Link>

          <ChevronRight aria-hidden="true" className="size-4 text-slate-400" />

          <span aria-current="page" className="font-medium text-[#102B50]">
            Contact Us
          </span>
        </nav>

        {/* Hero layout */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* Hero content */}
          <div className="max-w-2xl">
            {/* Eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span aria-hidden="true" className="h-0.5 w-8 bg-blue-600" />

              <span className="text-xs font-semibold tracking-[0.2em] text-blue-700 sm:text-sm">
                {hero.eyebrow}
              </span>
            </div>

            {/* Main heading */}
            <h1
              id="contact-hero-heading"
              className="text-4xl font-semibold leading-[1.12] tracking-tight text-[#102B50] sm:text-5xl xl:text-6xl 2xl:text-7xl"
            >
              {hero.title}
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg sm:leading-relaxed">
              {hero.description}
            </p>

            {/* Primary action */}

            {/* Primary action */}
            <div className="mt-8 sm:mt-10">
              <ScrollToButton
                targetId={hero.primaryAction.href.replace(/^#/, "")}
                className="group min-h-12 rounded-xl bg-[#102B50] px-7 py-3 text-base font-medium text-white hover:bg-[#1D4270]"
              >
                {hero.primaryAction.label}

                <ArrowRight
                  aria-hidden="true"
                  className="ml-2 size-5 transition-transform motion-safe:group-hover:translate-x-1 motion-reduce:transition-none"
                />
              </ScrollToButton>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative">
            {/* Decorative background */}
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 -z-10 hidden h-3/4 w-3/4 rounded-[2rem] bg-blue-100/70 sm:block"
            />

            {/* Image container */}
            <div className="relative aspect-4/3 overflow-hidden rounded-2xl bg-slate-100 shadow-xl shadow-blue-950/10 sm:rounded-3xl">
              <Image
                src={hero.image.src}
                alt={hero.image.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                loading="eager"
                fetchPriority="high"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
