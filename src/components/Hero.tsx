import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative bg-white pt-20 pb-28 overflow-hidden"
    >
      {/* Soft background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 -right-48 h-140 w-140 rounded-full bg-[#22D3EE]/20 blur-3xl" />
        <div className="absolute -bottom-48 -left-48 h-140 w-140 rounded-full bg-[#2563EB]/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-20 md:grid-cols-2">
          {/* LEFT CONTENT */}
          <div>
            {/* Trust badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#2563EB]/20 bg-[#2563EB]/5 px-5 py-2 text-sm font-medium text-[#2563EB]">
              <span className="h-2 w-2 rounded-full bg-[#2563EB]" />
              Trusted by Parents for Structured Chess Learning
            </div>

            {/* Headline */}
            <h1 className="max-w-xl text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-[#111827]">
              Helping Your Child Develop{" "}
              <span className="bg-linear-to-r from-[#2563EB] to-[#22D3EE] bg-clip-text text-transparent">
                Focus, Confidence & Strategic Thinking
              </span>{" "}
              Through Chess
            </h1>

            {/* Supporting line (very important) */}
            <p className="mt-4 max-w-xl text-base font-medium text-[#2563EB]">
              Designed for kids aged 6+ • Online & Offline Classes Available
            </p>

            {/* Description */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#4B5563]">
              At Nimzo Chess Academy, we follow a structured, step-by-step
              training approach that strengthens logical reasoning,
              concentration, patience, and decision-making skills — taught by
              experienced and dedicated coaches.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#demo"
                className="
                  inline-flex items-center justify-center
                  rounded-full
                  bg-[#F59E0B]
                  px-9 py-3.5
                  text-sm font-semibold text-white
                  shadow-[0_12px_35px_rgba(245,158,11,0.35)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#D97706]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#2563EB]
                  focus-visible:ring-offset-2
                "
              >
                Book a Free Demo Class
              </a>

              <a
                href="#programs"
                className="text-sm font-semibold text-[#2563EB] hover:underline"
              >
                View Programs →
              </a>
            </div>

            {/* Trust stats */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-slate-200 pt-8">
              <div>
                <p className="text-2xl font-bold text-[#111827]">500+</p>
                <p className="text-sm text-[#4B5563]">Students Trained</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#111827]">5+ Years</p>
                <p className="text-sm text-[#4B5563]">Coaching Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-[#111827]">4.8★</p>
                <p className="text-sm text-[#4B5563]">Parent Satisfaction</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-4xl shadow-[0_30px_70px_rgba(0,0,0,0.14)]">
              <img
                src="/hero-chess.jpg"
                alt="Chess coaching for kids"
                className="w-full max-h-105 object-cover rounded-4xl"
              />
            </div>

            <div className="absolute inset-0 rounded-4xl ring-1 ring-slate-200 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
