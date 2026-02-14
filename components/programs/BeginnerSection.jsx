"use client";

import { useDemoModal } from "@/context/DemoModalContext";

export default function BeginnerSection({setActiveCurriculum}) {

  const {openModal} = useDemoModal();

  return (
    <section className="bg-[var(--color-light-100)] py-16 sm:py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 animate-fade-up">
        <div className="grid items-start gap-14 md:gap-20 md:grid-cols-2">

          {/* LEFT — CONTENT */}
          <div>
            {/* Journey marker */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--color-primary-600)]" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[var(--color-muted-500)]">
                FOUNDATION STAGE
              </span>
            </div>

            {/* Title */}
            <h2 className="
              text-2xl
              sm:text-3xl
              md:text-4xl
              lg:text-4xl
              font-bold
              tracking-tight
              text-[var(--color-heading-900)]
            ">
              Beginner Chess Program
            </h2>

            {/* Core statement */}
            <p className="
              mt-4
              max-w-xl
              text-base
              sm:text-lg
              text-[var(--color-body-700)]
            ">
              This is where the chess journey begins — learning the game the
              right way, with clarity, structure, and confidence.
            </p>

            {/* Visual pause */}
            <div className="my-10 h-px w-12 bg-[var(--color-border-300)]" />

            {/* Core builds */}
            <ul className="
              space-y-4
              text-sm
              sm:text-base
              text-[var(--color-body-700)]
            ">
              <li>
                <strong className="font-semibold text-[var(--color-heading-900)]">
                  Board & piece understanding
                </strong>{" "}
                — how the game actually works
              </li>
              <li>
                <strong className="font-semibold text-[var(--color-heading-900)]">
                  Basic tactical awareness
                </strong>{" "}
                — spotting simple ideas and threats
              </li>
              <li>
                <strong className="font-semibold text-[var(--color-heading-900)]">
                  Game confidence
                </strong>{" "}
                — playing full games without fear or confusion
              </li>
            </ul>

            {/* Formats */}
            <div className="mt-10">
              <div className="flex flex-wrap gap-2">
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
            </div>

            {/* Outcome */}
            <p className="
              mt-10
              text-base
              sm:text-lg
              font-semibold
              text-[var(--color-heading-900)]
            ">
              Outcome:
              <span className="ml-2 font-normal text-[var(--color-body-700)]">
                A child who can confidently play a complete chess game and
                enjoys learning more.
              </span>
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
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
               onClick={() => setActiveCurriculum("beginner")}
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
              ">
                View Beginner Curriculum
              </button>
            </div>
          </div>

          {/* RIGHT — VISUAL */}
          <div className="relative mt-10 md:mt-0">
            <div className="
              aspect-square
              rounded-[var(--radius-lg)]
              border
              border-[var(--color-border-300)]
              bg-[var(--color-white-100)]
              p-6
              sm:p-8
            ">
              <div className="h-full w-full rounded-[var(--radius-md)] bg-[var(--color-light-100)]" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
