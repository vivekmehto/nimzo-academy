"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

const countryOptions = [
  { value: "+91", label: "India (+91)" },
  { value: "+1", label: "USA / Canada (+1)" },
  { value: "+44", label: "UK (+44)" },
  { value: "+61", label: "Australia (+61)" },
  { value: "+64", label: "New Zealand (+64)" },
  { value: "+65", label: "Singapore (+65)" },
  { value: "+971", label: "UAE (+971)" },
  { value: "+966", label: "Saudi Arabia (+966)" },
  { value: "+974", label: "Qatar (+974)" },
  { value: "+965", label: "Kuwait (+965)" },
  { value: "+973", label: "Bahrain (+973)" },
  { value: "+968", label: "Oman (+968)" },
  { value: "+60", label: "Malaysia (+60)" },
  { value: "+27", label: "South Africa (+27)" },
];

const sourceOptions = [
  "Google",
  "Instagram",
  "Facebook",
  "Referral",
  "School",
  "Other",
];

function inputClassName() {
  return `
    mt-1.5 w-full rounded-[var(--radius-md)]
    border border-[var(--color-border-300)]
    bg-white px-4 py-3 text-sm text-[var(--color-heading-900)]
    outline-none transition
    placeholder:text-[var(--color-muted-500)]
    focus:border-[var(--color-primary-600)]
    focus:ring-2 focus:ring-[var(--color-primary-600)]/10
  `;
}

export default function DemoFormContent({ type }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    studentName: "",
    countryCode: "+91",
    phone: "",
    age: "",
    sourceDetail: "",
    website: "",
  });

  const title =
    type === "assessment" ? "Book Chess Skill Assessment" : "Book a Free Demo Class";
  const subtitle =
    type === "assessment"
      ? "We will assess the student’s current level and suggest the right starting point."
      : "Tell us a little about the student and we will help you choose the right format.";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (e) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "").slice(0, 15);
    setFormData((prev) => ({ ...prev, phone: onlyNumbers }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type }),
      });

      const result = await res.json();

      if (result.success) {
        setSuccess(true);
        setFormData({
          parentName: "",
          email: "",
          studentName: "",
          countryCode: "+91",
          phone: "",
          age: "",
          sourceDetail: "",
          website: "",
        });
      } else {
        setError(result.message || "Something went wrong.");
      }
    } catch {
      setError("Unable to submit right now. Please try again in a moment.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-[var(--color-back-500)] p-8 text-center animate-fade-in">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-primary-600)]/10 text-[var(--color-primary-600)]">
          <span className="text-xl">✓</span>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-[var(--color-heading-900)]">
          Request submitted
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-body-700)]">
          Thank you. Our team will review the details and contact you shortly.
        </p>
        <p className="mt-2 text-xs text-[var(--color-muted-500)]">
          Typical response time: within 24 hours
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="border-b border-[var(--color-border-300)] pb-5">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
          {type === "assessment" ? "Assessment Request" : "Free Demo Request"}
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-[var(--color-heading-900)]">
          {title}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-body-700)]">
          {subtitle}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="parentName" className="block text-sm font-medium text-[var(--color-heading-900)]">
              Parent Name
            </label>
            <input
              id="parentName"
              name="parentName"
              type="text"
              required
              value={formData.parentName}
              onChange={handleChange}
              placeholder="Parent's full name"
              className={inputClassName()}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[var(--color-heading-900)]">
              Parent Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="name@example.com"
              className={inputClassName()}
            />
          </div>

          <div>
            <label htmlFor="studentName" className="block text-sm font-medium text-[var(--color-heading-900)]">
              Student Name
            </label>
            <input
              id="studentName"
              name="studentName"
              type="text"
              required
              value={formData.studentName}
              onChange={handleChange}
              placeholder="Child's full name"
              className={inputClassName()}
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-medium text-[var(--color-heading-900)]">
              Student Age
            </label>
            <select
              id="age"
              name="age"
              required
              value={formData.age}
              onChange={handleChange}
              className={inputClassName()}
            >
              <option value="">Select age</option>
              {[5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map((age) => (
                <option key={age} value={age}>
                  {age}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-[var(--color-heading-900)]">
            WhatsApp Number
          </label>
          <div className="mt-1.5 grid gap-3 sm:grid-cols-[170px_minmax(0,1fr)]">
            <select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              className={inputClassName()}
            >
              {countryOptions.map((option) => (
                <option key={option.value + option.label} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <input
              id="phone"
              name="phone"
              required
              inputMode="numeric"
              value={formData.phone}
              onChange={handlePhoneChange}
              placeholder="Preferably WhatsApp number"
              className={inputClassName()}
            />
          </div>
          <p className="mt-2 text-xs text-[var(--color-muted-500)]">
            We use this mainly to coordinate the demo or assessment timing.
          </p>
        </div>

        <div>
          <label htmlFor="sourceDetail" className="block text-sm font-medium text-[var(--color-heading-900)]">
            How did you hear about us?
          </label>
          <select
            id="sourceDetail"
            name="sourceDetail"
            value={formData.sourceDetail}
            onChange={handleChange}
            className={inputClassName()}
          >
            <option value="">Select an option</option>
            {sourceOptions.map((source) => (
              <option key={source} value={source}>
                {source}
              </option>
            ))}
          </select>
        </div>

        {error && (
          <div className="rounded-[var(--radius-md)] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="rounded-[var(--radius-md)] border border-[var(--color-border-300)] bg-[var(--color-light-100)] px-4 py-3 text-xs leading-relaxed text-[var(--color-muted-500)]">
          Required details help us recommend the right class format and student stage more accurately.
        </div>

        <Button type="submit" full size="lg" disabled={loading} className="min-h-[52px]">
          {loading ? "Submitting..." : type === "assessment" ? "Book Assessment" : "Book Free Demo"}
        </Button>

        <p className="text-center text-xs text-[var(--color-muted-500)]">
          No commitment required. We typically respond within 24 hours.
        </p>
      </form>
    </div>
  );
}
