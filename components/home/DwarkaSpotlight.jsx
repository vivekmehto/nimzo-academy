"use client";

import Link from "next/link";
import { ArrowRight, Clock3, MapPinned, Phone } from "lucide-react";
import Section from "@/components/ui/Section";

const highlights = [
  "Structured offline chess classes for beginners, improvers, and serious learners",
  "Based in Dwarka for families looking for a regular offline academy rhythm",
  "Online continuity available when exams, travel, or scheduling changes come up",
];

export default function DwarkaSpotlight() {
  return (
    <Section className="bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-600">
            Main Centre
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-heading-900 sm:text-4xl">
            Looking for chess classes in Dwarka?
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-body-700 sm:text-lg">
            Our Dwarka academy is the best place to start if you want regular
            offline chess classes, clearer guidance, and a structured learning
            path for your child.
          </p>

          <div className="mt-8 space-y-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="flex gap-3 rounded-[var(--radius-md)] border border-border-300 bg-back-500 p-4 text-sm leading-relaxed text-body-700"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/chess-classes-in-dwarka"
              className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-accent-500 px-7 py-3 text-sm font-semibold text-heading-900 transition hover:bg-accent-600"
            >
              Explore Chess Classes in Dwarka
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-[var(--radius-md)] border border-primary-600 px-7 py-3 text-sm font-semibold text-primary-600 transition hover:bg-primary-600/5"
            >
              Talk to Nimzo Academy
            </Link>
          </div>
        </div>

        <div className="rounded-[calc(var(--radius-lg)+0.05rem)] border border-border-300 bg-[linear-gradient(135deg,var(--color-back-500)_0%,white_100%)] p-7 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-600/10 text-primary-600">
              <MapPinned className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-600">
                Dwarka Headquarters
              </p>
              <h3 className="mt-1 text-2xl font-semibold text-heading-900">
                Nimzo Academy
              </h3>
            </div>
          </div>

          <div className="mt-6 space-y-5 text-sm leading-relaxed text-body-700">
            <div className="flex gap-3">
              <MapPinned className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
              <div>
                <p className="font-semibold text-heading-900">Address</p>
                <p>Dwarka, New Delhi</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Clock3 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
              <div>
                <p className="font-semibold text-heading-900">Office Hours</p>
                <p>Mon to Sat, 10:00 AM to 7:00 PM</p>
              </div>
            </div>

            <div className="flex gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
              <div>
                <p className="font-semibold text-heading-900">Phone</p>
                <a
                  href="tel:+919667275083"
                  className="transition hover:text-primary-600"
                >
                  +91 96672 75083
                </a>
              </div>
            </div>
          </div>

          <Link
            href="/chess-classes-in-dwarka"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary-600 transition hover:text-primary-700"
          >
            View the Dwarka location page
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </Section>
  );
}
