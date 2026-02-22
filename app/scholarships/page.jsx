import Link from "next/link";

export default function ScholarshipsPage() {
  return (
    <main className="bg-white text-[var(--color-body-700)]">

      {/* ================= HERO SECTION ================= */}
      <section className="min-h-[80vh] flex items-center bg-[var(--color-light-100)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 py-24">

          {/* LEFT: IMAGE */}
          <div className="relative h-[420px] md:h-[520px] overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/academy-hero.jpg')] bg-cover bg-center"></div>

            {/* Subtle blue overlay */}
            <div className="absolute inset-0 bg-[var(--color-primary-600)] opacity-10"></div>
          </div>

          {/* RIGHT: CONTENT */}
          <div className="flex flex-col justify-center animate-fade-up">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-muted-500)] mb-4">
              Initiatives & Scholarships
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold text-[var(--color-heading-900)] leading-tight mb-6">
              Scholarships & Institutional Support
            </h1>

            <p className="text-lg leading-relaxed mb-8 max-w-xl">
              At Nimzo Academy, excellence is supported with structure.
              Our institutional initiatives are designed to encourage talent
              while maintaining competitive standards.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 bg-[var(--color-accent-500)] text-white font-semibold rounded-md hover:bg-[var(--color-accent-600)] transition duration-200"
              >
                Apply for Admission
              </Link>

              <Link
                href="/contact"
                className="px-8 py-3.5 border border-[var(--color-primary-600)] text-[var(--color-primary-600)] font-semibold rounded-md hover:bg-[color-mix(in_srgb,var(--color-primary-600)_8%,white)] transition duration-200"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* ================= GIRLS INITIATIVE ================= */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-6 items-center">

          {/* TEXT */}
          <div className="animate-fade-up">
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-muted-500)] mb-3">
              Our Commitment
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-heading-900)] mb-6">
              The Nimzo Girls Initiative
            </h2>

            <p className="leading-relaxed mb-6 max-w-xl">
              Nimzo Academy is committed to increasing female participation
              in competitive chess through structured mentorship and equal
              developmental pathways. This initiative reflects our long-term
              institutional philosophy: talent must be supported with opportunity.
            </p>

            <ul className="space-y-3">
              <li>• 10% structured scholarship support</li>
              <li>• Permanent institutional initiative</li>
              <li>• Competitive development & tournament guidance</li>
            </ul>
          </div>

          {/* IMAGE */}
          <div className="relative rounded-lg overflow-hidden h-[420px]">
            <div className="absolute inset-0 bg-[url('/images/girls-training.jpg')] bg-cover bg-center"></div>
          </div>
        </div>
      </section>


      {/* ================= SIBLING BENEFIT ================= */}
      <section className="py-24 bg-[var(--color-light-100)]">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-white border border-[var(--color-border-300)] rounded-lg p-10 text-center">

            <h2 className="text-3xl font-semibold text-[var(--color-heading-900)] mb-5">
              Sibling Enrollment Benefit
            </h2>

            <p className="mb-6 leading-relaxed">
              Families enrolling more than one student at Nimzo Academy receive
              structured fee support for the second admission.
            </p>

            <div className="w-20 h-[1px] bg-[var(--color-border-400)] mx-auto mb-6"></div>

            <ul className="space-y-3">
              <li>• 10% support on second enrollment</li>
              <li>• Applicable during concurrent participation</li>
            </ul>
          </div>
        </div>
      </section>


      {/* ================= MERIT SUPPORT ================= */}
      <section className="py-24">
        <div className="max-w-2xl mx-auto px-6">
          <div className="border border-[var(--color-primary-600)] rounded-md p-10">

            <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-primary-600)] mb-4">
              Limited Allocation
            </p>

            <h2 className="text-3xl font-semibold text-[var(--color-heading-900)] mb-6">
              Merit Support Seats
            </h2>

            <p className="leading-relaxed mb-6">
              A limited number of seats are reserved each batch for deserving
              students from government institutions. Allocations are determined
              following a brief evaluation interaction.
            </p>

            <ul className="space-y-3">
              <li>• 10–15% structured support</li>
              <li>• Limited allocation per batch</li>
              <li>• Evaluation required</li>
            </ul>
          </div>
        </div>
      </section>


      {/* ================= POLICY STRIP ================= */}
      <section className="bg-[var(--color-dark-900)] py-12 text-center">
        <p className="text-white text-lg">
          Only one scholarship program may be applied per student.
        </p>
      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">

          <h2 className="text-3xl font-semibold text-[var(--color-heading-900)] mb-5">
            Begin the Journey with Nimzo Academy
          </h2>

          <p className="mb-8 leading-relaxed">
            Admissions are intentionally limited to maintain focused,
            performance-driven batches.
          </p>

          <Link
            href="/contact"
            className="px-8 py-3.5 bg-[var(--color-accent-500)] text-white font-semibold rounded-md hover:bg-[var(--color-accent-600)] transition duration-200"
          >
            Apply for Admission
          </Link>
        </div>
      </section>

    </main>
  );
}