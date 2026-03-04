"use client";

import { useState,useEffect } from "react";

export default function DemoFormContent({ type }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    studentName: "",
    countryCode: "+91",
    phone: "",
    age: "",
    sourceDetail: "",
    type: type,
  });

   useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      type: type,
    }));
  }, [type]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/demo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    setLoading(false);

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
      });
    }
  };

  return (
    <>
      {!success ? (
        <>
          {/* Heading */}
          <h2 className="text-xl sm:text-2xl font-semibold text-center text-(--color-heading-900)">
            {type === "demo"
              ? "Book A Free Demo Today"
              : "Book Chess Skill Assessment"}
          </h2>

          <p className="mt-2 text-center text-sm text-muted-500">
            Be a part of our growing global chess community.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            {/* Email, Parent, Student */}
            {[
              {
                name: "email",
                placeholder: "Parent’s Email ID",
                type: "email",
              },
              { name: "parentName", placeholder: "Parent’s Full Name" },
              { name: "studentName", placeholder: "Child’s Name" },
            ].map((field) => (
              <input
                key={field.name}
                name={field.name}
                type={field.type || "text"}
                placeholder={field.placeholder}
                required
                value={formData[field.name]}
                onChange={handleChange}
                className="w-full px-4 py-2.5 text-sm border bg-white outline-none transition-all duration-200 focus:ring-2 focus:ring-back-500"
                style={{
                  borderColor: "var(--color-border-300)",
                  borderRadius: "var(--radius-md)",
                }}
              />
            ))}

            {/* Phone Row */}
            <div className="flex flex-col sm:flex-row gap-2">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={handleChange}
                className="sm:w-36 w-full px-3 py-2.5 text-sm border bg-white outline-none"
                style={{
                  borderColor: "var(--color-border-300)",
                  borderRadius: "var(--radius-md)",
                }}
              >
                <option value="+91">🇮🇳 +91 (India)</option>
                <option value="+1">🇺🇸 +1 (USA)</option>
                <option value="+1">🇨🇦 +1 (Canada)</option>
                <option value="+44">🇬🇧 +44 (UK)</option>
                <option value="+61">🇦🇺 +61 (Australia)</option>
                <option value="+64">🇳🇿 +64 (New Zealand)</option>
                <option value="+65">🇸🇬 +65 (Singapore)</option>
                <option value="+971">🇦🇪 +971 (UAE)</option>
                <option value="+966">🇸🇦 +966 (Saudi Arabia)</option>
                <option value="+974">🇶🇦 +974 (Qatar)</option>
                <option value="+965">🇰🇼 +965 (Kuwait)</option>
                <option value="+973">🇧🇭 +973 (Bahrain)</option>
                <option value="+968">🇴🇲 +968 (Oman)</option>
                <option value="+60">🇲🇾 +60 (Malaysia)</option>
                <option value="+27">🇿🇦 +27 (South Africa)</option>
              </select>

              <input
                name="phone"
                placeholder="Mobile Number (Preferably WhatsApp)"
                inputMode="numeric"
                maxLength={15}
                required
                value={formData.phone}
                onChange={(e) => {
                  const onlyNumbers = e.target.value
                    .replace(/\D/g, "")
                    .slice(0, 15);
                  setFormData({
                    ...formData,
                    phone: onlyNumbers,
                  });
                }}
                className="flex-1 px-4 py-2.5 text-sm border bg-white outline-none transition-all duration-200 focus:ring-2 focus:ring-muted-500"
                style={{
                  borderColor: "var(--color-border-300)",
                  borderRadius: "var(--radius-md)",
                }}
              />
            </div>

            {/* Age */}
            <select
              name="age"
              required
              value={formData.age}
              onChange={handleChange}
              className="w-full px-4 py-2.5 text-sm border bg-white outline-none transition"
              style={{
                borderColor: "var(--color-border-300)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <option value="">Select Age</option>
              {[4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18].map(
                (age) => (
                  <option key={age} value={age}>
                    {age}
                  </option>
                ),
              )}
              <option value={19}>18 Above</option>
            </select>

            {/* Source */}
            <select
              name="sourceDetail"
              value={formData.sourceDetail}
              onChange={handleChange}
              className="w-full px-4 py-2.5 text-sm border bg-white outline-none transition"
              style={{
                borderColor: "var(--color-border-300)",
                borderRadius: "var(--radius-md)",
              }}
            >
              <option value="">How Did You Hear About Us</option>
              <option value="Instagram">Instagram</option>
              <option value="Facebook">Facebook</option>
              <option value="Google">Google</option>
              <option value="Referral">Referral</option>
            </select>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={loading}
                className="px-12 py-2.5 text-lg cursor-pointer font-semibold text-white transition-all duration-200 disabled:opacity-60"
                style={{
                  backgroundColor: "var(--color-accent-600)",
                  borderRadius: "9999px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--color-accent-500)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    "var(--color-accent-600)")
                }
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>

            <p className="text-center text-xs text-muted-500 pt-3">
              We typically respond within 24 hours.
            </p>
          </form>
        </>
      ) : (
        <div className="text-center py-8 animate-fade-in">
          <h3 className="text-lg font-semibold text-primary-600">
            🎉 Request Submitted!
          </h3>
          <p className="mt-2 text-sm text-body-700">
            Thank you. Our team will contact you shortly.
          </p>
        </div>
      )}
    </>
  );
}
