import React from "react";
import {
  PhoneCall,
  ClipboardList,
  Users,
  LineChart,
} from "lucide-react";

type Step = {
  step: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    step: "01",
    icon: <PhoneCall className="h-7 w-7 text-amber-500" />,
    title: "Book a Free Demo Class",
    description:
      "Fill out the demo form or contact us on WhatsApp. Our team will connect with you shortly.",
  },
  {
    step: "02",
    icon: <ClipboardList className="h-7 w-7 text-emerald-600" />,
    title: "Skill Assessment",
    description:
      "We assess the student’s current level to understand strengths and areas for improvement.",
  },
  {
    step: "03",
    icon: <Users className="h-7 w-7 text-indigo-600" />,
    title: "Join the Right Program",
    description:
      "Based on the assessment, students are placed in the most suitable batch for optimal learning.",
  },
  {
    step: "04",
    icon: <LineChart className="h-7 w-7 text-sky-600" />,
    title: "Learn, Practice & Progress",
    description:
      "Regular classes, practice sessions, feedback, and progress tracking ensure steady improvement.",
  },
];

const HowClassesWork: React.FC = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            How Our Chess Classes Work
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A simple, transparent process designed to make learning chess
            smooth and effective for every student.
          </p>
        </div>

        {/* Steps */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              {/* Step Number */}
              <span className="absolute -top-4 right-6 rounded-full bg-gray-900 px-3 py-1 text-xs font-semibold text-white">
                {item.step}
              </span>

              {/* Icon */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="mt-3 text-gray-600">
                {item.description}
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
            Book Your Free Demo Class
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowClassesWork;
