import React from "react";
import { GraduationCap, Brain, Trophy } from "lucide-react";

type Program = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
};

const programs: Program[] = [
  {
    icon: <GraduationCap className="h-7 w-7 text-[#1FB6E0]" />,
    title: "Beginner Program",
    subtitle: "Ages 6–10",
    description:
      "Perfect for kids who are new to chess. We focus on fundamentals, rules, and developing interest in the game.",
    highlights: [
      "Basic rules & piece movement",
      "Checkmate patterns",
      "Fun puzzles & activities",
      "Confidence building",
    ],
  },
  {
    icon: <Brain className="h-7 w-7 text-[#1FB6E0]" />,
    title: "Intermediate Program",
    subtitle: "Ages 8–14",
    description:
      "Designed for students with basic knowledge who want to improve strategy, tactics, and competitive play.",
    highlights: [
      "Opening principles",
      "Tactical combinations",
      "Endgame basics",
      "Game analysis",
    ],
  },
  {
    icon: <Trophy className="h-7 w-7 text-[#1FB6E0]" />,
    title: "Advanced / Tournament Program",
    subtitle: "Competitive Players",
    description:
      "For serious players preparing for tournaments with in-depth training and personalized coaching.",
    highlights: [
      "Advanced openings",
      "Deep positional play",
      "Tournament preparation",
      "Individual feedback",
    ],
  },
];

const Programs: React.FC = () => {
  return (
    <section
      id="programs"
      className="bg-[#F8F9FB] py-24"
    >
      <div className="mx-auto max-w-7xl px-4">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-[#0B0B0B] md:text-4xl">
            Chess Programs Designed for Every Level
          </h2>
          <p className="mt-4 mx-auto max-w-2xl text-lg text-[#6B7280]">
            Our structured curriculum ensures steady progress — from beginners
            to tournament-ready players.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid gap-10 md:grid-cols-3">
          {programs.map((program, index) => (
            <div
              key={index}
              className="
                flex flex-col rounded-3xl bg-white p-8
                shadow-[0_10px_40px_rgba(0,0,0,0.05)]
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              "
            >
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#1FB6E0]/10">
                {program.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#0B0B0B]">
                {program.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-[#6B7280]">
                {program.subtitle}
              </p>

              {/* Description */}
              <p className="mt-4 text-[#4B5563]">
                {program.description}
              </p>

              {/* Highlights */}
              <ul className="mt-6 space-y-3 text-sm text-[#374151]">
                {program.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-[#1FB6E0]" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#demo"
                className="
                  mt-10 inline-flex items-center justify-center
                  rounded-full bg-[#F4B400] px-6 py-2.5
                  text-sm font-semibold text-[#0B0B0B]
                  shadow-[0_4px_20px_rgba(244,180,0,0.35)]
                  transition-all duration-300
                  hover:-translate-y-0.5 hover:shadow-[0_6px_30px_rgba(244,180,0,0.5)]
                "
              >
                Book Free Demo
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
