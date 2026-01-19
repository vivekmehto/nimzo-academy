import React from "react";
import { CircleDot, Layers, TrendingUp, Award } from "lucide-react";

const courses = [
  {
    icon: <CircleDot className="h-10 w-10 text-[#2563EB]" />,
    title: "Beginner",
    desc: "Ideal for children starting their chess journey",
    recommended: false,
    points: [
      "48 guided training sessions",
      "12 tactical puzzle practice classes",
      "Online practice tournaments",
      "Study material & worksheets",
      "Class summary after every session",
      "Performance tracking & feedback",
    ],
  },
  {
    icon: <Layers className="h-10 w-10 text-[#2563EB]" />,
    title: "Intermediate",
    desc: "Best choice for students with basic chess knowledge",
    recommended: true,
    points: [
      "48 structured training sessions",
      "12 tactical improvement classes",
      "Opening principles & tactics",
      "Online tournaments",
      "Detailed study material",
      "Progress tracking",
    ],
  },
  {
    icon: <TrendingUp className="h-10 w-10 text-[#2563EB]" />,
    title: "Advanced",
    desc: "For competitive and serious learners",
    recommended: false,
    points: [
      "48 advanced training sessions",
      "24 tactical solving classes",
      "24 online tournaments",
      "Positional & endgame training",
      "Game analysis reports",
      "Performance evaluation",
    ],
  },
  {
    icon: <Award className="h-10 w-10 text-[#2563EB]" />,
    title: "Master",
    desc: "For tournament-focused players",
    recommended: false,
    points: [
      "48 high-level sessions",
      "Advanced opening preparation",
      "Tournament mindset training",
      "National & international prep",
      "Personal development roadmap",
      "One-on-one feedback",
    ],
  },
];

const Courses = () => {
  return (
    <section className="bg-[#F5F9FF] py-28">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#111827]">
            Our Chess Programs
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#4B5563]">
            A structured learning path designed to help children grow from
            beginners to confident competitive players.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`
                relative
                bg-white
                rounded-3xl
                border
                p-8
                transition-all
                duration-300
                ${
                  course.recommended
                    ? "border-[#2563EB] shadow-md"
                    : "border-slate-200"
                }
                hover:-translate-y-1
                hover:border-[#2563EB]
                hover:shadow-lg
              `}
            >
              {/* Recommended badge */}
              {course.recommended && (
                <span
                  className="
                  absolute -top-3 right-6
                  rounded-full
                  bg-[#2563EB]
                  px-4 py-1
                  text-xs font-semibold text-white
                  shadow
                "
                >
                  Recommended
                </span>
              )}

              {/* Icon */}
              <div className="mb-6 flex justify-center">{course.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-center text-[#111827]">
                {course.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-center text-[#4B5563]">
                {course.desc}
              </p>

              {/* Points */}
              <ul className="mt-6 space-y-3 text-sm text-[#4B5563]">
                {course.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#F59E0B]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
