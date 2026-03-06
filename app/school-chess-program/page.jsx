import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

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
      <section className="bg-gradient-to-br from-[var(--color-back-500)] to-white pt-32 pb-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <span className="text-sm font-semibold text-[var(--color-primary-600)] uppercase tracking-wide">
              Institutional Chess Program
            </span>

            <h1 className="mt-4 text-5xl md:text-6xl font-bold text-[var(--color-heading-900)] leading-tight">
              School Chess Program in Dwarka & Delhi
            </h1>

            <p className="mt-6 text-lg text-[var(--color-body-700)] max-w-xl">
              Nimzo Academy provides structured school chess programs in Dwarka
              and is expanding chess training for schools across Delhi. Designed
              for seamless integration into academic and after-school schedules.
            </p>

            <p className="mt-4 text-sm text-[var(--color-muted-500)]">
              Structured implementation. Minimal administrative burden.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-[var(--color-accent-500)] hover:bg-[var(--color-accent-600)] text-white px-8 py-3 rounded-[var(--radius-md)] font-medium transition w-full sm:w-auto text-center"
              >
                Schedule a 20-Minute Institutional Discussion
              </Link>

              <Link
                href="/about"
                className="border border-[var(--color-primary-600)] text-[var(--color-primary-600)] px-8 py-3 rounded-[var(--radius-md)] hover:bg-[var(--color-primary-600)] hover:text-white transition w-full sm:w-auto text-center"
              >
                Learn About Nimzo
              </Link>
            </div>
          </div>

          <div className="relative h-[420px] w-full rounded-[var(--radius-lg)] overflow-hidden shadow-xl">
            <Image
              src="/images/school-chess.jpg"
              alt="School chess program in Dwarka conducted by Nimzo Academy"
              fill
              className="object-cover"
              priority
            />
          </div>

        </div>
      </section>

      {/* ================= EDUCATIONAL IMPACT ================= */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold text-[var(--color-heading-900)]">
            Educational Impact of Chess in Schools
          </h2>

          <p className="mt-6 text-lg text-[var(--color-body-700)] max-w-3xl mx-auto">
            Structured chess education strengthens concentration, analytical
            thinking, and disciplined decision-making among students.
          </p>

          <div className="mt-16 grid md:grid-cols-4 gap-8">
            {impactPoints.map((point) => (
              <div
                key={point}
                className="bg-white p-8 rounded-2xl border border-[var(--color-border-300)] shadow-sm hover:shadow-md transition"
              >
                <CheckCircle className="mx-auto text-[var(--color-primary-600)] mb-4" />
                <p className="text-[var(--color-body-700)] font-medium">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROGRAMS ================= */}
      <section className="py-28 bg-[var(--color-light-100)]">
        <div className="max-w-7xl mx-auto px-6 space-y-20">

          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-white p-10 rounded-2xl border border-[var(--color-border-300)] shadow-sm"
            >
              <h3 className="text-3xl font-semibold text-[var(--color-heading-900)]">
                {program.title}
              </h3>

              <ul className="mt-6 space-y-4 text-[var(--color-body-700)]">
                {program.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <CheckCircle className="text-[var(--color-primary-600)] mt-1" size={18}/>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </section>

      {/* ================= INTER-SCHOOL TOURNAMENTS ================= */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div className="relative h-[380px] w-full rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/inter-school-chess.jpg"
              alt="Inter school chess tournament organized by Nimzo Academy in Dwarka Delhi"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-4xl font-semibold text-[var(--color-heading-900)]">
              Inter-School Chess Tournament Support
            </h2>

            <p className="mt-6 text-lg text-[var(--color-body-700)]">
              We support schools in Dwarka and across Delhi with structured
              inter-school chess tournaments that enhance institutional
              visibility and competitive culture.
            </p>

            <ul className="mt-8 space-y-4 text-[var(--color-body-700)]">
              <li>Intra-school championship structuring</li>
              <li>Inter-school league coordination</li>
              <li>Certificates & ranking systems</li>
              <li>Event planning and execution support</li>
            </ul>
          </div>

        </div>
      </section>

      {/* ================= INSTITUTIONAL BENEFITS ================= */}
      <section className="py-28 bg-[var(--color-back-500)]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-[var(--color-heading-900)]">
            How This Strengthens Your Institution
          </h2>

          <ul className="mt-10 space-y-3 text-[var(--color-body-700)]">
            <li>Enhances extracurricular profile</li>
            <li>Builds competitive school representation</li>
            <li>Promotes intellectual culture</li>
            <li>Supports holistic development objectives</li>
          </ul>
        </div>
      </section>

      {/* ================= PARTNERSHIP MODEL ================= */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">

          <div className="bg-[var(--color-back-500)] p-10 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-semibold text-[var(--color-heading-900)]">
              Nimzo Academy Handles
            </h3>
            <ul className="mt-6 space-y-3 text-[var(--color-body-700)]">
              <li>Curriculum & planning</li>
              <li>Instructor deployment</li>
              <li>Session execution</li>
              <li>Tournament coordination</li>
              <li>Performance assessment</li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-2xl border border-[var(--color-border-300)] shadow-sm">
            <h3 className="text-2xl font-semibold text-[var(--color-heading-900)]">
              School Provides
            </h3>
            <ul className="mt-6 space-y-3 text-[var(--color-body-700)]">
              <li>Classroom space</li>
              <li>Student coordination</li>
              <li>Schedule alignment</li>
              <li>Internal communication</li>
            </ul>
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

const impactPoints = [
  "Improved concentration & discipline",
  "Enhanced logical reasoning",
  "Stronger problem-solving skills",
  "Healthy competitive mindset",
];

const programs = [
  {
    title: "Curriculum-Based In-School Chess Program",
    points: [
      "Age-wise structured batches",
      "Weekly on-campus sessions",
      "Lesson plans & worksheets",
      "Periodic performance evaluation",
    ],
  },
  {
    title: "After-School Chess Enrichment Program",
    points: [
      "Limited batch advanced training",
      "Deeper conceptual development",
      "Extended practice sessions",
      "Competitive tournament preparation",
    ],
  },
];