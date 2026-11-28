
import type {
    ContactSectionContent,
    EnquirySelectionContent,
    ClientEnquiryFormContent,
    ProfessionalEnquiryFormContent,
    CallbackFormContent,
    ContactPageContent,
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


// ==========================================
// CALLBACK FORM CONTENT
// ==========================================

export const callbackFormContent = {
    title: "Request a Callback",

    description:
        "Leave your details and let us know a convenient time to contact you.",

    // Form section headings
    sections: {
        contactDetails: "Your contact details",
        callbackPreference: "Preferred callback time",
        additionalInformation: "Additional information",
    },

    // Reuse existing support categories
    supportCategoryOptions:
        clientEnquiryFormContent.supportCategoryOptions,

    // Preferred callback day
    preferredDayOptions: [
        {
            value: "any-weekday",
            label: "Any weekday",
        },
        {
            value: "monday",
            label: "Monday",
        },
        {
            value: "tuesday",
            label: "Tuesday",
        },
        {
            value: "wednesday",
            label: "Wednesday",
        },
        {
            value: "thursday",
            label: "Thursday",
        },
        {
            value: "friday",
            label: "Friday",
        },
    ],

    // Preferred callback time
    preferredTimeOptions: [
        {
            value: "any-time",
            label: "Any time",
        },
        {
            value: "morning",
            label: "Morning",
        },
        {
            value: "afternoon",
            label: "Afternoon",
        },
    ],

    // Australian timezone information
    timezoneNotice:
        "All preferred times are based on Sydney local time. Callback times are subject to availability.",

    // Reuse existing privacy notice
    privacyNotice:
        clientEnquiryFormContent.privacyNotice,

    privacyConsent:
        "I agree to being contacted regarding my callback request.",

    privacyPolicyLabel:
        clientEnquiryFormContent.privacyPolicyLabel,

    privacyPolicyHref:
        clientEnquiryFormContent.privacyPolicyHref,

    // Submit button
    submitLabel: "Request a Callback",

    submittingLabel: "Submitting request...",
} as const satisfies CallbackFormContent;

// ==========================================
// CONTACT PAGE CONTENT
// ==========================================

export const contactPageContent = {

    // ======================================
    // HERO SECTION
    // ======================================

    hero: {
        eyebrow: "WE'RE HERE FOR YOU",

        title: "Let's start a conversation.",

        description:
            "Whether you're looking for support, making a referral or simply have a question, we're here to listen and help you explore the right options.",

        image: {
            src: "/images/contact/contact-hero.png",
            alt: "Friendly healthcare receptionist in a welcoming reception area",
        },

        primaryAction: {
            label: "Get in touch",
            href: "#contact-options",
        },
    },

    // ======================================
    // CONTACT OPTIONS
    // ======================================

    options: {
        eyebrow: "LET'S CONNECT",

        title: "How can we help you?",

        description:
            "Choose the way you'd like to connect with us. We're here to make getting in touch as simple and comfortable as possible.",

        options: contactSectionContent.options,
    },

    // ======================================
    // CONTACT INFORMATION
    // ======================================

    information: {
        eyebrow: "OUR CONTACT DETAILS",

        title: "Connect with our team.",

        description:
            "Have a question about our services or need guidance on your next steps? Get in touch with our team to discuss your individual needs.",

        image: {
            src: "/images/contact/contact-team.webp",
            alt: "Healthcare support professional having a conversation with an older client",
        },

        labels: {
            location: "Our location",
            businessHours: "Business hours",
            phone: "Phone",
            email: "Email",
        },
    },

    // ======================================
    // SERVICE COVERAGE
    // ======================================

    serviceCoverage: {
        eyebrow: "SUPPORT IN YOUR COMMUNITY",

        title: "Care that connects with your community.",

        description:
            "We understand the importance of accessing support in familiar and comfortable surroundings. Contact our team to explore support options in your area.",

        areas: [],

        notice:
            "Service availability may vary depending on your location, individual needs and available resources.",

        action: {
            label: "Enquire About Your Area",
            href: "#contact-options",
        },
    },

    // ======================================
    // FREQUENTLY ASKED QUESTIONS
    // ======================================

    faq: {
        eyebrow: "COMMON QUESTIONS",

        title: "Frequently asked questions.",

        description:
            "Find helpful information about contacting our team, making enquiries and exploring support options.",

        items: [
            {
                id: "make-enquiry",

                question: "How do I make an enquiry?",

                answer:
                    "You can select Send an Enquiry and choose the option that best suits your needs. Clients, families and professionals have dedicated enquiry forms.",
            },
            {
                id: "enquire-for-someone",

                question:
                    "Can I enquire on behalf of someone else?",

                answer:
                    "Yes. You can make an initial enquiry on behalf of a family member or someone you care for. Please ensure you have appropriate permission before sharing their personal information.",
            },
            {
                id: "professional-referral",

                question:
                    "How can professionals make a referral?",

                answer:
                    "Support coordinators, healthcare professionals and organisations can use the Professional Enquiry option to discuss referral opportunities and available support.",
            },
            {
                id: "request-callback",

                question: "Can I request a callback?",

                answer:
                    "The Request a Callback option allows you to provide your contact details and preferred day and time. Callback availability will depend on our team's operating hours and availability.",
            },
            {
                id: "service-availability",

                question:
                    "How do I know if support is available in my area?",

                answer:
                    "Contact our team with your suburb or postcode and the type of support you are looking for. Our team can discuss service availability and possible next steps.",
            },
            {
                id: "account-required",

                question:
                    "Do I need an account to make an enquiry?",

                answer:
                    "No. An account is not required to access our general enquiry or callback forms.",
            },
        ],
    },

    // ======================================
    // FINAL CTA
    // ======================================

    cta: {
        eyebrow: "YOUR JOURNEY STARTS HERE",

        title: "We're here to listen.",

        description:
            "Your goals. Your choices. Your journey. Let's explore the support options that matter to you.",

        actionLabel: "Send an Enquiry",
    },

} as const satisfies ContactPageContent;
