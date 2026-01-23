import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Users,
  BookOpen,
  Award,
} from "lucide-react";
import { Link } from "react-router";
import { NIMZO_EMAIL, NIMZO_PHONE_NUMBER } from "../utils/constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F9FAFB] text-[#4B5563]">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* TOP SECTION */}
        <div className="grid gap-14 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Nimzo Chess Academy Logo"
                className="h-10 w-auto rounded-full"
              />
              <span className="text-lg font-semibold text-[#111827]">
                Nimzo Chess Academy
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Professional chess coaching for kids and beginners, focused on
              structured learning, confidence building, and long-term strategic
              thinking.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-[#111827]">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="hover:text-[#2563EB] transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-[#2563EB] transition">
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-[#2563EB] transition"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#2563EB] transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-[#111827]">
              Programs
            </h4>
            <ul className="space-y-3 text-sm">
              <li>Beginner Chess Program</li>
              <li>Intermediate Chess Program</li>
              <li>Advanced & Tournament Training</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-[#111827]">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#22D3EE]" />
                <span>{NIMZO_PHONE_NUMBER}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#22D3EE]" />
                <span>{NIMZO_EMAIL}</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-[#22D3EE]" />
                <span>Online & Offline Classes</span>
              </li>
            </ul>
          </div>
        </div>

        {/* MINI TRUST BADGES */}
        <div className="mt-20 grid gap-6 border-t border-gray-200 pt-12 sm:grid-cols-2 md:grid-cols-4">
          <div className="flex items-center gap-3">
            <Award className="h-5 w-5 text-[#2563EB]" />
            <span className="text-sm">FIDE-Certified Coaches</span>
          </div>

          <div className="flex items-center gap-3">
            <Users className="h-5 w-5 text-[#2563EB]" />
            <span className="text-sm">Trusted by Parents Worldwide</span>
          </div>

          <div className="flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-[#2563EB]" />
            <span className="text-sm">Structured Learning Curriculum</span>
          </div>

          <div className="flex items-center gap-3">
            <ShieldCheck className="h-5 w-5 text-[#2563EB]" />
            <span className="text-sm">Safe & Child-Focused Environment</span>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-14 h-px bg-gray-200" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
          <p>
            © {new Date().getFullYear()} Nimzo Chess Academy. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              className="hover:text-[#2563EB] transition"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="hover:text-[#2563EB] transition"
            >
              Terms & Conditions
            </Link>
            <Link
              to="/refund-policy"
              className="hover:text-[#2563EB] transition"
            >
              Refund Policy
            </Link>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <p className="text-xs text-[#9CA3AF]">
            Built with care by Vivek Mehto
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
