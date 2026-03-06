export default function ReferralTerms() {
  return (
    <section className="py-24 bg-[var(--color-white-100)]">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 animate-fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-heading-900)]">
            Referral Program Terms & Conditions
          </h2>

          <p className="text-lg text-[var(--color-body-700)]">
            To ensure fairness and transparency for all families, the following
            terms apply to the Nimzo Academy Chess Referral Program.
          </p>
        </div>

        <div className="space-y-12">

          {/* ELIGIBILITY */}
          <div className="border border-[var(--color-border-300)] rounded-[var(--radius-lg)] p-8 animate-fade-up">
            <h3 className="text-xl font-semibold mb-6 text-[var(--color-heading-900)]">
              1. Eligibility
            </h3>

            <ul className="space-y-3 text-[var(--color-body-700)] list-disc pl-6">
              <li>Referrer must be an active Nimzo Academy student.</li>
              <li>The referred student must not have previously enrolled at Nimzo Academy.</li>
              <li>Referral must be submitted through the official website form.</li>
              <li>The referred student must pay the full first-month fee.</li>
              <li>The student must complete a minimum of 30 days of active training.</li>
            </ul>
          </div>

          {/* REWARD CALCULATION */}
          <div className="border border-[var(--color-border-300)] rounded-[var(--radius-lg)] p-8 animate-fade-up">
            <h3 className="text-xl font-semibold mb-6 text-[var(--color-heading-900)]">
              2. Reward Calculation
            </h3>

            <ul className="space-y-3 text-[var(--color-body-700)] list-disc pl-6">
              <li>Scholarship credits are awarded as per the official reward structure.</li>
              <li>Upon claiming 1 free month, referral count resets.</li>
              <li>Maximum 1 free month allowed per quarter per student.</li>
              <li>Referral rewards are applicable only after eligibility conditions are met.</li>
            </ul>
          </div>

          {/* CREDIT USAGE */}
          <div className="border border-[var(--color-border-300)] rounded-[var(--radius-lg)] p-8 animate-fade-up">
            <h3 className="text-xl font-semibold mb-6 text-[var(--color-heading-900)]">
              3. Scholarship Credit Usage
            </h3>

            <ul className="space-y-3 text-[var(--color-body-700)] list-disc pl-6">
              <li>Credits may be used toward monthly coaching fees.</li>
              <li>Credits may be used for Nimzo Academy tournaments and workshops.</li>
              <li>Credits are non-transferable and cannot be exchanged for cash.</li>
              <li>Credits must be used within 3 months of issuance.</li>
            </ul>
          </div>

          {/* INTERNATIONAL REFERRALS */}
          <div className="border border-[var(--color-border-300)] rounded-[var(--radius-lg)] p-8 animate-fade-up">
            <h3 className="text-xl font-semibold mb-6 text-[var(--color-heading-900)]">
              4. International Referrals
            </h3>

            <p className="text-[var(--color-body-700)]">
              Referral rewards for international enrollments are provided in
              equivalent training benefits (such as complimentary private strategy sessions),
              based on the student’s enrollment category.
            </p>
          </div>

          {/* FAIR USE */}
          <div className="border border-[var(--color-border-300)] rounded-[var(--radius-lg)] p-8 animate-fade-up">
            <h3 className="text-xl font-semibold mb-6 text-[var(--color-heading-900)]">
              5. Fair Use Policy
            </h3>

            <ul className="space-y-3 text-[var(--color-body-700)] list-disc pl-6">
              <li>Nimzo Academy reserves the right to verify all referrals.</li>
              <li>Duplicate or manipulated referrals will not be counted.</li>
              <li>The academy may modify the referral program structure with prior notice.</li>
            </ul>

            <p className="mt-6 text-sm text-[var(--color-muted-500)]">
              The referral program is intended for genuine community building and long-term development.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}