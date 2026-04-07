"use client";

import { useDemoModal } from "@/context/DemoModalContext";

const guides = [
  {
    eyebrow: "First Decision",
    title: "Choose the class format",
    description:
      "Format is mostly about routine, travel, and where your child learns best.",
    points: [
      "Centre classes work well for children who benefit from classroom rhythm and routine.",
      "Home coaching suits families who want more convenience and personal attention.",
      "Online classes work well when flexibility or distance matters most.",
    ],
  },
  {
    eyebrow: "Second Decision",
    title: "Choose the learning level",
    description:
      "Level is about how much chess your child already understands, not age alone.",
    points: [
      "Beginner is for first-time learners or children still building confidence with the basics.",
      "Intermediate fits students who know the rules and are ready for better planning and game review.",
      "Advanced and elite stages are for competitive learners who want deeper preparation.",
    ],
  },
];

export default function ProgramDecisionGuide() {
  const { openModal } = useDemoModal();

  return (
    <section className="bg-[var(--color-back-500)] py-14 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
            How To Choose
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--color-heading-900)] md:text-4xl">
            Parents usually need to choose two things
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-body-700)] md:text-lg">
            The right learning experience depends on both the class format and
            the student&apos;s current stage. We help families choose both in the
            assessment.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {guides.map((guide) => (
            <div
              key={guide.title}
              className="rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-white p-7 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary-600)]">
                {guide.eyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[var(--color-heading-900)]">
                {guide.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-body-700)] md:text-base">
                {guide.description}
              </p>

              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-[var(--color-body-700)]">
                {guide.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-600)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-white px-6 py-5 text-center shadow-sm">
          <p className="text-sm text-[var(--color-body-700)] md:text-base">
            If you are unsure, start with a free assessment. We will recommend
            the right stage and the most suitable format without pushing you
            into the wrong batch.
          </p>
          <button
            onClick={() => openModal("assessment")}
            className="mt-5 inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent-500)] px-7 py-3 text-sm font-semibold text-[var(--color-heading-900)] transition hover:bg-[var(--color-accent-600)]"
          >
            Book Free Assessment
          </button>
        </div>
      </div>
    </section>
  );
}
