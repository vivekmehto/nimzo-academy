import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <Section id="home">
      <div
        className="
          grid items-center gap-10
          md:grid-cols-2
        "
      >
        {/* LEFT — Content */}
        <div className="text-center md:text-left">
          {/* H1 */}
          <h1
            className="
              text-3xl font-bold
              text-[var(--color-heading-900)]
              sm:text-4xl
              md:text-5xl
              leading-tight
            "
          >
            Chess Classes for Kids
          </h1>

          {/* Subheading */}
          <p
            className="
              mt-3
              text-base font-medium
              text-[var(--color-primary-600)]
              md:text-lg
            "
          >
            Ages 5–15 · Online & Offline Programs
          </p>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-xl
              text-base
              leading-relaxed
              text-[var(--color-body-700)]
              mx-auto md:mx-0
            "
          >
            Structured, coach-led chess training that helps children develop
            focus, logical thinking, and confidence — step by step.
          </p>

          {/* CTA */}
          <div
            className="
              mt-7
              flex flex-col items-center gap-4
              sm:flex-row
              sm:justify-center
              md:justify-start
            "
          >
            <Button href="/contact">
              Book Free Demo
            </Button>

            <a
              href="#programs"
              className="
                text-sm font-medium
                text-[var(--color-primary-600)]
                hover:underline
              "
            >
              View Programs →
            </a>
          </div>

          {/* Micro trust text */}
          <p
            className="
              mt-4
              text-sm
              text-[var(--color-muted-500)]
            "
          >
            Beginner to Intermediate · Parent-friendly batches
          </p>
        </div>

        {/* RIGHT — Image */}
        <div className="flex justify-center md:justify-end">
          <div
            className="
              relative
              w-full
              max-w-sm
              md:max-w-md
            "
          >
            <Image
              src="/hero-chess.jpg"
              alt="Child learning chess in a structured class"
              width={500}
              height={500}
              priority
              className="
                rounded-[var(--radius-lg)]
                object-cover
                shadow-lg
              "
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
