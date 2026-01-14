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
    icon: <ShieldCheck className="h-7 w-7 text-[#1FB6E0]" />,
    title: "Certified & Experienced Coaches",
    description:
      "Our coaches are trained professionals with years of experience teaching students across different skill levels.",
  },
  {
    icon: <BookOpen className="h-7 w-7 text-[#1FB6E0]" />,
    title: "Structured Curriculum",
    description:
      "A clear learning path that ensures steady improvement — from fundamentals to advanced concepts.",
  },
  {
    icon: <Users className="h-7 w-7 text-[#1FB6E0]" />,
    title: "Small Batch Sizes",
    description:
      "Limited students per batch ensure personalized attention and better understanding.",
  },
  {
    icon: <Monitor className="h-7 w-7 text-[#1FB6E0]" />,
    title: "Online & Offline Classes",
    description:
      "Flexible learning options designed to suit your schedule and comfort.",
  },
  {
    icon: <Target className="h-7 w-7 text-[#1FB6E0]" />,
    title: "Tournament-Focused Training",
    description:
      "Special attention on real-game situations, analysis, and competitive preparation.",
  },
  {
    icon: <LineChart className="h-7 w-7 text-[#1FB6E0]" />,
    title: "Progress Tracking & Feedback",
    description:
      "Regular assessments and feedback help parents clearly track improvement.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-white py-24 scroll-mt-20" id="why-choose-us">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="mb-20 max-w-3xl">
          <h2 className="text-3xl font-bold text-[#0B0B0B] md:text-4xl">
            Why Parents Choose Our Chess Academy
          </h2>
          <p className="mt-4 text-lg text-[#6B7280]">
            We focus on structured learning, personal attention, and long-term
            skill development — not shortcuts.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="
                flex gap-5
                rounded-2xl border border-gray-100
                p-8
                transition-all duration-300
                hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)]
              "
            >
              {/* Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1FB6E0]/10">
                {reason.icon}
              </div>

              {/* Content */}
              <div>
                <h3 className="text-lg font-semibold text-[#0B0B0B]">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4B5563]">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
