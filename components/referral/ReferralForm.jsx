"use client";

import { useState } from "react";

export default function ReferralForm() {
  const [formData, setFormData] = useState({
    referrerName: "",
    studentName: "",
    countryCode: "+91",
    phone: "",
    grade: "",
    location: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    if (!formData.referrerName.trim()) return "Please enter your name.";
    if (!formData.studentName.trim()) return "Please enter student name.";
    if (!formData.phone.trim()) return "Please enter contact number.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const validationError = validate();
    if (validationError) {
      setError(validationError);
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
          studentName: "",
          countryCode: "+91",
          phone: "",
          grade: "",
          location: "",
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
    <section id="referral-form" className="py-20 bg-[var(--color-light-100)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* LEFT PANEL */}
          <div className="space-y-6 max-w-lg">
            <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-primary-600)]">
              Chess Referral Program
            </p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--color-heading-900)]">
              Nominate a Serious Chess Learner
            </h2>

            <p className="text-base md:text-lg text-[var(--color-body-700)]">
              Help us grow a disciplined chess community in Dwarka.
              If you know a committed learner, submit their details below.
            </p>

            <div className="h-1 w-16 bg-[var(--color-primary-600)] rounded-full"></div>

            <div className="space-y-3 text-[var(--color-body-700)] text-sm md:text-base">
              <div className="flex gap-3">
                <div className="mt-2 w-2 h-2 bg-[var(--color-primary-600)] rounded-full"></div>
                <p>Structured long-term chess development.</p>
              </div>
              <div className="flex gap-3">
                <div className="mt-2 w-2 h-2 bg-[var(--color-primary-600)] rounded-full"></div>
                <p>Disciplined learning environment.</p>
              </div>
              <div className="flex gap-3">
                <div className="mt-2 w-2 h-2 bg-[var(--color-primary-600)] rounded-full"></div>
                <p>Community Scholarship Credits.</p>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL — COMPACT FORM */}
          <div className="bg-[var(--color-white-100)] rounded-[var(--radius-lg)] shadow-xl p-8 md:p-10">

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
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Row 1 */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block mb-1 text-sm font-medium text-[var(--color-heading-900)]">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="referrerName"
                      value={formData.referrerName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[var(--color-border-300)]
                      rounded-[var(--radius-md)] bg-white
                      focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-600)]
                      hover:border-[var(--color-primary-600)] transition"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-[var(--color-heading-900)]">
                      Student Name *
                    </label>
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[var(--color-border-300)]
                      rounded-[var(--radius-md)] bg-white
                      focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-600)]
                      hover:border-[var(--color-primary-600)] transition"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block mb-1 text-sm font-medium text-[var(--color-heading-900)]">
                    Parent Contact Number *
                  </label>
                  <div className="flex gap-3">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleChange}
                      className="px-4 py-3 border border-[var(--color-border-300)]
                      rounded-[var(--radius-md)] bg-white
                      focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-600)]"
                    >
                      <option value="+91">+91</option>
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                    </select>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="flex-1 px-4 py-3 border border-[var(--color-border-300)]
                      rounded-[var(--radius-md)] bg-white
                      focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-600)]
                      hover:border-[var(--color-primary-600)] transition"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block mb-1 text-sm font-medium text-[var(--color-heading-900)]">
                      Grade
                    </label>
                    <input
                      type="text"
                      name="grade"
                      value={formData.grade}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[var(--color-border-300)]
                      rounded-[var(--radius-md)] bg-white
                      focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-600)]
                      hover:border-[var(--color-primary-600)] transition"
                    />
                  </div>

                  <div>
                    <label className="block mb-1 text-sm font-medium text-[var(--color-heading-900)]">
                      Location
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[var(--color-border-300)]
                      rounded-[var(--radius-md)] bg-white
                      focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-600)]
                      hover:border-[var(--color-primary-600)] transition"
                    />
                  </div>
                </div>

                {error && (
                  <p className="text-sm text-red-600">{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 text-base font-semibold
                  rounded-[var(--radius-md)]
                  bg-[var(--color-accent-500)]
                  hover:bg-[var(--color-accent-600)]
                  text-white transition disabled:opacity-70"
                >
                  {loading ? "Submitting..." : "Nominate Student"}
                </button>

                <p className="text-xs text-center text-[var(--color-muted-500)]">
                  Information will remain confidential.
                </p>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}