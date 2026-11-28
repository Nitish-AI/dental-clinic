import type { Metadata } from "next";

import ContactHero from "@/components/sections/contact/ContactHero";
import ContactInformation from "@/components/sections/contact/ContactInformation";
import ContactOptions from "@/components/sections/contact/ContactOptions";
import ContactServiceCoverage from "@/components/sections/contact/ContactServiceCoverage";
import ContactFAQ from "@/components/sections/contact/ContactFAQ";

// ==========================================
// PAGE METADATA
// ==========================================

export const metadata: Metadata = {
  title: "Contact Us | Elora Healthcare Australia",

  description:
    "Connect with Elora Healthcare Australia to explore NDIS and DVA support options, discuss referrals and make an enquiry.",
};

// ==========================================
// CONTACT PAGE
// ==========================================

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactOptions />
      <ContactInformation />
      <ContactServiceCoverage />
      <ContactFAQ />
    </>
  );
}
