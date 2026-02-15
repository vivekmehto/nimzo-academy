"use client";

import { useEffect, useRef } from "react";

export default function PageProgressBar() {
  const progressRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      const totalScrollable = docHeight - winHeight;
      const progress = scrollTop / totalScrollable;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      rafRef.current = null;
    };

    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      ref={progressRef}
      className="
        fixed
        left-0
        z-40
        h-[3px]
        w-full
        origin-left
        bg-[var(--color-primary-600)]
        will-change-transform
      "
      style={{
        transform: "scaleX(0)"
      }}
    />
  );
}
