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
      "Children can start learning chess as early as 5–6 years old. Our beginner program is specially designed to make learning fun, engaging, and easy to understand for young learners.",
  },
  {
    question: "Are the chess classes online or offline?",
    answer:
      "We offer both online and offline chess classes. Parents can choose the format that best suits their child’s schedule and learning preference.",
  },
  {
    question: "Do you provide a free demo class?",
    answer:
      "Yes, we offer a free demo class so parents and students can experience our teaching style before enrolling in a program.",
  },
  {
    question: "How many students are there in one batch?",
    answer:
      "We keep our batch sizes small to ensure personalized attention and better interaction between the coach and students.",
  },
  {
    question: "How do you track a student’s progress?",
    answer:
      "Student progress is tracked through regular assessments, practice games, and feedback sessions shared with parents.",
  },
  {
    question: "Is chess beneficial for academics?",
    answer:
      "Yes, learning chess helps improve concentration, logical thinking, memory, and problem-solving skills, which positively impacts academic performance.",
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-4">

        {/* Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything parents usually want to know before enrolling their
            child in our chess classes.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl border border-gray-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-gray-900">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#demo"
            className="inline-block rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-white shadow hover:bg-amber-600 transition"
          >
            Still Have Questions? Book a Free Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
