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
    experience: "FIDE Rated | 8+ Years Experience",
    bio: "Vivek has trained hundreds of students across different age groups, focusing on strong fundamentals, tournament preparation, and confidence building.",
    image: "/coach-1.jpg",
  },
  {
    name: "Ashish Arora",
    role: "Senior Chess Coach",
    experience: "National Level Player | 7+ Years Coaching",
    bio: "Specializes in teaching kids and beginners using interactive methods that make learning chess enjoyable and effective.",
    image: "/coach-2.jpg",
  },
  {
    name: "Coach Rahul Mehta",
    role: "Advanced & Tournament Coach",
    experience: "FIDE Rated | Tournament Specialist",
    bio: "Focused on advanced strategy, opening preparation, and game analysis for competitive players.",
    image: "/coach-3.jpg",
  },
];

const Coaches: React.FC = () => {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Meet Our Expert Chess Coaches
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our experienced coaches are passionate educators dedicated to
            nurturing strategic thinking and confidence in every student.
          </p>
        </div>

        {/* Coaches Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {coaches.map((coach, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-100 bg-white p-6 transition hover:shadow-lg"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={coach.image}
                  alt={`${coach.name} - Chess Coach`}
                  className="h-64 w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {coach.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-amber-600">
                  {coach.role}
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  {coach.experience}
                </p>

                <p className="mt-4 text-gray-600">
                  {coach.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#demo"
            className="inline-block rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-white shadow hover:bg-amber-600 transition"
          >
            Learn From Expert Coaches
          </a>
        </div>
      </div>
    </section>
  );
};

export default Coaches;
