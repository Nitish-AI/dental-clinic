
import { z } from "zod";
import { commonEnquiryFields } from "@/lib/validations/common";

// ==========================================
// CALLBACK VALIDATION SCHEMA
// ==========================================

export const callbackSchema = z.object({
    // Required contact details
    firstName: commonEnquiryFields.firstName,

    lastName: commonEnquiryFields.lastName,

    phone: commonEnquiryFields.phone,

    // Optional email address
    email: z
        .string()
        .trim()
        .max(254, "Email address is too long.")
        .refine(
            (value) =>
                value === "" ||
                z.email().safeParse(value).success,
            "Please enter a valid email address."
        )
        .optional(),

    // Optional support category
    supportCategory: z.enum([
        "ndis",
        "dva",
        "general",
        "unsure",
        "",
    ]),

    // Preferred callback day
    preferredDay: z.enum([
        "any-weekday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
    ]),

    // Preferred callback time
    preferredTime: z.enum([
        "any-time",
        "morning",
        "afternoon",
    ]),

    // Optional additional information
    message: z
        .string()
        .trim()
        .max(
            500,
            "Additional information cannot exceed 500 characters."
        )
        .optional(),

    // Required privacy consent
    privacyConsent: commonEnquiryFields.privacyConsent,
});

// ==========================================
// CALLBACK FORM TYPES
// ==========================================

export type CallbackFormInput =
    z.input<typeof callbackSchema>;

export type CallbackFormValues =
    z.output<typeof callbackSchema>;

// ==========================================
// CALLBACK DEFAULT VALUES
// ==========================================

export const callbackDefaultValues: CallbackFormInput = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    supportCategory: "",
    preferredDay: "any-weekday",
    preferredTime: "any-time",
    message: "",
    privacyConsent: false,
};
