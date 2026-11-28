"use client";

import { useState } from "react";

import ContactOptionCard, {
  type ContactCardTheme,
} from "@/components/contact/ContactOptionCard";
import EnquiryDialog from "@/components/contact/EnquiryDialog";
import CallbackDialog from "@/components/contact/CallbackDialog";

import type { ContactOption, ContactOptionId } from "@/types/contact";

// ==========================================
// CONTACT ACTIONS TYPES
// ==========================================

type ActiveContactDialog = "enquiry" | "callback" | null;

interface ContactActionsProps {
  options: readonly ContactOption[];
  className?: string;
  theme?: ContactCardTheme;
}

// ==========================================
// SHARED CONTACT ACTIONS
// ==========================================

export default function ContactActions({
  options,
  className,
  theme = "dark",
}: ContactActionsProps) {
  const [activeDialog, setActiveDialog] = useState<ActiveContactDialog>(null);

  // Handle contact card selection
  const handleContactSelect = (id: ContactOptionId) => {
    switch (id) {
      case "enquiry":
        setActiveDialog("enquiry");
        break;

      case "callback":
        setActiveDialog("callback");
        break;

      default:
        break;
    }
  };

  return (
    <>
      {/* Contact option cards */}
      <div
        className={
          className ?? "grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
        }
      >
        {options.map((option) => (
          <ContactOptionCard
            key={option.id}
            option={option}
            onSelect={handleContactSelect}
            theme={theme}
          />
        ))}
      </div>

      {/* Enquiry dialog */}
      <EnquiryDialog
        open={activeDialog === "enquiry"}
        onOpenChange={(open) =>
          setActiveDialog((current) =>
            open ? "enquiry" : current === "enquiry" ? null : current,
          )
        }
      />

      {/* Callback dialog */}
      <CallbackDialog
        open={activeDialog === "callback"}
        onOpenChange={(open) =>
          setActiveDialog((current) =>
            open ? "callback" : current === "callback" ? null : current,
          )
        }
      />
    </>
  );
}
