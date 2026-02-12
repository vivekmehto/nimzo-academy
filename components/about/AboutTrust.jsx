export default function AboutTrust() {
  return (
    <section className="bg-[var(--color-white-100)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="max-w-2xl animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-heading-900)] leading-tight">
            Built on Care, Not Just Coaching
          </h2>

          <p className="mt-4 text-base md:text-lg leading-relaxed text-[var(--color-body-700)]">
            We understand that choosing an academy is not just about learning
            chess — it’s about trusting someone with your child’s time,
            confidence, and growth.
          </p>
        </div>

        {/* Content */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">

          {/* LEFT — Story (second on mobile) */}
          <div className="animate-fade-up order-2 md:order-1">
            <p className="text-base md:text-lg leading-relaxed text-[var(--color-body-700)] max-w-xl">
              At Nimzo Academy, children are guided with patience and attention.
              Coaches take the time to understand how each child learns, where
              they feel unsure, and how to support them without pressure.
            </p>

            <p className="mt-6 text-base md:text-lg leading-relaxed text-[var(--color-body-700)] max-w-xl">
              Parents are kept informed, questions are welcomed, and progress is
              discussed openly. Learning is treated as a shared journey — not a
              transaction.
            </p>

            {/* Quote — softened on mobile */}
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
              Every child deserves guidance that builds confidence, not
              comparison.
            </div>
          </div>

          {/* RIGHT — Expectations (first on mobile) */}
          <div className="animate-fade-up order-1 md:order-2">
            <h3 className="font-medium text-[var(--color-heading-900)] mb-4">
              What parents can expect
            </h3>

            <ul
  className="
    space-y-3
    text-[var(--color-body-700)]
    text-sm md:text-base
  "
>
  {[
    "A structured learning plan designed for children",
    "Calm, respectful coaching environments",
    "Clear communication and regular guidance",
    "Support across both online and offline sessions",
    "A focus on long-term growth, not short-term wins",
  ].map((item, index) => (
    <li key={index} className="flex items-start gap-3">
      <span
        className="
          mt-2
          h-2 w-2
          rounded-full
          bg-[var(--color-primary-600)]
          flex-shrink-0
        "
      />
      <span>{item}</span>
    </li>
  ))}
</ul>

          </div>
        </div>
      </div>
    </section>
  );
}
