"use client";

import { useDemoModal } from "@/context/DemoModalContext";
import ProgramVisual from "../ui/ProgramVisual";

export default function MasterSection({setActiveCurriculum}) {

  const {openModal} = useDemoModal();

  return (
    <section id="master" className="bg-[var(--color-dark-900)] py-14 sm:py-18 md:py-24 text-white">
      <div className="mx-auto max-w-6xl px-6 animate-fade-up">
        <div className="grid items-start gap-14 md:gap-20 md:grid-cols-2">

          {/* LEFT — VISUAL */}
          <ProgramVisual
            imageSrc="/master-chess.jpg"
            alt="Master Chess Training"
          />

          {/* RIGHT — CONTENT */}
          <div className="order-1 md:order-2">
            {/* Journey marker */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--color-primary-500)]" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[var(--color-muted-500)]">
                ELITE STAGE
              </span>
            </div>

            {/* Title (bug fixed) */}
            <h2
              className="
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-4xl
                font-semibold
                tracking-tight
                text-white
              "
            >
              Master Chess Program
            </h2>

            {/* Core statement */}
            <p
              className="
                mt-4
                max-w-xl
                text-base
                sm:text-lg
                text-[var(--color-muted-500)]
              "
            >
              A long-term training environment for serious players focused on
              mastery, discipline, and sustained rating growth.
            </p>

            {/* Divider */}
            <div className="my-8 h-px w-12 bg-[var(--color-border-400)]" />

            {/* Core builds */}
            <ul
              className="
                space-y-4
                text-sm
                sm:text-base
                text-[var(--color-muted-500)]
              "
            >
              <li>
                <strong className="text-white">
                  Personalised preparation
                </strong>{" "}
                — individual strengths and goals
              </li>
              <li>
                <strong className="text-white">
                  Advanced endgame mastery
                </strong>{" "}
                — precision over flash
              </li>
              <li>
                <strong className="text-white">
                  Competitive psychology
                </strong>{" "}
                — consistency under pressure
              </li>
            </ul>

            {/* Formats */}
            <div className="mt-8 flex flex-wrap gap-2">
              <span className="rounded-full border border-[var(--color-border-400)] px-4 py-1.5 text-xs font-medium text-white">
                Online
              </span>
              <span className="rounded-full bg-[var(--color-primary-600)] px-4 py-1.5 text-xs font-semibold text-white">
                ⭐ Hybrid (Primary)
              </span>
            </div>

            {/* Outcome */}
            <p
              className="
                mt-8
                text-base
                sm:text-lg
                font-semibold
                text-white
              "
            >
              Outcome:
              <span className="ml-2 font-normal text-[var(--color-muted-500)]">
                Long-term mastery and consistent competitive growth.
              </span>
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button 
              onClick={()=> openModal("assessment")}
                className="
                  rounded-[var(--radius-md)]
                  border
                  border-[var(--color-border-400)]
                  px-8
                  py-4
                  text-sm
                  sm:text-base
                  font-semibold
                  text-white
                  transition
                  hover:bg-[var(--color-border-300)]
                  hover:text-primary-500
                "
              >
                Apply for Advanced Coaching
              </button>

              <button

               onClick={() => setActiveCurriculum("master")}
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
                  transition
                  hover:bg-[var(--color-accent-500)]
                  hover:text-white
                "
              >
                View Elite Curriculum
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
