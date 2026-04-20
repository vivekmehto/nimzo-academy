import Image from "next/image";
import { ArrowRight, CircleCheckBig, Clock3, Gift } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ReferralHero() {
  const highlights = [
    {
      icon: CircleCheckBig,
      title: "Valid referral",

    },
    {
      icon: Clock3,
      title: "30 active days",

    },
    {
      icon: Gift,
      title: "Earn rewards",

    },
  ];

  return (
    <section className="bg-[linear-gradient(135deg,var(--color-back-500)_0%,white_52%,var(--color-light-100)_100%)] py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:gap-16">
          <div className="space-y-7 animate-fade-up">
            <p className="inline-flex items-center rounded-full border border-[var(--color-border-300)] bg-[var(--color-white-100)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)] shadow-sm">
              For Active Nimzo Academy Families
            </p>

            <div className="space-y-4">
              <h1 className="max-w-2xl text-4xl font-bold leading-tight text-[var(--color-heading-900)] md:text-5xl md:leading-[1.06]">
                Refer a student. Earn coaching fee credits.
              </h1>

              <p className="max-w-xl text-lg leading-relaxed text-[var(--color-body-700)] md:text-xl">
                Invite a serious learner to Nimzo Academy in Dwarka, Delhi. It
                takes less than a minute to submit, and we handle the family
                conversation from there.
              </p>
            </div>

            <div className="grid gap-3 sm:auto-rows-fr sm:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="h-full rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-[var(--color-white-100)] p-5 shadow-sm"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary-600)]/10 text-[var(--color-primary-600)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-[var(--color-heading-900)]">
                          {item.title}
                        </p>

                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="#referral-form" size="lg" className="gap-2 px-8">
                Submit a Referral
                <ArrowRight className="h-4 w-4" />
              </Button>

            </div>
          </div>

          <div className="relative animate-fade-up">
            <div className="absolute -inset-3 rounded-[calc(var(--radius-lg)+0.4rem)] bg-gradient-to-tr from-[var(--color-primary-600)]/15 via-transparent to-[var(--color-accent-500)]/25 blur-2xl" />

            <div className="relative overflow-hidden rounded-[calc(var(--radius-lg)+0.35rem)] border border-white/70 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
              <Image
                src="/gallery/training-3.jpg"
                alt="Children learning chess at Nimzo Academy"
                width={760}
                height={620}
                priority
                className="h-[340px] w-full object-cover md:h-[460px] lg:h-[500px]"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[rgba(15,23,42,0.78)] via-[rgba(15,23,42,0.34)] to-transparent px-5 pb-5 pt-16 text-white md:px-6 md:pb-6">
                <div className="max-w-xs rounded-[var(--radius-lg)] border border-white/20 bg-white/12 p-4 backdrop-blur-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80">
                    Reward Ladder
                  </p>
                  <div className="mt-3 space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span>1 valid referral</span>
                      <span className="font-semibold">Rs. 500</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>2 valid referrals</span>
                      <span className="font-semibold">Rs. 1200</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>4 valid referrals</span>
                      <span className="font-semibold">1 month free</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
