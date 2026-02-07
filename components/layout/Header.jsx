"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { navigation } from "@/data/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className="
          sticky top-0 z-50
          border-b border-border-300
          bg-white-100
        "
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex min-h-16 items-center justify-between gap-4">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 shrink-0"
            >
              <Image
                src="/logo.png"
                alt="Nimzo Chess Academy"
                width={36}
                height={36}
                className="h-9 w-auto rounded-full"
                priority
              />
              <span
                className="
                  font-bold text-heading-900
                  text-lg sm:text-xl
                  whitespace-nowrap
                "
              >
                Nimzo Academy
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="
                hidden md:flex
                items-center
                gap-6 lg:gap-8
              "
            >
              {navigation.map((item) => (
                <NavLink key={item.href} href={item.href}>
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <div className="hidden sm:block">
                <Link
                  href="/contact"
                  className="
                    inline-flex items-center justify-center
                    rounded-(--radius-md)
                    bg-accent-500
                    px-5 lg:px-7
                    py-2.5
                    text-sm lg:text-base
                    font-semibold
                    text-heading-900
                    hover:bg-accent-600
                    transition
                    whitespace-nowrap
                  "
                >
                  Book Free Demo
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
                className="
                  md:hidden
                  inline-flex items-center justify-center
                  rounded-sm
                  border border-border-300
                  p-2
                  text-heading-900
                "
              >
                ☰
              </button>
            </div>

          </div>
        </div>
      </header>

      <MobileNav isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}

/* Desktop Nav Link */
function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="
        text-base lg:text-lg
        font-semibold
        text-body-700
        whitespace-nowrap
        transition-colors
        hover:text-primary-600
      "
    >
      {children}
    </Link>
  );
}
