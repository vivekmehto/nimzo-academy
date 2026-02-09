import Image from "next/image";
import Section from "@/components/ui/Section";
import { Focus, Brain, Hourglass, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Focus,
    title: "Improves Focus & Concentration",
    desc: "Helps children sit longer, listen better, and think before acting.",
  },
  {
    icon: Brain,
    title: "Develops Logical Thinking",
    desc: "Trains children to analyze problems and think step by step.",
  },
  {
    icon: Hourglass,
    title: "Builds Patience & Emotional Control",
    desc: "Teaches planning ahead and handling wins and losses calmly.",
  },
  {
    icon: TrendingUp,
    title: "Boosts Confidence & Decision-Making",
    desc: "Builds self-belief through independent thinking and choices.",
  },
];

export default function WhyChessHelps() {
  return (
    <Section>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-heading-900 mb-4">
            Why Chess Helps Children
          </h2>
          <p className="text-body-700 max-w-2xl mx-auto">
            When taught in a structured way, chess helps children develop focus,
            thinking skills, and emotional balance that support academics and
            everyday decision-making.
          </p>
        </div>

        {/* Content */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Image */}
          <div>
            <Image
              src="/chess-children-learning.jpg"
              alt="Children learning chess in a structured academy environment"
              width={640}
              height={460}
              className="w-full rounded-lg object-cover"
              priority
            />
          </div>

          {/* Benefits */}
          <div className="grid gap-6 sm:grid-cols-2">
            {benefits.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex gap-4">
                  <div className="h-10 w-10 rounded-md bg-back-500 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-heading-900 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
