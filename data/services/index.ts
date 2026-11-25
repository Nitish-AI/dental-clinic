
import type { ServicesPageContent } from "@/types/service";

import { ndisCategory } from "./ndis";
import { dvaCategory } from "./dva";

export const servicesContent = {
    homepage: {
        eyebrow: "OUR SERVICES",

        title: "Your goals. Your choices. Your journey.",

        description:
            "Explore the support options available through Elora Health. We believe care should be personal, respectful and centred around what matters to you.",

        action: {
            label: "Explore Our Services",
            href: "/services",
        },
    },

    hero: {
        eyebrow: "PERSONALISED CARE AND SUPPORT",

        title: "Our Services",

        subtitle: "Your goals. Your choices. Your journey.",

        description:
            "Discover personalised NDIS and DVA support options designed around individual needs, independence, dignity and wellbeing.",

        image: {
            src: "/images/services/services-hero.jpg",
            alt: "Healthcare support worker spending time with a participant in a welcoming environment",
        },
    },

    categories: [
        ndisCategory,
        dvaCategory,
    ],
} as const satisfies ServicesPageContent;

export const serviceCategories = servicesContent.categories;

export const allServices = serviceCategories.flatMap(
    (category) => [...category.services]
);
