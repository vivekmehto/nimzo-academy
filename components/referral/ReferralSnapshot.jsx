import { CircleCheckBig, Gift, Users } from "lucide-react";

export default function ReferralSnapshot() {
  const items = [
    {
      icon: Users,
      title: "Who can refer",
      text: "Active Nimzo Academy families.",
    },
    {
      icon: CircleCheckBig,
      title: "What counts",
      text: "New student, paid enrollment, 30 active days.",
    },
    {
      icon: Gift,
      title: "When rewards apply",
      text: "After the referral becomes fully valid.",
    },
  ];

  return (
    <section className="bg-[var(--color-white-100)] py-8 md: mt-10 md:py-0">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-px overflow-hidden rounded-[calc(var(--radius-lg)+0.2rem)] border border-[var(--color-border-300)] bg-[var(--color-border-300)] shadow-[0_16px_40px_rgba(15,23,42,0.06)] md:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="bg-[var(--color-white-100)] px-5 py-5 md:min-h-[114px] md:px-6 md:py-6"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-600)]/10 text-[var(--color-primary-600)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[var(--color-primary-600)]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[var(--color-body-700)] md:text-[0.95rem]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
