import React from "react";
import {
  PhoneCall,
  ClipboardList,
  Users,
  LineChart,
} from "lucide-react";

const steps = [
  {
    step: "1",
    icon: PhoneCall,
    title: "Book a Free Demo Class",
    description:
      "Schedule a free demo at your preferred time. No payment or commitment required.",
  },
  {
    step: "2",
    icon: ClipboardList,
    title: "Friendly Skill Assessment",
    description:
      "Our coach gently understands your child’s current level and learning needs.",
  },
  {
    step: "3",
    icon: Users,
    title: "Right Batch Placement",
    description:
      "Based on the assessment, we place your child in the most suitable group or one-on-one class.",
  },
  {
    step: "4",
    icon: LineChart,
    title: "Learn, Practice & Grow",
    description:
      "With structured lessons, regular practice, and feedback, your child improves confidently.",
  },
];

const HowClassesWork: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="bg-[#F8F9FB] py-28 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827]">
            A Simple & Supportive Learning Journey
          </h2>
          <p className="mt-4 text-lg text-[#4B5563]">
            We follow a clear and transparent process so parents always know
            what comes next.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 gap-12 md:grid-cols-4">

          {/* connecting line */}
          <div className="absolute top-10 left-0 right-0 hidden md:block h-px bg-slate-200" />

          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="relative z-10 rounded-3xl bg-white p-8 text-center
                  shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                  transition-all duration-300 hover:-translate-y-1"
              >
                {/* Step number */}
                <span className="mb-4 inline-block rounded-full bg-[#2563EB]/10 px-4 py-1 text-sm font-semibold text-[#2563EB]">
                  Step {item.step}
                </span>

                {/* Icon */}
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#22D3EE]/20">
                  <Icon className="h-6 w-6 text-[#2563EB]" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-[#111827]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* reassurance */}
        <p className="mt-14 text-center text-sm text-[#6B7280]">
          ✔ No pressure after demo &nbsp; • &nbsp; ✔ Flexible timings &nbsp; • &nbsp; ✔ Parent updates included
        </p>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#demo"
            className="
              inline-flex items-center justify-center
              rounded-full
              bg-[#F59E0B]
              px-8 py-3
              text-sm font-semibold text-white
              shadow-[0_10px_30px_rgba(245,158,11,0.35)]
              transition-all duration-300
              hover:-translate-y-0.5 hover:bg-[#D97706]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#2563EB]
              focus-visible:ring-offset-2
            "
          >
            Book a Free Demo Class
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowClassesWork;
