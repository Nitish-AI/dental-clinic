
import { z } from "zod";

import {
    commonEnquirySchema,
    commonEnquiryDefaultValues,
    validateServiceSelection,
} from "@/lib/validations/common";

// Client-specific enquiry validation
export const clientEnquirySchema = commonEnquirySchema
    .extend({
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
    })
    .superRefine(validateServiceSelection);

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
    ...commonEnquiryDefaultValues,
    relationship: "",
};
