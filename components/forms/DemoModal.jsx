"use client";

import { useEffect } from "react";
import DemoFormContent from "./DemoFormContent";

export default function DemoModal({ isOpen, onClose, type }) {


  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
  }, [isOpen]);

 

  if (!isOpen) return null;


  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-[95%] sm:max-w-lg bg-white animate-modalScale"
        style={{
          borderRadius: "var(--radius-lg)",
          boxShadow:
            "0 25px 50px rgba(0,0,0,0.15), 0 10px 25px rgba(0,0,0,0.08)",
        }}
      >
        {/* Top Accent */}
        <div
          className="h-2 w-full"
          style={{
            backgroundColor: "var(--color-primary-600)",
            borderTopLeftRadius: "var(--radius-lg)",
            borderTopRightRadius: "var(--radius-lg)",
          }}
        />

        <div className="px-6 py-8 sm:px-8 relative">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute right-5 top-4 text-sm text-muted-500 hover:text-(--color-heading-900) transition"
          >
            ✕
          </button>

           <DemoFormContent type={type} />
        </div>
      </div>
    </div>
  );
}
