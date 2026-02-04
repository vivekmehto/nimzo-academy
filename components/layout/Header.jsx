"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import Button from "@/components/ui/Button";
import { navigation } from "@/data/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className="
          sticky top-0 z-50
          border-b border-[var(--color-border-300)]
          bg-[var(--color-white-100)]
        "
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex min-h-[64px] items-center justify-between">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="Nimzo Chess Academy"
                width={36}
                height={36}
                className="h-9 w-auto rounded-full"
                priority
              />
              <span className="text-base font-semibold text-[var(--color-heading-900)]">
                Nimzo Academy
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navigation.map((item) => (
                <NavLink key={item.href} href={item.href}>
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Right */}
            <div className="flex items-center gap-3">
              <div className="hidden sm:block">
                <Button href="/contact">Book Free Demo</Button>
              </div>

              <button
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
                className="
                  md:hidden
                  inline-flex items-center justify-center
                  rounded-[var(--radius-sm)]
                  border border-[var(--color-border-300)]
                  p-2
                  text-[var(--color-heading-900)]
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
        text-sm font-medium
        text-[var(--color-body-700)]
        transition-colors
        hover:text-[var(--color-primary-600)]
      "
    >
      {children}
    </Link>
  );
}
