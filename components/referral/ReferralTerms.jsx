import Accordion from "@/components/ui/Accordion";

export default function ReferralTerms() {
  const ruleItems = [
    {
      question: "Eligibility",
      answer: (
        <ul className="list-disc space-y-2 pl-5">
          <li>Referrer must be an active Nimzo Academy student.</li>
          <li>The referred student must not have previously enrolled at Nimzo Academy.</li>
          <li>Referral must be submitted through the official website form.</li>
          <li>The referred student must pay the full first-month fee.</li>
          <li>The student must complete a minimum of 30 days of active training.</li>
        </ul>
      ),
    },
    {
      question: "Reward calculation",
      answer: (
        <ul className="list-disc space-y-2 pl-5">
          <li>Coaching fee credits are awarded as per the official reward structure.</li>
          <li>Upon claiming 1 free month, referral count resets.</li>
          <li>Maximum 1 free month allowed per quarter per student.</li>
          <li>Referral rewards are applicable only after eligibility conditions are met.</li>
        </ul>
      ),
    },
    {
      question: "Credit usage",
      answer: (
        <ul className="list-disc space-y-2 pl-5">
          <li>Credits may be used toward monthly coaching fees.</li>
          <li>Credits may be used for Nimzo Academy tournaments and workshops.</li>
          <li>Credits are non-transferable and cannot be exchanged for cash.</li>
          <li>Credits must be used within 3 months of issuance.</li>
        </ul>
      ),
    },
    {
      question: "International referrals and fair use",
      answer: (
        <div className="space-y-4">
          <p>
            Referral rewards for international enrollments are provided in equivalent
            training benefits, such as complimentary private strategy sessions,
            based on the student&apos;s enrollment category.
          </p>
          <ul className="list-disc space-y-2 pl-5">
            <li>Nimzo Academy reserves the right to verify all referrals.</li>
            <li>Duplicate or manipulated referrals will not be counted.</li>
            <li>The academy may modify the referral program structure with prior notice.</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <section className="bg-[var(--color-white-100)] py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
            Full Program Rules
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--color-heading-900)] md:text-4xl">
            Keep the full rules available without making the page feel heavy
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[var(--color-body-700)] md:text-lg">
            The main decision points are already shown above. These details stay
            available for transparency when a parent wants to read everything carefully.
          </p>
        </div>

        <div className="rounded-[calc(var(--radius-lg)+0.1rem)] border border-[var(--color-border-300)] bg-[var(--color-light-100)] p-3 shadow-sm">
          <div className="rounded-[var(--radius-lg)] bg-[var(--color-white-100)] px-6 py-4 md:px-7">
            <Accordion items={ruleItems} />
          </div>
        </div>
      </div>
    </section>
  );
}
