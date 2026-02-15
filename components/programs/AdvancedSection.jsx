"use client";

import { useDemoModal } from "@/context/DemoModalContext";

export default function AdvancedSection({setActiveCurriculum}) {

  const {openModal} = useDemoModal();

  return (
    <section id="advanced" className="bg-[var(--color-light-100)] py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 animate-fade-up">
        <div className="grid items-start gap-12 md:gap-20 md:grid-cols-2">

          {/* LEFT — CONTENT */}
          <div>
            {/* Journey marker */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--color-primary-600)]" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[var(--color-muted-500)]">
                PERFORMANCE STAGE
              </span>
            </div>

            {/* Title */}
            <h2
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-4xl
                font-bold
                tracking-tight
                text-[var(--color-heading-900)]
              "
            >
              Advanced Chess Program
            </h2>

            {/* Core statement */}
            <p
              className="
                mt-4
                max-w-xl
                text-base
                sm:text-lg
                text-[var(--color-body-700)]
              "
            >
              Designed for competitive players preparing to perform confidently
              under tournament conditions.
            </p>

            {/* Divider */}
            <div className="my-8 h-px w-12 bg-[var(--color-border-300)]" />

            {/* Core builds */}
            <ul
              className="
                space-y-4
                text-sm
                sm:text-base
                text-[var(--color-body-700)]
              "
            >
              <li>
                <strong className="font-semibold text-[var(--color-heading-900)]">
                  Deep calculation
                </strong>{" "}
                — analysing multiple variations accurately
              </li>
              <li>
                <strong className="font-semibold text-[var(--color-heading-900)]">
                  Positional understanding
                </strong>{" "}
                — evaluating positions beyond tactics
              </li>
              <li>
                <strong className="font-semibold text-[var(--color-heading-900)]">
                  Tournament preparation
                </strong>{" "}
                — time management and mindset
              </li>
            </ul>

            {/* Formats */}
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-[var(--color-border-400)] bg-[var(--color-white-100)] px-4 py-1.5 text-xs font-medium text-[var(--color-body-700)]">
                Online
              </span>
              <span className="rounded-full border border-[var(--color-border-400)] bg-[var(--color-white-100)] px-4 py-1.5 text-xs font-medium text-[var(--color-body-700)]">
                Offline
              </span>
              <span className="rounded-full bg-[var(--color-primary-600)] px-4 py-1.5 text-xs font-semibold text-white">
                ⭐ Hybrid (Recommended)
              </span>
            </div>

            {/* Outcome */}
            <p
              className="
                mt-8
                text-base
                sm:text-lg
                font-semibold
                text-[var(--color-heading-900)]
              "
            >
              Outcome:
              <span className="ml-2 font-normal text-[var(--color-body-700)]">
                A disciplined competitor ready for rated tournaments.
              </span>
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
               <button onClick={() => openModal("assessment")}
               className="
                rounded-[var(--radius-md)]
                bg-[var(--color-primary-600)]
                px-8
                py-4
                text-sm
                sm:text-base
                font-semibold
                text-white
                hover:bg-[var(--color-primary-700)]
              ">
                Book Free Assessment
              </button>

              <button
               onClick={() => setActiveCurriculum("advanced")}
                className="
                  rounded-[var(--radius-md)]
                  border
                  border-[var(--color-accent-500)]
                  px-6
                  py-3
                  text-xs
                  sm:text-sm
                  font-semibold
                  text-[var(--color-accent-600)]
                  hover:bg-[var(--color-accent-500)]
                  hover:text-white
                "
              >
                View Advanced Curriculum
              </button>
            </div>
          </div>

          {/* RIGHT — VISUAL */}
          <div className="relative mt-10 md:mt-0">
            <div
              className="
                aspect-square
                rounded-[var(--radius-lg)]
                border
                border-[var(--color-border-300)]
                bg-[var(--color-white-100)]
                p-6
                sm:p-8
              "
            >
              <div className="h-full w-full rounded-[var(--radius-md)] bg-[var(--color-light-100)]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
