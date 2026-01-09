import React from "react";
import {
  ShieldCheck,
  Users,
  BookOpen,
  Target,
  Monitor,
  LineChart,
} from "lucide-react";

type Reason = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const reasons: Reason[] = [
  {
    icon: <ShieldCheck className="h-7 w-7 text-emerald-600" />,
    title: "Certified & Experienced Coaches",
    description:
      "Our coaches are certified professionals with years of experience in training students at different skill levels.",
  },
  {
    icon: <BookOpen className="h-7 w-7 text-indigo-600" />,
    title: "Structured Curriculum",
    description:
      "A well-defined curriculum that ensures consistent progress — from fundamentals to advanced strategies.",
  },
  {
    icon: <Users className="h-7 w-7 text-amber-500" />,
    title: "Small Batch Sizes",
    description:
      "Limited students per batch ensure personalized attention and better learning outcomes.",
  },
  {
    icon: <Monitor className="h-7 w-7 text-sky-600" />,
    title: "Online & Offline Classes",
    description:
      "Flexible learning options designed to fit your schedule and comfort.",
  },
  {
    icon: <Target className="h-7 w-7 text-rose-500" />,
    title: "Tournament-Oriented Training",
    description:
      "We focus on practical play, analysis, and tournament preparation to build competitive confidence.",
  },
  {
    icon: <LineChart className="h-7 w-7 text-violet-600" />,
    title: "Progress Tracking & Feedback",
    description:
      "Regular assessments and feedback help parents track improvement clearly.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Why Parents Choose Our Chess Academy
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We don’t just teach chess — we develop thinkers, problem solvers,
            and confident decision-makers.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-100 p-8 transition hover:border-gray-200 hover:shadow-md"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gray-50">
                {reason.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {reason.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#demo"
            className="inline-block rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-white shadow hover:bg-amber-600 transition"
          >
            Book a Free Demo Class
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
