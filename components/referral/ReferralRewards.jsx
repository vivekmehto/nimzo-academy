export default function ReferralRewards() {
  return (
    <section className="py-24 bg-[var(--color-primary-600)] text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold">
            Referral Rewards & Community Scholarship Credits
          </h2>

          <p className="text-lg opacity-90">
            As a token of appreciation for helping expand structured chess coaching in Dwarka, 
            families receive scholarship credits as outlined below.
          </p>
        </div>

        {/* REWARD GRID */}
        <div className="grid md:grid-cols-4 gap-8">

          {/* 1 REFERRAL */}
          <div className="bg-[var(--color-white-100)] text-[var(--color-heading-900)] 
            p-8 rounded-[var(--radius-lg)] shadow-xl text-center animate-fade-up">

            <h3 className="text-lg font-semibold mb-4">
              1 Referral
            </h3>

            <p className="text-2xl font-bold text-[var(--color-primary-600)]">
              ₹500 Credit
            </p>
          </div>

          {/* 2 REFERRALS */}
          <div className="bg-[var(--color-white-100)] text-[var(--color-heading-900)] 
            p-8 rounded-[var(--radius-lg)] shadow-xl text-center animate-fade-up">

            <h3 className="text-lg font-semibold mb-4">
              2 Referrals
            </h3>

            <p className="text-2xl font-bold text-[var(--color-primary-600)]">
              ₹1200 Total Credit
            </p>
          </div>

          {/* 3 REFERRALS */}
          <div className="bg-[var(--color-white-100)] text-[var(--color-heading-900)] 
            p-8 rounded-[var(--radius-lg)] shadow-xl text-center animate-fade-up">

            <h3 className="text-lg font-semibold mb-4">
              3 Referrals
            </h3>

            <p className="text-2xl font-bold text-[var(--color-primary-600)]">
              ₹1800 Total Credit
            </p>
          </div>

          {/* 4 REFERRALS */}
          <div className="bg-[var(--color-white-100)] text-[var(--color-heading-900)] 
            p-8 rounded-[var(--radius-lg)] shadow-xl text-center animate-fade-up">

            <h3 className="text-lg font-semibold mb-4">
              4 Referrals
            </h3>

            <p className="text-2xl font-bold text-[var(--color-primary-600)]">
              1 Month Free 
            </p>
          </div>

        </div>

        {/* FOOTNOTE */}
        <div className="text-center mt-12 text-sm opacity-90">
          Maximum 1 free month allowed per quarter per student.
        </div>

      </div>
    </section>
  );
}