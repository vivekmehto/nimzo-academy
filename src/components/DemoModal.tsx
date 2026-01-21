import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import CountryCode from "./CountryCode";

type Props = {
  open: boolean;
  onClose: () => void;
};

const ENTRY = {
  parentEmail: "entry.1045781291",
  parentName: "entry.2005620554",
  childName: "entry.1065046570",
  countryCode: "entry.1825318315",
  phone: "entry.1166974658",
  childAge: "entry.1182120577",
  source: "entry.839337160",
};

const GOOGLE_FORM_ACTION = import.meta.env.VITE_GOOGLE_FORM_ACTION;

const DemoModal: React.FC<Props> = ({ open, onClose }) => {
  const [countryCode, setCountryCode] = useState("+91");
  const [submitted, setSubmitted] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string) => {
    let error = "";
    let isValid = false;

    switch (name) {
      case ENTRY.parentEmail:
        isValid = /^\S+@\S+\.\S+$/.test(value);
        error = isValid ? "" : "Please enter a valid email address";
        break;

      case ENTRY.parentName:
        isValid = value.trim().length >= 2;
        error = isValid ? "" : "Please enter parent’s name";
        break;

      case ENTRY.childName:
        isValid = value.trim().length >= 2;
        error = isValid ? "" : "Please enter child’s name";
        break;

      case ENTRY.phone: {
        const clean = value.replace(/\D/g, "");
        isValid = clean.length >= 6 && clean.length <= 15;
        error = isValid ? "" : "Enter a valid mobile number";
        break;
      }

      case ENTRY.childAge:
        isValid = Boolean(value);
        error = isValid ? "" : "Please select child’s age";
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const getValue = (form: HTMLFormElement, name: string): string => {
    const el = form.elements.namedItem(name) as
      | HTMLInputElement
      | HTMLSelectElement
      | null;

    return el?.value ?? "";
  };

  const validateForm = (form: HTMLFormElement) => {
    const newErrors: Record<string, string> = {};

    const email = getValue(form, ENTRY.parentEmail);
    const parentName = getValue(form, ENTRY.parentName);
    const childName = getValue(form, ENTRY.childName);
    const phone = getValue(form, ENTRY.phone);
    const age = getValue(form, ENTRY.childAge);

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      newErrors[ENTRY.parentEmail] = "Please enter a valid email address";
    }

    if (!parentName || parentName.trim().length < 2) {
      newErrors[ENTRY.parentName] = "Please enter parent’s name";
    }

    if (!childName || childName.trim().length < 2) {
      newErrors[ENTRY.childName] = "Please enter child’s name";
    }

    const cleanPhone = phone.replace(/\D/g, "");
    if (!cleanPhone || cleanPhone.length < 6 || cleanPhone.length > 15) {
      newErrors[ENTRY.phone] = "Enter a valid mobile number";
    }

    if (!age) {
      newErrors[ENTRY.childAge] = "Please select child’s age";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  if (!open) return null;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!validateForm(form)) {
      // auto-focus first invalid field
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const el = form.elements.namedItem(
          firstErrorField
        ) as HTMLElement | null;
        el?.focus();
      }
      return;
    }

    const formData = new FormData(form);

    formData.append(ENTRY.countryCode, countryCode);

    fetch(GOOGLE_FORM_ACTION, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    }).then(() => {
      setSubmitted(true);
      setErrors({});
      form.reset();
    });
  };

  const inputBase =
    "w-full rounded-lg border border-black px-4 py-3 text-sm outline-none focus:border-amber-500 focus:ring-0 focus:shadow-none";

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value.replace(/\D/g, "");
  };


  useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

  return () => {
    document.body.style.overflow = "";
  };
}, [open]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
    
<div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />


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
            <form onSubmit={handleSubmit} className="mt-6 space-y-3">
              <div className="space-y-1">
                <input
                  name={ENTRY.parentEmail}
                  type="email"
                  placeholder="Parent’s Email ID"
                  onBlur={(e) => validateField(e.target.name, e.target.value)}
                  className={inputBase}
                  required
                />

                <p className="h-3.5 text-xs text-red-500 leading-tight">
                  {errors[ENTRY.parentEmail] || ""}
                </p>
              </div>

              <div className="space-y-1">
                <input
                  name={ENTRY.parentName}
                  placeholder="Parent’s Full Name"
                  required
                  onBlur={(e) => validateField(e.target.name, e.target.value)}
                  className={inputBase}
                />

                <p className="h-3.5 text-xs text-red-500">
                  {errors[ENTRY.parentName] || ""}
                </p>
              </div>

              <div className="space-y-1">
                <input
                  name={ENTRY.childName}
                  placeholder="Child’s Name"
                  required
                  onBlur={(e) => validateField(e.target.name, e.target.value)}
                  className={inputBase}
                />

                <p className="h-3.5 text-xs text-red-500">
                  {errors[ENTRY.childName] || ""}
                </p>
              </div>

              <div className="space-y-1">
                <div className="flex">
                  <CountryCode value={countryCode} onChange={setCountryCode} />
                  <input
                    name={ENTRY.phone}
                    placeholder="Mobile Number (Preferably WhatsApp)"
                    onBlur={(e) => validateField(e.target.name, e.target.value)}
                    className={inputBase}
                    type="tel"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    onChange={handlePhoneChange}
                  />
                </div>

                <p className="h-3.5 text-xs text-red-500 leading-tight">
                  {errors[ENTRY.phone] || ""}
                </p>
              </div>

              <div className="space-y-1">
                <select
                  name={ENTRY.childAge}
                  required
                  onBlur={(e) => validateField(e.target.name, e.target.value)}
                  className={inputBase}
                >
                  <option value="">Select Age</option>
                  <option>5–6</option>
                  <option>7–8</option>
                  <option>9–10</option>
                  <option>11–12</option>
                  <option>13–14</option>
                  <option>15+</option>
                </select>

                <p className="h-3.5 text-xs text-red-500">
                  {errors[ENTRY.childAge] || ""}
                </p>
              </div>

              <div className="space-y-1">
                <select name={ENTRY.source} className={inputBase}>
                  <option value="">How did you hear about us?</option>
                  <option>Google Search</option>
                  <option>Instagram / Facebook</option>
                  <option>YouTube</option>
                  <option>Friend / Word of Mouth</option>
                  <option>School / Coach</option>
                  <option>Other</option>
                </select>
              </div>
              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-amber-500 py-3 font-semibold text-white hover:bg-amber-600 transition"
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
