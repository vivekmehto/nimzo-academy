export default function AboutJourney() {
  return (
    <section className="bg-[var(--color-back-500)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="max-w-2xl mb-14 md:mb-20 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-heading-900)] leading-tight">
            A Clear Learning Journey for Every Child
          </h2>

          <p className="mt-4 text-base md:text-lg leading-relaxed text-[var(--color-body-700)]">
            Each child progresses through a thoughtfully designed journey that
            builds understanding, confidence, and independence — step by step.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical line — DESKTOP ONLY */}
          <div
            className="
              hidden md:block
              absolute left-1/2
              top-0 bottom-0
              w-px
              bg-[var(--color-border-400)]
            "
          />

          {/* Stage 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 mb-12 md:mb-20 animate-fade-up">
            <div className="md:text-right md:pr-12">
              <h3 className="text-lg font-semibold text-[var(--color-heading-900)]">
                Comfort with the Game
              </h3>
              <p className="mt-2 text-[var(--color-body-700)] leading-relaxed">
                Children are introduced to the basics of chess — piece movement,
                rules, and simple patterns — in a calm and encouraging environment.
              </p>
            </div>
            <div className="hidden md:block" />
            {/* Dot — DESKTOP ONLY */}
            <span className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 h-3 w-3 rounded-full bg-[var(--color-primary-600)]" />
          </div>

          {/* Stage 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 mb-12 md:mb-20 animate-fade-up">
            <div className="hidden md:block" />
            <div className="md:pl-12">
              <h3 className="text-lg font-semibold text-[var(--color-heading-900)]">
                Focus and Early Planning
              </h3>
              <p className="mt-2 text-[var(--color-body-700)] leading-relaxed">
                Students begin learning planning ideas, basic tactics, and how
                to recognize common mistakes while playing.
              </p>
            </div>
            <span className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 h-3 w-3 rounded-full bg-[var(--color-primary-600)]" />
          </div>

          {/* Stage 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 mb-12 md:mb-20 animate-fade-up">
            <div className="md:text-right md:pr-12">
              <h3 className="text-lg font-semibold text-[var(--color-heading-900)]">
                Independent Decision-Making
              </h3>
              <p className="mt-2 text-[var(--color-body-700)] leading-relaxed">
                Children learn to analyze positions, evaluate choices, and
                explain their thinking — turning mistakes into learning moments.
              </p>
            </div>
            <div className="hidden md:block" />
            <span className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 h-3 w-3 rounded-full bg-[var(--color-primary-600)]" />
          </div>

          {/* Stage 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 animate-fade-up">
            <div className="hidden md:block" />
            <div className="md:pl-12">
              <h3 className="text-lg font-semibold text-[var(--color-heading-900)]">
                Calm Application Under Pressure
              </h3>
              <p className="mt-2 text-[var(--color-body-700)] leading-relaxed">
                When ready, students are guided into competitive play with a
                focus on mindset, composure, and consistency.
              </p>
            </div>
            <span className="hidden md:block absolute left-1/2 -translate-x-1/2 top-2 h-3 w-3 rounded-full bg-[var(--color-primary-600)]" />
          </div>

        </div>
      </div>
    </section>
  );
}
