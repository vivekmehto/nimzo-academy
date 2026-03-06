import { CheckCircle } from "lucide-react";

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

export default function ProgramsSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <h2 className="text-4xl font-semibold text-[var(--color-heading-900)]">
            School Chess Programs
          </h2>

          <p className="mt-6 text-lg text-[var(--color-body-700)] max-w-3xl mx-auto">
            Nimzo Academy provides flexible implementation models so schools
            can integrate chess training into their academic or extracurricular
            structure.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-10">

          {programs.map((program) => (
            <div
              key={program.title}
              className="
              group
              border border-[var(--color-border-300)]
              rounded-xl
              p-10
              shadow-sm
              hover:shadow-lg
              hover:-translate-y-1
              transition
              "
            >
              <h3 className="text-2xl font-semibold text-[var(--color-heading-900)]">
                {program.title}
              </h3>

              <ul className="mt-6 space-y-4">

                {program.points.map((point) => (
                  <li key={point} className="flex gap-3 items-start">
                    <CheckCircle
                      size={18}
                      className="text-[var(--color-primary-600)] mt-1"
                    />
                    <span className="text-[var(--color-body-700)]">
                      {point}
                    </span>
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}