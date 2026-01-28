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

  // ✅ Scroll lock without layout shift
  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
  }, [isOpen]);

  const handleNavClick = (link: NavLink) => {
    if (link.sectionId) {
      document
        .getElementById(link.sectionId)
        ?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const isActive = (link: NavLink) =>
    link.sectionId
      ? activeSection === link.sectionId
      : location.pathname === link.to;

  return (
    <header className="fixed top-0 z-50 w-full bg-[#F3F6FF]/80 backdrop-blur-md border-b border-slate-200">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/nimzoLogo.png"
              alt="Nimzo Chess Academy"
              className="h-12 w-auto rounded-full"
            />
            <span className="hidden lg:block text-lg font-semibold text-[#111827]">
              Nimzo Chess Academy
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => handleNavClick(link)}
                className={`relative text-lg font-medium transition ${
                  isActive(link)
                    ? "text-[#2563EB]"
                    : "text-[#1F2A44] hover:text-[#2563EB]"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-[#22D3EE] transition-all duration-300 ${
                    isActive(link) ? "w-full" : "w-0 hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <CTABtn onClick={onClick} />
            </div>

            <button
              className="lg:hidden p-2 text-[#111827]"
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
        <div className="lg:hidden bg-white border-t border-slate-200">
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
