import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import FinalCTA from "../components/FinalCTA";

const Contact: React.FC = () => {
  return (
    <main className="pt-28">
      {/* HERO */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
            Contact Nimzo Chess Academy
          </h1>
          <p className="mt-4 mx-auto max-w-3xl text-lg text-gray-600">
            Have questions or want to book a free demo class?  
            We’d love to hear from you.
          </p>
        </div>
      </section>

      {/* QUICK CONTACT OPTIONS */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid gap-8 md:grid-cols-4">
          <a
            href="tel:+919999999999"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md text-center"
          >
            <Phone className="mx-auto h-8 w-8 text-emerald-600" />
            <h3 className="mt-4 font-semibold text-gray-900">Call Us</h3>
            <p className="mt-1 text-sm text-gray-600">
              +91 99999 99999
            </p>
          </a>

          <a
            href="mailto:info@nimzoacademy.com"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md text-center"
          >
            <Mail className="mx-auto h-8 w-8 text-amber-500" />
            <h3 className="mt-4 font-semibold text-gray-900">Email Us</h3>
            <p className="mt-1 text-sm text-gray-600">
              info@nimzoacademy.com
            </p>
          </a>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md text-center"
          >
            <MessageCircle className="mx-auto h-8 w-8 text-green-600" />
            <h3 className="mt-4 font-semibold text-gray-900">
              WhatsApp
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Instant response
            </p>
          </a>

          <div className="rounded-2xl bg-white p-6 shadow-sm text-center">
            <MapPin className="mx-auto h-8 w-8 text-indigo-600" />
            <h3 className="mt-4 font-semibold text-gray-900">
              Location
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Online & Offline Classes
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 text-center">
              Send Us a Message
            </h2>

            <form className="mt-8 grid gap-6">
              <div className="grid gap-6 md:grid-cols-2">
                <input
                  type="text"
                  placeholder="Parent Name"
                  className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <textarea
                rows={4}
                placeholder="Your Message"
                className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <button
                type="submit"
                className="mx-auto rounded-full bg-amber-500 px-10 py-3 text-sm font-semibold text-white hover:bg-amber-600 transition"
              >
                Submit Enquiry
              </button>
            </form>

            <p className="mt-4 text-center text-xs text-gray-500">
              We usually respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

   <FinalCTA />
    </main>
  );
};

export default Contact;
