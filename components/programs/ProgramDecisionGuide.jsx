const comparisons = [
  {
    label: "Choose by format when the main question is:",
    value: "Where will my child learn best each week?",
  },
  {
    label: "Choose by level when the main question is:",
    value: "How much does my child already understand in chess?",
  },
  {
    label: "Assessment helps most when you are unsure about:",
    value: "Both the stage and the best class format.",
  },
];

export default function ProgramDecisionGuide() {
  return (
    <section className="bg-[var(--color-back-500)] py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
            How To Choose
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--color-heading-900)] md:text-4xl">
            Parents usually need clarity before they need details
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-body-700)] md:text-lg">
            Before reading the full stage sections, it helps to understand what
            kind of decision you are actually making.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {comparisons.map((item) => (
            <div
              key={item.label}
              className="rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary-600)]">
                Quick decision rule
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-body-700)] md:text-base">
                {item.label}
              </p>
              <p className="mt-4 rounded-[var(--radius-md)] bg-[var(--color-light-100)] px-4 py-3 text-sm font-medium leading-relaxed text-[var(--color-heading-900)]">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
