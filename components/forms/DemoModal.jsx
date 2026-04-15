"use client";

import { useEffect } from "react";
import { CalendarCheck2, Globe2, GraduationCap } from "lucide-react";
import DemoFormContent from "./DemoFormContent";

export default function DemoModal({ isOpen, onClose, type }) {
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "auto";
      return undefined;
    }

    document.body.style.overflow = "hidden";

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const panelTitle =
    type === "assessment" ? "Find the right stage first" : "Start with a guided demo";
  const panelDescription =
    type === "assessment"
      ? "We assess the student’s current level and recommend the most suitable program."
      : "A simple first step for parents who want to understand the right format and teaching style.";

  const highlights = [
    {
      icon: CalendarCheck2,
      label: "Simple scheduling",
      text: "We help coordinate a convenient time after you submit the request.",
    },
    {
      icon: GraduationCap,
      label: "Stage guidance",
      text: "We suggest the right starting point instead of placing students randomly.",
    },
    {
      icon: Globe2,
      label: "Delhi and worldwide",
      text: "Centre, home, and online learning formats are all supported.",
    },
  ];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-heading-900)]/55 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl overflow-hidden rounded-[calc(var(--radius-lg)+0.15rem)] border border-white/50 bg-white animate-modalScale"
        style={{
          boxShadow:
            "0 30px 80px rgba(17,26,77,0.28), 0 12px 30px rgba(17,26,77,0.15)",
        }}
      >
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="hidden bg-[linear-gradient(160deg,var(--color-primary-700)_0%,var(--color-primary-600)_55%,var(--color-primary-500)_100%)] p-8 text-white lg:block">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              Nimzo Academy
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight">
              {panelTitle}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/88">
              {panelDescription}
            </p>

            <div className="mt-8 space-y-5">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.label} className="rounded-[var(--radius-md)] border border-white/15 bg-white/8 p-4 backdrop-blur-sm">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/14">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white">{item.label}</p>
                        <p className="mt-1 text-sm leading-relaxed text-white/80">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative px-6 py-7 sm:px-8 sm:py-8">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-5 top-4 rounded-full px-2 py-1 text-sm text-[var(--color-muted-500)] transition hover:bg-[var(--color-light-100)] hover:text-[var(--color-heading-900)]"
            aria-label="Close demo booking form"
          >
            ✕
          </button>

          <DemoFormContent type={type} />
          </div>
        </div>
      </div>
    </div>
  );
}
