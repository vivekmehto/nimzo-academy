import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaYoutube,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineLocationMarker,
} from "react-icons/hi";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-light-100 border-t border-border-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
        {/* =====================
           TOP BRAND + SOCIAL
        ===================== */}
        <div className="flex flex-col gap-12 mb-16 lg:flex-row lg:justify-between lg:items-start">
          {/* LEFT — Brand */}
          <div className="max-w-lg">
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <Image
                src="/logo.png"
                alt="Nimzo Academy logo"
                width={38}
                height={38}
                className="rounded-full"
              />
              <span className="text-lg font-semibold text-heading-900 group-hover:text-primary-600 transition">
                Nimzo Academy
              </span>
            </Link>

            <p className="text-sm text-body-700 leading-relaxed">
              Professional chess coaching in Dwarka, New Delhi focused on
              structured learning, confidence building and long term strategic
              thinking.
            </p>
          </div>

          {/* RIGHT — Social */}
          <div className="lg:text-right">
            <p className="text-sm md:text-center font-semibold text-heading-900 mb-4 tracking-wide">
              Follow Us
            </p>

            <div className="flex gap-5 lg:justify-end">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/nimzoacademy/"
                aria-label="Instagram"
                className="hover:scale-105 transition-transform"
              >
                <FaInstagram className="social-icon text-pink-500" />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/channel/UCGlVYL3475ysX-Tm2TJjVOw"
                aria-label="YouTube"
                className="hover:scale-105 transition-transform"
              >
                <FaYoutube className="social-icon text-red-600" />
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/people/Nimzo-Academy/61583463975965/"
                aria-label="Facebook"
                className="hover:scale-105 transition-transform"
              >
                <FaFacebookF className="social-icon text-blue-600" />
              </Link>
              <Link
                href="https://wa.me/919718086186"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with us on WhatsApp"
                className="hover:scale-105 transition-transform"
              >
                <FaWhatsapp className="social-icon text-green-500" />
              </Link>
            </div>
          </div>
        </div>

        {/* =====================
           MAIN GRID
        ===================== */}
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">
          {/* Quick Links */}
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-list">
              <li>
                <Link href="/" className="hover:text-primary-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="hover:text-primary-600 transition"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-primary-600 transition"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-primary-600 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary-600 transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="hidden md:block">
            <h4 className="footer-title">Programs</h4>
            <ul className="footer-list">
              <li>
                <Link
                  href={{
                    pathname: "/programs",
                    query: { section: "beginner" },
                  }}
                  className="hover:text-primary-600 transition"
                >
                  Beginner Program
                </Link>
              </li>

              <li>
                <Link
                  href={{
                    pathname: "/programs",
                    query: { section: "intermediate" },
                  }}
                  className="hover:text-primary-600 transition"
                >
                  Intermediate Program
                </Link>
              </li>

              <li>
                <Link
                  href={{
                    pathname: "/programs",
                    query: { section: "advanced" },
                  }}
                  className="hover:text-primary-600 transition"
                >
                  Advanced Program
                </Link>
              </li>

              <li>
                <Link
                  href={{
                    pathname: "/programs",
                    query: { section: "master" },
                  }}
                  className="hover:text-primary-600 transition"
                >
                  Master Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="footer-title">Community</h4>
            <ul className="footer-list">
              <li>
                <Link
                  href="/scholarships"
                  className="hover:text-primary-600 transition"
                >
                  Scholarships
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary-600 transition"
                >
                  Career Opportunities
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary-600 transition"
                >
                  Organize a Tournament
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:pl-6">
            <h4 className="footer-title">Contact</h4>

            <ul className="space-y-4 text-sm text-body-700">
              <li className="flex items-start gap-3">
                <HiOutlinePhone className="mt-0.5 h-5 w-5 text-primary-600" />
                <Link
                  href="tel:+919718086186"
                  className="hover:text-primary-600 transition"
                >
                  +91 97180 86186
                </Link>
              </li>

              <li className="flex items-start gap-3">
                <HiOutlineMail className="mt-0.5 h-5 w-5 text-primary-600" />
                <Link
                  href="mailto:nimzoacademy@gmail.com"
                  className="hover:text-primary-600 transition"
                >
                  nimzoacademy@gmail.com
                </Link>
              </li>

              <li className="flex items-start gap-3">
                <HiOutlineLocationMarker className="mt-0.5 h-5 w-5 md:h-7 md:w-7 text-primary-600" />
                <Link
                  href="https://www.google.com/maps/dir/?api=1&destination=28.57375398674804,77.07187627520065"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-600 transition leading-relaxed"
                >
                  262, Block-A, Sector 8, Dwarka, New Delhi – 110077
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* =====================
           BOTTOM BAR
        ===================== */}
        <div className="mt-16 pt-6 border-t border-border-300 flex flex-col sm:flex-row gap-4 sm:justify-between text-sm text-muted-500">
          <p>© {year} Nimzo Academy. All rights reserved.</p>

          <div className="flex flex-wrap gap-6">
            <Link
              href="/privacy-policy"
              className="hover:text-primary-600 transition"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-primary-600 transition"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/refund-policy"
              className="hover:text-primary-600 transition"
            >
              Refund Policy
            </Link>
            <Link
              href="/child-safety-policy"
              className="hover:text-primary-600 transition"
            >
              Child Safety
            </Link>
            <Link
              href="/disclaimer"
              className="hover:text-primary-600 transition"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
