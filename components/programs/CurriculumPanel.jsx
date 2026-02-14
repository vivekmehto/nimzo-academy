"use client";

import { useEffect, useRef, useState } from "react";

export default function CurriculumPanel({
  stage,
  title,
  content,
  onClose,
  openModal,
}) {
  const panelRef = useRef(null);
  const scrollRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Entry animation trigger
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 10);
    return () => clearTimeout(timer);
  }, []);

  // Smooth close with animation
  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onClose(), 280);
  };

  // ESC close
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // Lock background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Scroll progress indicator
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const progress =
        (el.scrollTop / (el.scrollHeight - el.clientHeight)) * 100;
      setScrollProgress(progress);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  // Focus trap
  useEffect(() => {
    const focusable =
      panelRef.current.querySelectorAll(
        'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );

    if (focusable.length) focusable[0].focus();

    const trap = (e) => {
      if (e.key !== "Tab") return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", trap);
    return () => document.removeEventListener("keydown", trap);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex">

      {/* Backdrop */}
      <div
        className={`
          absolute inset-0 bg-black/40 backdrop-blur-[2px]
          transition-opacity duration-300
          ${isVisible ? "opacity-100" : "opacity-0"}
        `}
        onClick={handleClose}
      />

      {/* Slide Panel */}
      <div
        ref={panelRef}
        className={`
          relative ml-auto h-full w-full sm:max-w-lg
          bg-[var(--color-white-100)]
          shadow-2xl
          flex flex-col
          transform transition-all duration-300 ease-out
          ${isVisible
            ? "translate-x-0 scale-100"
            : "translate-x-full scale-95"}
        `}
      >
        {/* Scroll Progress Bar */}
        <div
          className="absolute top-0 left-0 h-1 bg-[var(--color-accent-500)] transition-all duration-75"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* HEADER (fixed, not scrollable) */}
        <div className="flex-shrink-0 bg-white px-6 py-6 sm:px-8 border-b border-[var(--color-border-300)]">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-muted-500)]">
                {stage}
              </span>

              <h3 className="mt-2 text-2xl font-bold tracking-tight text-[var(--color-heading-900)]">
                {title}
              </h3>

              <div className="mt-3 h-1 w-12 rounded-full bg-[var(--color-accent-500)]" />
            </div>

            <button
              onClick={handleClose}
              className="
                rounded-full p-2
                text-[var(--color-muted-500)]
                transition
                hover:bg-[var(--color-light-100)]
                hover:text-[var(--color-heading-900)]
              "
            >
              ✕
            </button>
          </div>
        </div>

        {/* SCROLLABLE CONTENT */}
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto px-6 py-8 sm:px-8"
        >
          {/* Intro */}
          <p className="text-[15px] sm:text-base leading-relaxed text-[var(--color-body-700)]">
            {content.intro}
          </p>

          <div className="my-8 h-px bg-[var(--color-border-300)]" />

          {/* Focus Section */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide">
              What this stage focuses on
            </h4>

            <p className="mt-3 text-sm leading-relaxed text-[var(--color-body-700)]">
              {content.focus}
            </p>
          </div>

          {/* Pillars */}
          <div className="mt-8 space-y-4">
            {content.pillars.map((pillar, index) => (
              <div
                key={index}
                className="
                  rounded-[var(--radius-md)]
                  border border-[var(--color-border-300)]
                  bg-[var(--color-light-100)]
                  p-4
                "
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1 h-2 w-2 rounded-full bg-[var(--color-primary-600)]" />
                  <div>
                    <h5 className="font-semibold text-[var(--color-heading-900)]">
                      {pillar.title}
                    </h5>
                    <p className="mt-1 text-sm text-[var(--color-body-700)]">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="mt-10 rounded-[var(--radius-md)] border border-[var(--color-border-300)] p-5">
            <h4 className="text-sm font-semibold uppercase tracking-wide ">
              How learning happens
            </h4>

            <ul className="mt-4 space-y-2 text-sm text-[var(--color-body-700)]">
              {content.process.map((item, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-[var(--color-primary-600)]">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-10">
            <button
              onClick={() => openModal("assessment")}
              className="
                w-full
                rounded-[var(--radius-md)]
                bg-[var(--color-accent-500)]
                px-6 py-4
                text-sm font-semibold
                text-[var(--color-heading-900)]
                transition
                hover:bg-[var(--color-accent-600)]
              "
            >
              Book Free Assessment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
