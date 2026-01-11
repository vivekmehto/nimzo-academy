import React from "react";

const FinalCTA: React.FC = () => {
  return (
    <section
      id="demo"
      className="relative overflow-hidden bg-linear-to-r from-amber-500 to-amber-600 py-20"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,white,transparent)]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 text-center text-white">
        {/* Headline */}
        <h2 className="text-3xl font-extrabold md:text-4xl">
          Give Your Child a Strong Strategic Advantage
        </h2>

        {/* Subheading */}
        <p className="mt-4 text-lg text-amber-100">
          Join our structured chess program and help your child improve
          focus, confidence, and decision-making skills.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="rounded-full bg-white px-8 py-3 text-base font-semibold text-amber-600 shadow hover:bg-amber-50 transition"
          >
            Book Free Demo Class
          </a>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white px-8 py-3 text-base font-semibold text-white hover:bg-white/10 transition"
          >
            WhatsApp Us
          </a>
        </div>

        {/* Trust Line */}
        <p className="mt-8 text-sm text-amber-100">
          No commitment required • Limited seats per batch • Personal attention
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
