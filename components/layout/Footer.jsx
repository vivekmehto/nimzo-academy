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
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-12 py-16">
        {/* =====================
           TOP BRAND + SOCIAL
        ===================== */}
        <div
          className="
            flex flex-col
            gap-10
            mb-14
            lg:flex-row
            lg:justify-between
            lg:items-start
          "
        >
          {/* LEFT — Brand */}
          <div className="max-w-lg">
            <div className="flex items-center gap-3 mb-3">
               <Link
              href="/"
              className="flex items-center gap-2 sm:gap-3 shrink-0"
            >
              <Image
                src="/logo.png"
                alt="Nimzo Academy logo"
                width={36}
                height={36}
                className="rounded-full"
              />
              <span className="text-lg font-semibold text-heading-900">
                Nimzo Academy
              </span>
              </Link>
            </div>

            <p className="max-w-md text-sm text-body-700 leading-relaxed">
              Professional chess coaching for children and beginners, focused on
              structured learning, confidence building, and long-term thinking
              skills.
            </p>
          </div>

          {/* RIGHT — Social */}
          <div className="lg:text-right lg:pt-0.5">
            <p className="text-sm font-medium text-heading-900 mb-4">
              Follow Nimzo Academy
            </p>

            <div className="flex gap-5 lg:justify-end">
              <Link
                target="_blank"
                href="https://www.instagram.com/nimzoacademy/"
                aria-label="Instagram"
              >
                <FaInstagram className="social-icon text-pink-500" />
              </Link>
              <Link
                target="_blank"
                href="https://www.youtube.com/channel/UCGlVYL3475ysX-Tm2TJjVOw"
                aria-label="YouTube"
              >
                <FaYoutube className="social-icon text-red-600" />
              </Link>
              <Link
                target="_blank"
                href="https://www.facebook.com/people/Nimzo-Academy/61583463975965/"
                aria-label="Facebook"
              >
                <FaFacebookF className="social-icon text-blue-600" />
              </Link>
              <Link
                href={`https://wa.me/919718086186`}
                target="_blank"
                rel="noopener noreferrer nofollow"
                aria-label="Chat with us on WhatsApp"
              >
                <FaWhatsapp className="social-icon text-green-500" />
              </Link>
            </div>
          </div>
        </div>

        {/* =====================
           MAIN GRID
        ===================== */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Quick Links */}
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-list">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/programs">Programs</Link>
              </li>
              <li>
                <Link href="/gallery">Gallery</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div className="hidden md:block">
            <h4 className="footer-title">Programs</h4>
            <ul className="footer-list">
              <li>Beginner Chess Program</li>
              <li>Intermediate Chess Training</li>
              <li>Advanced Tournament Preparation</li>
            </ul>

            {/* <div className="mt-5 pt-5 border-t border-border-300">
              <h5 className="footer-subtitle">Class Formats</h5>
              <ul className="footer-list mt-3">
                <li>Online Chess Classes</li>
                <li>Offline Chess Classes</li>
                <li>Hybrid Chess Program</li>
              </ul>
            </div> */}
          </div>

          {/* Community */}
          <div>
            <h4 className="footer-title">Community</h4>
            <ul className="footer-list">
              <li>
                <Link href="/referral">Referral Program</Link>
              </li>
              <li>
                <Link href="/careers">Career Opportunities</Link>
              </li>
              <li>
                <Link href="/tournaments">Organize a Tournament</Link>
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
                  className="hover:text-primary-600"
                >
                  +91 97180 86186
                </Link>
              </li>

              <li className="flex items-start gap-3">
                <HiOutlineMail className="mt-0.5 h-5 w-5 text-primary-600" />
                <Link
                  href="mailto:nimzoacademy@gmail.com"
                  className="hover:text-primary-600"
                >
                  nimzoacademy@gmail.com
                </Link>
              </li>

              <li className="flex items-start gap-3">
                <HiOutlineLocationMarker className="mt-0.5 h-5 w-5 text-primary-600" />
                <Link
                  href="https://maps.google.com?q=Dwarka,+New+Delhi,+India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-600 leading-relaxed"
                >
                  262, BLOCK-A, Sector 8 Dwarka, New Delhi-110077
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* =====================
           BOTTOM BAR
        ===================== */}
        <div className="mt-12 pt-4 border-t border-border-300 flex flex-col sm:flex-row gap-4 sm:justify-between text-sm text-muted-500">
          <p>© {year} Nimzo Academy. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/refund-policy">Refund Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
