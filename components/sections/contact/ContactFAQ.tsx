import { MessagesSquare } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { contactPageContent } from "@/data/contact";

// ==========================================
// CONTACT FAQ SECTION
// ==========================================

export default function ContactFAQ() {
  const content = contactPageContent.faq;

  return (
    <section
      id="contact-faq"
      aria-labelledby="contact-faq-heading"
      className="scroll-mt-28 bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Section icon */}
          <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-blue-100 text-[#102B50] sm:size-20">
            <MessagesSquare aria-hidden="true" className="size-8 sm:size-10" />
          </div>

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
            id="contact-faq-heading"
            className="text-3xl font-semibold tracking-tight text-[#102B50] sm:text-4xl lg:text-5xl"
          >
            {content.title}
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {content.description}
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="mx-auto mt-10 max-w-4xl sm:mt-14">
          <Accordion
            defaultValue={[content.items[0].id]}
            className="flex flex-col gap-4"
          >
            {content.items.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white px-5 shadow-sm transition-colors hover:border-blue-200 data-[open]:border-blue-300 sm:px-6"
              >
                {/* Question */}
                <AccordionTrigger className="min-h-16 gap-4 py-5 text-left text-base font-semibold text-[#102B50] hover:no-underline sm:text-lg">
                  {item.question}
                </AccordionTrigger>

                {/* Answer */}
                <AccordionContent className="pb-5 text-sm leading-relaxed text-slate-600 sm:text-base">
                  <p className="max-w-3xl">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
