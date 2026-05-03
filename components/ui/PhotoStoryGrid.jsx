"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PhotoStoryGrid({
  eyebrow,
  title,
  description,
  photos,
  ctaHref,
  ctaLabel,
  backgroundClassName = "bg-white",
}) {
  const [primaryPhoto, ...secondaryPhotos] = photos;

  return (
    <section className={`${backgroundClassName} py-16 md:py-20`}>
      <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
        <div>
          {eyebrow ? (
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--color-heading-900)] md:text-4xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-body-700)] md:text-lg">
            {description}
          </p>

          {ctaHref && ctaLabel ? (
            <Link
              href={ctaHref}
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-600)] transition hover:text-[var(--color-primary-700)]"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          ) : null}
        </div>

        <div className="grid gap-4 md:grid-cols-[1.08fr_0.92fr]">
          {primaryPhoto ? (
            <figure className="group relative overflow-hidden rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-white shadow-sm">
              <div className="relative aspect-[4/5]">
                <Image
                  src={primaryPhoto.src}
                  alt={primaryPhoto.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.02]"
                />
              </div>
              {primaryPhoto.caption ? (
                <figcaption className="border-t border-[var(--color-border-300)] bg-white px-4 py-3 text-sm font-medium text-[var(--color-heading-900)]">
                  {primaryPhoto.caption}
                </figcaption>
              ) : null}
            </figure>
          ) : null}

          <div className="grid gap-4">
            {secondaryPhotos.map((photo) => (
              <figure
                key={photo.src}
                className="group relative overflow-hidden rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-white shadow-sm"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 28vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>
                {photo.caption ? (
                  <figcaption className="border-t border-[var(--color-border-300)] bg-white px-4 py-3 text-sm font-medium text-[var(--color-heading-900)]">
                    {photo.caption}
                  </figcaption>
                ) : null}
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
