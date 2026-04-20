"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

function getInputClassName() {
  return `
    mt-1.5 w-full rounded-[var(--radius-md)]
    border border-[var(--color-border-300)]
    bg-[var(--color-light-100)]
    px-4 py-3 text-sm text-[var(--color-heading-900)]
    outline-none transition
    placeholder:text-[var(--color-muted-500)]
    focus:border-[var(--color-primary-600)]
    focus:ring-2 focus:ring-[var(--color-primary-600)]/10
  `;
}

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    website: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
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

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.success) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          website: "",
        });
      } else {
        setError(result.message || "Something went wrong.");
      }
    } catch {
      setError("Unable to send your message right now. Please try again shortly.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="mt-6 rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-[var(--color-back-500)] p-6 text-center">
        <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary-600)]/10 text-[var(--color-primary-600)]">
          <span className="text-lg">✓</span>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-[var(--color-heading-900)]">
          Thank you for reaching out
        </h3>
        <p className="mt-2 text-sm text-[var(--color-body-700)]">
          Our team will respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-5">
      <input
        name="website"
        type="text"
        value={formData.website}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="rounded-[var(--radius-md)] border border-[var(--color-border-300)] bg-[var(--color-light-100)] px-4 py-3 text-xs leading-relaxed text-[var(--color-muted-500)]">
        Share the student&apos;s age, current level, and whether you are looking for centre classes, home coaching, or online learning.
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--color-heading-900)]">
            Full Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Parent or guardian name"
            className={getInputClassName()}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--color-heading-900)]">
            Email Address
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="name@example.com"
            className={getInputClassName()}
          />
        </div>
      </div>

      <div>
        <label htmlFor="contact-phone" className="block text-sm font-medium text-[var(--color-heading-900)]">
          Phone Number
          <span className="ml-1 text-[var(--color-muted-500)]">(Optional)</span>
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          inputMode="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="WhatsApp or mobile number"
          className={getInputClassName()}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--color-heading-900)]">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Please tell us the student's age, current chess level, and what kind of classes you are looking for."
          className={`${getInputClassName()} resize-none`}
        />
      </div>

      {error && (
        <div className="rounded-[var(--radius-md)] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <Button type="submit" className="w-full min-h-[52px]" size="lg" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </Button>

      <p className="text-center text-xs text-[var(--color-muted-500)]">
        No obligation. We usually reply within 24 hours.
      </p>
    </form>
  );
}
