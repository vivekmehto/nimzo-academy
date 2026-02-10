export default function ProgramTimeline() {
  return (
    <section className="bg-[var(--color-white-100)] py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6 animate-fade-up">

        {/* Section heading */}
        <div className="mb-10 sm:mb-12 text-center">
          <h2 className="
            text-2xl
            sm:text-3xl
            font-bold
            tracking-tight
            text-[var(--color-heading-900)]
          ">
            The Chess Learning Journey
          </h2>
          <p className="
            mt-3
            text-sm
            sm:text-base
            text-[var(--color-body-700)]
          ">
            A clear, structured progression designed to support long-term growth
            at every stage of learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line */}
          <div className="absolute left-3 top-0 h-full w-px bg-[var(--color-border-300)]" />

          <div className="space-y-10 sm:space-y-12">

            {/* Beginner */}
            <div className="relative flex gap-6">
              <span className="relative z-10 mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-primary-600)]" />
              <div>
                <span className="
                  text-[10px]
                  sm:text-xs
                  font-semibold
                  uppercase
                  tracking-wide
                  text-[var(--color-muted-500)]
                ">
                  Foundation Stage
                </span>
                <h3 className="
                  mt-0.5
                  text-base
                  sm:text-lg
                  font-semibold
                  text-[var(--color-heading-900)]
                ">
                  Beginner
                </h3>
                <p className="
                  mt-1.5
                  max-w-xl
                  text-sm
                  sm:text-base
                  text-[var(--color-body-700)]
                ">
                  Learning the game with clarity, confidence, and correct
                  fundamentals — building a strong base for future growth.
                </p>
              </div>
            </div>

            {/* Intermediate */}
            <div className="relative flex gap-6">
              <span className="relative z-10 mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-primary-600)]" />
              <div>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-[var(--color-muted-500)]">
                  Growth Stage
                </span>
                <h3 className="mt-0.5 text-base sm:text-lg font-semibold text-[var(--color-heading-900)]">
                  Intermediate
                </h3>
                <p className="mt-1.5 max-w-xl text-sm sm:text-base text-[var(--color-body-700)]">
                  Developing structured thinking, planning skills, and the
                  ability to make purposeful decisions during the game.
                </p>
              </div>
            </div>

            {/* Advanced */}
            <div className="relative flex gap-6">
              <span className="relative z-10 mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-primary-600)]" />
              <div>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-[var(--color-muted-500)]">
                  Performance Stage
                </span>
                <h3 className="mt-0.5 text-base sm:text-lg font-semibold text-[var(--color-heading-900)]">
                  Advanced
                </h3>
                <p className="mt-1.5 max-w-xl text-sm sm:text-base text-[var(--color-body-700)]">
                  Preparing for competitive play through deeper calculation,
                  positional understanding, and tournament readiness.
                </p>
              </div>
            </div>

            {/* Master */}
            <div className="relative flex gap-6">
              <span className="relative z-10 mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-primary-600)]" />
              <div>
                <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-[var(--color-muted-500)]">
                  Elite Stage
                </span>
                <h3 className="mt-0.5 text-base sm:text-lg font-semibold text-[var(--color-heading-900)]">
                  Master
                </h3>
                <p className="mt-1.5 max-w-xl text-sm sm:text-base text-[var(--color-body-700)]">
                  A long-term training environment focused on mastery,
                  discipline, and sustained competitive growth.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
