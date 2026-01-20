import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";
import { NIMZO_EMAIL,NIMZO_PHONE_NUMBER } from "../utils/constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B0B0B] text-gray-400">
      <div className="mx-auto max-w-7xl px-4 py-20">
        {/* Top Section */}
        <div className="grid gap-14 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Nimzo Chess Academy Logo"
                className="h-10 w-auto"
              />
              <span className="text-lg font-semibold text-white">
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
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-gray-300">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-white transition">
                  Programs
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition">
                  Testimonials
                </a>
              </li>
              <li>
                  <Link
              to="/contact"
              className="hover:text-white transition"
            >
             Contact Us
            </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-gray-300">
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
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-wider text-gray-300">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#1FB6E0]" />
                <span>{NIMZO_PHONE_NUMBER}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#1FB6E0]" />
                <span>{NIMZO_EMAIL}</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-[#1FB6E0]" />
                <span>Online & Offline Classes</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-14 h-px bg-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm md:flex-row">
          <p>
            © {new Date().getFullYear()} Nimzo Chess Academy. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="hover:text-white transition"
            >
              Terms & Conditions
            </Link>
            <Link to="/refund-policy" className="hover:text-white transition">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
