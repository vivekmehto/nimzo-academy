export const metadata = {
  title: "Chess Referral Program in Dwarka | Nimzo Academy",
  description:
    "Join Nimzo Academy’s Chess Referral Program in Dwarka, Delhi. Earn scholarship credits and help grow a structured chess community.",
};

export default function ReferralPage() {
  return (
    <main className="bg-[var(--color-white-100)]">

      {/* ================= HERO ================= */}
      <section className="bg-[var(--color-back-500)] py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div className="space-y-6 animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--color-heading-900)]">
              Chess Referral Program in Dwarka – Learn Chess the Right Way
            </h1>

            <p className="text-lg text-[var(--color-body-700)]">
              Help us grow a focused and disciplined chess community in Delhi by nominating a child who wants to learn chess the right way at Nimzo Academy.
            </p>

            <button className="px-6 py-3 rounded-[var(--radius-md)] bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white font-semibold transition">
              Nominate a Student
            </button>

            <p className="text-sm text-[var(--color-muted-500)]">
              For active Nimzo Academy families.
            </p>
          </div>

          <div className="bg-[var(--color-white-100)] rounded-[var(--radius-lg)] shadow-xl p-8">
            <p className="text-[var(--color-body-700)]">
              Structured chess coaching for serious learners in Dwarka, Delhi.
            </p>
          </div>

        </div>
      </section>

      {/* ================= WHY SECTION ================= */}
      <section className="py-20 bg-[var(--color-white-100)]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[var(--color-heading-900)] mb-12">
            Why Refer a Student to Nimzo Academy?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Structured Training System",
                desc: "A disciplined and curriculum-based approach designed for long-term chess improvement.",
              },
              {
                title: "Strong Learning Environment",
                desc: "Focused coaching batches that encourage thinking, strategy, and competitive growth.",
              },
              {
                title: "Community Scholarship Credits",
                desc: "Families contributing to academy growth receive structured scholarship benefits.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-[var(--radius-lg)] border border-[var(--color-border-300)] shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold mb-3 text-[var(--color-heading-900)]">
                  {item.title}
                </h3>
                <p className="text-[var(--color-body-700)]">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-20 bg-[var(--color-light-100)]">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-[var(--color-heading-900)] mb-12">
            How the Referral Program Works
          </h2>

          <div className="space-y-8 text-[var(--color-body-700)] text-lg">
            <p><strong>Step 1:</strong> Submit the official referral form below.</p>
            <p><strong>Step 2:</strong> The referred student enrolls and completes 30 days of training.</p>
            <p><strong>Step 3:</strong> Scholarship credits are issued as per the reward structure.</p>
          </div>
        </div>
      </section>

      {/* ================= REWARDS ================= */}
      <section className="py-20 bg-[var(--color-primary-600)] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Referral Rewards & Scholarship Credits
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "1 Referral", reward: "₹500 Credit" },
              { title: "2 Referrals", reward: "₹1200 Total Credit" },
              { title: "3 Referrals", reward: "₹1800 Total Credit" },
              { title: "4 Referrals", reward: "1 Month Free (₹2500 cap)" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white text-[var(--color-heading-900)] rounded-[var(--radius-lg)] p-6 text-center shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-xl font-bold">{item.reward}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-sm mt-8 opacity-90">
            Maximum 1 free month allowed per quarter.
          </p>
        </div>
      </section>

      {/* ================= TERMS ================= */}
      <section className="py-20 bg-[var(--color-white-100)]">
        <div className="max-w-5xl mx-auto px-6 space-y-10">
          <h2 className="text-3xl font-bold text-center text-[var(--color-heading-900)]">
            Referral Program Terms & Conditions
          </h2>

          <div className="space-y-6 text-[var(--color-body-700)]">
            <div>
              <h3 className="font-semibold text-[var(--color-heading-900)] mb-2">Eligibility</h3>
              <p>Referrer must be an active Nimzo Academy student. Referred student must complete full first-month payment and 30 days of training.</p>
            </div>

            <div>
              <h3 className="font-semibold text-[var(--color-heading-900)] mb-2">Reward Usage</h3>
              <p>Credits can be used for monthly fees, tournaments, or academy workshops. Credits are non-transferable and cannot be exchanged for cash.</p>
            </div>

            <div>
              <h3 className="font-semibold text-[var(--color-heading-900)] mb-2">Validity</h3>
              <p>Credits must be used within 3 months. Referral count resets after claiming a free month.</p>
            </div>

            <div>
              <h3 className="font-semibold text-[var(--color-heading-900)] mb-2">Fair Use Policy</h3>
              <p>Nimzo Academy reserves the right to verify referrals and reject duplicate or manipulated entries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 bg-[var(--color-back-500)] text-center">
        <div className="max-w-3xl mx-auto px-6 space-y-6">
          <h2 className="text-3xl font-bold text-[var(--color-heading-900)]">
            Know a Child Who Wants to Learn Chess the Right Way?
          </h2>

          <p className="text-[var(--color-body-700)] text-lg">
            Nominate them to experience structured chess coaching at Nimzo Academy in Dwarka.
          </p>

          <button className="px-8 py-3 rounded-[var(--radius-md)] bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white font-semibold transition">
            Nominate a Student
          </button>
        </div>
      </section>

    </main>
  );
}