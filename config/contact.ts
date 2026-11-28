
export const contactConfig = {
    // Brand information
    brandName: "Elora Health",

    tagline: "Safe hands, kind hearts.",

    // Email address
    email: "",

    // Phone information
    phone: {
        display: "",
        international: "",
    },

    // Business address
    address: {
        street: "",
        suburb: "",
        state: "NSW",
        postcode: "",
        country: "Australia",
        formatted: "",
        isPublicLocation: false,
    },

    // Business hours
    businessHours: {
        weekdays: "",
        saturday: "",
        sunday: "",
        publicHolidays: "",
        timezone: "Australia/Sydney",
    },

    // Service coverage
    serviceCoverage: {
        areas: [] as string[],
    },

    // Map configuration
    map: {
        enabled: false,
        directionsUrl: "",
        embedUrl: "",
    },

} as const;
