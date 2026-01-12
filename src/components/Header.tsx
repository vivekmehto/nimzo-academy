import { useEffect, useState } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";

type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { name: "Home", href: "#home" },
  { name: "Programs", href: "#programs" },
  { name: "About", href: "#about" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0B0B]/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">

       <a href="#home" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Nimzo Chess Academy Logo"
              className="h-9 w-auto rounded-full"
            />
            {/* Optional text (recommended for SEO) */}
            <span className="hidden sm:block text-sm font-semibold text-white">
              Nimzo Chess Academy
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="
                  relative text-sm font-medium text-gray-200
                  transition hover:text-white
                  after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-0 after:bg-[#1FB6E0]
                  after:transition-all hover:after:w-full
                "
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* CTA */}
           <a
  href="#demo"
  className="
    rounded-full
    bg-gradient-to-r from-[#F4B400] to-[#E0A800]
    px-6 py-2.5 text-sm font-semibold
    text-[#0B0B0B]
    shadow-[0_4px_20px_rgba(244,180,0,0.35)]
    transition-all duration-300
    hover:-translate-y-0.5
    hover:shadow-[0_6px_30px_rgba(244,180,0,0.5)]
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-[#1FB6E0]
    focus-visible:ring-offset-2
    focus-visible:ring-offset-[#0B0B0B]
  "
>
  Book Free Demo
</a>


            {/* Mobile Menu Button */}
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
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-gray-200 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
