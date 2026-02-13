"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.message) {
      setError("Please fill all required fields.");
      return;
    }

    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await res.json();
    setLoading(false);

    if (result.success) {
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      setError(result.message || "Something went wrong.");
    }
  };

  if (success) {
    return (
      <div className="mt-6 rounded-(--radius-md) bg-back-500 p-6 text-center">
        <h3 className="text-lg font-semibold text-[primary-600">
          Thank you for reaching out!
        </h3>
        <p className="mt-2 text-sm text-body-700">
          Our team will respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5">

      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-body-700">
          Full Name *
        </label>
        <input
          name="name"
          type="text"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your full name"
          className="
            mt-1 w-full rounded-[var(--radius-md)]
            border border-[var(--color-border-300)]
            bg-[var(--color-light-100)]
            px-4 py-3.5 text-base
            focus:border-[var(--color-primary-600)]
            focus:ring-1 focus:ring-[var(--color-primary-600)]
            focus:outline-none transition
          "
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-[var(--color-body-700)]">
          Email Address *
        </label>
        <input
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          className="
            mt-1 w-full rounded-[var(--radius-md)]
            border border-[var(--color-border-300)]
            bg-[var(--color-light-100)]
            px-4 py-3.5 text-base
            focus:border-[var(--color-primary-600)]
            focus:ring-1 focus:ring-[var(--color-primary-600)]
            focus:outline-none transition
          "
        />
      </div>

      {/* Phone (Optional) */}
      <div>
        <label className="block text-sm font-medium text-[var(--color-body-700)]">
          Phone Number (Optional)
        </label>
        <input
          name="phone"
          type="tel"
          inputMode="numeric"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
          className="
            mt-1 w-full rounded-[var(--radius-md)]
            border border-[var(--color-border-300)]
            bg-[var(--color-light-100)]
            px-4 py-3.5 text-base
            focus:border-[var(--color-primary-600)]
            focus:ring-1 focus:ring-[var(--color-primary-600)]
            focus:outline-none transition
          "
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-[var(--color-body-700)]">
          Message *
        </label>
        <textarea
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Please share the student’s age and current chess level (if known)"
          className="
            mt-1 w-full rounded-[var(--radius-md)]
            border border-[var(--color-border-300)]
            bg-[var(--color-light-100)]
            px-4 py-3.5 text-base
            focus:border-[var(--color-primary-600)]
            focus:ring-1 focus:ring-[var(--color-primary-600)]
            focus:outline-none transition resize-none
          "
        />
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      {/* Submit */}
      <Button className="w-full" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
