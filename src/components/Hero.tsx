import React from "react";
import HeroStats from "./HeroStats";

type HeroProps = {
  onDemoClick: () => void;
};

const Hero: React.FC<HeroProps> = ({ onDemoClick }) => {
  return (
    <section
      id="home"
      className="relative w-full bg-linear-to-br from-[#EEF2FF] via-[#DCE4FF] to-[#C7D2FE]"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-10">

        {/* GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-16 items-center">

          {/* LEFT */}
          <div>
            {/* Badge */}
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#2563EB]/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-[#2563EB]">
              ♟ Trusted by parents across the globe
            </div>

            {/* Heading */}
            <h1 className="max-w-xl text-3xl sm:text-4xl xl:text-5xl font-extrabold leading-tight text-[#111827]">
              Chess Classes for Kids That Build Focus, Logic and Confidence
            </h1>

            {/* Subheading */}
            <p className="mt-3 text-sm sm:text-lg font-semibold text-[#2563EB]">
              Chess Classes for Kids (Ages 5–16)
            </p>

            {/* Description */}
            <p className="mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-[#4B5563]">
              Our carefully designed chess curriculum helps children improve
              focus, logical thinking, patience, and decision-making skills.
              Every class is led by experienced, FIDE-rated coaches.
            </p>

            {/* CTA */}
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <button onClick={onDemoClick} className="cursor-pointer rounded-full bg-[#F59E0B] px-7 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-[#D97706]">
                Book a Free Demo Class
              </button>

              <a
                href="#programs"
                className="cursor-pointer text-sm font-semibold text-[#2563EB] hover:underline"
              >
                Explore Programs →
              </a>
            </div>

            {/* ❌ NO STATS ON TABLET */}
            <div className="hidden xl:block mt-10 pt-6">
              <HeroStats />
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative flex justify-center">
            {/* Glow only desktop */}
            <div className="hidden xl:block absolute -inset-16 bg-[#2563EB]/20 blur-3xl rounded-full" />

            <img
              src="/hero-chess2.jpg"
              alt="Online chess class for kids"
              className="
                relative z-10
                w-full
                max-w-xs sm:max-w-sm md:max-w-md xl:max-w-xl
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
