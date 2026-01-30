import React from "react";
import FinalCTA from "../components/FinalCTA";

type AboutProps = {
  onDemoClick: () => void;
};

const About: React.FC<AboutProps> = ({ onDemoClick }) => {
  return (
    <main className="pt-18">
    <section className="relative overflow-hidden bg-[#F8FAFC] py-18">
  {/* Subtle grid background */}
  <div
    className="absolute inset-0 opacity-[0.04]"
    style={{
      backgroundImage:
        "linear-gradient(to right, #2563EB 1px, transparent 1px), linear-gradient(to bottom, #2563EB 1px, transparent 1px)",
      backgroundSize: "40px 40px",
    }}
  />

  <div className="relative mx-auto max-w-7xl px-5 text-center">
    {/* Small label */}
    <p className="text-md font-semibold tracking-widest uppercase text-[#2563EB]">
      About Us
    </p>

    {/* Main heading */}
    <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#111827]">
      Nimzo Chess Academy:
      <br />
      A Chess Learning Space for Young Minds
    </h1>

    {/* Description */}
    <p className="mt-6 mx-auto max-w-3xl text-lg leading-relaxed text-[#4B5563]">
      We’re on a mission to help children become stronger thinkers through
      structured chess learning. From first moves to advanced play, our programs
      develop focus, confidence, creativity, and a lifelong love for chess.
    </p>
  </div>
</section>


      {/* OUR STORY */}
      <section className="py-6">
        <div className="mx-auto max-w-7xl px-5 grid gap-14 md:grid-cols-2 ">
          <div>
            <h2 className="text-3xl font-bold text-[#111827]">Our Story</h2>

            <p className="mt-5 text-[#4B5563]  text-md leading-relaxed">
              Nimzo Chess Academy was founded with a simple belief — chess is
              more than a game. It is a powerful learning tool that helps
              children develop logical reasoning, patience, emotional control,
              and confidence.
            </p>

            <p className="mt-4 text-[#4B5563] text-md leading-relaxed">
              What began as small coaching sessions has grown into a trusted
              academy serving students across different countries through
              structured programs, experienced coaches, and personalized
              mentoring.
            </p>
            <div className="pt-10">
              <h3 className="text-3xl font-semibold text-[#111827]">
                Our Mission
              </h3>
              <p className="mt-4 text-[#4B5563] text-md leading-relaxed">
                Our mission is to provide high-quality, structured chess
                education that helps children develop strong thinking habits,
                focus, discipline, and confidence. Through a carefully designed
                curriculum and supportive mentorship, we aim to make learning
                chess both meaningful and enjoyable.
              </p>

              <p className="mt-3 text-[#4B5563] text-md leading-relaxed">
                We believe that every child has the potential to think
                strategically and make better decisions — not only on the
                chessboard, but also in academics and everyday life.
              </p>
            </div>

            {/* <div className="pt-10">
              <h3 className="text-3xl font-semibold text-[#111827]">
                Our Vision
              </h3>
              <p className="mt-4 text-[#4B5563] text-md leading-relaxed">
                Our vision is to become a globally trusted chess academy known
                for nurturing confident, disciplined, and independent thinkers.
                We aspire to create a learning environment where students feel
                motivated, supported, and inspired to continuously improve.
              </p>

              <p className="mt-3 text-[#4B5563] text-md leading-relaxed">
                By combining modern teaching methods with strong foundational
                values, we aim to empower students to excel academically,
                emotionally, and competitively — preparing them for challenges
                far beyond the chessboard.
              </p>
            </div> */}
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-8 bg-[#2563EB]/10 blur-3xl rounded-full" />
            <img
              src="/about-nimzo.jpg"
              alt="Chess coaching session"
              className="relative rounded-3xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* WHY PARENTS TRUST US */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5">
          
          <h2 className="text-3xl font-bold text-center text-[#111827]">
            Why Parents Trust Nimzo Chess Academy
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Structured Learning Path",
                desc: "Clear step-by-step curriculum designed for beginners to advanced players.",
              },
              {
                title: "Experienced & Certified Coaches",
                desc: "Professional coaches with strong teaching experience and tournament exposure.",
              },
              {
                title: "Personal Attention",
                desc: "Small batches ensure every child receives guidance and confidence.",
              },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="text-xl font-semibold text-[#111827]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[#4B5563]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <h2 className="text-3xl font-bold text-[#111827]">
            Our Learning Approach
          </h2>

          <p className="mt-5 mx-auto max-w-3xl text-lg text-[#4B5563]">
            Our teaching methodology focuses on understanding, practice, and
            confidence-building rather than memorization.
          </p>

          <div className="mt-14 grid gap-8 md:grid-cols-4">
            {[
              "Concept-Based Learning",
              "Practical Game Analysis",
              "Regular Assessments",
              "Positive Mentorship",
            ].map((step, i) => (
              <div
                key={i}
                className="rounded-xl bg-slate-50 p-6 font-medium text-[#111827]"
              >
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-5 text-center">
          <h2 className="text-3xl font-bold text-[#111827]">
            Values We Teach Beyond Chess
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              "Focus & Concentration",
              "Decision Making",
              "Patience & Discipline",
              "Confidence & Sportsmanship",
            ].map((value, i) => (
              <div
                key={i}
                className="rounded-xl bg-white p-6 shadow-sm font-medium text-[#111827]"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTA onDemoClick={onDemoClick} />
    </main>
  );
};

export default About;
