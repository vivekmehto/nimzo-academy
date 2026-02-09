import Image from "next/image";
import Section from "@/components/ui/Section";

export default function CoachSection() {
  return (
    <Section>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-heading-900">
            Meet Your Chess Coach
          </h2>
          <p className="mt-4 text-body-700">
            Led by an experienced chess coach and supported by a dedicated
            teaching team for children.
          </p>
        </div>

        {/* Content */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Coach Image */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/nimzo-academy-coach.png"
              alt="Vivek Mehto, lead chess coach teaching children at Nimzo Academy"
              width={520}
              height={640}
              className="
                rounded-lg
                object-cover
                border border-border-300
              "
              priority
            />
          </div>

          {/* Coach Content */}
          <div className="max-w-xl">
            <h3 className="text-2xl font-semibold text-heading-900">
              Lead Chess Coach & Mentor
            </h3>
            <p className="mt-1 text-sm text-muted-500">Vivek Mehto</p>

            <p className="mt-5 text-body-700 leading-relaxed">
              Nimzo Academy is founded and led by an experienced chess coach who
              works directly with children across different age groups and skill
              levels. The coaching approach focuses on structured chess training
              that helps children build strong fundamentals, disciplined
              thinking, and confidence through guided practice not just
              winning games.
            </p>

            <p className="mt-4 text-body-700 leading-relaxed">
              Alongside one-on-one and group chess classes for kids, sessions
              are supported by a trained teaching team that follows the same
              child focused curriculum and learning philosophy. This ensures
              consistency, personal attention, and clear progress tracking for
              every student.
            </p>

            {/* Key Teaching Principles */}
            <ul className="mt-7 space-y-3 text-body-700">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-600 shrink-0" />
                <span>Patient and child-focused chess coaching approach</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-600 shrink-0" />
                <span>Structured, step-by-step chess learning methodology</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-600 shrink-0" />
                <span>
                  Strong emphasis on discipline, focus, and decision-making
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-600 shrink-0" />
                <span>
                  Regular progress feedback shared clearly with parents
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
