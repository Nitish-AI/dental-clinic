
import { siteConfig } from "@/config/site";

export const aboutData = {
    // About Section Introduction
    introduction: {
        eyebrow: "ABOUT ELORA",
        title: "Care with purpose. Health with heart.",
        description: `At ${siteConfig.name}, we believe that healthcare begins with understanding people. Every smile tells a story, and every individual deserves care that respects their unique needs, concerns and aspirations.`,
    },

    // Brand Story
    brandStory: {
        eyebrow: "THE STORY BEHIND ELORA",
        title: "The Meaning Behind Our Name",
        paragraphs: [
            "Elora is more than a name. It represents light, harmony and the promise of a healthier tomorrow.",

            "For us, light symbolises hope and confidence, while harmony reflects the connection between health, comfort and wellbeing.",

            "These ideals shape our philosophy — to make every healthcare experience feel more personal, reassuring and meaningful.",
        ],

        image: {
            src: "/images/about/brand-story.webp",
            alt: "A welcoming and thoughtfully designed dental care environment",
        },

        principles: [
            {
                id: "light",
                title: "Light",
                description: "Hope, positivity and confidence.",
            },
            {
                id: "harmony",
                title: "Harmony",
                description: "Balance between health and wellbeing.",
            },
            {
                id: "care",
                title: "Care",
                description: "Compassion and human connection.",
            },
        ],
    },

    // Core Values
    values: {
        eyebrow: "OUR PHILOSOPHY",
        title: "The values that define us.",
        description:
            "The principles that guide our approach to healthcare and shape every patient experience.",

        items: [
            {
                id: "compassion",
                icon: "heart-handshake",
                title: "Compassion",
                description:
                    "We believe every patient deserves to be heard, understood and treated with kindness.",
            },
            {
                id: "integrity",
                icon: "shield-check",
                title: "Integrity",
                description:
                    "We value honesty, transparency and ethical decision-making in every aspect of care.",
            },
            {
                id: "excellence",
                icon: "award",
                title: "Excellence",
                description:
                    "We are committed to continuous improvement and a thoughtful approach to quality healthcare.",
            },
            {
                id: "respect",
                icon: "hand-heart",
                title: "Respect",
                description:
                    "We embrace individuality and respect the diverse needs, backgrounds and preferences of our patients.",
            },
            {
                id: "patient-centred-care",
                icon: "users-round",
                title: "Patient-Centred Care",
                description:
                    "We believe healthcare should be built around people, empowering them to make informed decisions.",
            },
            {
                id: "long-term-wellbeing",
                icon: "heart-pulse",
                title: "Long-Term Wellbeing",
                description:
                    "Our philosophy emphasises prevention, education and lasting oral health.",
            },
        ],
    },

    // Why Choose Elora
    whyChooseUs: {
        eyebrow: "THE ELORA DIFFERENCE",
        title: "Why Choose Elora Health?",
        subtitle: "Because your health deserves a personal approach.",

        description:
            "Our purpose is to help you feel comfortable, informed and confident throughout your healthcare journey.",

        image: {
            src: "/images/about/why-choose-us.webp",
            alt: "A dental professional discussing oral healthcare with a patient",
        },

        benefits: [
            {
                id: "personalised-care",
                title: "Personalised Care",
                description:
                    "Care that respects your individual needs and preferences.",
            },
            {
                id: "patient-comfort",
                title: "Patient Comfort",
                description:
                    "A welcoming and comfort-focused approach to dental care.",
            },
            {
                id: "clear-communication",
                title: "Clear Communication",
                description:
                    "Honest conversations that support informed decision-making.",
            },
            {
                id: "preventive-care",
                title: "Preventive Care",
                description:
                    "An emphasis on prevention and oral health education.",
            },
            {
                id: "patient-relationships",
                title: "Lasting Relationships",
                description:
                    "A commitment to meaningful, long-term patient relationships.",
            },
        ],

        action: siteConfig.actions.appointment,
    },
} as const;
