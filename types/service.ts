
export type ServiceCategoryId = "ndis" | "dva";

export type ServiceTheme = "blue" | "green";

export type ServiceKind = "support" | "enquiry";

export interface ServiceImage {
    src: string;
    alt: string;
}

export interface ServiceAction {
    label: string;
    href: string;
}

// Individual service
export interface Service {
    id: string;
    slug: string;
    category: ServiceCategoryId;
    kind: ServiceKind;

    title: string;
    shortDescription: string;
    description: string;

    image: ServiceImage;

    highlights: readonly string[];
    benefits: readonly string[];

    action?: ServiceAction;
}

// Main service category (NDIS or DVA)
export interface ServiceCategory {
    id: ServiceCategoryId;
    slug: string;

    title: string;
    fullName: string;
    eyebrow: string;

    shortDescription: string;
    description: string;

    theme: ServiceTheme;
    image: ServiceImage;

    action: ServiceAction;

    services: readonly Service[];
}

// Complete Services page content
export interface ServicesPageContent {
    homepage: {
        eyebrow: string;
        title: string;
        description: string;
        action: ServiceAction;
    };

    hero: {
        eyebrow: string;
        title: string;
        subtitle: string;
        description: string;
        image: ServiceImage;
    };

    categories: readonly ServiceCategory[];
}
