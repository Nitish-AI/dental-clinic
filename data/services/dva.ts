
import type { ServiceCategory } from "@/types/service";

export const dvaCategory = {
    id: "dva",
    slug: "dva-services",

    title: "DVA Services",
    fullName: "Department of Veterans' Affairs",
    eyebrow: "SUPPORTING THOSE WHO SERVED",

    shortDescription:
        "Care and support options for veterans, their families and carers.",

    description:
        "At Elora Health, we recognise the importance of respectful and personalised support for Australia's veteran community. Our approach places dignity, independence, comfort and individual wellbeing at the centre of care.",

    theme: "green",

    image: {
        src: "/images/services/dva-cover.jpg",
        alt: "Healthcare support worker speaking with an older veteran at home",
    },

    action: {
        label: "Explore DVA",
        href: "/services#dva-services",
    },

    services: [
        // 01. In-Home Support
        {
            id: "dva-in-home-support",
            slug: "in-home-support",
            category: "dva",
            kind: "support",

            title: "In-Home Support",

            shortDescription:
                "Practical assistance to support independence and comfort at home.",

            description:
                "Remaining in a familiar home environment can be important to maintaining independence and wellbeing. In-home support focuses on assisting veterans with everyday activities according to their individual needs and eligible support arrangements.",

            image: {
                src: "/images/services/dva/in-home-support.jpg",
                alt: "Support worker assisting an older person with everyday household activities",
            },

            highlights: [
                "Domestic assistance",
                "Personal care assistance",
                "Support with everyday routines",
                "Assistance with household activities",
                "Support with maintaining independence at home",
            ],

            benefits: [
                "Greater comfort at home",
                "Support with everyday independence",
                "Assistance aligned with individual needs",
            ],
        },

        // 02. Nursing and Community Care
        {
            id: "dva-nursing-care",
            slug: "nursing-and-community-care",
            category: "dva",
            kind: "support",

            title: "Nursing and Community Care",

            shortDescription:
                "Personalised nursing and clinical support based on assessed needs.",

            description:
                "Nursing and community care focuses on supporting eligible veterans with assessed healthcare needs in their home or community environment. Clinical care must be delivered by appropriately qualified professionals in accordance with relevant care arrangements.",

            image: {
                src: "/images/services/dva/nursing-care.jpg",
                alt: "Community nurse providing healthcare support during a home visit",
            },

            highlights: [
                "Community nursing support",
                "Medication management support",
                "Wound care where appropriate",
                "Personal care based on assessed needs",
                "Individualised clinical care planning",
            ],

            benefits: [
                "Continuity of appropriate care",
                "Support with individual health needs",
                "Greater comfort in familiar surroundings",
            ],
        },

        // 03. Community Support
        {
            id: "dva-community-support",
            slug: "community-support",
            category: "dva",
            kind: "support",

            title: "Community Support",

            shortDescription:
                "Supporting meaningful connections and community wellbeing.",

            description:
                "Maintaining social connections and participating in community life can contribute to overall wellbeing. Community support focuses on helping veterans remain connected, explore meaningful activities and access appropriate support options.",

            image: {
                src: "/images/services/dva/community-support.jpg",
                alt: "Older adults enjoying a social gathering in their community",
            },

            highlights: [
                "Social connection and companionship",
                "Community participation",
                "Support accessing community resources",
                "Assistance exploring meaningful activities",
                "Connections with appropriate support services",
            ],

            benefits: [
                "Greater opportunities for social connection",
                "Increased community involvement",
                "Support for emotional and social wellbeing",
            ],
        },

        // 04. Care and Support Enquiries
        {
            id: "dva-care-enquiries",
            slug: "care-and-support-enquiries",
            category: "dva",
            kind: "enquiry",

            title: "Care and Support Enquiries",

            shortDescription:
                "Helping veterans and families understand their care options.",

            description:
                "Understanding available support options can be an important first step towards accessing appropriate care. Veterans, families and carers can enquire about service availability, referral pathways and the requirements for accessing relevant support.",

            image: {
                src: "/images/services/dva/care-enquiries.jpg",
                alt: "Healthcare adviser discussing support options with an older person and their family",
            },

            highlights: [
                "General service enquiries",
                "Information about available support options",
                "Referral pathway information",
                "Guidance on relevant eligibility requirements",
                "Assistance understanding the next steps",
            ],

            benefits: [
                "Greater understanding of available options",
                "More informed care decisions",
                "Clearer pathways to appropriate support",
            ],

            action: {
                label: "Contact Our Team",
                href: "/contact",
            },
        },
    ],
} as const satisfies ServiceCategory;
