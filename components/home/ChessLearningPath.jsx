import Section from "@/components/ui/Section";
import { learningPath } from "@/data/learningPath";


export default function ChessLearningPath() {
  return (
    <Section className="bg-back-500 pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-heading-900">
            Our Chess Learning Path
          </h2>
          <p className="mt-4 text-body-700">
            A structured learning path designed to help children progress from
            beginners to confident competitive players.
          </p>
        </div>

        {/* Grid */}
        <div
          className="
            grid
            grid-cols-1
            gap-6 sm:gap-8
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {learningPath.map((level, index) => {
            const Icon = level.icon;

            const iconBg = [
              "bg-primary-600/8",
              "bg-primary-600/12",
              "bg-primary-600/16",
              "bg-primary-600/20",
            ][index];

            return (
              <div
                key={level.id}
                className={`
                  relative h-full
                  rounded-lg
                  border
                  bg-white-100
                  p-5 sm:p-6
                  transition-colors
                  ${
                    level.recommended
                      ? "border-primary-600 shadow-sm bg-primary-600/3"
                      : "border-border-300 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                  }
                `}
              >
                {/* Recommended badge */}
                {level.recommended && (
                  <div
                    className="
                      absolute -top-3 left-1/2
                      -translate-x-1/2
                      rounded-full
                      bg-primary-600
                      px-4 py-1
                      text-xs font-medium
                      text-white
                      shadow-sm
                    "
                  >
                    Recommended
                  </div>
                )}

                {/* Icon + Title */}
                <div className="mb-4 text-center">
                  <div
                    className={`
                      mx-auto
                      mb-3
                      inline-flex
                      h-10 w-10 sm:h-12 sm:w-12
                      items-center justify-center
                      rounded-md
                      ${iconBg}
                      text-primary-600
                    `}
                  >
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  <h3 className="text-lg font-semibold text-heading-900">
                    {level.title}
                  </h3>

                  <p className="mt-1 text-sm text-muted-500">
                    {level.subtitle}
                  </p>
                </div>

                {/* Points */}
                <ul className="mt-5 text-sm text-body-700">
                  {level.points.map((point, i) => (
                    <li
                      key={point}
                      className={`flex gap-3 ${
                        i === 3 ? "mt-3" : "mt-1.5"
                      }`}
                    >
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent-600 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
