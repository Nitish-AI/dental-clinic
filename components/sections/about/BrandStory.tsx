import Image from "next/image";
import { Sun, Flower2, HeartHandshake, type LucideIcon } from "lucide-react";

import { aboutData } from "@/data/about";

const principleIcons: Record<
  (typeof aboutData.brandStory.principles)[number]["id"],
  LucideIcon
> = {
  light: Sun,
  harmony: Flower2,
  care: HeartHandshake,
};

export default function BrandStory() {
  const { introduction, brandStory } = aboutData;

  return (
    <section
      aria-labelledby="about-heading"
      className="bg-white py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
        {/* About Introduction */}
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-20">
          <span className="text-xs font-semibold tracking-[0.2em] text-blue-700 sm:text-sm">
            {introduction.eyebrow}
          </span>

          <h2
            id="about-heading"
            className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            {introduction.title}
          </h2>

          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            {introduction.description}
          </p>
        </div>

        {/* Brand Story Layout */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* Brand Story Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src={brandStory.image.src}
              alt={brandStory.image.alt}
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Brand Story Content */}
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-10 bg-blue-600" />

              <span className="text-xs font-semibold tracking-[0.18em] text-blue-700 sm:text-sm">
                {brandStory.eyebrow}
              </span>
            </div>

            <h3 className="text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              {brandStory.title}
            </h3>

            {/* Brand Story Paragraphs */}
            <div className="mt-6 space-y-4">
              {brandStory.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-base leading-relaxed text-slate-600 sm:text-lg"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Brand Principles */}
            <ul className="mt-8 space-y-6 border-t border-slate-200 pt-8">
              {brandStory.principles.map((principle) => {
                const Icon = principleIcons[principle.id];

                return (
                  <li key={principle.id} className="flex items-center gap-4">
                    {/* Principle Icon */}
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-700 sm:size-14">
                      <Icon className="size-6" aria-hidden="true" />
                    </div>

                    {/* Principle Content */}
                    <div>
                      <h4 className="text-lg font-semibold text-slate-900">
                        {principle.title}
                      </h4>

                      <p className="mt-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                        {principle.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
