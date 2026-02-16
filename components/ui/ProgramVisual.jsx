"use client";

import Image from "next/image";

export default function ProgramVisual({ imageSrc, alt }) {
  return (
    <div className="relative mt-10 md:mt-0">
      <div
        className="
          aspect-square
          rounded-[var(--radius-lg)]
          border
          border-[var(--color-border-300)]
          bg-[var(--color-white-100)]
          p-4
          sm:p-6
          overflow-hidden
          shadow-sm
        "
      >
        <div className="relative h-full w-full rounded-[var(--radius-md)] overflow-hidden">
          <Image
            src={imageSrc}
            alt={alt}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
}
