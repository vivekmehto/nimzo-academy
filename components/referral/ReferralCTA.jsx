import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ReferralCTA() {
  return (
    <section className="bg-[var(--color-back-500)] py-24 text-center">
      <div className="mx-auto max-w-3xl px-6 space-y-6 animate-fade-up">
        <h2 className="text-3xl font-bold leading-tight text-[var(--color-heading-900)] md:text-4xl">
          Know a parent who may be looking for serious chess coaching?
        </h2>

        <p className="text-lg text-[var(--color-body-700)]">
          Send the referral while the interest is fresh. We will speak to the
          family personally, explain the options clearly, and keep the process respectful.
        </p>

        <div>
          <Button href="#referral-form" size="lg" className="gap-2 px-8">
            Submit a Referral
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
