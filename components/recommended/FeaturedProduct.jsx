"use client";

import Image from "next/image";

export default function FeaturedProduct({
  image,
  alt,
  badge,
  title,
  highlights = [],
  description,
  link,
}) {
  return (
    <div className="bg-white rounded-[var(--radius-lg)] p-8 mb-12 shadow-sm hover:shadow-md transition">
      <div className="flex flex-col md:flex-row gap-10 items-center">

        {/* Image */}
        <div className="relative md:w-1/2 w-full h-80 rounded-[var(--radius-md)] overflow-hidden bg-white  shadow-sm">
          <Image
            src={image}
            alt={alt}
            fill
            className="object-contain scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* Content */}
        <div className="md:w-1/2">
          {badge && (
            <span className="text-xs font-semibold text-[var(--color-primary-600)] uppercase tracking-wide">
              {badge}
            </span>
          )}

          <h3 className="text-2xl font-bold text-[var(--color-heading-900)] mt-2 mb-4">
            {title}
          </h3>

          <ul className="text-[var(--color-body-700)] space-y-2 mb-6">
            {highlights.map((item, index) => (
              <li key={index}>• {item}</li>
            ))}
          </ul>

          <p className="text-sm text-[var(--color-muted-500)] mb-6">
            {description}
          </p>

          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="inline-block bg-[var(--color-primary-500)] hover:bg-[var(--color-primary-600)] text-white px-5 py-2 rounded-[var(--radius-md)] font-medium transition"
          >
            Check Latest Price on Amazon
          </a>
        </div>
      </div>
    </div>
  );
}
