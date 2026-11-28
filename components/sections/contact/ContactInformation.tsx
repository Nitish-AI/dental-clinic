import Image from "next/image";

import { MapPin, Clock, Phone, Mail, HeartHandshake } from "lucide-react";

import { contactConfig } from "@/config/contact";
import { contactPageContent } from "@/data/contact";

// ==========================================
// CONTACT INFORMATION SECTION
// ==========================================

export default function ContactInformation() {
  const content = contactPageContent.information;

  const { address, businessHours, phone, email } = contactConfig;

  const hasPublicAddress =
    address.isPublicLocation && Boolean(address.formatted);

  const operatingHours = [
    {
      label: "Monday – Friday",
      value: businessHours.weekdays,
    },
    {
      label: "Saturday",
      value: businessHours.saturday,
    },
    {
      label: "Sunday",
      value: businessHours.sunday,
    },
    {
      label: "Public holidays",
      value: businessHours.publicHolidays,
    },
  ].filter((item) => Boolean(item.value));

  const contactItems = [
    {
      id: "location",
      icon: MapPin,
      title: content.labels.location,
      value: hasPublicAddress
        ? address.formatted
        : "Location details coming soon.",
      href: undefined,
    },
    {
      id: "phone",
      icon: Phone,
      title: content.labels.phone,
      value: phone.display || "Coming soon.",
      href: phone.international ? `tel:${phone.international}` : undefined,
    },
    {
      id: "email",
      icon: Mail,
      title: content.labels.email,
      value: email || "Coming soon.",
      href: email ? `mailto:${email}` : undefined,
    },
  ];

  return (
    <section
      id="contact-information"
      aria-labelledby="contact-information-heading"
      className="scroll-mt-28 bg-slate-50 py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* Contact information */}
          <div>
            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-3">
              <span aria-hidden="true" className="h-0.5 w-8 bg-blue-600" />

              <span className="text-xs font-semibold tracking-[0.2em] text-blue-700 sm:text-sm">
                {content.eyebrow}
              </span>
            </div>

            {/* Section heading */}
            <h2
              id="contact-information-heading"
              className="text-3xl font-semibold tracking-tight text-[#102B50] sm:text-4xl lg:text-5xl"
            >
              {content.title}
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {content.description}
            </p>

            {/* Contact details */}
            <div className="mt-9 space-y-6">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.id} className="flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-[#102B50] sm:size-14">
                      <Icon aria-hidden="true" className="size-6" />
                    </div>

                    <div className="min-w-0 pt-0.5">
                      <h3 className="text-base font-semibold text-[#102B50] sm:text-lg">
                        {item.title}
                      </h3>

                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-1 block break-all text-sm leading-relaxed text-blue-700 hover:underline sm:text-base"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* Business hours */}
              <div className="flex items-start gap-4">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-[#102B50] sm:size-14">
                  <Clock aria-hidden="true" className="size-6" />
                </div>

                <div className="min-w-0 flex-1 pt-0.5">
                  <h3 className="text-base font-semibold text-[#102B50] sm:text-lg">
                    {content.labels.businessHours}
                  </h3>

                  {operatingHours.length > 0 ? (
                    <>
                      <dl className="mt-3 max-w-sm space-y-2">
                        {operatingHours.map((item) => (
                          <div
                            key={item.label}
                            className="flex flex-wrap justify-between gap-x-4 gap-y-1 text-sm text-slate-600 sm:text-base"
                          >
                            <dt>{item.label}</dt>

                            <dd className="font-medium text-slate-700">
                              {item.value}
                            </dd>
                          </div>
                        ))}
                      </dl>

                      <p className="mt-3 text-xs text-slate-500">
                        All times are based on Sydney local time.
                      </p>
                    </>
                  ) : (
                    <p className="mt-1 text-sm leading-relaxed text-slate-600 sm:text-base">
                      Operating hours coming soon.
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Healthcare team image */}
          <div className="relative">
            <div className="relative aspect-4/5 overflow-hidden rounded-3xl bg-slate-200 shadow-xl shadow-blue-950/10 sm:aspect-4/3 lg:aspect-4/5">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover object-center"
              />

              {/* Image gradient */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-[#102B50]/90 via-transparent to-transparent"
              />

              {/* Brand tagline */}
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <HeartHandshake
                    aria-hidden="true"
                    className="size-8 shrink-0 text-sky-200"
                  />

                  <div>
                    <p className="text-sm font-medium text-sky-100">
                      {contactConfig.brandName}
                    </p>

                    <p className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                      {contactConfig.tagline}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
