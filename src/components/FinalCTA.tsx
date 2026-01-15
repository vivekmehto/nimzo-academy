import React from "react";

const FinalCTA: React.FC = () => {
  return (
    <section
      id="demo"
      className="relative overflow-hidden bg-[#0B0B0B] py-28 scroll"
    >
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#1FB6E0]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#F4B400]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 text-center">
        {/* Headline */}
        <h2 className="text-3xl font-extrabold text-white md:text-4xl">
          Give Your Child a Strong Strategic Foundation
        </h2>

        {/* Subheading */}
        <p className="mt-5 text-lg text-gray-300">
          Join our structured chess program and help your child develop focus,
          confidence, and critical thinking skills that last a lifetime.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {/* Primary CTA */}
       <a
  href="#demo"
  className="
    rounded-full
    bg-linear-to-r from-[#F4B400] to-[#E0A800]
    px-6 py-2.5 text-sm font-semibold
    text-[#0B0B0B]
    shadow-[0_4px_20px_rgba(244,180,0,0.35)]
    transition-all duration-300
    hover:-translate-y-0.5
    hover:shadow-[0_6px_30px_rgba(244,180,0,0.5)]
    focus-visible:outline-none
    focus-visible:ring-2
    focus-visible:ring-[#1FB6E0]
    focus-visible:ring-offset-2
    focus-visible:ring-offset-[#0B0B0B]
  "
>
  Book Free Demo
</a>


          {/* Secondary CTA (Optional) */}
          <a
            href="https://wa.me/919718086186"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center justify-center
              rounded-full border border-white/30 px-10 py-3.5
              text-sm font-semibold text-white
              transition-all duration-300
              hover:border-white hover:bg-white/5
            "
          >
            WhatsApp Us
          </a>
        </div>

        {/* Trust Line */}
        <p className="mt-10 text-sm text-gray-400">
          No commitment required • Limited batch sizes • Personal attention
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
