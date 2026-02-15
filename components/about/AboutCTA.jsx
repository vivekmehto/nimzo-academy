"use client";

import Link from "next/link";
import { useDemoModal } from "@/context/DemoModalContext";

export default function AboutCTA() {
  const {openModal} = useDemoModal();
  return (
    <section className="bg-back-500 py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-6 text-center animate-fade-up">

        {/* Soft divider — visual anchor */}
        <div
          className="
            mx-auto
            mb-10
            h-px
            w-24
            bg-[var(--color-primary-600)]
            opacity-30
          "
        />

        {/* Soft kicker */}
        <p className="text-sm font-medium text-[var(--color-muted-500)] mb-3">
          A thoughtful beginning matters
        </p>

        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-heading-900)] leading-tight">
          Let’s Find the Right Starting Point for Your Child
        </h2>

        {/* Main copy */}
        <p className="mt-6 text-base md:text-lg leading-relaxed text-[var(--color-body-700)]">
          If you’re considering chess as a meaningful learning activity for
          your child, we’d be happy to guide you. There’s no pressure to decide
          immediately — just a conversation to understand what your child needs
          right now.
        </p>

        {/* Gentle reassurance */}
        <p className="mt-4 text-sm text-[var(--color-muted-500)]">
          Questions are welcome. Guidance is honest. Progress is gradual.
        </p>

        {/* CTA buttons */}
        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <button onClick={() => openModal("demo")}
            className="
              inline-flex
              items-center
              justify-center
              rounded-[var(--radius-md)]
              bg-accent-500
              px-8 py-4
              text-sm font-bold
              transition
              hover:bg-accent-600
            "
          >
            Book Free Demo
          </button>

          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              justify-center
              rounded-[var(--radius-md)]
              border border-[var(--color-border-400)]
              px-8 py-4
              text-sm font-bold
              text-primar-600
              transition
              hover:border-[var(--color-primary-600)]
              hover:text-[var(--color-primary-600)]
            "
          >
            Talk to Us
          </Link>
        </div>
      </div>
    </section>
  );
}
