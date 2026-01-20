import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import CountryCode from "./CountryCode";

type Props = {
  open: boolean;
  onClose: () => void;
};

const ENTRY = {
  parentEmail: import.meta.env.VITE_PARENT_EMAIL,
  parentName: import.meta.env.VITE_PARENT_NAME,
  childName: import.meta.env.VITE_CHILD_NAME,
  countryCode: import.meta.env.VITE_COUNTRY_CODE,
  phone: import.meta.env.VITE_PHONE,
  childAge: import.meta.env.VITE_CHILD_AGE,
  source: import.meta.env.VITE_SOURCE,
};

const GOOGLE_FORM_ACTION = `${import.meta.env.VITE_GOOGLE_FORM_ACTION}`;

const DemoModal: React.FC<Props> = ({ open, onClose }) => {
  const [countryCode, setCountryCode] = useState("+91");
  const [submitted, setSubmitted] = useState(false);
  

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    // ✅ append country code manually
    formData.append(ENTRY.countryCode, countryCode);

    fetch(GOOGLE_FORM_ACTION, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    }).then(() => {
      setSubmitted(true);
      e.currentTarget.reset();
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <h2 className="text-2xl font-bold text-center">
              Book A Free Demo Today
            </h2>
            <p className="mt-1 text-center text-sm text-gray-600">
              Be a part of a growing global chess community of kids
            </p>

            {/* ✅ FIX: onSubmit ADDED */}
            <form
              onSubmit={handleSubmit}
              className="mt-6 grid gap-4"
            >
              <input
                name={ENTRY.parentEmail}
                type="email"
                placeholder="Parent’s Email ID"
                required
                className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <input
                name={ENTRY.parentName}
                placeholder="Parent’s Full Name"
                required
                className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              <input
                name={ENTRY.childName}
                placeholder="Child’s Name"
                required
                className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              />

              {/* Phone */}
              <div className="flex">
                <CountryCode
                  value={countryCode}
                  onChange={setCountryCode}
                />
                <input
                  name={ENTRY.phone}
                  placeholder="Mobile Number (Preferably WhatsApp)"
                  required
                  className="w-full rounded-r-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <select
                name={ENTRY.childAge}
                required
                className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="">Select Age</option>
                <option>5–6</option>
                <option>7–8</option>
                <option>9–10</option>
                <option>11–12</option>
                <option>13–14</option>
                <option>15+</option>
              </select>

              <select
                name={ENTRY.source}
                className="w-full rounded-lg border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="">How did you hear about us?</option>
                <option>Google Search</option>
                <option>Instagram / Facebook</option>
                <option>YouTube</option>
                <option>Friend / Word of Mouth</option>
                <option>School / Coach</option>
                <option>Other</option>
              </select>

              <button
                type="submit"
                className="mt-2 rounded-full bg-amber-500 py-3 font-semibold text-white hover:bg-amber-600 transition"
              >
                Book Free Demo
              </button>

              <p className="text-center text-xs text-gray-500">
                🔒 We respect your privacy. No spam.
              </p>
            </form>
          </>
        ) : (
          <div className="py-10 text-center">
            <h3 className="text-xl font-bold text-green-600">
              ✅ Demo Request Received!
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              Our team will contact you shortly on WhatsApp.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DemoModal;
