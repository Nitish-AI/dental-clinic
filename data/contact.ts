
import type {
    ContactSectionContent,
    EnquirySelectionContent,
    ClientEnquiryFormContent,
} from "@/types/contact";

// Main Contact Section
export const contactSectionContent = {
    eyebrow: "WE'RE HERE TO HELP",

    title: "Let's find the right support for you.",

    description:
        "Choose the way you'd like to connect with us.",

    image: {
        src: "/images/contact/receptionist.webp",
        alt: "Friendly healthcare receptionist at a welcoming reception desk",
    },

    options: [
        {
            id: "call",
            title: "Call Us",
            description: "Speak with our team directly.",
            actionLabel: "Call our team",
        },
        {
            id: "email",
            title: "Email Us",
            description:
                "Send us your question or query anytime.",
            actionLabel: "Send an email",
        },
        {
            id: "enquiry",
            title: "Send an Enquiry",
            description:
                "Tell us what support you are looking for.",
            actionLabel: "Make an enquiry",
        },
        {
            id: "callback",
            title: "Request a Callback",
            description:
                "Ask us to contact you at a convenient time.",
            actionLabel: "Request a callback",
        },
    ],
} as const satisfies ContactSectionContent;


// Enquiry Type Selection
export const enquirySelectionContent = {
    title: "How can we help you?",

    description:
        "Choose the enquiry option that best suits your needs.",

    options: [
        {
            id: "client",

            title: "For Clients and Families",

            description:
                "Looking for support for yourself, a family member or someone you care for?",

            actionLabel: "Client Enquiry",

            image: {
                src: "/images/contact/client-enquiry.avif",
                alt: "Healthcare support worker speaking with a client and family",
            },
        },
        {
            id: "professional",

            title: "For Professionals",

            description:
                "Are you a support coordinator, healthcare professional or organisation looking to make a referral?",

            actionLabel: "Professional Enquiry",

            image: {
                src: "/images/contact/professional-enquiry.webp",
                alt: "Healthcare professionals discussing support and referral options",
            },
        },
    ],
} as const satisfies EnquirySelectionContent;


// Client Enquiry Form
export const clientEnquiryFormContent = {
    sections: {
        contactDetails: "Your contact details",
        supportNeeds: "Your support needs",
        contactPreference: "Contact preference",
    },

    // Who is the enquiry for?
    relationshipOptions: [
        {
            value: "self",
            label: "Myself",
        },
        {
            value: "family",
            label: "A family member",
        },
        {
            value: "carer",
            label: "Someone I care for",
        },
        {
            value: "other",
            label: "Someone else",
        },
    ],

    // Support categories
    supportCategoryOptions: [
        {
            value: "ndis",
            label: "NDIS Services",
        },
        {
            value: "dva",
            label: "DVA Services",
        },
        {
            value: "general",
            label: "General Enquiry",
        },
        {
            value: "unsure",
            label: "Not sure — I need guidance",
        },
    ],

    // Preferred contact method
    contactMethodOptions: [
        {
            value: "phone",
            label: "Phone",
        },
        {
            value: "email",
            label: "Email",
        },
        {
            value: "either",
            label: "Either",
        },
    ],

    // Privacy information
    privacyNotice:
        "Please do not include sensitive medical information or confidential personal records.",

    privacyConsent:
        "I agree to being contacted regarding my enquiry.",

    privacyPolicyLabel: "Privacy Policy",

    privacyPolicyHref: "/privacy-policy",

    // Submit button
    submitLabel: "Submit Enquiry",

    submittingLabel: "Submitting enquiry...",
} as const satisfies ClientEnquiryFormContent;
