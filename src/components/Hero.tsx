import React from "react";
import HeroStats from "./HeroStats";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative bg-linear-to-br from-[#EEF2FF] via-[#DCE4FF] to-[#C7D2FE]"
    >
      <div className="mx-auto max-w-7xl px-5 pt-24 pb-20">

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="order-1 lg:order-1">

            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#2563EB]/10 px-5 py-2 text-sm font-medium text-[#2563EB]">
              ♟ Trusted by parents across the globe
            </div>

            {/* Heading */}
            <h1 className="max-w-xl text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-[#111827]">
              Chess Classes for Kids That Build Focus, Logic and Confidence
            </h1>

            {/* Subheading */}
            <p className="mt-4 text-lg font-semibold text-[#2563EB]">
              Chess Classes for Kids (Ages 5–16)
            </p>

            {/* Description */}
            <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-[#4B5563]">
              Our carefully designed chess curriculum helps children improve
              focus, logical thinking, patience, and decision making skills.
              Every class is led by experienced, FIDE-rated coaches in a
              supportive and engaging learning environment.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <button
                className="rounded-full bg-[#F59E0B] px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#D97706]"
              >
                Book a Free Demo Class
              </button>

              <a
                href="#programs"
                className="text-sm font-semibold text-[#2563EB] hover:underline"
              >
                Explore Programs →
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12">
              <HeroStats />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="order-2 lg:order-2 relative flex justify-center">

            {/* Glow */}
            <div className="absolute -inset-16 bg-[#2563EB]/20 blur-3xl rounded-full" />

            <img
              src="/hero-chess2.jpg"
              alt="Online chess class for kids"
              className="
                relative z-10
                w-full
                max-w-md
                sm:max-w-lg
                lg:max-w-xl
                xl:max-w-2xl
                rounded-3xl
                object-cover
                shadow-xl
              "
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
