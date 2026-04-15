"use client";

import Image from "next/image";

export default function ProgramPhilosophy() {
  return (
    <section id="teaching-philosophy" className="bg-[var(--color-white-100)]">
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
              How Nimzo places students well
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
              Good placement is not just about age or whether the child knows
              the rules. We look at confidence, attention span, current
              understanding, and how the child learns best.
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
              That is why assessments matter. The right batch and the right
              format help children improve faster and feel less frustrated from
              the start.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[var(--radius-md)] border border-[var(--color-border-300)] bg-[var(--color-light-100)] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-600)]">
                  We look at
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-body-700)]">
                  Age, confidence with the basics, planning ability, and weekly routine.
                </p>
              </div>
              <div className="rounded-[var(--radius-md)] border border-[var(--color-border-300)] bg-[var(--color-light-100)] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-600)]">
                  Parents can expect
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-body-700)]">
                  Honest guidance on both stage and format before enrollment.
                </p>
              </div>
            </div>
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
                alt="Chess coach guiding a child into the right learning stage"
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
