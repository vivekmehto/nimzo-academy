"use client";

import Section from "@/components/ui/Section";
import { learningPath } from "@/data/learningPath";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

export default function ChessLearningPath() {
  const router = useRouter();

  return (
    <Section className="bg-back-500 py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-heading-900 tracking-tight">
            Our Chess Learning Path
          </h2>
          <p className="mt-5 text-body-700 leading-relaxed">
            A structured progression designed to help children grow from
            beginners to confident competitive players.
          </p>
        </div>

        {/* Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
            {learningPath.map((level, index) => {
              const Icon = level.icon;

              const iconBg = [
                "bg-primary-600/10",
                "bg-primary-600/15",
                "bg-primary-600/20",
                "bg-primary-600/25",
              ][index];

              return (
                <div key={level.id} className="relative flex items-center">
                  
                  {/* Card */}
                  <button
                    onClick={() =>
                      router.push(`/programs?section=${level.id}`)
                    }
                    className={`
                      group relative w-full text-left
                      rounded-2xl
                      border
                      bg-white-100
                      p-6
                      transition-all duration-300
                      focus:outline-none focus:ring-2 focus:ring-primary-600
                      cursor-pointer
                      ${
                        level.recommended
                          ? "border-primary-600 shadow-md bg-primary-600/5 scale-[1.02]"
                          : "border-border-300 shadow-sm hover:shadow-lg hover:-translate-y-1"
                      }
                    `}
                  >
                    {/* Recommended Badge */}
                    {level.recommended && (
                      <div className="absolute -top-3 left-6 rounded-full bg-linear-to-r from-primary-600 to-accent-600 px-4 py-1 text-xs font-medium text-white shadow-md">
                        Recommended
                      </div>
                    )}

                    {/* Icon */}
                    <div
                      className={`
                        mb-6 inline-flex
                        h-12 w-12
                        items-center justify-center
                        rounded-xl
                        ${iconBg}
                        text-primary-600
                        transition-transform duration-300
                        group-hover:scale-110
                      `}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-heading-900">
                      {level.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="mt-2 text-sm text-muted-500 leading-relaxed">
                      {level.subtitle}
                    </p>

                    {/* Points */}
                    <ul className="mt-6 space-y-3 text-sm text-body-700">
                      {level.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-600 shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <div className="mt-8 flex items-center text-sm font-medium text-primary-600 transition-all duration-300 group-hover:translate-x-1">
                      Explore Program
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </button>

                  {/* Arrow Between Cards (Desktop Only) */}
                  {index !== learningPath.length - 1 && (
                    <div className="hidden lg:flex absolute -right-6 top-1/2 -translate-y-1/2 text-primary-600/40">
                      <ArrowRight className=" h-6 w-6" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
