export default function ReferralHero() {
  return (
    <section className="bg-[var(--color-back-500)] py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--color-heading-900)]">
            Chess Referral Program in Dwarka – Learn Chess the Right Way
          </h1>

          <p className="text-lg text-[var(--color-body-700)]">
            Help us grow a focused and disciplined chess community in Delhi by 
            nominating a child who wants to learn chess the right way at Nimzo Academy.
          </p>

          <p className="text-[var(--color-muted-500)] text-sm">
            Open to active Nimzo Academy families.
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

        {/* RIGHT VISUAL BLOCK */}
        <div className="bg-[var(--color-white-100)] rounded-[var(--radius-lg)] shadow-xl p-8 animate-fade-up">
          <div className="h-64 md:h-80 bg-[var(--color-light-100)] rounded-[var(--radius-md)] flex items-center justify-center text-[var(--color-muted-500)]">
            Chess Academy Image Placeholder
          </div>
        </div>

      </div>
    </section>
  );
}