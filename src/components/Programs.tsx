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
    icon: <GraduationCap className="h-7 w-7 text-emerald-600" />,
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
    icon: <Brain className="h-7 w-7 text-amber-500" />,
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
    icon: <Trophy className="h-7 w-7 text-indigo-600" />,
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
      className="bg-slate-50 py-20"
    >
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Chess Programs Designed for Every Level
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Our structured curriculum ensures steady progress — from beginners
            to tournament-ready players.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {programs.map((program, index) => (
            <div
              key={index}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-lg"
            >
              {/* Icon */}
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-gray-100">
                {program.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-900">
                {program.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-gray-500">
                {program.subtitle}
              </p>

              {/* Description */}
              <p className="mt-4 text-gray-600">
                {program.description}
              </p>

              {/* Highlights */}
              <ul className="mt-6 space-y-2 text-sm text-gray-700">
                {program.highlights.map((point, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
                    {point}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#demo"
                className="mt-8 inline-block rounded-full border border-amber-500 px-6 py-2 text-center text-sm font-semibold text-amber-600 transition hover:bg-amber-500 hover:text-white"
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
