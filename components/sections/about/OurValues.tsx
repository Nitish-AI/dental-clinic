import {
  HeartHandshake,
  ShieldCheck,
  Award,
  HandHeart,
  UsersRound,
  HeartPulse,
  type LucideIcon,
} from "lucide-react";

import { aboutData } from "@/data/about";

// Map content identifiers to Lucide icons.
const valueIcons: Record<
  (typeof aboutData.values.items)[number]["icon"],
  LucideIcon
> = {
  "heart-handshake": HeartHandshake,
  "shield-check": ShieldCheck,
  award: Award,
  "hand-heart": HandHeart,
  "users-round": UsersRound,
  "heart-pulse": HeartPulse,
};

export default function OurValues() {
  const { values } = aboutData;

  return (
    <section
      id="our-values"
      aria-labelledby="values-heading"
      className="scroll-mt-36 bg-slate-50 py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
        {/* Section Introduction */}
        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-16">
          <span className="text-xs font-semibold tracking-[0.2em] text-blue-700 sm:text-sm">
            {values.eyebrow}
          </span>

          <h2
            id="values-heading"
            className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            {values.title}
          </h2>

          <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
            {values.description}
          </p>
        </div>

        {/* Values Grid */}
        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {values.items.map((value) => {
            const Icon = valueIcons[value.icon];

            return (
              <li
                key={value.id}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 motion-safe:transition-all motion-safe:duration-300 hover:border-blue-200 hover:shadow-md sm:p-8"
              >
                {/* Value Icon */}
                <div className="flex size-14 items-center justify-center rounded-xl bg-blue-50 text-blue-700 motion-safe:transition-colors motion-safe:duration-300 group-hover:bg-blue-700 group-hover:text-white">
                  <Icon
                    className="size-7"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </div>

                {/* Value Title */}
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-slate-900">
                  {value.title}
                </h3>

                {/* Value Description */}
                <p className="mt-3 text-base leading-relaxed text-slate-600">
                  {value.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
