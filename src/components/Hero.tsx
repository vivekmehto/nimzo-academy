import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-linear-to-b from-slate-50 to-white pt-28"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          
          {/* LEFT CONTENT */}
          <div>
            {/* Trust Badge */}
            <div className="mb-4 inline-flex items-center rounded-full bg-emerald-50 px-4 py-1 text-sm font-medium text-emerald-700">
              ♟️ Trusted Chess Coaching for Kids & Beginners
            </div>

            {/* H1 – SEO Critical */}
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-5xl">
              Build Strategic Thinkers <br />
              Through Professional <span className="text-amber-500">Chess Coaching</span>
            </h1>

            {/* Subheading */}
            <p className="mt-5 max-w-xl text-lg text-gray-600">
              Structured online & offline chess classes designed to improve
              focus, logic, and confidence — guided by experienced coaches.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#demo"
                className="rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-white shadow-md hover:bg-amber-600 transition"
              >
                Book Free Demo
              </a>

              <a
                href="#programs"
                className="text-base font-semibold text-gray-800 hover:text-gray-900"
              >
                View Programs →
              </a>
            </div>

            {/* Social Proof */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <div>
                <p className="text-2xl font-bold text-gray-900">500+</p>
                <p className="text-sm text-gray-600">Students Trained</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">5+</p>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">4.8★</p>
                <p className="text-sm text-gray-600">Parent Rating</p>
              </div>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative">
            <div className="relative z-10 rounded-3xl bg-white p-3 shadow-xl">
              <img
                src="/hero-chess.jpg"
                alt="Online chess coaching for kids"
                className="rounded-2xl object-cover"
              />
            </div>

            {/* Decorative Glow */}
            <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-amber-400/20 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
