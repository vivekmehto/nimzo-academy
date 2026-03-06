export default function ReferralCTA() {
  return (
    <section className="py-24 bg-[var(--color-back-500)] text-center">
      <div className="max-w-3xl mx-auto px-6 space-y-6 animate-fade-up">

        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading-900)] leading-tight">
          Know a Child Who Wants to Learn Chess the Right Way?
        </h2>

        <p className="text-lg text-[var(--color-body-700)]">
          Nominate them to experience structured chess coaching at Nimzo Academy in Dwarka, Delhi.
        </p>

        <div>
          <a
            href="#referral-form"
            className="inline-block px-8 py-3 rounded-[var(--radius-md)]
            bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)]
            text-white font-semibold transition"
          >
            Nominate a Student
          </a>
        </div>

      </div>
    </section>
  );
}