"use client";

import { useState } from "react";
import { BadgeCheck, BookOpenCheck, ShieldCheck } from "lucide-react";
import Button from "@/components/ui/Button";

const COUNTRY_CODE_OPTIONS = [
  { value: "+91", label: "India (+91)" },
  { value: "+1", label: "USA / Canada (+1)" },
  { value: "+44", label: "UK (+44)" },
  { value: "+61", label: "Australia (+61)" },
  { value: "+64", label: "New Zealand (+64)" },
  { value: "+65", label: "Singapore (+65)" },
  { value: "+971", label: "UAE (+971)" },
  { value: "+974", label: "Qatar (+974)" },
  { value: "+966", label: "Saudi Arabia (+966)" },
  { value: "+965", label: "Kuwait (+965)" },
  { value: "+973", label: "Bahrain (+973)" },
  { value: "+968", label: "Oman (+968)" },
  { value: "+60", label: "Malaysia (+60)" },
  { value: "+27", label: "South Africa (+27)" },
];

export default function ReferralForm() {
  const [formData, setFormData] = useState({
    referrerName: "",
    currentStudentName: "",
    studentName: "",
    countryCode: "+91",
    phone: "",
    parentEmail: "",
    grade: "",
    location: "",
    relationship: "",
    website: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});

  const tips = [
    {
      icon: ShieldCheck,
      title: "Only genuine referrals",
      text: "The student should be new to Nimzo Academy and genuinely interested in learning.",
    },
    {
      icon: BookOpenCheck,
      title: "We handle the next step",
      text: "Your job is only to introduce the family. We take care of the explanation and onboarding.",
    },
    {
      icon: BadgeCheck,
      title: "Rewards stay simple",
      text: "Fee credits are applied only after enrollment, fee payment, and 30 active days.",
    },
  ];

  const getInputClassName = (fieldName) =>
    `w-full rounded-[var(--radius-md)] border bg-white px-4 py-3.5 text-sm text-[var(--color-heading-900)] transition placeholder:text-[var(--color-muted-500)] focus:outline-none focus:ring-4 ${fieldErrors[fieldName]
      ? "border-red-500 focus:ring-red-100"
      : "border-[var(--color-border-300)] hover:border-[var(--color-primary-600)] focus:border-[var(--color-primary-600)] focus:ring-[var(--color-primary-600)]/10"
    }`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setFieldErrors((prev) => ({ ...prev, [name]: "" }));
    setError("");
  };

  const validate = () => {
    const nextErrors = {};

    if (!formData.referrerName.trim()) {
      nextErrors.referrerName = "Please enter your name.";
    }

    if (!formData.currentStudentName.trim()) {
      nextErrors.currentStudentName = "Please enter the current Nimzo student name.";
    }

    if (!formData.studentName.trim()) {
      nextErrors.studentName = "Please enter the referred student name.";
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = "Please enter the parent contact number.";
    }

    if (
      formData.parentEmail.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.parentEmail.trim())
    ) {
      nextErrors.parentEmail = "Please enter a valid email address.";
    }

    return nextErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const validationErrors = validate();
    setFieldErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(true);
        setFormData({
          referrerName: "",
          currentStudentName: "",
          studentName: "",
          countryCode: "+91",
          phone: "",
          parentEmail: "",
          grade: "",
          location: "",
          relationship: "",
          website: "",
        });
      } else {
        setError(data.message || "Something went wrong.");
      }
    } catch {
      setError("Server error. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <section id="referral-form" className="bg-[var(--color-white-100)] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
            Referral Form
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--color-heading-900)] md:text-4xl">
            Submit the referral while interest is highest
          </h2>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="space-y-5 lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-[calc(var(--radius-lg)+0.2rem)] border border-[var(--color-border-300)] bg-[linear-gradient(160deg,var(--color-primary-600)_0%,var(--color-primary-700)_100%)] p-7 text-white shadow-[0_24px_60px_rgba(49,75,200,0.22)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
                Before You Submit
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight">
                Keep it simple
              </h3>

              <div className="mt-5 space-y-3">
                {tips.map((tip) => {
                  const Icon = tip.icon;

                  return (
                    <div
                      key={tip.title}
                      className="rounded-[var(--radius-lg)] border border-white/12 bg-white/10 p-3.5 backdrop-blur-sm"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15">
                          <Icon className="h-4.5 w-4.5" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold">{tip.title}</p>
                          <p className="mt-1 text-sm leading-relaxed text-white/80">
                            {tip.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="rounded-[calc(var(--radius-lg)+0.2rem)] border border-[var(--color-border-300)] bg-[var(--color-light-100)] p-3 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <div className="rounded-[var(--radius-lg)] bg-[var(--color-white-100)] p-7 md:p-9">
              {success ? (
                <div className="text-center space-y-3">
                  <h3 className="text-xl font-semibold text-[var(--color-heading-900)]">
                    Referral Submitted
                  </h3>
                  <p className="text-sm text-[var(--color-body-700)]">
                    Our team will contact the family shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-[var(--color-heading-900)]">
                        Referral details
                      </h3>
                      <p className="mt-1 text-sm text-[var(--color-muted-500)]">
                        Fields marked with * are required.
                      </p>
                    </div>
                  </div>

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

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="referrerName"
                        className="block mb-1.5 text-sm font-medium text-[var(--color-heading-900)]"
                      >
                        Your Name
                      </label>
                      <input
                        id="referrerName"
                        type="text"
                        name="referrerName"
                        value={formData.referrerName}
                        onChange={handleChange}
                        placeholder="Parent name"
                        aria-invalid={Boolean(fieldErrors.referrerName)}
                        aria-describedby={fieldErrors.referrerName ? "referrerName-error" : undefined}
                        className={getInputClassName("referrerName")}
                      />
                      {fieldErrors.referrerName && (
                        <p id="referrerName-error" className="mt-2 text-sm text-red-600">
                          {fieldErrors.referrerName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="currentStudentName"
                        className="block mb-1.5 text-sm font-medium text-[var(--color-heading-900)]"
                      >
                        Nimzo Student
                      </label>
                      <input
                        id="currentStudentName"
                        type="text"
                        name="currentStudentName"
                        value={formData.currentStudentName}
                        onChange={handleChange}
                        placeholder="Ananya Goel"
                        aria-invalid={Boolean(fieldErrors.currentStudentName)}
                        aria-describedby="currentStudentName-help currentStudentName-error"
                        className={getInputClassName("currentStudentName")}
                      />
                      {fieldErrors.currentStudentName && (
                        <p id="currentStudentName-error" className="mt-2 text-sm text-red-600">
                          {fieldErrors.currentStudentName}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="studentName"
                        className="block mb-1.5 text-sm font-medium text-[var(--color-heading-900)]"
                      >
                        Student Name
                      </label>
                      <input
                        id="studentName"
                        type="text"
                        name="studentName"
                        value={formData.studentName}
                        onChange={handleChange}
                        placeholder="Referred child name"
                        aria-invalid={Boolean(fieldErrors.studentName)}
                        aria-describedby={fieldErrors.studentName ? "studentName-error" : undefined}
                        className={getInputClassName("studentName")}
                      />
                      {fieldErrors.studentName && (
                        <p id="studentName-error" className="mt-2 text-sm text-red-600">
                          {fieldErrors.studentName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="relationship"
                        className="block mb-1.5 text-sm font-medium text-[var(--color-heading-900)]"
                      >
                        Relationship
                      </label>
                      <input
                        id="relationship"
                        type="text"
                        name="relationship"
                        value={formData.relationship}
                        onChange={handleChange}
                        placeholder="Friend, cousin, classmate"
                        className={getInputClassName("relationship")}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-1.5 text-sm font-medium text-[var(--color-heading-900)]"
                    >
                      WhatsApp Number
                    </label>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                      <select
                        id="countryCode"
                        name="countryCode"
                        value={formData.countryCode}
                        onChange={handleChange}
                        aria-label="Country code"
                        className={`${getInputClassName("countryCode")} sm:w-52`}
                      >
                        {COUNTRY_CODE_OPTIONS.map((option) => (
                          <option key={option.label} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>

                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        inputMode="tel"
                        placeholder="Parent's WhatsApp number"
                        aria-invalid={Boolean(fieldErrors.phone)}
                        aria-describedby="phone-help phone-error"
                        onChange={(e) => {
                          const onlyNumbers = e.target.value
                            .replace(/\D/g, "")
                            .slice(0, 15);
                          setFormData((prev) => ({
                            ...prev,
                            phone: onlyNumbers,
                          }));
                          setFieldErrors((prev) => ({ ...prev, phone: "" }));
                          setError("");
                        }}
                        className={`${getInputClassName("phone")} flex-1`}
                      />
                    </div>
                    <p id="phone-help" className="mt-2 text-xs text-[var(--color-muted-500)]">
                      India and international numbers are supported.
                    </p>
                    {fieldErrors.phone && (
                      <p id="phone-error" className="mt-2 text-sm text-red-600">
                        {fieldErrors.phone}
                      </p>
                    )}
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="parentEmail"
                        className="block mb-1.5 text-sm font-medium text-[var(--color-heading-900)]"
                      >
                        Email
                      </label>
                      <input
                        id="parentEmail"
                        type="email"
                        name="parentEmail"
                        value={formData.parentEmail}
                        onChange={handleChange}
                        placeholder="Optional"
                        aria-invalid={Boolean(fieldErrors.parentEmail)}
                        aria-describedby={fieldErrors.parentEmail ? "parentEmail-error" : "parentEmail-help"}
                        className={getInputClassName("parentEmail")}
                      />
                      <p id="parentEmail-help" className="mt-2 text-xs text-[var(--color-muted-500)]">
                        Optional for international follow-up.
                      </p>
                      {fieldErrors.parentEmail && (
                        <p id="parentEmail-error" className="mt-2 text-sm text-red-600">
                          {fieldErrors.parentEmail}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="grade"
                        className="block mb-1.5 text-sm font-medium text-[var(--color-heading-900)]"
                      >
                        Grade
                      </label>
                      <input
                        id="grade"
                        type="text"
                        name="grade"
                        value={formData.grade}
                        onChange={handleChange}
                        placeholder="Example: Grade 4"
                        className={getInputClassName("grade")}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="location"
                        className="block mb-1.5 text-sm font-medium text-[var(--color-heading-900)]"
                      >
                        City / Country
                      </label>
                      <input
                        id="location"
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="London, UK"
                        className={getInputClassName("location")}
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="rounded-[var(--radius-md)] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                      {error}
                    </div>
                  )}

                  <Button type="submit" disabled={loading} full size="lg" className="min-h-[56px] py-4">
                    {loading ? "Submitting..." : "Submit Referral"}
                  </Button>

                  <p className="text-xs text-center text-[var(--color-muted-500)]">
                    Information will remain confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
