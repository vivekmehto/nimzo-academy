import React from "react";

type FinalCTAProps = {
  onDemoClick: () => void;
};

const FinalCTA: React.FC<FinalCTAProps> = ({ onDemoClick }) => {
  return (
    <section
      id="demo"
      className="relative overflow-hidden bg-white py-28"
    >
      {/* Soft background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 h-105 w-105 rounded-full bg-[#2563EB]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-105 w-105 rounded-full bg-[#22D3EE]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 text-center">
        
        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827]">
          Help your child make the{" "}
          <span className="bg-linear-to-r from-[#2563EB] to-[#22D3EE] bg-clip-text text-transparent">
            right first move
          </span>{" "}
          in chess
        </h2>

        {/* Subheading */}
        <p className="mt-6 text-lg leading-relaxed text-[#4B5563]">
          Our structured chess program is designed to build focus, confidence,
          and strategic thinking — skills that support academic success and
          personal growth well beyond the chessboard.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          
          {/* Primary CTA */}
          <button
            onClick={onDemoClick}
            className="
              rounded-full
              bg-[#F59E0B]
              px-10 py-4
              text-sm font-semibold text-white
              shadow-lg
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
          </button>

          {/* Secondary CTA */}
          <a
            href="#programs"
            className="
              inline-flex items-center justify-center
              rounded-full
              border border-[#2563EB]
              px-10 py-4
              text-sm font-semibold
              text-[#2563EB]
              transition-all duration-300
              hover:bg-[#2563EB]/5
            "
          >
            View Learning Programs
          </a>
        </div>

        {/* Trust reassurance */}
        <p className="mt-10 text-sm text-[#4B5563]">
          No commitment required • Limited batch sizes • Personal coach attention
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
