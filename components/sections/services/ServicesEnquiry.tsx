import ContactReceptionImage from "@/components/contact/ContactReceptionImage";

import { contactSectionContent } from "@/data/contact";

import ContactActions from "@/components/contact/ContactActions";

export default function ServicesEnquiry() {
  const { eyebrow, title, description } = contactSectionContent;

  return (
    <section
      id="services-enquiry"
      aria-labelledby="services-enquiry-heading"
      className="
        relative isolate overflow-hidden
        scroll-mt-52 bg-[#102B50]
        pb-12 pt-12 text-white
        sm:pb-16 sm:pt-16
        lg:pb-20 lg:pt-20
      "
    >
      {/* Section Heading */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <span aria-hidden="true" className="h-px w-8 bg-sky-300/70 sm:w-20" />

          <p className="text-xs font-semibold tracking-widest text-sky-300 sm:text-base">
            {eyebrow}
          </p>

          <span aria-hidden="true" className="h-px w-8 bg-sky-300/70 sm:w-20" />
        </div>

        {/* Main Heading */}
        <h2
          id="services-enquiry-heading"
          className="
            mt-5 text-3xl font-semibold
            leading-tight tracking-tight
            text-white sm:text-4xl
            lg:text-5xl xl:text-6xl
          "
        >
          {title}
        </h2>

        {/* Description */}
        <p className="mt-4 text-base leading-relaxed text-slate-200 sm:text-lg lg:text-xl">
          {description}
        </p>
      </div>

      {/* Receptionist Photograph */}
      <div className="relative mx-auto mt-2 max-w-[1920px]">
        <ContactReceptionImage />
      </div>

      <ContactActions
        options={contactSectionContent.options}
        theme="dark"
        className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4"
      />
    </section>
  );
}
