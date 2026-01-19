import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import { useActiveSection } from "../hooks/useActiveSection";

type NavLink = {
  name: string;
  to: string;
  sectionId?: string;
};

const navLinks: NavLink[] = [
  { name: "Home", to: "/#home", sectionId: "home" },
  { name: "Programs", to: "/#programs", sectionId: "programs" },
  { name: "Testimonials", to: "/#testimonials", sectionId: "testimonials" },
  { name: "Contact", to: "/contact" },
  { name: "About", to: "/about" },
];

const sectionIds = ["home", "programs", "testimonials"];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const activeSection = useActiveSection(sectionIds);

  const isActive = (link: NavLink) => {
    if (!link.sectionId) {
      return location.pathname === link.to;
    }
    return activeSection === link.sectionId;
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Nimzo Chess Academy"
              className="h-10 w-auto rounded-full"
            />
            <span className="hidden sm:block text-lg font-semibold text-[#111827]">
              Nimzo Chess Academy
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`
                  relative text-lg font-medium transition
                  ${
                    isActive(link)
                      ? "text-[#2563EB]"
                      : "text-[#111827] hover:text-[#2563EB]"
                  }
                `}
              >
                {link.name}

                {/* underline */}
                <span
                  className={`
                    absolute left-0 -bottom-1 h-0.5 bg-[#22D3EE] transition-all
                    ${isActive(link) ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile */}
          <div className="flex items-center gap-3">
            <a
              href="/#contact"
              className="
                rounded-full
                bg-[#F59E0B]
                px-6 py-2.5
                text-sm font-semibold text-white
                shadow-[0_6px_20px_rgba(245,158,11,0.35)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[#D97706]
              "
            >
              Book Free Demo
            </a>

            <button
              className="md:hidden p-2 text-[#111827]"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <nav className="flex flex-col gap-4 px-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium ${
                  isActive(link) ? "text-[#2563EB]" : "text-[#111827]"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
