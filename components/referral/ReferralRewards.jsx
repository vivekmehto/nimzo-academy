export default function ReferralRewards() {
  const rewards = [
    {
      label: "1 valid referral",
      value: "Rs. 500",
      note: "A simple first win for referring a new family.",
      accent: "border-[var(--color-border-300)] bg-white/95",
    },
    {
      label: "2 valid referrals",
      value: "Rs. 1200",
      note: "Momentum builds with a stronger combined reward.",
      accent: "border-[var(--color-border-300)] bg-white/95 md:translate-y-6",
    },
    {
      label: "3 valid referrals",
      value: "Rs. 1800",
      note: "Designed to reward consistent parent advocacy.",
      accent: "border-[var(--color-border-300)] bg-white/95 md:translate-y-10",
    },
    {
      label: "4 valid referrals",
      value: "1 month free",
      note: "The top milestone and clearest reward on the page.",
      accent:
        "border-[var(--color-accent-500)] bg-[linear-gradient(180deg,#fff7d9_0%,#ffffff_100%)] ring-4 ring-[var(--color-accent-500)]/15 md:-translate-y-2",
    },
  ];

  return (
    <section className="bg-[var(--color-primary-600)] py-20 text-white md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
            Reward Ladder
          </p>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Make the reward progression feel exciting and easy to understand
          </h2>

          <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">
            Each reward is unlocked only after a referral becomes fully valid,
            keeping the structure motivating and fair.
          </p>
        </div>

        <div className="relative mt-2">
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-white/20 md:block" />
          <div className="grid gap-6 md:grid-cols-4 md:items-end">
            {rewards.map((reward) => (
              <div
                key={reward.label}
                className={`relative flex h-full min-h-[220px] flex-col rounded-[calc(var(--radius-lg)+0.1rem)] border p-7 text-[var(--color-heading-900)] shadow-[0_24px_40px_rgba(15,23,42,0.14)] transition ${reward.accent}`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-600)]">
                  {reward.label}
                </p>
                <p className="mt-4 text-3xl font-bold leading-tight text-[var(--color-heading-900)]">
                  {reward.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-body-700)]">
                  {reward.note}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center text-sm text-white/78">
          Maximum 1 free month allowed per quarter per student. Rewards apply
          only after the referral becomes valid.
        </div>
      </div>
    </section>
  );
}
