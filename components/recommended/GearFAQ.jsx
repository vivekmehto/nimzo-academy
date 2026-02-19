"use client";

import { useState } from "react";
import { gearFaqs } from "@/data/gearFaqs";

export default function GearFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[var(--color-back-500)] py-24">
      <div className="max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-heading-900)]">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[var(--color-muted-500)]">
            Common questions parents ask when choosing chess equipment.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-5">
          {gearFaqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className="rounded-[var(--radius-lg)] bg-white border border-[var(--color-border-300)] shadow-sm hover:border-[var(--color-accent-600)] transition"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-medium text-[var(--color-heading-900)]">
                    {item.question}
                  </span>

                  <span className="text-2xl text-[var(--color-primary-600)]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pr-10">
                    <p className="text-base leading-relaxed text-[var(--color-body-700)]">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
