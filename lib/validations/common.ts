
import { z } from "zod";

import { serviceCategories } from "@/data/services";

// Australian and international phone number validation
export const isValidPhoneNumber = (value: string): boolean => {
    const phone = value.replace(/[\s()-]/g, "");

    const australianPattern = /^0[23478]\d{8}$/;

    const internationalPattern = /^\+[1-9]\d{7,14}$/;

    return (
        australianPattern.test(phone) ||
        internationalPattern.test(phone)
    );
};

// Shared enquiry validation fields
export const commonEnquiryFields = {
    firstName: z
        .string()
        .trim()
        .min(1, "First name is required.")
        .max(50, "First name cannot exceed 50 characters."),

    lastName: z
        .string()
        .trim()
        .min(1, "Last name is required.")
        .max(50, "Last name cannot exceed 50 characters."),

    email: z
        .string()
        .trim()
        .min(1, "Email address is required.")
        .email("Please enter a valid email address.")
        .max(254, "Email address is too long."),

    phone: z
        .string()
        .trim()
        .min(1, "Phone number is required.")
        .max(30, "Phone number is too long.")
        .refine(
            isValidPhoneNumber,
            "Please enter a valid Australian or international phone number."
        ),

    supportCategory: z
        .enum(["ndis", "dva", "general", "unsure", ""])
        .refine(
            (value) => value !== "",
            "Please select a support category."
        ),

    service: z
        .string()
        .trim()
        .max(100)
        .optional(),

    suburb: z
        .string()
        .trim()
        .max(100, "Suburb cannot exceed 100 characters.")
        .optional(),

    postcode: z
        .string()
        .trim()
        .refine(
            (value) => value === "" || /^\d{4}$/.test(value),
            "Please enter a valid four-digit postcode."
        )
        .optional(),

    message: z
        .string()
        .trim()
        .min(10, "Please provide at least 10 characters.")
        .max(1000, "Your enquiry cannot exceed 1,000 characters."),

    preferredContactMethod: z.enum([
        "phone",
        "email",
        "either",
    ]),

    privacyConsent: z
        .boolean()
        .refine(
            (value) => value === true,
            "Please accept the privacy acknowledgement."
        ),
};

// Shared enquiry schema
export const commonEnquirySchema = z.object(
    commonEnquiryFields
);

// Shared input and output types
export type CommonEnquiryFormInput = z.input<
    typeof commonEnquirySchema
>;

export type CommonEnquiryFormValues = z.output<
    typeof commonEnquirySchema
>;

// Shared initial form values
export const commonEnquiryDefaultValues: CommonEnquiryFormInput = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    supportCategory: "",
    service: "",
    suburb: "",
    postcode: "",
    message: "",
    preferredContactMethod: "either",
    privacyConsent: false,
};

// Shared cross-field service validation
export function validateServiceSelection(
    data: {
        supportCategory: string;
        service?: string;
    },
    context: z.RefinementCtx
) {
    if (!data.service) {
        return;
    }

    const selectedCategory = serviceCategories.find(
        (category) => category.id === data.supportCategory
    );

    const isValidService = selectedCategory?.services.some(
        (service) => service.id === data.service
    );

    if (!isValidService) {
        context.addIssue({
            code: "custom",
            path: ["service"],
            message:
                "Please select a service from the selected support category.",
        });
    }
}
