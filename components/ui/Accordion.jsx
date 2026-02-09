"use client";

import { useState } from "react";

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  function toggle(index) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <div className="divide-y divide-border-300">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className="py-4">
            {/* Button */}
            <button
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              className="
                flex w-full items-center justify-between
                text-left
                text-base font-medium
                text-heading-900
                focus:outline-none
              "
            >
              <span>{item.question}</span>
              <span
                className="
                  ml-4 text-xl
                  text-muted-500
                "
              >
                {isOpen ? "−" : "+"}
              </span>
            </button>

            {/* Content */}
            {isOpen && (
              <div
                className="
                  mt-3
                  text-sm
                  text-body-700
                "
              >
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
