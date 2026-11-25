import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { servicesContent } from "@/data/services";

import ServiceCategoryCard from "./ServiceCategoryCard";

export default function ServicesSection() {
  const { homepage, categories } = servicesContent;

  return (
    <section
      id="our-services"
      aria-labelledby="services-heading"
      className="scroll-mt-32 bg-slate-50 py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
        {/* Section Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center lg:mb-14">
          <p className="mb-4 text-sm font-semibold tracking-widest text-blue-600">
            {homepage.eyebrow}
          </p>

          <h2
            id="services-heading"
            className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            {homepage.title}
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            {homepage.description}
          </p>
        </div>

        {/* Service Category Cards */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {categories.map((category) => (
            <ServiceCategoryCard key={category.id} category={category} />
          ))}
        </div>

        {/* Explore All Services */}
        <div className="mt-10 flex justify-center lg:mt-12">
          <Button
            render={<Link href={homepage.action.href} />}
            nativeButton={false}
            size="lg"
            className="group h-12 rounded-xl bg-blue-700 px-7 text-base font-semibold text-white hover:bg-blue-800 sm:h-14"
          >
            {homepage.action.label}

            <ArrowRight
              aria-hidden="true"
              className="ml-2 size-5 transition-transform duration-300 motion-safe:group-hover:translate-x-1 motion-reduce:transition-none"
            />
          </Button>
        </div>
      </div>
    </section>
  );
}
