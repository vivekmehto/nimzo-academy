import React from "react";
import HeroStats from "./HeroStats";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative bg-white pt-32 pb-20 h-screen flex items-center overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 h-105 w-105 rounded-full bg-[#2563EB]/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-105 w-105 rounded-full bg-[#22D3EE]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-20 md:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div>
            {/* Badge */}
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#2563EB]/10 px-5 py-2 text-sm font-medium text-[#2563EB]">
              ♟ Trusted by parents across the globe
            </div>

            {/* Headline */}
            <h1 className="max-w-xl text-4xl md:text-5xl font-extrabold leading-tight text-[#111827]">
              Building{" "}
              <span className="bg-linear-to-r from-[#2563EB] to-[#22D3EE] bg-clip-text text-transparent">
                smarter minds
              </span>{" "}
              through structured chess learning
            </h1>

            {/* Sub headline */}
            <p className="mt-5 text-lg font-semibold text-[#2563EB]">
              Online Chess Classes for Kids (Ages 6–16)
            </p>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#4B5563]">
              Our carefully designed chess curriculum helps children improve
              focus, logical thinking, patience, and decision-making skills.
              Every class is led by experienced, FIDE-rated coaches in a
              supportive and engaging learning environment.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <button
                className="
                  rounded-full
                  bg-[#F59E0B]
                  px-8 py-3.5
                  text-sm font-semibold text-white
                  shadow-lg
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#D97706]
                "
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
          <HeroStats />
          </div>

          {/* RIGHT IMAGE */}
         
           <div className="relative flex justify-center">
            <div className="relative rounded-4xl  p-6">
             <img
              src="/hero-chess2.jpg"
              alt="Online chess class for kids"
                className="rounded-3xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
