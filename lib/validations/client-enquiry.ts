
import { z } from "zod";

import { serviceCategories } from "@/data/services";

// Australian and international phone number validation
const isValidPhoneNumber = (value: string): boolean => {
    const phone = value.replace(/[\s()-]/g, "");

    // Australian local number
    const australianPattern = /^0[23478]\d{8}$/;

    // International number format
    const internationalPattern = /^\+[1-9]\d{7,14}$/;

    return (
        australianPattern.test(phone) ||
        internationalPattern.test(phone)
    );
};

export const clientEnquirySchema = z
    .object({
        // Personal contact details
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

        // Who is the enquiry for?
        relationship: z
            .enum([
                "self",
                "family",
                "carer",
                "other",
                "",
            ])
            .refine(
                (value) => value !== "",
                "Please select who you are enquiring for."
            ),

        // Support requirements
        supportCategory: z
            .enum([
                "ndis",
                "dva",
                "general",
                "unsure",
                "",
            ])
            .refine(
                (value) => value !== "",
                "Please select a support category."
            ),

        service: z
            .string()
            .trim()
            .max(100)
            .optional(),

        // Location details
        suburb: z
            .string()
            .trim()
            .max(100, "Suburb cannot exceed 100 characters.")
            .optional(),

        postcode: z
            .string()
            .trim()
            .refine(
                (value) =>
                    value === "" || /^\d{4}$/.test(value),
                "Please enter a valid four-digit postcode."
            )
            .optional(),

        // Enquiry message
        message: z
            .string()
            .trim()
            .min(
                10,
                "Please provide at least 10 characters."
            )
            .max(
                1000,
                "Your enquiry cannot exceed 1,000 characters."
            ),

        // Contact preference
        preferredContactMethod: z.enum([
            "phone",
            "email",
            "either",
        ]),

        // Privacy acknowledgement
        privacyConsent: z
            .boolean()
            .refine(
                (value) => value === true,
                "Please accept the privacy acknowledgement."
            ),
    })

    // Cross-field service validation
    .superRefine((data, context) => {
        if (!data.service) {
            return;
        }

        const selectedCategory = serviceCategories.find(
            (category) =>
                category.id === data.supportCategory
        );

        const isValidService =
            selectedCategory?.services.some(
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
    });

// Automatically generated TypeScript form type
// Raw form input before validation
export type ClientEnquiryFormInput = z.input<
    typeof clientEnquirySchema
>;

// Validated form output
export type ClientEnquiryFormValues = z.output<
    typeof clientEnquirySchema
>;

// Initial form values
export const clientEnquiryDefaultValues: ClientEnquiryFormInput = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    relationship: "",
    supportCategory: "",
    service: "",
    suburb: "",
    postcode: "",
    message: "",
    preferredContactMethod: "either",
    privacyConsent: false,
};
