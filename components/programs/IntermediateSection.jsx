export default function IntermediateSection() {
  return (
    <section className="bg-[var(--color-white-100)] py-14 sm:py-18 md:py-26">
      <div className="mx-auto max-w-6xl px-6 animate-fade-up">
        <div className="grid items-start gap-14 md:gap-20 md:grid-cols-2">

          {/* LEFT — VISUAL */}
          <div className="relative order-2 md:order-1 mt-10 md:mt-0">
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

          {/* RIGHT — CONTENT */}
          <div className="order-1 md:order-2">
            {/* Journey marker */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[var(--color-primary-600)]" />
              <span className="text-xs sm:text-sm font-semibold tracking-wide uppercase text-[var(--color-muted-500)]">
                GROWTH STAGE
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
              Intermediate Chess Program
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
              This stage focuses on structured thinking — learning how to plan,
              evaluate positions, and make purposeful decisions.
            </p>

            {/* Divider */}
            <div className="my-10 h-px w-12 bg-[var(--color-border-300)]" />

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
                  Opening principles
                </strong>{" "}
                — understanding ideas, not memorisation
              </li>
              <li>
                <strong className="font-semibold text-[var(--color-heading-900)]">
                  Tactical patterns
                </strong>{" "}
                — recognising common themes
              </li>
              <li>
                <strong className="font-semibold text-[var(--color-heading-900)]">
                  Game analysis habits
                </strong>{" "}
                — learning from wins and losses
              </li>
            </ul>

            {/* Formats */}
            <div className="mt-10 flex flex-wrap gap-2">
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
                mt-10
                text-base
                sm:text-lg
                font-semibold
                text-[var(--color-heading-900)]
              "
            >
              Outcome:
              <span className="ml-2 font-normal text-[var(--color-body-700)]">
                A player who thinks ahead and plays with intent.
              </span>
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
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
                "
              >
                Book Free Assessment
              </button>

              <button
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
                View Intermediate Curriculum
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
