import { Brain, Target, Lightbulb, Trophy } from "lucide-react";

const impactPoints = [
  {
    title: "Improves Focus",
    desc: "Chess develops deep concentration and patience among students.",
    icon: Brain,
  },
  {
    title: "Strategic Thinking",
    desc: "Students learn planning, decision-making, and logical thinking.",
    icon: Target,
  },
  {
    title: "Problem Solving",
    desc: "Players constantly evaluate positions and find the best solutions.",
    icon: Lightbulb,
  },
  {
    title: "Healthy Competition",
    desc: "Chess builds confidence and a disciplined competitive mindset.",
    icon: Trophy,
  },
];

export default function EducationalImpact() {
  return (
    <section className="py-28 bg-[var(--color-back-500)]">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-semibold text-[var(--color-heading-900)]">
          Educational Impact of Chess in Schools
        </h2>

        <p className="mt-6 text-lg text-[var(--color-body-700)] max-w-3xl mx-auto">
          Structured chess education strengthens concentration, analytical thinking,
          and disciplined decision-making among students.
        </p>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {impactPoints.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                group
                bg-white
                border border-[var(--color-border-300)]
                p-8
                rounded-xl
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-lg
                "
              >
                <div className="
                  w-14 h-14
                  mx-auto
                  flex items-center justify-center
                  rounded-lg
                  bg-[var(--color-primary-100)]
                  group-hover:bg-[var(--color-primary-600)]
                  transition-colors
                ">
                  <Icon
                    size={26}
                    className="
                    text-white
                    group-hover:text-white
                    transition-colors
                    "
                  />
                </div>

                <h3 className="mt-5 font-semibold text-[var(--color-heading-900)]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-[var(--color-body-700)]">
                  {item.desc}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}