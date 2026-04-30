import Accordion from "@/components/ui/Accordion";

export default function ReferralTerms() {
  const ruleItems = [
    {
      question: "Who is eligible",
      answer: (
        <ul className="list-disc space-y-2 pl-5">
          <li>The referring family must currently be learning with Nimzo Academy.</li>
          <li>The referred child must be new to Nimzo Academy.</li>
          <li>The referral should be submitted through the official website form.</li>
          <li>The referred child must pay the full first-month fee.</li>
          <li>The referred child must complete at least 30 days of active training.</li>
        </ul>
      ),
    },
    {
      question: "How rewards are calculated",
      answer: (
        <ul className="list-disc space-y-2 pl-5">
          <li>Coaching fee credits are awarded according to the reward structure shown above.</li>
          <li>Once 1 free month is claimed, the referral count resets.</li>
          <li>Maximum 1 free month allowed per quarter per student.</li>
          <li>Rewards apply only after all eligibility conditions are fully met.</li>
        </ul>
      ),
    },
    {
      question: "How credits can be used",
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
      question: "International referrals and fairness",
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
            Simple rules for full transparency
          </h2>

          <p className="mt-4 text-base leading-relaxed text-[var(--color-body-700)] md:text-lg">
            Everything important is already explained above. These details are
            here for parents who want to read the full policy carefully.
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
