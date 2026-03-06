import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import EducationalImpact from "@/components/school-chess/EducationalImapct";
import ProgramsSection from "../../components/school-chess/ProgramsSection";

export const metadata = {
  title: "School Chess Program in Dwarka & Delhi | Nimzo Academy",
  description:
    "Structured school chess program in Dwarka and across Delhi. In-school and after-school chess training, inter-school tournament support, and institutional partnership model by Nimzo Academy.",
  openGraph: {
    title: "School Chess Program | Nimzo Academy",
    description:
      "Curriculum-based chess training for schools in Dwarka and Delhi with tournament support and structured implementation.",
    type: "website",
  },
};

export default function SchoolChessProgramPage() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Nimzo Academy",
    url: "https://nimzoacademy.com/school-chess-program",
    areaServed: ["Dwarka, Delhi", "Delhi"],
    description:
      "Structured school chess program in Dwarka and Delhi including in-school and after-school training with tournament support.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dwarka",
      addressRegion: "Delhi",
      addressCountry: "IN",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you provide school chess programs in Dwarka?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Nimzo Academy collaborates with schools in Dwarka to implement structured in-school and after-school chess programs.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer chess training for schools across Delhi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we are expanding our institutional chess programs across Delhi schools.",
        },
      },
      {
        "@type": "Question",
        name: "Do you organize inter-school chess tournaments?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we assist schools with intra-school and inter-school chess tournament structuring and coordination.",
        },
      },
      {
        "@type": "Question",
        name: "What age groups can participate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our structured program supports primary, middle, and secondary school students through level-based progression.",
        },
      },
    ],
  };

  return (
    <main className="bg-[var(--color-white-100)]">
      {/* SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* ================= HERO ================= */}
      <section className="bg-gradient-to-br from-[var(--color-back-500)] via-white to-[var(--color-back-500)] pt-28 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="max-w-xl">
            <h1 className="text-5xl md:text-6xl font-bold text-[var(--color-heading-900)] leading-tight">
              Chess Program
              <span className="block text-[var(--color-primary-700)]">
                for Schools in Delhi
              </span>
            </h1>

            <p className="mt-6 text-lg text-[var(--color-body-700)]">
              Nimzo Academy partners with schools to implement structured chess
              education programs that build focus, analytical thinking, and
              competitive discipline among students.
            </p>

            <p className="mt-3 text-sm text-[var(--color-muted-500)]">
              Designed for seamless integration into school schedules.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white px-8 py-3 rounded-[var(--radius-md)] font-semibold transition"
              >
                Request School Program Discussion
              </Link>

              <Link
                href="/about"
                className="border border-[var(--color-primary-600)] text-[var(--color-primary-600)] px-8 py-3 rounded-[var(--radius-md)] hover:bg-[var(--color-primary-600)] hover:text-white transition"
              >
                Learn About Nimzo
              </Link>
            </div>

            {/* TRUST POINTS */}
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-[var(--color-body-700)]">
              <div className="flex items-center gap-2">
                <CheckCircle
                  size={16}
                  className="text-[var(--color-primary-600)]"
                />
                <span>Structured Curriculum</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle
                  size={16}
                  className="text-[var(--color-primary-600)]"
                />
                <span>Tournament Pathway</span>
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle
                  size={16}
                  className="text-[var(--color-primary-600)]"
                />
                <span>Institutional Partnership</span>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative h-[440px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/gallery/training-23.jpg"
              alt="School chess program in Dwarka by Nimzo Academy"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* EDUCATIONAL IMPACT */}
      <EducationalImpact />

      {/* PROGRAMS */}
      <ProgramsSection />

      {/* ================= INTER-SCHOOL TOURNAMENTS ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-[380px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/gallery/training-1.jpg"
              alt="Inter school chess tournament organized by Nimzo Academy in Dwarka Delhi"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-semibold text-[var(--color-heading-900)]">
              Inter School Chess Tournament Support
            </h2>

            <p className="mt-5 text-lg text-[var(--color-body-700)] max-w-lg">
              Nimzo Academy helps schools organise structured chess competitions
              that encourage participation, strengthen competitive culture, and
              build institutional visibility.
            </p>

            <ul className="mt-8 grid sm:grid-cols-2 gap-y-4 gap-x-6">
              <li className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  className="text-[var(--color-primary-600)] mt-1"
                />
                <span>Intra school championship structuring</span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  className="text-[var(--color-primary-600)] mt-1"
                />
                <span>Inter school league coordination</span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  className="text-[var(--color-primary-600)] mt-1"
                />
                <span>Certificates and ranking systems</span>
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle
                  size={18}
                  className="text-[var(--color-primary-600)] mt-1"
                />
                <span>Event planning and execution support</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= INSTITUTIONAL BENEFITS ================= */}
      <section className="py-28 bg-[var(--color-back-500)]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-[var(--color-heading-900)]">
            How This Strengthens Your Institution
          </h2>

          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl border border-[var(--color-border-300)]">
              Enhances extracurricular profile
            </div>

            <div className="bg-white p-6 rounded-xl border border-[var(--color-border-300)]">
              Builds competitive school representation
            </div>

            <div className="bg-white p-6 rounded-xl border border-[var(--color-border-300)]">
              Promotes intellectual culture
            </div>

            <div className="bg-white p-6 rounded-xl border border-[var(--color-border-300)]">
              Supports holistic development
            </div>
          </div>
        </div>
      </section>
      {/* ================= PARTNERSHIP MODEL ================= */}

      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          {/* Section Heading */}
          <div className="text-center mb-14">
            <h2 className="text-3xl font-semibold text-[var(--color-heading-900)]">
              Partnership Model
            </h2>
            <p className="mt-4 text-[var(--color-body-700)] max-w-xl mx-auto">
              Nimzo Academy manages the training structure while schools provide
              the environment for students to participate and grow.
            </p>
          </div>

          {/* Two Columns */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Nimzo Handles */}
            <div className="bg-white border border-[var(--color-border-300)] p-10 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-[var(--color-heading-900)]">
                Nimzo Academy Handles
              </h3>

              <ul className="mt-6 space-y-4">
                <li className="flex gap-3">
                  <CheckCircle
                    size={18}
                    className="text-[var(--color-primary-600)] mt-1"
                  />
                  <span>Curriculum design and planning</span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle
                    size={18}
                    className="text-[var(--color-primary-600)] mt-1"
                  />
                  <span>Instructor deployment</span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle
                    size={18}
                    className="text-[var(--color-primary-600)] mt-1"
                  />
                  <span>Session execution</span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle
                    size={18}
                    className="text-[var(--color-primary-600)] mt-1"
                  />
                  <span>Tournament coordination</span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle
                    size={18}
                    className="text-[var(--color-primary-600)] mt-1"
                  />
                  <span>Student performance assessment</span>
                </li>
              </ul>
            </div>

            {/* School Provides */}
            <div className="bg-white border border-[var(--color-border-300)] p-10 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold text-[var(--color-heading-900)]">
                School Provides
              </h3>

              <ul className="mt-6 space-y-4">
                <li className="flex gap-3">
                  <CheckCircle
                    size={18}
                    className="text-[var(--color-primary-600)] mt-1"
                  />
                  <span>Classroom or activity space</span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle
                    size={18}
                    className="text-[var(--color-primary-600)] mt-1"
                  />
                  <span>Student participation coordination</span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle
                    size={18}
                    className="text-[var(--color-primary-600)] mt-1"
                  />
                  <span>Schedule alignment with school timetable</span>
                </li>

                <li className="flex gap-3">
                  <CheckCircle
                    size={18}
                    className="text-[var(--color-primary-600)] mt-1"
                  />
                  <span>Internal communication with parents</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-28 bg-[var(--color-primary-700)] text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold">
            Let’s Build a Structured Chess Ecosystem in Your School
          </h2>

          <p className="mt-6 text-lg opacity-90">
            We welcome discussions with academic heads, activity coordinators,
            and school leadership teams.
          </p>

          <Link
            href="/contact"
            className="inline-block mt-10 bg-white text-[var(--color-primary-700)] px-10 py-3 rounded-[var(--radius-md)] font-medium hover:opacity-90 transition"
          >
            Schedule Institutional Meeting
          </Link>
        </div>
      </section>
    </main>
  );
}
