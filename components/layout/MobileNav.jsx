"use client";

import { useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { navigation } from "@/data/navigation";

export default function MobileNav({ isOpen, onClose }) {
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="
          fixed inset-0 z-40
          bg-black/40 backdrop-blur-sm
        "
      />

      {/* Drawer */}
      <aside
        className="
          fixed right-0 top-0 z-50
          h-full w-[280px]
          bg-[var(--color-white-100)]
          shadow-xl
          flex flex-col
          transition-transform duration-300
          translate-x-0
        "
      >
        {/* Header */}
        <div
          className="
            flex min-h-[64px] items-center justify-between
            border-b border-[var(--color-border-300)]
            px-4
          "
        >
          <span className="text-base font-semibold text-[var(--color-heading-900)]">
            Menu
          </span>

          <button
            onClick={onClose}
            aria-label="Close menu"
            className="
              rounded-[var(--radius-sm)]
              border border-[var(--color-border-300)]
              px-3 py-1
              text-sm
              text-[var(--color-heading-900)]
            "
          >
            ✕
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col gap-1 px-4 py-6">
          {navigation.map((item) => (
            <MobileLink
              key={item.href}
              href={item.href}
              onClose={onClose}
            >
              {item.label}
            </MobileLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="mt-auto p-4">
          <Button href="/contact" full onClick={onClose}>
            Book Free Demo
          </Button>
        </div>
      </aside>
    </>
  );
}

function MobileLink({ href, children, onClose }) {
  return (
    <Link
      href={href}
      onClick={onClose}
      className="
        rounded-[var(--radius-sm)]
        px-3 py-2
        text-sm font-medium
        text-[var(--color-body-700)]
        hover:bg-[var(--color-light-100)]
      "
    >
      {children}
    </Link>
  );
}
