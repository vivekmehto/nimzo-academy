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
    // Page-based route (About)
    if (!link.sectionId) {
      return location.pathname === link.to;
    }
    // Section-based route
    return activeSection === link.sectionId;
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-[#0B0B0B]/95 backdrop-blur-md shadow-lg">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Nimzo Academy Logo"
              className="h-10 w-auto rounded-full"
            />
            <span className="hidden sm:block text-xl font-semibold text-white">
              Nimzo Academy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className={`relative text-sm font-medium transition
                  ${
                    isActive(link)
                      ? "text-white after:w-full"
                      : "text-gray-200 hover:text-white after:w-0"
                  }
                  after:absolute after:left-0 after:-bottom-1
                  after:h-0.5 after:bg-[#1FB6E0]
                  after:transition-all
                `}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <a
              href="/#contact"
              className="
                rounded-full bg-linear-to-r from-[#F4B400] to-[#E0A800]
                px-6 py-2.5 text-sm font-semibold text-[#0B0B0B]
                shadow-[0_4px_20px_rgba(244,180,0,0.35)]
                transition-all duration-300 hover:-translate-y-0.5
              "
            >
              Book Free Demo
            </a>

            <button
              className="md:hidden p-2 text-white"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-[#0B0B0B] shadow-xl">
          <nav className="flex flex-col gap-4 px-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium ${
                  isActive(link) ? "text-white" : "text-gray-300"
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
