import React from "react";

type Coach = {
  name: string;
  role: string;
  experience: string;
  bio: string;
  image: string;
};

const coaches: Coach[] = [
  {
    name: "Vivek Mehto",
    role: "Founder & Head Coach",
    experience: "FIDE Rated • 10+ Years Coaching Experience",
    bio: "Vivek has trained students across multiple age groups, focusing on strong fundamentals, structured growth, and competitive readiness.",
    image: "/coach-1.jpg",
  },
  {
    name: "Ashish Arora",
    role: "Senior Chess Coach",
    experience: "National Level Player • 7+ Years Coaching",
    bio: "Ashish specializes in teaching children and beginners using clear explanations, interactive sessions, and confidence-building methods.",
    image: "/coach-2.jpg",
  },
];

const Coaches: React.FC = () => {
  return (
    <section className="bg-white py-24 scroll-mt-20" id="coaches">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="mb-20 max-w-3xl">
          <h2 className="text-3xl font-bold text-[#0B0B0B] md:text-4xl">
            Meet Our Chess Coaches
          </h2>
          <p className="mt-4 text-lg text-[#6B7280]">
            Experienced mentors dedicated to developing strategic thinking,
            discipline, and confidence in every student.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid gap-14 md:grid-cols-2">
          {coaches.map((coach, index) => (
            <div
              key={index}
              className="
                flex flex-col overflow-hidden rounded-3xl
                bg-white
                shadow-[0_12px_50px_rgba(0,0,0,0.06)]
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-[0_20px_70px_rgba(0,0,0,0.08)]
              "
            >
              {/* Image */}
              <div className="h-72 w-full overflow-hidden">
                <img
                  src={coach.image}
                  alt={`${coach.name} - Chess Coach`}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-semibold text-[#0B0B0B]">
                  {coach.name}
                </h3>

                <p className="mt-1 text-sm font-medium text-[#1FB6E0]">
                  {coach.role}
                </p>

                <p className="mt-1 text-sm text-[#6B7280]">
                  {coach.experience}
                </p>

                <p className="mt-5 text-sm leading-relaxed text-[#4B5563]">
                  {coach.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Coaches;
