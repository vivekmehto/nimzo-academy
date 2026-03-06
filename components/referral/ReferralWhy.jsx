export default function ReferralWhy() {
  return (
    <section className="py-24 bg-[var(--color-white-100)]">
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading-900)]">
            Why Refer a Student to Nimzo Academy?
          </h2>

          <p className="text-lg text-[var(--color-body-700)]">
            Nimzo Academy is committed to structured chess coaching in Dwarka, 
            designed for students who want disciplined improvement and long-term growth. 
            Our referral program strengthens this learning ecosystem.
          </p>
        </div>

        {/* 3 CARD GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* CARD 1 */}
          <div className="p-8 rounded-[var(--radius-lg)] 
            border border-[var(--color-border-300)] 
            shadow-sm hover:shadow-md transition duration-300 
            bg-[var(--color-white-100)] animate-fade-up">

            <h3 className="text-xl font-semibold mb-4 text-[var(--color-heading-900)]">
              Structured Training System
            </h3>

            <p className="text-[var(--color-body-700)]">
              Our curriculum focuses on fundamentals, tactical awareness, 
              positional understanding, and tournament preparation — ensuring 
              students learn chess the right way.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="p-8 rounded-[var(--radius-lg)] 
            border border-[var(--color-border-300)] 
            shadow-sm hover:shadow-md transition duration-300 
            bg-[var(--color-white-100)] animate-fade-up">

            <h3 className="text-xl font-semibold mb-4 text-[var(--color-heading-900)]">
              Disciplined Learning Environment
            </h3>

            <p className="text-[var(--color-body-700)]">
              We maintain focused batches that promote serious improvement, 
              logical thinking, and consistent progress rather than casual play.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="p-8 rounded-[var(--radius-lg)] 
            border border-[var(--color-border-300)] 
            shadow-sm hover:shadow-md transition duration-300 
            bg-[var(--color-white-100)] animate-fade-up">

            <h3 className="text-xl font-semibold mb-4 text-[var(--color-heading-900)]">
              Community Scholarship Credits
            </h3>

            <p className="text-[var(--color-body-700)]">
              Families who contribute to expanding structured chess coaching 
              in Delhi receive Community Scholarship Credits as a token of appreciation.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}