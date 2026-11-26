"use client";

import { useState } from "react";

import {
  ArrowLeft,
  HeartHandshake,
  Users,
  BriefcaseMedical,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

import EnquiryTypeSelector from "@/components/contact/EnquiryTypeSelector";

import { enquirySelectionContent } from "@/data/contact";

import type { EnquiryType } from "@/types/contact";

import ClientEnquiryForm from "@/components/contact/ClientEnquiryForm";

interface EnquiryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function EnquiryDialog({
  open,
  onOpenChange,
}: EnquiryDialogProps) {
  const [enquiryType, setEnquiryType] = useState<EnquiryType | null>(null);

  // Reset selection when dialog closes
  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) {
      setEnquiryType(null);
    }

    onOpenChange(nextOpen);
  };

  // Return to enquiry selection
  const handleBack = () => {
    setEnquiryType(null);
  };

  // Dynamic dialog heading
  const dialogTitle =
    enquiryType === "client"
      ? "Client Enquiry"
      : enquiryType === "professional"
        ? "Professional Enquiry"
        : enquirySelectionContent.title;

  // Dynamic dialog description
  const dialogDescription =
    enquiryType === "client"
      ? "Tell us about the support you or your loved one needs."
      : enquiryType === "professional"
        ? "Connect with our team to discuss support and referral opportunities."
        : enquirySelectionContent.description;

  // Dynamic heading icon
  const HeaderIcon =
    enquiryType === "client"
      ? Users
      : enquiryType === "professional"
        ? BriefcaseMedical
        : HeartHandshake;

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        className="
                    max-h-[92dvh]
                    w-[calc(100%-2rem)]
                    max-w-[860px]
                    overflow-y-auto
                    overscroll-contain
                    rounded-2xl
                    border border-slate-200
                    bg-white
                    p-5 text-slate-900
                    sm:max-w-[860px]
                    sm:p-8
                "
      >
        {/* Dialog Header */}
        <DialogHeader
          className="
                        items-center
                        text-center
                    "
        >
          {/* Heading Icon */}
          <div
            className="
                            mx-auto mb-2
                            flex size-14
                            items-center
                            justify-center
                            rounded-full
                            bg-blue-50
                            text-[#102B50]
                            sm:size-16
                        "
          >
            <HeaderIcon
              aria-hidden="true"
              className="size-7 sm:size-8"
              strokeWidth={1.8}
            />
          </div>

          {/* Heading */}
          <DialogTitle
            className="
                            text-center
                            text-2xl font-semibold
                            tracking-tight
                            text-[#102B50]
                            sm:text-3xl
                        "
          >
            {dialogTitle}
          </DialogTitle>

          {/* Description */}
          <DialogDescription
            className="
                            mx-auto mt-2
                            max-w-xl
                            text-center
                            text-sm leading-relaxed
                            text-slate-600
                            sm:text-base
                        "
          >
            {dialogDescription}
          </DialogDescription>
        </DialogHeader>

        {/* Dialog Body */}
        <div className="mt-3">
          {/* Enquiry Selection Screen */}
          {enquiryType === null && (
            <EnquiryTypeSelector onSelect={setEnquiryType} />
          )}

          {/* Individual Enquiry Screens */}
          {enquiryType !== null && (
            <div>
              {/* Back Button */}
              <Button
                type="button"
                variant="ghost"
                onClick={handleBack}
                className="
                                    mb-5
                                    text-[#102B50]
                                    hover:bg-blue-50
                                "
              >
                <ArrowLeft aria-hidden="true" className="mr-2 size-4" />
                Back to enquiry options
              </Button>

              {/* Client Enquiry Placeholder */}
              {/* Client Enquiry Form */}
              {enquiryType === "client" && <ClientEnquiryForm />}

              {/* Professional Enquiry Placeholder */}
              {enquiryType === "professional" && (
                <div
                  className="
                                        rounded-xl
                                        border border-emerald-200
                                        bg-emerald-50/50
                                        p-8 text-center
                                    "
                >
                  <BriefcaseMedical
                    aria-hidden="true"
                    className="
                                            mx-auto mb-4
                                            size-10 text-emerald-600
                                        "
                  />

                  <h3 className="text-lg font-semibold text-[#102B50]">
                    Professional Enquiry Form
                  </h3>

                  <p className="mt-2 text-sm text-slate-600">
                    This form will be available soon.
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
