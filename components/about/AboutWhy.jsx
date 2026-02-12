export default function AboutWhy() {
  return (
    <section className="bg-[var(--color-white-100)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="max-w-2xl animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-heading-900)] leading-tight">
            Why We Built Nimzo Academy
          </h2>
        </div>

        {/* Content */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* STORY — FIRST ON MOBILE */}
          <div
            className="
              animate-fade-up
              order-1 md:order-2
            "
          >
            <p className="text-base md:text-lg leading-relaxed text-[var(--color-body-700)] max-w-xl">
              While working with young learners, we noticed a pattern. Many
              children were introduced to chess too quickly—focused on winning
              games, memorizing moves, and competing early—without first
              understanding the game or building confidence.
            </p>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-[var(--color-body-700)] max-w-xl">
              At the same time, parents were looking for activities that could
              improve focus, patience, and thinking skills—not just screen time
              or short-term results.
            </p>

            <div
              className="
                mt-8
                border-l-2 md:border-l-4
                border-[var(--color-primary-600)]
                pl-4
                italic
                text-[var(--color-body-700)]
                max-w-lg
              "
            >
              We realized chess could do much more for children—if taught the
              right way.
            </div>
          </div>

          {/* CARDS — SECOND ON MOBILE */}
          <div
            className="
              grid grid-cols-1 gap-4
              animate-fade-up
              order-2 md:order-1
            "
          >
            <div className="border border-[var(--color-border-300)] rounded-[var(--radius-md)] p-5">
              <h3 className="font-medium text-[var(--color-heading-900)]">
                Less pressure, more understanding
              </h3>
              <p className="mt-2 text-sm text-[var(--color-body-700)]">
                Children learn better when they feel safe making mistakes.
              </p>
            </div>

            <div className="border border-[var(--color-border-300)] rounded-[var(--radius-md)] p-5">
              <h3 className="font-medium text-[var(--color-heading-900)]">
                Thinking skills before competition
              </h3>
              <p className="mt-2 text-sm text-[var(--color-body-700)]">
                We focus on decision-making, not just winning games.
              </p>
            </div>

            <div className="border border-[var(--color-border-300)] rounded-[var(--radius-md)] p-5">
              <h3 className="font-medium text-[var(--color-heading-900)]">
                A structured learning journey
              </h3>
              <p className="mt-2 text-sm text-[var(--color-body-700)]">
                Clear steps help children progress with confidence.
              </p>
            </div>
          </div>

        </div>

        {/* Closing Line */}
        <div className="mt-16 max-w-3xl animate-fade-up">
          <p className="text-base md:text-lg leading-relaxed text-[var(--color-body-700)]">
            Nimzo Academy was created to offer a thoughtful alternative—where
            chess is taught as a lifelong thinking skill, guided by structure,
            patience, and care, both online and offline.
          </p>
        </div>

      </div>
    </section>
  );
}
