import { ArrowDown, CreditCard, PhoneCall, Send } from "lucide-react";

export default function ReferralHow() {
  const steps = [
    {
      icon: Send,
      title: "Submit the referral",
      text: "Share the student details and the current Nimzo student name.",
    },
    {
      icon: PhoneCall,
      title: "We contact the family",
      text: "Our team explains the program and checks whether the student is a good fit.",
    },
    {
      icon: CreditCard,
      title: "Credits are added later",
      text: "Rewards apply after enrollment, fee payment, and 30 active days.",
    },
  ];

  return (
    <section className="bg-[var(--color-light-100)] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
            Simple Process
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--color-heading-900)] md:text-4xl">
            How the referral works from start to reward
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-body-700)] md:text-lg">
            The journey should feel easy for parents and easy for your team to manage.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const showConnector = index < steps.length - 1;

            return (
              <div key={step.title} className="relative">
                {showConnector && (
                  <>
                    <div className="absolute left-7 top-16 h-[calc(100%-3.2rem)] w-px bg-[var(--color-border-300)] md:hidden" />
                    <div className="absolute left-[calc(100%-1.5rem)] right-[-1.5rem] top-10 hidden h-px bg-[var(--color-border-300)] md:block" />
                    <div className="absolute right-[-0.65rem] top-[1.95rem] hidden text-[var(--color-muted-500)] md:block">
                      <ArrowDown className="h-4 w-4 -rotate-90" />
                    </div>
                  </>
                )}

                <div className="h-full min-h-[220px] rounded-[calc(var(--radius-lg)+0.1rem)] border border-[var(--color-border-300)] bg-[var(--color-white-100)] p-7 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-primary-600)] text-white shadow-lg shadow-[var(--color-primary-600)]/20">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--color-primary-600)]">
                        Step {index + 1}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-[var(--color-heading-900)]">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-[var(--color-body-700)] leading-relaxed">
                        {step.text}
                      </p>
                    </div>
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
