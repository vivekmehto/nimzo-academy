"use client";

import Image from "next/image";

export default function ProgramPhilosophy() {
  return (
    <section className="bg-[var(--color-white-100)]">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">

          {/* LEFT: TEXT */}
          <div className="animate-fade-up">
            <h2
              className="
                text-2xl
                sm:text-3xl
                font-bold
                tracking-tight
                text-[var(--color-heading-900)]
              "
            >
              How We Think About Teaching Chess
            </h2>

            <p
              className="
                mt-4
                text-sm
                sm:text-base
                leading-relaxed
                text-[var(--color-body-700)]
              "
            >
              Chess improvement is not about memorizing openings or solving random
              puzzles. Children learn best when concepts are introduced in the right
              order, at the right pace, with clear guidance.
            </p>

            <p
              className="
                mt-3
                text-sm
                sm:text-base
                leading-relaxed
                text-[var(--color-body-700)]
              "
            >
              Our programs follow a structured progression — building strong
              foundations first, then gradually developing strategic thinking,
              calculation skills, and competitive confidence.
            </p>

            <ul
              className="
                mt-5
                space-y-2
                text-xs
                sm:text-sm
                text-[var(--color-muted-500)]
              "
            >
              <li>• Age-appropriate learning at every stage</li>
              <li>• Concepts before complexity</li>
              <li>• Focus on thinking skills, not memorization</li>
            </ul>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="relative animate-fade-up">
            <div
              className="
                overflow-hidden
                rounded-[var(--radius-lg)]
                border
                border-[var(--color-border-300)]
                bg-[var(--color-light-100)]
              "
            >
              <Image
                src="/programs-philosophy.jpg"
                alt="Chess coach guiding a child through learning"
                width={600}
                height={450}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
