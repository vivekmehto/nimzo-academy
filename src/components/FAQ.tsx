import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "What is the right age to start learning chess?",
    answer:
      "Children can start learning chess from the age of 5–6 years. Our beginner program is designed to make learning enjoyable, structured, and easy to understand for young learners.",
  },
  {
    question: "Are the chess classes online or offline?",
    answer:
      "We offer both online and offline chess classes. Parents can choose the format that best suits their child’s schedule and comfort.",
  },
  {
    question: "Do you offer a free demo class?",
    answer:
      "Yes, we provide a free demo class so parents and students can experience our teaching approach before enrolling.",
  },
  {
    question: "How many students are there in one batch?",
    answer:
      "We maintain small batch sizes to ensure personal attention and better interaction between the coach and students.",
  },
  {
    question: "How do you track a student’s progress?",
    answer:
      "Progress is tracked through regular assessments, practice games, and feedback sessions that help parents understand improvement clearly.",
  },
  {
    question: "Is chess beneficial for academics?",
    answer:
      "Yes. Chess helps improve concentration, logical thinking, memory, and problem-solving skills, which positively support academic performance.",
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 scroll-mt-20" id="faq">
      <div className="mx-auto max-w-5xl px-4">
        {/* Heading */}
        <div className="mb-20 text-center">
          <h2 className="text-3xl font-bold text-[#0B0B0B] md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-[#6B7280]">
            Common questions parents ask before enrolling their child in our
            chess programs.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="
                  rounded-2xl border border-gray-100 bg-white
                  shadow-[0_6px_30px_rgba(0,0,0,0.04)]
                "
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-[#0B0B0B]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-[#1FB6E0] transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm leading-relaxed text-[#4B5563]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="#demo"
            className="
    rounded-full
    bg-linear-to-r from-[#F4B400] to-[#E0A800]
    px-6 py-2.5 text-sm font-semibold
    text-[#0B0B0B]
    shadow-[0_4px_20px_rgba(244,180,0,0.35)]
    transition-all duration-300
    hover:-translate-y-0.5
    hover:shadow-[0_6px_30px_rgba(244,180,0,0.5)]
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-[#1FB6E0]
    focus-visible:ring-offset-2
    focus-visible:ring-offset-[#0B0B0B]
  "
          >
            Still Have Questions? Book a Free Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
