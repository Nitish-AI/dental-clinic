import type { Metadata } from "next";

import ServicesHero from "@/components/sections/services/ServicesHero";
import ServicesNavigation from "@/components/sections/services/ServicesNavigation";
import ServiceCategorySection from "@/components/sections/services/ServiceCategorySection";
import { serviceCategories } from "@/data/services";
import ServicesEnquiry from "@/components/sections/services/ServicesEnquiry";

export const metadata: Metadata = {
  title: "Our Services | Elora Healthcare Australia",
  description:
    "Explore NDIS and DVA care and support options at Elora Healthcare Australia, centred around independence, dignity and individual wellbeing.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      {/* Services Explorer Boundary */}
      <div className="relative">
        <ServicesNavigation />

        {serviceCategories.map((category) => (
          <ServiceCategorySection key={category.id} category={category} />
        ))}
      </div>

      {/* Independent Contact Section */}
      <ServicesEnquiry />
    </>
  );
}
