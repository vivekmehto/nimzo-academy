"use client";

import { useEffect } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { navigation } from "@/data/navigation";
  import { useDemoModal } from "@/context/DemoModalContext";


export default function MobileNav({ isOpen, onClose }) {

  const {openModal} = useDemoModal();

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
          h-full w-70
          bg-white-100
          shadow-xl
          flex flex-col
        "
      >
        {/* Header */}
        <div
          className="
            flex min-h-16 items-center justify-between
            border-b border-border-300
            px-4
          "
        >
          <span className="text-lg font-semibold text-heading-900">
            Menu
          </span>

          <button
            onClick={onClose}
            aria-label="Close menu"
            className="
              rounded-sm
              border border-border-300
              px-3 py-1
              text-sm
              text-heading-900
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
          <Button  full onClick={()=> openModal("demo")}>
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
        rounded-sm
        px-3 py-2
        text-base font-medium
        text-body-700
        hover:bg-light-100
      "
    >
      {children}
    </Link>
  );
}
