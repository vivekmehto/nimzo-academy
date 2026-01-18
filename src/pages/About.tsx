import React from "react";

const About: React.FC = () => {
  return (
    <main className="pt-28">
      {/* HERO SECTION */}
      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 md:text-5xl">
            About Nimzo Chess Academy
          </h1>
          <p className="mt-4 mx-auto max-w-3xl text-lg text-gray-600">
            We help children develop strategic thinking, confidence, and focus
            through structured and engaging chess education.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 grid gap-12 md:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Our Story
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Nimzo Chess Academy was founded with a simple belief — chess is
              more than a game. It is a powerful tool that helps children build
              logical thinking, patience, discipline, and confidence.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              What started as small coaching sessions has grown into a trusted
              academy training hundreds of students through a carefully
              structured curriculum and experienced coaches.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <img
              src="/about-chess.jpg"
              alt="Chess coaching session"
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-white py-20 border-t">
        <div className="mx-auto max-w-7xl px-4 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Our Mission
            </h3>
            <p className="mt-3 text-gray-600">
              To provide high-quality chess education that nurtures young minds
              and builds lifelong skills through strategic learning and
              mentorship.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900">
              Our Vision
            </h3>
            <p className="mt-3 text-gray-600">
              To become a globally trusted chess academy that empowers students
              to excel academically, emotionally, and competitively.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            What Makes Us Different
          </h2>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Structured Curriculum",
                desc: "Well-defined learning paths designed for steady progress at every level.",
              },
              {
                title: "Experienced Coaches",
                desc: "Certified coaches with real tournament and teaching experience.",
              },
              {
                title: "Small Batch Learning",
                desc: "Personal attention to ensure every student improves confidently.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COACHING PHILOSOPHY */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Our Coaching Philosophy
          </h2>
          <p className="mt-4 mx-auto max-w-3xl text-lg text-gray-600">
            We believe every child learns differently. Our approach combines
            structured lessons, practical gameplay, and positive mentorship to
            help students grow both on and off the chessboard.
          </p>
        </div>
      </section>

      {/* WHO WE TEACH */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Who We Teach
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-4 text-center">
            {[
              "Kids (6–14 Years)",
              "Beginners",
              "Intermediate Players",
              "Tournament Aspirants",
            ].map((group, index) => (
              <div
                key={index}
                className="rounded-xl bg-white p-6 shadow-sm font-medium text-gray-800"
              >
                {group}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-amber-500 py-16 text-center">
        <h2 className="text-3xl font-bold text-white">
          Ready to Start Your Chess Journey?
        </h2>
        <p className="mt-3 text-amber-100">
          Book a free demo class and experience our teaching approach.
        </p>
        <a
          href="#demo"
          className="mt-6 inline-block rounded-full bg-white px-8 py-3 font-semibold text-amber-600 hover:bg-gray-100 transition"
        >
          Book Free Demo
        </a>
      </section>
    </main>
  );
};

export default About;
