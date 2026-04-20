import Link from "next/link";

const stages = [
  {
    stage: "Foundation Stage",
    title: "Beginner",
    fit: "Best for children who are just starting or still unsure with the basics.",
    outcome: "Learns the rules correctly and begins playing with confidence.",
    href: "#beginner",
  },
  {
    stage: "Growth Stage",
    title: "Intermediate",
    fit: "Best for students who know the rules and are ready for better planning.",
    outcome: "Starts thinking with more structure and purpose during games.",
    href: "#intermediate",
    highlighted: true,
  },
  {
    stage: "Performance Stage",
    title: "Advanced",
    fit: "Best for competitive learners who need deeper game understanding.",
    outcome: "Builds tournament discipline, calculation, and stronger preparation.",
    href: "#advanced",
  },
  {
    stage: "Elite Stage",
    title: "Master",
    fit: "Best for serious long-term learners with strong competitive intent.",
    outcome: "Receives more intensive guidance for sustained competitive growth.",
    href: "#master",
  },
];

export default function ProgramTimeline() {
  return (
    <section id="stage-guide" className="bg-[var(--color-white-100)] py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 animate-fade-up">
        <div className="mb-10 sm:mb-12 text-center">
          <h2
            className="
              text-2xl
              sm:text-3xl
              font-bold
              tracking-tight
              text-[var(--color-heading-900)]
            "
          >
            Quick guide to the learning stages
          </h2>
          <p
            className="
              mt-3
              text-sm
              sm:text-base
              text-[var(--color-body-700)]
            "
          >
            This is the fastest way to understand which stage sounds closest to
            your child right now.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {stages.map((stage) => (
            <div
              key={stage.title}
              className={`rounded-[calc(var(--radius-lg)+0.05rem)] border p-6 shadow-sm transition ${
                stage.highlighted
                  ? "border-[var(--color-primary-600)] bg-[linear-gradient(180deg,rgba(49,75,200,0.06)_0%,#ffffff_100%)] ring-2 ring-[var(--color-primary-600)]/10"
                  : "border-[var(--color-border-300)] bg-[var(--color-light-100)]"
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--color-primary-600)] sm:text-xs">
                  {stage.stage}
                </p>
                {stage.highlighted && (
                  <span className="rounded-full bg-[var(--color-accent-500)] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-heading-900)]">
                    Popular
                  </span>
                )}
              </div>
              <h3 className="mt-3 text-xl font-semibold text-[var(--color-heading-900)]">
                {stage.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-body-700)]">
                {stage.fit}
              </p>
              <div className="mt-5 rounded-[var(--radius-md)] bg-white px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-muted-500)]">
                  Outcome
                </p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-heading-900)]">
                  {stage.outcome}
                </p>
              </div>
              <Link
                href={stage.href}
                className="mt-5 inline-flex items-center text-sm font-semibold text-[var(--color-primary-600)] transition hover:text-[var(--color-primary-700)]"
              >
                Explore {stage.title} stage
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
