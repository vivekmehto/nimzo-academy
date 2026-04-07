"use client";

import Button from "@/components/ui/Button";

export default function ProgramHero() {
  return (
    <section className="bg-[var(--color-back-500)]">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-18 md:py-20">
        <div className="mx-auto max-w-3xl text-center animate-fade-up">
          
          {/* Context badge */}
          <span
            className="
              inline-block
              mb-4
              rounded-full
              bg-[var(--color-primary-100)]
              px-4
              py-1.5
              text-[11px]
              sm:text-xs
              font-medium
              text-white
            "
          >
            Format Guidance • Level Guidance • Coach-Guided
          </span>

          {/* Heading */}
          <h1
            className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-5xl
              font-bold
              tracking-tight
              text-[var(--color-heading-900)]
            "
          >
            Choose the right program
            <span className="block text-primary-600">for your child&apos;s stage and routine</span>
          </h1>

          {/* Subheading */}
          <p
            className="
              mt-4
              sm:mt-5
              text-base
              sm:text-lg
              leading-relaxed
              text-[var(--color-body-700)]
            "
          >
            This page helps you understand two things clearly: the right
            learning level for your child, and the right format for your
            family&apos;s weekly routine.
          </p>

          <p className="mt-3 text-sm text-[var(--color-muted-500)] sm:text-base">
            Beginner to advanced stages • centre, home, and online formats •
            guidance before enrollment
          </p>

          {/* CTA */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <Button href="#learning-path">
              Compare Learning Stages
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
