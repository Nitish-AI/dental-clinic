
import { z } from "zod";

import {
    commonEnquirySchema,
    commonEnquiryDefaultValues,
    validateServiceSelection,
} from "@/lib/validations/common";

// Professional-specific enquiry validation
export const professionalEnquirySchema = commonEnquirySchema
    .extend({
        // Organisation details
        organisationName: z
            .string()
            .trim()
            .min(1, "Organisation name is required.")
            .max(
                150,
                "Organisation name cannot exceed 150 characters."
            ),

        // Professional role
        professionalRole: z
            .enum([
                "support-coordinator",
                "healthcare-professional",
                "plan-manager",
                "case-manager",
                "discharge-planner",
                "allied-health-professional",
                "organisation-representative",
                "other",
                "",
            ])
            .refine(
                (value) => value !== "",
                "Please select your professional role."
            ),

        // Purpose of enquiry
        enquiryPurpose: z
            .enum([
                "client-referral",
                "service-availability",
                "professional-partnership",
                "general-information",
                "other",
                "",
            ])
            .refine(
                (value) => value !== "",
                "Please select the purpose of your enquiry."
            ),
    })

    // Shared cross-field service validation
    .superRefine(validateServiceSelection);

// Raw form input before validation
export type ProfessionalEnquiryFormInput = z.input<
    typeof professionalEnquirySchema
>;

// Validated form output
export type ProfessionalEnquiryFormValues = z.output<
    typeof professionalEnquirySchema
>;

// Initial form values
export const professionalEnquiryDefaultValues:
    ProfessionalEnquiryFormInput = {
    ...commonEnquiryDefaultValues,

    organisationName: "",
    professionalRole: "",
    enquiryPurpose: "",
};
