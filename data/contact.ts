
import type {
    ContactSectionContent,
    EnquirySelectionContent,
    ClientEnquiryFormContent,
    ProfessionalEnquiryFormContent,
} from "@/types/contact";

// ==========================================
// MAIN CONTACT SECTION
// ==========================================

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

// ==========================================
// ENQUIRY TYPE SELECTION
// ==========================================

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

// ==========================================
// CLIENT ENQUIRY FORM
// ==========================================

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

// ==========================================
// PROFESSIONAL ENQUIRY FORM
// ==========================================

export const professionalEnquiryFormContent = {
    sections: {
        professionalDetails: "Your professional details",
        referralDetails: "Referral and support details",
        additionalInformation: "Additional information",
        contactPreference: "Contact preference",
    },

    // Professional role options
    roleOptions: [
        {
            value: "support-coordinator",
            label: "Support Coordinator",
        },
        {
            value: "healthcare-professional",
            label: "Healthcare Professional",
        },
        {
            value: "plan-manager",
            label: "Plan Manager",
        },
        {
            value: "case-manager",
            label: "Case Manager",
        },
        {
            value: "discharge-planner",
            label: "Discharge Planner",
        },
        {
            value: "allied-health-professional",
            label: "Allied Health Professional",
        },
        {
            value: "organisation-representative",
            label: "Organisation Representative",
        },
        {
            value: "other",
            label: "Other",
        },
    ],

    // Purpose of enquiry
    purposeOptions: [
        {
            value: "client-referral",
            label: "Client Referral",
        },
        {
            value: "service-availability",
            label: "Service Availability",
        },
        {
            value: "professional-partnership",
            label: "Professional Partnership",
        },
        {
            value: "general-information",
            label: "General Information",
        },
        {
            value: "other",
            label: "Other",
        },
    ],

    // Reuse existing support categories
    supportCategoryOptions:
        clientEnquiryFormContent.supportCategoryOptions,

    // Reuse existing contact preferences
    contactMethodOptions:
        clientEnquiryFormContent.contactMethodOptions,

    // Privacy information
    privacyNotice:
        "Please do not include client names, medical records, NDIS participant numbers or other confidential information. Contact our team to discuss appropriate referral arrangements.",

    privacyConsent:
        "I agree to being contacted regarding my professional enquiry.",

    privacyPolicyLabel:
        clientEnquiryFormContent.privacyPolicyLabel,

    privacyPolicyHref:
        clientEnquiryFormContent.privacyPolicyHref,

    // Submit button
    submitLabel: "Submit Professional Enquiry",

    submittingLabel: "Submitting enquiry...",
} as const satisfies ProfessionalEnquiryFormContent;
