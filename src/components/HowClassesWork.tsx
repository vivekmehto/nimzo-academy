import React from "react";
import { PhoneCall, ClipboardList, Users, LineChart } from "lucide-react";

type Step = {
  step: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    step: "01",
    icon: <PhoneCall className="h-6 w-6 text-[#1FB6E0]" />,
    title: "Book a Free Demo",
    description:
      "Schedule a free demo class through our website or WhatsApp to get started.",
  },
  {
    step: "02",
    icon: <ClipboardList className="h-6 w-6 text-[#1FB6E0]" />,
    title: "Skill Assessment",
    description:
      "We assess the student’s current level to understand strengths and learning needs.",
  },
  {
    step: "03",
    icon: <Users className="h-6 w-6 text-[#1FB6E0]" />,
    title: "Right Program Placement",
    description:
      "Based on the assessment, students are placed in the most suitable batch.",
  },
  {
    step: "04",
    icon: <LineChart className="h-6 w-6 text-[#1FB6E0]" />,
    title: "Learn, Practice & Progress",
    description:
      "Regular classes, guided practice, and feedback ensure continuous improvement.",
  },
];

const HowClassesWork: React.FC = () => {
  return (
    <section className="bg-[#F8F9FB] py-24 scroll-mt-20" id="how-it-works">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mb-20 max-w-3xl">
          <h2 className="text-3xl font-bold text-[#0B0B0B] md:text-4xl">
            How Our Chess Classes Work
          </h2>
          <p className="mt-4 text-lg text-[#6B7280]">
            A simple, transparent process designed to help students learn chess
            effectively and confidently.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <div
              key={index}
              className="
                relative rounded-2xl bg-white p-8
                shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              "
            >
              {/* Step Number */}
              <span className="absolute -top-4 right-6 rounded-full bg-[#0B0B0B] px-3 py-1 text-xs font-semibold text-white">
                {item.step}
              </span>

              {/* Icon */}
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#1FB6E0]/10">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-[#0B0B0B]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#4B5563]">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="#demo"
            className="
    rounded-full
    bg-linear-to-r from-[#F4B400] to-[#E0A800]
    px-6 py-2.5 text-sm font-semibold
    text-[#0B0B0B]
    shadow-[0_4px_20px_rgba(244,180,0,0.35)]
    transition-all duration-300
    hover:-translate-y-0.5
    hover:shadow-[0_6px_30px_rgba(244,180,0,0.5)]
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-[#1FB6E0]
    focus-visible:ring-offset-2
    focus-visible:ring-offset-[#0B0B0B]
  "
          >
            Book Free Demo
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowClassesWork;
