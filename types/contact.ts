
// Contact option types
export type ContactOptionId =
    | "call"
    | "email"
    | "enquiry"
    | "callback";

export interface ContactOption {
    id: ContactOptionId;
    title: string;
    description: string;
    actionLabel: string;
}

// Contact section content
export interface ContactSectionContent {
    eyebrow: string;
    title: string;
    description: string;

    image: {
        src: string;
        alt: string;
    };

    options: readonly ContactOption[];
}

// Enquiry types
export type EnquiryType =
    | "client"
    | "professional";

// Enquiry selection card
export interface EnquiryTypeOption {
    id: EnquiryType;
    title: string;
    description: string;
    actionLabel: string;

    image: {
        src: string;
        alt: string;
    };
}

// Enquiry selection dialog content
export interface EnquirySelectionContent {
    title: string;
    description: string;
    options: readonly EnquiryTypeOption[];
}


// Client enquiry types
export type EnquiryRelationship =
    | "self"
    | "family"
    | "carer"
    | "other";

export type EnquirySupportCategory =
    | "ndis"
    | "dva"
    | "general"
    | "unsure";

export type PreferredContactMethod =
    | "phone"
    | "email"
    | "either";

// Reusable form option
export interface FormOption<T extends string = string> {
    value: T;
    label: string;
}

// Client enquiry form content
export interface ClientEnquiryFormContent {
    sections: {
        contactDetails: string;
        supportNeeds: string;
        contactPreference: string;
    };

    relationshipOptions:
    readonly FormOption<EnquiryRelationship>[];

    supportCategoryOptions:
    readonly FormOption<EnquirySupportCategory>[];

    contactMethodOptions:
    readonly FormOption<PreferredContactMethod>[];

    privacyNotice: string;
    privacyConsent: string;
    privacyPolicyLabel: string;
    privacyPolicyHref: string;

    submitLabel: string;
    submittingLabel: string;
}
