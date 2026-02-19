"use client";

import Image from "next/image";

export default function SecondaryProduct({
  image,
  alt,
  title,
  highlights = [],
  description,
  link,
}) {
  return (
    <div className="bg-white   rounded-[var(--radius-lg)] p-6 shadow-sm hover:shadow-md transition">

      {/* Image */}
      <div className="relative w-full h-56 mb-5 rounded-[var(--radius-md)] overflow-hidden bg-white  shadow-sm">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-contain scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <h4 className="text-lg font-semibold text-[var(--color-heading-900)] mb-3">
        {title}
      </h4>

      <p className="text-sm text-[var(--color-muted-500)] mb-4">
        {description}
      </p>

      <ul className="text-sm text-[var(--color-body-700)] space-y-1 mb-6">
        {highlights.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="inline-block bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] text-white px-4 py-2 rounded-[var(--radius-md)] text-sm font-medium transition"
      >
        View on Amazon
      </a>
    </div>
  );
}
