import Link from "next/link";
import Section from "@/components/ui/Section";

export default function ProgramsCTA() {
  return (
    <Section
      className="
        relative overflow-hidden
        bg-[var(--color-back-500)]
        py-16 sm:py-20 md:py-24
      "
    >
      <div className="mx-auto max-w-4xl px-6 text-center animate-fade-up">

        {/* Heading */}
        <h2
          className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            font-bold
            leading-tight
            text-[var(--color-heading-900)]
          "
        >
          Take the Next Step with Confidence
        </h2>

        {/* Subheading */}
        <p
          className="
            mt-4
            max-w-2xl
            mx-auto
            text-sm
            sm:text-base
            md:text-lg
            leading-relaxed
            text-[var(--color-body-700)]
          "
        >
          Book a free assessment and let our coaches guide your child through
          the right learning path.
        </p>

        {/* CTA Buttons */}
        <div
          className="
            mt-8
            flex
            items-center
            justify-center
          "
        >
          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              justify-center
              rounded-[var(--radius-md)]
              bg-[var(--color-accent-500)]
              px-8
              py-4
              text-sm
              sm:text-base
              font-semibold
              text-[var(--color-heading-900)]
              transition
              hover:bg-[var(--color-accent-600)]
            "
          >
            Book Free Assessment
          </Link>
        </div>

        {/* Trust Line */}
        <p
          className="
            mt-6
            text-xs
            sm:text-sm
            text-[var(--color-muted-500)]
          "
        >
          No commitment required · Small batch sizes · Regular parent feedback
        </p>

      </div>
    </Section>
  );
}
