import ContactActions from "@/components/contact/ContactActions";

import { contactPageContent } from "@/data/contact";

// ==========================================
// CONTACT OPTIONS SECTION
// ==========================================

export default function ContactOptions() {
  const content = contactPageContent.options;

  return (
    <section
      id="contact-options"
      aria-labelledby="contact-options-heading"
      className="scroll-mt-28 bg-white py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
        {/* Section heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          {/* Eyebrow */}
          <div className="mb-4 flex items-center justify-center gap-3">
            <span aria-hidden="true" className="h-0.5 w-8 bg-blue-600" />

            <span className="text-xs font-semibold tracking-[0.2em] text-blue-700 sm:text-sm">
              {content.eyebrow}
            </span>

            <span aria-hidden="true" className="h-0.5 w-8 bg-blue-600" />
          </div>

          {/* Section title */}
          <h2
            id="contact-options-heading"
            className="text-3xl font-semibold tracking-tight text-[#102B50] sm:text-4xl lg:text-5xl"
          >
            {content.title}
          </h2>

          {/* Section description */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {content.description}
          </p>
        </div>

        {/* Shared contact actions */}
        <ContactActions
          options={content.options}
          theme="light"
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6"
        />
      </div>
    </section>
  );
}
