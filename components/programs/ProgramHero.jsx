"use client";

import { Globe2, GraduationCap, House, MapPinned } from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";
import Button from "@/components/ui/Button";

export default function ProgramHero() {
  const { openModal } = useDemoModal();
  const formats = [
    {
      icon: MapPinned,
      title: "Centre Classes",
      text: "Best for children who improve with classroom rhythm and regular in-person structure.",
    },
    {
      icon: House,
      title: "Home Coaching",
      text: "Best for families who want more convenience and personal attention in select Delhi areas.",
    },
    {
      icon: Globe2,
      title: "Online Learning",
      text: "Best for schedule flexibility, distance, or families learning from outside Delhi.",
    },
  ];

  return (
    <section className="bg-[linear-gradient(180deg,var(--color-back-500)_0%,white_100%)]">
      <div className="mx-auto max-w-7xl px-6 py-14 sm:py-18 md:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-fade-up">
            <span
              className="
                inline-flex items-center gap-2
                rounded-full
                bg-[var(--color-primary-600)]/10
                px-4 py-1.5
                text-[11px] font-semibold uppercase tracking-[0.18em]
                text-[var(--color-primary-600)]
              "
            >
              <GraduationCap className="h-3.5 w-3.5" />
              Programs and Format Guide
            </span>

            <h1
              className="
                mt-5
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-bold
                tracking-tight
                text-[var(--color-heading-900)]
              "
            >
              Choose the right chess program
              <span className="block text-[var(--color-primary-600)]">
                for your child&apos;s stage and routine
              </span>
            </h1>

            <p
              className="
                mt-5
                max-w-2xl
                text-base
                leading-relaxed
                text-[var(--color-body-700)]
                sm:text-lg
              "
            >
              This page helps you make two decisions clearly: which class
              format fits your family best, and which learning stage fits your
              child best.
            </p>

            <p className="mt-3 text-sm text-[var(--color-muted-500)] sm:text-base">
              Centre, home, and online formats • beginner to advanced stages •
              honest guidance before enrollment
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button onClick={() => openModal("assessment")} size="lg">
                Book Free Assessment
              </Button>
              <Button href="#stage-guide" variant="secondary" size="lg">
                Compare Learning Stages
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-3 text-xs font-medium text-[var(--color-muted-500)] sm:text-sm">
              <span className="rounded-full border border-[var(--color-border-300)] bg-white px-4 py-2">
                Delhi centre classes
              </span>
              <span className="rounded-full border border-[var(--color-border-300)] bg-white px-4 py-2">
                Home coaching in select areas
              </span>
              <span className="rounded-full border border-[var(--color-border-300)] bg-white px-4 py-2">
                Online worldwide
              </span>
            </div>
          </div>

          <div className="animate-fade-up">
            <div className="rounded-[calc(var(--radius-lg)+0.15rem)] border border-[var(--color-border-300)] bg-white p-6 shadow-[0_24px_50px_rgba(17,26,77,0.08)] sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
                Three ways to learn with Nimzo
              </p>
              <div className="mt-5 space-y-4">
                {formats.map((format) => {
                  const Icon = format.icon;

                  return (
                    <div
                      key={format.title}
                      className="rounded-[var(--radius-md)] border border-[var(--color-border-300)] bg-[var(--color-light-100)] p-4"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--color-primary-600)]/10 text-[var(--color-primary-600)]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h2 className="text-lg font-semibold text-[var(--color-heading-900)]">
                            {format.title}
                          </h2>
                          <p className="mt-1 text-sm leading-relaxed text-[var(--color-body-700)]">
                            {format.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
