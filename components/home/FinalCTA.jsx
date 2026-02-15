"use client";

import Link from "next/link";
import Section from "@/components/ui/Section";
import { useDemoModal } from "@/context/DemoModalContext";

export default function FinalCTA() {
  const { openModal } = useDemoModal();
  return (
    <Section
      className="
        relative overflow-hidden
        bg-linear-to-br
        from-white
        via-back-500)]
        to-white
        py-24 sm:py-32
      "
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2
          className="
            text-3xl sm:text-4xl lg:text-5xl
            font-bold
            leading-tight
            text-heading-900
          "
        >
          Help your child build a{" "}
          <span className="text-primary-600">strong foundation</span> in chess
        </h2>

        {/* Subheading */}
        <p
          className="
            mt-6
            max-w-2xl
            mx-auto
            text-base sm:text-lg
            leading-relaxed
            text-body-700
          "
        >
          Our structured online chess classes for kids focus on developing
          concentration, confidence, and strategic thinking — essential skills
          that support academic performance and personal growth.
        </p>

        {/* CTA Buttons */}
        <div
          className="
            mt-12
            flex flex-col sm:flex-row
            items-center justify-center
            gap-5
          "
        >
          {/* Primary CTA */}
          <button
            
            onClick={()=> openModal("demo")}
            className="
              inline-flex items-center justify-center
              rounded-full
              bg-accent-500
              px-9 py-4
              text-base font-semibold
              text-heading-900
              shadow-lg
              transition-all
              hover:bg-accent-600
              hover:shadow-xl
              cursor-pointer
            "
          >
            Book a Free Demo Class
          </button>

          {/* Secondary CTA */}
          <Link
            href="/programs"
            className="
              inline-flex items-center justify-center
              rounded-full
              border border-primary-600
              px-9 py-4
              text-base font-medium
              text-primary-600
              transition
              cursor-pointer
            hover:bg-primary-600/5
            "
          >
            Explore Chess Programs
          </Link>
        </div>

        {/* Trust Line */}
        <p
          className="
            mt-10
            text-sm
            text-muted-500
          "
        >
          No commitment required · Small batch sizes · Regular parent feedback
        </p>
      </div>
    </Section>
  );
}
