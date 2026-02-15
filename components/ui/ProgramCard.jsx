"use client";

import { Star } from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";

export default function ProgramCard({
  icon: Icon,
  title,
  description,
  idealFor,
  includes,
  outcome,
  featured = false,
}) {
  const { openModal } = useDemoModal();

  return (
    <button
      onClick={() => openModal("demo")}
      className={`
        group relative flex h-full flex-col text-left
        rounded-xl sm:rounded-2xl
        bg-white
        p-5 sm:p-6 lg:p-7
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-primary-600
        ${
          featured
            ? `
              border border-accent-500/40
              ring-2 ring-accent-500/20
              shadow-md
              bg-accent-500/[0.025]
            `
            : `
              border border-border-300
              shadow-sm
              hover:shadow-md
            `
        }
      `}
    >
      {/* Featured Badge */}
      {featured && (
        <div
          className="
            absolute right-3 top-3 sm:right-4 sm:top-4
            flex items-center gap-1
            rounded-full
            bg-accent-500/15
            px-2.5 py-1
            text-[10px] sm:text-xs font-medium
            text-accent-600
          "
        >
          <Star className="h-3 w-3" />
          Recommended
        </div>
      )}

      {/* Icon */}
      <div
        className={`
          mb-4 sm:mb-5
          inline-flex h-10 w-10 sm:h-12 sm:w-12
          items-center justify-center
          rounded-lg sm:rounded-xl
          ${
            featured
              ? "bg-accent-500/15 text-accent-600"
              : "bg-primary-600/10 text-primary-600"
          }
        `}
      >
        <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
      </div>

      {/* Title */}
      <h3 className="text-base sm:text-lg font-semibold text-heading-900">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-xs sm:text-sm text-body-700 leading-relaxed">
        {description}
      </p>

      {/* Ideal For */}
      <ul className="mt-4 space-y-1.5 text-xs sm:text-sm text-muted-500">
        {idealFor.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-600 shrink-0" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Outcome */}
      <div className="mt-4 sm:mt-5 rounded-lg bg-primary-600/5 px-3 py-2 sm:px-4 sm:py-3">
        <p className="text-xs sm:text-sm font-medium text-primary-700">
          ⚡ {outcome}
        </p>
      </div>

      {/* Includes */}
      <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-border-200 space-y-1.5 text-xs sm:text-sm text-muted-600">
        {includes.map((item) => (
          <div key={item} className="flex items-start gap-2">
            <span className="text-primary-600 mt-1">✓</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </button>
  );
}
