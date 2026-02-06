"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import { faqs } from "@/data/faqs";
import FaqSchema from "@/components/seo/FaqSchema";
import Link from "next/link";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      {/* SEO Schema */}
      <FaqSchema />

      <Section className="bg-back-500">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-heading-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-base sm:text-lg text-muted-500">
              Common questions parents ask before enrolling their child in our
              chess programs.
            </p>
          </div>

          {/* FAQ Cards */}
          <div className="space-y-5">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.question}
                  className="
                    rounded-(--radius-lg)
                    bg-white
                    border border-border-300
                    shadow-sm
                    transition
            hover:border
                         hover:rounded-(--radius-lg)
                hover:border-accent-600
                  "
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="
                      w-full flex items-center justify-between
                      gap-6
                      px-6 py-5
                      text-left
                         cursor-pointer
                       
                    "
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-medium text-heading-900">
                      {item.question}
                    </span>

                    <span
                      className="
                        text-2xl
                        text-primary-600
                        leading-none
                        transition-transform
                      "
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pr-10">
                      <p className="text-base leading-relaxed text-body-700">
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA — SEPARATE & STRONG */}
          <div className="mt-20 text-center">
            <p className="text-base text-muted-500 mb-6">
              Still have questions or need personal guidance?
            </p>

            <Link
              href="/contact"
              className="
                inline-flex items-center justify-center
                rounded-full
                bg-accent-500
                px-8 py-4
                text-base font-semibold
                text-heading-900
                hover:bg-accent-600
                transition
              "
            >
              Book a Free Demo Class
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
