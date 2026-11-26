import Image from "next/image";

import { contactSectionContent } from "@/data/contact";

export default function ContactReceptionImage() {
  const { image } = contactSectionContent;

  return (
    <div
      className="
        relative isolate w-full
        overflow-hidden
        h-65
        sm:h-[3000px]
        lg:h-[clamp(280px,46svh,400px)]
      "
    >
      {/* Receptionist Photograph */}
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes="100vw"
        className="
          object-cover
          object-[50%_30%]
          lg:object-[50%_30%]
        "
      />

      {/* Top Gradient */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-x-0 top-0
          h-[25%]
          bg-linear-to-b
          from-[#102B50]
          via-[#102B50]/40
          to-transparent
        "
      />

      {/* Bottom Gradient */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-x-0 bottom-0
          h-[45%]
          bg-linear-to-t
          from-[#102B50]
          via-[#102B50]/60
          to-transparent
        "
      />

      {/* Left Gradient */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-y-0 left-0
          w-[15%] lg:w-[25%]
          bg-linear-to-r
          from-[#102B50]
          to-transparent
        "
      />

      {/* Right Gradient */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-y-0 right-0
          w-[15%] lg:w-[25%]
          bg-linear-to-l
          from-[#102B50]
          to-transparent
        "
      />
    </div>
  );
}
