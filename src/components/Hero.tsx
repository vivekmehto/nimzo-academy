import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="
        relative overflow-hidden
        bg-linear-to-b from-[#0B0B0B] via-[#0E0E0E] to-[#111]
        pt-32 pb-24
      "
    >
      {/* Background Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 h-130 w-130 rounded-full bg-[#1FB6E0]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-130 w-130 rounded-full blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">

          {/* LEFT CONTENT */}
          <div>
            {/* Trust Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-5 py-1.5 text-sm font-medium text-[#1FB6E0]">
              <span className="h-2 w-2 rounded-full bg-[#1FB6E0]" />
              Trusted Chess Coaching for Kids & Beginners
            </div>

            {/* Headline */}
            <h1 className="max-w-xl text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
              Build Strategic Thinkers <br />
              Through{" "}
              <span className="text-[#1FB6E0]">Professional Chess Coaching</span>
            </h1>

            {/* Subheading */}
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-300">
              Structured online & offline chess programs designed to improve
              focus, logical thinking, and confidence — guided by experienced,
              dedicated coaches.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="#demo"
                className="
                  rounded-full
                  bg-linear-to-r from-[#F4B400] to-[#E0A800]
                  px-8 py-3 text-sm font-semibold
                  text-[#0B0B0B]
                  shadow-[0_6px_30px_rgba(244,180,0,0.35)]
                  transition-all duration-300
                  hover:-translate-y-0.5
                  hover:shadow-[0_8px_40px_rgba(244,180,0,0.5)]
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#1FB6E0]
                  focus-visible:ring-offset-2
                  focus-visible:ring-offset-[#0B0B0B]
                "
              >
                Book a Free Demo
              </a>

              <a
                href="#programs"
                className="text-sm font-semibold text-gray-200 hover:text-white"
              >
                View Programs →
              </a>
            </div>

            {/* Social Proof */}
            <div className="mt-14 flex flex-wrap items-center gap-10 border-t border-white/10 pt-8">
              <div>
                <p className="text-2xl font-bold text-white">500+</p>
                <p className="text-sm text-gray-400">Students Trained</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">5+</p>
                <p className="text-sm text-gray-400">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">4.8★</p>
                <p className="text-sm text-gray-400">Parent Rating</p>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">
            <div className="relative z-10 overflow-hidden rounded-4xl shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
              <img
                src="/hero-chess.jpg"
                alt="Professional chess coaching for kids"
                className="max-h-96 w-full object-cover rounded-4xl"
              />
            </div>

            {/* Soft Edge Overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
