
import type { ServiceCategory } from "@/types/service";

export const ndisCategory = {
    id: "ndis",
    slug: "ndis-services",

    title: "NDIS Services",
    fullName: "National Disability Insurance Scheme",
    eyebrow: "EMPOWERING YOUR INDEPENDENCE",

    shortDescription:
        "Support for participants, families and carers.",

    description:
        "At Elora Health, our approach to disability support is centred around your goals, choices and individual needs. We believe everyone deserves the opportunity to live with dignity, independence and confidence.",

    theme: "blue",

    image: {
        src: "/images/services/ndis-cover.jpg",
        alt: "Disability support worker spending time with a participant",
    },

    action: {
        label: "Explore NDIS",
        href: "/services#ndis-services",
    },

    services: [
        // 01. Daily Living Support
        {
            id: "ndis-daily-living",
            slug: "daily-living-support",
            category: "ndis",
            kind: "support",

            title: "Daily Living Support",

            shortDescription:
                "Personalised assistance with everyday activities.",

            description:
                "Everyday tasks should not stand in the way of living a fulfilling life. Daily living support focuses on helping participants manage everyday activities, develop practical skills and maintain greater independence in a comfortable and familiar environment.",

            image: {
                src: "/images/services/ndis/daily-living.jpg",
                alt: "Support worker assisting a participant with meal preparation",
            },

            highlights: [
                "Meal planning and preparation",
                "Household tasks and organisation",
                "Shopping and everyday errands",
                "Assistance with daily routines",
                "Development of practical living skills",
            ],

            benefits: [
                "Greater everyday independence",
                "Increased confidence",
                "Support with maintaining daily routines",
            ],
        },

        // 02. Personal Care
        {
            id: "ndis-personal-care",
            slug: "personal-care",
            category: "ndis",
            kind: "support",

            title: "Personal Care",

            shortDescription:
                "Respectful support that prioritises dignity and comfort.",

            description:
                "Personal care is deeply individual. Our proposed approach focuses on providing respectful assistance that recognises each participant's preferences, privacy, cultural background and personal routines.",

            image: {
                src: "/images/services/ndis/personal-care.jpg",
                alt: "Support worker assisting a participant with dressing",
            },

            highlights: [
                "Personal hygiene assistance",
                "Dressing and grooming",
                "Mobility assistance",
                "Toileting support",
                "Assistance with personal routines",
            ],

            benefits: [
                "Maintaining personal dignity",
                "Greater comfort and confidence",
                "Support tailored to individual preferences",
            ],
        },

        // 03. Community Participation
        {
            id: "ndis-community-participation",
            slug: "community-participation",
            category: "ndis",
            kind: "support",

            title: "Community Participation",

            shortDescription:
                "Meaningful connections and opportunities to participate.",

            description:
                "Being part of a community can contribute to a sense of belonging and wellbeing. Community participation support helps participants explore their interests, develop social connections and engage in activities that matter to them.",

            image: {
                src: "/images/services/ndis/community-participation.jpg",
                alt: "Participants enjoying an inclusive outdoor community activity",
            },

            highlights: [
                "Social and recreational activities",
                "Community outings",
                "Participation in local events",
                "Social and communication skills",
                "Exploring personal interests and hobbies",
            ],

            benefits: [
                "Stronger social connections",
                "Increased community involvement",
                "Opportunities for personal development",
            ],
        },

        // 04. Support Coordination
        {
            id: "ndis-support-coordination",
            slug: "support-coordination",
            category: "ndis",
            kind: "support",

            title: "Support Coordination",

            shortDescription:
                "Helping you understand and navigate your NDIS supports.",

            description:
                "Navigating an NDIS plan can sometimes feel complex. Support coordination assists participants in understanding their funded supports, connecting with suitable providers and developing the confidence to make informed decisions about their care.",

            image: {
                src: "/images/services/ndis/support-coordination.jpg",
                alt: "Support coordinator discussing an NDIS plan with a participant",
            },

            highlights: [
                "Understanding NDIS plan supports",
                "Connecting with suitable service providers",
                "Coordinating available supports",
                "Building decision-making skills",
                "Preparing for plan reassessments",
            ],

            benefits: [
                "Greater understanding of available supports",
                "More informed decision-making",
                "Increased choice and control",
            ],
        },

        // 05. Supported Independent Living
        {
            id: "ndis-sil",
            slug: "supported-independent-living",
            category: "ndis",
            kind: "support",

            title: "Supported Independent Living (SIL)",

            shortDescription:
                "Support to live as independently as possible.",

            description:
                "Supported Independent Living provides assistance or supervision with everyday tasks for eligible participants with significant support needs. It focuses on developing independence while providing appropriate assistance within the home.",

            image: {
                src: "/images/services/ndis/supported-independent-living.jpg",
                alt: "Participant and support worker in an accessible home environment",
            },

            highlights: [
                "Assistance with daily household activities",
                "Personal care and daily routines",
                "Development of independent living skills",
                "Support and supervision based on assessed needs",
                "Assistance with shared living arrangements",
            ],

            benefits: [
                "Greater independence at home",
                "Development of everyday living skills",
                "Support aligned with individual needs",
            ],
        },

        // 06. Nursing and Clinical Care
        {
            id: "ndis-nursing-care",
            slug: "nursing-and-clinical-care",
            category: "ndis",
            kind: "support",

            title: "Nursing and Clinical Care",

            shortDescription:
                "Clinical support tailored to disability-related health needs.",

            description:
                "Nursing and clinical care focuses on appropriate disability-related health supports based on individual assessed needs. Clinical services must be delivered by suitably qualified professionals within their scope of practice.",

            image: {
                src: "/images/services/ndis/nursing-care.jpg",
                alt: "Community nurse checking a participant's blood pressure",
            },

            highlights: [
                "Disability-related nursing support",
                "Medication management support",
                "Wound care where appropriate",
                "Disability-related health monitoring",
                "Individualised clinical support planning",
            ],

            benefits: [
                "Support with disability-related health needs",
                "Continuity of appropriate care",
                "Greater confidence in managing daily health needs",
            ],
        },

        // 07. Plan Management
        {
            id: "ndis-plan-management",
            slug: "plan-management",
            category: "ndis",
            kind: "support",

            title: "Plan Management",

            shortDescription:
                "Helping you manage the financial aspects of your NDIS plan.",

            description:
                "Plan management assists participants with the financial administration of their NDIS funding. It helps participants keep track of expenditure, manage provider invoices and better understand their available budgets.",

            image: {
                src: "/images/services/ndis/plan-management.jpg",
                alt: "Plan manager reviewing financial documents with a participant",
            },

            highlights: [
                "Processing eligible provider invoices",
                "Monitoring NDIS plan expenditure",
                "Budget tracking",
                "Financial reporting",
                "Assistance understanding available funding",
            ],

            benefits: [
                "Reduced financial administration",
                "Greater visibility of plan expenditure",
                "Support with informed budgeting decisions",
            ],
        },
    ],
} as const satisfies ServiceCategory;
