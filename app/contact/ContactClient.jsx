"use client";

import ContactForm from "../../components/contact/ContactForm";



export default function ContactPage() {
  return (
    <>
      {/* =====================================================
          1. HERO — IDENTITY & IMPORTANCE
      ====================================================== */}
      <section
        className="
          px-4
          py-14
          md:py-20
          bg-linear-to-br
          from-primary-700
          to-primary-600
        "
      >
        <div className="mx-auto max-w-3xl text-center text-white">
          {/* Badge */}
          <span
            className="
              inline-block
              rounded-full
              bg-white/15
              px-4
              py-1.5
              text-sm
              font-medium
            "
          >
            ♟️ Elite Chess Coaching for Young Minds
          </span>

          {/* H1 */}
          <h1 className="mt-5 text-2xl font-semibold md:text-4xl">
            Contact Nimzo Academy
          </h1>

          {/* Supporting text */}
          <p className="mt-4 text-base leading-relaxed text-white/90">
            Have questions about chess classes, structured training programs,
            or admissions? We’re happy to guide parents and students every step
            of the way.
          </p>
        </div>
      </section>

      {/* =====================================================
          2. MAIN CONTENT — ACTION AREA
      ====================================================== */}
      <section className="bg-light-100 px-4 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          {/* Central Panel */}
          <div
            className="
              rounded-(--radius-lg)
              bg-white-100
              p-6
              shadow-lg
              md:p-10
              md:-mt-24
            "
          >
            <div className="grid gap-12 md:grid-cols-2">
              {/* ---------------- FORM ---------------- */}
              <div>
                <h2 className="text-lg font-semibold text-(--color-heading-900) md:text-xl">
                  Send a Message
                </h2>

              <ContactForm />
              </div>

              {/* ---------------- INFO & TRUST ---------------- */}
              <div className="space-y-8">
                {/* Contact Info Card */}
                <div
                  className="
                    rounded-(--radius-md)
                    border border-border-300
                    p-6
                  "
                >
                  <h3 className="text-base font-semibold text-(--color-heading-900)">
                    Contact Information
                  </h3>

                  <div className="mt-4 space-y-3 text-base text-body-700">
                    <p><strong>Phone:</strong> +91 97180 86186</p>
                    <p><strong>Email:</strong> nimzoacademy@gmail.com</p>
                    <p><strong>Location:</strong> 262, BLOCK-A, Sector 8 Dwarka, New Delhi-110077</p>
                    <p><strong>Office Hours:</strong> Mon – Sat, 10:00 AM – 7:00 PM</p>
                  </div>
                </div>

                {/* Trust Box */}
                <div
                  className="
                    rounded-(--radius-md)
                    bg-back-500
                    p-6
                  "
                >
                  <p className="text-base leading-relaxed text-body-700">
                    ♟️ Structured chess training with personal attention.
                    Parents receive regular progress updates.
                    We usually respond within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          3. MAP — REAL WORLD TRUST
      ====================================================== */}
      <section className="bg-back-500 px-4 py-14 md:py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-lg font-semibold text-(--color-heading-900) md:text-xl">
            Our Chess Academy Location in Dwarka, New Delhi
          </h2>

          <div
            className="
              mt-6
              overflow-hidden
              rounded-(--radius-lg)
              shadow-md
            "
          >
            <iframe
              title="Nimzo Academy Location"
              src="https://www.google.com/maps?q=Dwarka%20New%20Delhi&output=embed"
              className="h-75 w-full md:h-95"
              loading="lazy"
            />
          </div>

          <p className="mt-4 text-sm text-muted-500">
            Visits by prior appointment only ♟️
          </p>
        </div>
      </section>

      {/* =====================================================
          4. CLOSING STRIP — EMOTIONAL END
      ====================================================== */}
      <section
        className="
          bg-primary-700
          px-4
          py-10
        "
      >
        <p className="mx-auto max-w-3xl text-center text-sm leading-relaxed text-white/90">
          Helping children build focus, confidence, and strategic thinking through chess ♟️
        </p>
      </section>
    </>
  );
}