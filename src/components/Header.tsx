import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router";
import { useActiveSection } from "../hooks/useActiveSection";
import CTABtn from "./CTABtn";

type NavLink = {
  name: string;
  to: string;
  sectionId?: string;
};

const navLinks: NavLink[] = [
  { name: "Home", to: "/", sectionId: "home" },
  { name: "Programs", to: "/", sectionId: "programs" },
  { name: "Testimonials", to: "/", sectionId: "testimonials" },
  { name: "About", to: "/about" },
  { name: "Contact", to: "/contact" },
];

const sectionIds = ["home", "programs", "testimonials"];

type Props = {
  onClick: () => void;
};

const Header: React.FC<Props> = ({ onClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const activeSection = useActiveSection(sectionIds);

  // prevent background scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleNavClick = (link: NavLink) => {
    if (link.sectionId) {
      const element = document.getElementById(link.sectionId);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const isActive = (link: NavLink) => {
    if (link.sectionId) {
      return activeSection === link.sectionId;
    }
    return location.pathname === link.to;
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-[#F3F6FF]/80 backdrop-blur-md border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-18  items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
          
            <img
              src="/nimzoLogo.png"
              alt="Nimzo Chess Academy"
              className="h-14 w-auto rounded-full"
            />
            <span className="hidden sm:block text-xl font-semibold text-[#111827]">
              Nimzo Chess Academy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => handleNavClick(link)}
                className={`
                  group relative text-lg font-medium transition
                  ${
                    isActive(link)
                      ? "text-[#2563EB] "
                      : "text-[#1F2A44] hover:text-[#2563EB]"
                  }
                `}
              >
                {link.name}

                {/* underline */}
                <span
                  className={`
                    absolute left-0 -bottom-1 h-0.5 bg-[#22D3EE] transition-all duration-300
                    ${isActive(link) ? "w-full" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Button */}
          <div className="flex items-center gap-3">
            <CTABtn onClick={onClick} />

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
          <nav className="flex flex-col gap-5 px-6 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => handleNavClick(link)}
                className={`text-base font-medium ${
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
