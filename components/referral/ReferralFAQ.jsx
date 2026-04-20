"use client";

import { useState } from "react";
import { HelpCircle } from "lucide-react";

const faqItems = [
  {
    question: "When does a referral become valid?",
    answer:
      "A referral becomes valid after the student is confirmed as new to Nimzo Academy, completes enrollment, pays the first-month fee, and remains active for 30 days.",
  },
  {
    question: "What if the family has already contacted Nimzo Academy before?",
    answer:
      "If the student has already enrolled or is already being processed by the academy, the referral may not be counted. We verify each submission manually to keep the program fair.",
  },
  {
    question: "Can I refer a sibling, friend, or classmate?",
    answer:
      "Yes, as long as the student is genuinely interested in structured chess coaching and is new to Nimzo Academy.",
  },
  {
    question: "How are the rewards used?",
    answer:
      "Rewards are applied as coaching fee credits. They are not paid out as cash and are subject to the program rules listed on this page.",
  },
];

export default function ReferralFAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[var(--color-light-100)] py-20 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-300)] bg-white px-4 py-2 text-sm font-medium text-[var(--color-primary-600)] shadow-sm">
            <HelpCircle className="h-4 w-4" />
            Common questions
          </div>
          <h2 className="mt-4 text-3xl font-bold text-[var(--color-heading-900)] md:text-4xl">
            Referral Questions Parents May Have
          </h2>
          <p className="mt-4 text-base text-[var(--color-body-700)] md:text-lg">
            A few quick answers to remove confusion before a family submits a referral.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={`rounded-[calc(var(--radius-lg)+0.05rem)] border bg-[var(--color-white-100)] shadow-sm transition ${
                  isOpen
                    ? "border-[var(--color-primary-600)] shadow-[0_18px_40px_rgba(47,91,234,0.08)]"
                    : "border-[var(--color-border-300)]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left md:px-7 md:py-5.5"
                >
                  <span className="text-base font-medium text-[var(--color-heading-900)] sm:text-lg">
                    {item.question}
                  </span>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-back-500)] text-2xl leading-none text-[var(--color-primary-600)]">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pr-10 md:px-7">
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
