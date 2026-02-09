import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function LearningPathCTA() {
  return (
    <Section className="bg-primary-600/4">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h3 className="text-2xl sm:text-3xl font-semibold text-heading-900">
          Not sure which level suits your child?
        </h3>

        <p className="mt-3 text-body-700">
          Book a free demo and get personal guidance from our experienced coach.
        </p>

        <div className="mt-6 flex justify-center">
          <Button
            href="/contact"
            className="
              bg-accent-500
              hover:bg-accent-600
              text-heading-900
              font-medium
              px-6 py-3
              rounded-md
            "
          >
            Book Free Demo
          </Button>
        </div>
      </div>
    </Section>
  );
}
