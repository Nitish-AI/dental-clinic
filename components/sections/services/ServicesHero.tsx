import Image from "next/image";
import Link from "next/link";

import { ArrowDown, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { servicesContent } from "@/data/services";

export default function ServicesHero() {
  const { hero, categories } = servicesContent;

  return (
    <section
      aria-labelledby="services-hero-heading"
      className="relative overflow-hidden bg-linear-to-br from-blue-50 via-white to-slate-50"
    >
      <div className="mx-auto max-w-[1600px] px-6 pb-16 pt-6 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24 xl:px-24">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-10 lg:mb-14">
          <ol className="flex items-center gap-2 text-sm">
            <li>
              <Link
                href="/"
                className="text-slate-600 transition-colors hover:text-blue-700"
              >
                Home
              </Link>
            </li>

            <li aria-hidden="true">
              <ChevronRight className="size-4 text-slate-400" />
            </li>

            <li aria-current="page" className="font-medium text-blue-700">
              Our Services
            </li>
          </ol>
        </nav>

        {/* Hero Layout */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Hero Content */}
          <div>
            <p className="mb-5 text-sm font-semibold tracking-widest text-blue-600">
              {hero.eyebrow}
            </p>

            <h1
              id="services-hero-heading"
              className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl xl:text-7xl"
            >
              {hero.title}
            </h1>

            <p className="mt-5 text-xl font-medium leading-snug text-slate-700 sm:text-2xl lg:text-3xl">
              {hero.subtitle}
            </p>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {hero.description}
            </p>

            {/* Category Actions */}
            <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  render={<Link href={`#${category.slug}`} />}
                  nativeButton={false}
                  size="lg"
                  variant={category.theme === "blue" ? "default" : "outline"}
                  className={`
                    group h-12 rounded-xl px-6
                    text-sm font-semibold sm:text-base
                    ${
                      category.theme === "blue"
                        ? "bg-blue-700 text-white hover:bg-blue-800"
                        : "border-green-200 bg-white text-green-700 hover:bg-green-50 hover:text-green-800"
                    }
                  `}
                >
                  {category.action.label}

                  <ArrowDown
                    aria-hidden="true"
                    className="
                      ml-2 size-4 transition-transform
                      duration-300
                      motion-safe:group-hover:translate-y-1
                      motion-reduce:transition-none
                    "
                  />
                </Button>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100 shadow-xl">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              fill
              loading="eager"
              fetchPriority="high"
              sizes="(max-width: 1023px) 100vw, (max-width: 1600px) 50vw, 720px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
