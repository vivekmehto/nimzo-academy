import Section from "@/components/ui/Section";
import { useDemoModal } from "@/context/DemoModalContext";

export default function GalleryCTA() {
  const {openModal} = useDemoModal();
  return (
    <Section
      className="
        relative overflow-hidden
        bg-back-500
        py-16 sm:py-20 md:py-24
      "
    >
      <div className="mx-auto max-w-4xl px-6 text-center">

        {/* Heading */}
        <h2
          className="
            text-2xl
            sm:text-3xl
            md:text-4xl
            font-semibold
            leading-tight
            text-(--color-heading-900)
          "
        >
          Want to see this in person?
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
            text-body-700
          "
        >
          Join a free trial class and experience our chess training environment
          before enrolling.
        </p>

        {/* CTA Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={()=> openModal("demo")}
            className="
               inline-flex
              items-center
              justify-center
              rounded-(--radius-md)
              bg-accent-500
              px-8
              py-4
              text-sm
              sm:text-base
              font-semibold
              text-(--color-heading-900)
              transition
              hover:bg-accent-600
            "
          >
            Book a Free Trial
          </button>
        </div>

        {/* Trust Line (Optional but Nice) */}
        <p
          className="
            mt-6
            text-xs
            sm:text-sm
            text-muted-500
          "
        >
          No commitment required · Small batch training · Parent-friendly approach
        </p>

      </div>
    </Section>
  );
}
