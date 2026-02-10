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
            Structured • Age-Appropriate • Coach-Guided
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
            Our Chess Programs
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
            A thoughtfully designed chess curriculum that guides children from
            their first move to confident, competitive play — step by step.
          </p>

          {/* CTA */}
          <div className="mt-6 sm:mt-8 flex justify-center">
            <Button href="#learning-path">
              Understand the Learning Path
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
}
