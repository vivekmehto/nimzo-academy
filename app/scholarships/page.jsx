import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Scholarships & Support Programs | Nimzo Academy",
  description:
    "Discover structured scholarship initiatives at Nimzo Academy including the Girls Initiative, sibling benefits, and merit-based support for competitive chess training.",
  openGraph: {
    title: "Scholarships & Support Programs | Nimzo Academy",
    description:
      "Institutional scholarship programs supporting excellence in competitive chess.",
    url: "https://nimzoacademy.com/scholarships",
    siteName: "Nimzo Academy",
    type: "website",
  },
};

export default function ScholarshipsPage() {
  return (
    <main className="bg-white text-[var(--color-body-700)]">

      {/* ================= HERO ================= */}
      <section className="relative min-h-[60vh] md:min-h-[65vh] flex items-center overflow-hidden">

        <Image
          src="/gallery/training-23.jpg"
          alt="Students training in structured chess classroom at Nimzo Academy"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-24 text-white w-full">
          <div className="max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.18em] text-white/70 mb-3">
              INITIATIVES & SCHOLARSHIPS
            </p>

            <h1 className="text-4xl md:text-5xl font-semibold leading-[1.15] mb-5">
              Scholarships & Institutional Support
            </h1>

            <div className="w-14 h-[2px] bg-[var(--color-accent-500)] mb-6"></div>

            <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8">
              At Nimzo Academy, structured excellence is supported with meaningful opportunity.
            </p>

            <Link
              href="/contact"
              className="inline-block px-9 py-3.5 bg-[var(--color-accent-500)] rounded-md font-semibold hover:bg-[var(--color-accent-600)] transition"
            >
              Apply for Admission
            </Link>
          </div>
        </div>
      </section>


      {/* ================= GIRLS INITIATIVE ================= */}
      <section className="py-20 md:py-28 bg-back-500">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 px-6 items-center">

          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-muted-500)] mb-3">
              Our Commitment
            </p>

            <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-heading-900)] mb-6">
              The Nimzo Girls Initiative
            </h2>

            <div className="w-14 h-[2px] bg-[var(--color-primary-600)] mb-6"></div>

            <p className="leading-relaxed mb-6">
              We are committed to increasing female participation in competitive chess
              through structured mentorship and equal development pathways.
            </p>

            <ul className="space-y-3">
              <li>• 10% structured scholarship support</li>
              <li>• Permanent institutional initiative</li>
              <li>• Tournament and performance guidance</li>
            </ul>
          </div>

          <div className="relative h-[320px] md:h-[480px] rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/girls-training.jpg"
              alt="Girl student training in chess at Nimzo Academy"
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>


      {/* ================= SUPPORTING IMAGE STRIP (DESKTOP ONLY) ================= */}
      <section className="hidden md:block py-16 bg-[var(--color-light-100)]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">

          {[
            {
              src: "/gallery/training-1.jpg",
              alt: "Chess tournament practice session",
            },
            {
              src: "/gallery/training-2.jpg",
              alt: "Focused chess classroom environment",
            },
            {
              src: "/gallery/training-3.jpg",
              alt: "Close-up of chess pieces during training",
            },
          ].map((img, index) => (
            <div
              key={index}
              className="relative h-[220px] rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
          ))}

        </div>
      </section>


      {/* ================= SIBLING BENEFIT ================= */}
      <section className="py-20 md:py-24 bg-back-500">
        <div className="max-w-3xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-semibold text-[var(--color-heading-900)] mb-5">
            Sibling Enrollment Benefit
          </h2>

          <div className="w-16 h-[2px] bg-[var(--color-primary-600)] mx-auto mb-6"></div>

          <p className="mb-6 leading-relaxed">
            Families enrolling multiple students receive structured support on
            the second admission.
          </p>

          <ul className="space-y-3">
            <li>• 10% support on second enrollment</li>
            <li>• Valid during concurrent participation</li>
          </ul>
        </div>
      </section>


      {/* ================= MOBILE SINGLE IMAGE ================= */}
      <section className="block md:hidden py-12 bg-[var(--color-light-100)]">
        <div className="px-6">
          <div className="relative h-[240px] rounded-lg overflow-hidden shadow-md">
            <Image
              src="/gallery/training-3.jpg"
              alt="Close-up of chess pieces during training at Nimzo Academy"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </section>


      {/* ================= MERIT SUPPORT ================= */}
      <section className="py-20 md:py-24 bg-[var(--color-light-100)]">
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-[var(--color-primary-600)] mb-3">
              Limited Allocation
            </p>

            <h2 className="text-3xl font-semibold text-[var(--color-heading-900)] mb-6">
              Merit Support Seats
            </h2>

            <div className="w-14 h-[2px] bg-[var(--color-primary-600)] mb-6"></div>

            <p className="leading-relaxed mb-6">
              A limited number of seats are reserved each batch for deserving students
              from government institutions, subject to evaluation.
            </p>

            <ul className="space-y-3">
              <li>• 10% structured support</li>
              <li>• Limited seats per batch</li>
              <li>• Evaluation required</li>
            </ul>
          </div>

          <div className="relative h-[300px] md:h-[380px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/gallery/training-6.jpg"
              alt="Student analyzing chess position during structured session"
              fill
              className="object-cover"
              sizes="(max-width:768px) 100vw, 50vw"
            />
          </div>

        </div>
      </section>


      {/* ================= POLICY ================= */}
      <section className="bg-[var(--color-dark-900)] py-16 text-center">
        <p className="text-white text-lg md:text-xl tracking-wide px-6">
          Only one scholarship program may be applied per student.
        </p>
      </section>


      {/* ================= FINAL CTA ================= */}
      <section className="py-20 md:py-24 bg-white text-center">
        <div className="max-w-2xl mx-auto px-6">

          <h2 className="text-3xl md:text-5xl font-semibold text-[var(--color-heading-900)] mb-6">
            Begin the Journey with Nimzo Academy
          </h2>

          <p className="mb-10 leading-relaxed">
            Admissions are intentionally limited to maintain focused and
            performance driven batches.
          </p>

          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-[var(--color-accent-500)] text-white font-semibold rounded-md hover:bg-[var(--color-accent-600)] transition"
          >
            Apply for Admission
          </Link>

        </div>
      </section>

    </main>
  );
}