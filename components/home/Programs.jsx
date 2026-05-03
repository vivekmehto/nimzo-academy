"use client";

import Link from "next/link";
import Section from "@/components/ui/Section";
import ProgramCard from "@/components/ui/ProgramCard";
import { programs } from "@/data/programs";

export default function Programs() {
  return (
    <Section
      id="programs"
      className="bg-linear-to-b from-back-500 to-white py-16 sm:py-20 lg:py-24"
    >
      {/* Header */}
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-heading-900 sm:text-3xl lg:text-4xl">
          Choose the class format that fits your child best
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-body-700 sm:text-base">
          Some children do best in regular centre classes, some need the
          convenience of home coaching, and some learn best online. We help
          families choose the right starting point.
        </p>
      </div>

      {/* Programs Grid */}
      <div
        className="
          mt-12 sm:mt-14 lg:mt-20
          grid gap-6 sm:gap-8
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          px-4 sm:px-6
        "
      >
        {programs.map((program) => (
          <ProgramCard key={program.id} {...program} />
        ))}
      </div>

      {/* Trust Line */}
      <div className="mt-12 sm:mt-16 text-center px-4">
        <p className="text-xs sm:text-sm text-muted-500">
          Delhi centre classes • home coaching • online worldwide
        </p>

        <p className="mt-3 text-xs text-muted-500">
          Not sure which format to choose? Start with a demo and we will guide you honestly.
        </p>

        <p className="mt-4 text-sm text-body-700">
          For regular offline learning, start with our{" "}
          <Link
            href="/chess-classes-in-dwarka"
            className="font-semibold text-primary-600 transition hover:text-primary-700"
          >
            chess classes in Dwarka
          </Link>
          .
        </p>
      </div>
    </Section>
  );
}
