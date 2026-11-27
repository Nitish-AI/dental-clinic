
// ==========================================
// CONTACT OPTION TYPES
// ==========================================

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

// ==========================================
// ENQUIRY SELECTION TYPES
// ==========================================

export type EnquiryType =
    | "client"
    | "professional";

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

export interface EnquirySelectionContent {
    title: string;
    description: string;
    options: readonly EnquiryTypeOption[];
}

// ==========================================
// SHARED ENQUIRY TYPES
// ==========================================

export type EnquirySupportCategory =
    | "ndis"
    | "dva"
    | "general"
    | "unsure";

export type PreferredContactMethod =
    | "phone"
    | "email"
    | "either";

export interface FormOption<T extends string = string> {
    value: T;
    label: string;
}

// ==========================================
// CLIENT ENQUIRY TYPES
// ==========================================

export type EnquiryRelationship =
    | "self"
    | "family"
    | "carer"
    | "other";

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

// ==========================================
// PROFESSIONAL ENQUIRY TYPES
// ==========================================

export type ProfessionalRole =
    | "support-coordinator"
    | "healthcare-professional"
    | "plan-manager"
    | "case-manager"
    | "discharge-planner"
    | "allied-health-professional"
    | "organisation-representative"
    | "other";

export type ProfessionalEnquiryPurpose =
    | "client-referral"
    | "service-availability"
    | "professional-partnership"
    | "general-information"
    | "other";

export interface ProfessionalEnquiryFormContent {
    sections: {
        professionalDetails: string;
        referralDetails: string;
        additionalInformation: string;
        contactPreference: string;
    };

    roleOptions:
    readonly FormOption<ProfessionalRole>[];

    purposeOptions:
    readonly FormOption<ProfessionalEnquiryPurpose>[];

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

// ==========================================
// CALLBACK FORM TYPES
// ==========================================

export type CallbackPreferredDay =
    | "any-weekday"
    | "monday"
    | "tuesday"
    | "wednesday"
    | "thursday"
    | "friday";

export type CallbackPreferredTime =
    | "any-time"
    | "morning"
    | "afternoon";

export interface CallbackFormContent {
    title: string;
    description: string;

    sections: {
        contactDetails: string;
        callbackPreference: string;
        additionalInformation: string;
    };

    supportCategoryOptions:
    readonly FormOption<EnquirySupportCategory>[];

    preferredDayOptions:
    readonly FormOption<CallbackPreferredDay>[];

    preferredTimeOptions:
    readonly FormOption<CallbackPreferredTime>[];

    timezoneNotice: string;

    privacyNotice: string;
    privacyConsent: string;

    privacyPolicyLabel: string;
    privacyPolicyHref: string;

    submitLabel: string;
    submittingLabel: string;
}
