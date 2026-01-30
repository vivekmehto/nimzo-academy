import React from "react";
import { Laptop, Users, User, Layers } from "lucide-react";
import { motion } from "framer-motion";

type WhatWeOfferProps = {
  onDemoClick: () => void;
};


const WhatWeOffer: React.FC<WhatWeOfferProps> = ({ onDemoClick }) => {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mb-18 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-6 flex justify-center"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827]">
              What We Offer
            </h2>
          </motion.div>

          <p className="mt-4 max-w-2xl mx-auto text-lg text-[#4B5563]">
            Structured chess programs designed to support every child’s learning
            style, pace, and confidence level.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* ONLINE */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 hover:shadow-lg transition">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB]/10">
                <Laptop className="h-6 w-6 text-[#2563EB]" />
              </div>
              <h3 className="text-xl font-bold text-[#111827]">
                Online Chess Classes
              </h3>
            </div>

            <p className="text-[#4B5563] leading-relaxed mb-5">
              Live interactive online training that allows children to learn
              comfortably from home while staying fully engaged.
            </p>

            <p className="mb-4 text-sm font-semibold text-[#2563EB]">
              Ideal for:
            </p>
            <ul className="mb-6 list-disc pl-5 text-sm text-[#4B5563] space-y-2">
              <li>Kids aged 6+</li>
              <li>Busy schedules & remote learning</li>
              <li>Beginners to intermediate players</li>
            </ul>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <User className="h-5 w-5 text-[#2563EB] mt-0.5" />
                <span className="font-medium text-[#111827]">
                  One-on-One Online Coaching
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="h-5 w-5 text-[#2563EB] mt-0.5" />
                <span className="font-medium text-[#111827]">
                  Small Group Online Classes
                </span>
              </li>
            </ul>
          </div>

          {/* OFFLINE */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 hover:shadow-lg transition">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#22D3EE]/20">
                <Users className="h-6 w-6 text-[#2563EB]" />
              </div>
              <h3 className="text-xl font-bold text-[#111827]">
                Offline Chess Classes
              </h3>
            </div>

            <p className="text-[#4B5563] leading-relaxed mb-5">
              Classroom-based chess learning focused on discipline, real-board
              practice, and stronger student interaction.
            </p>

            <p className="mb-4 text-sm font-semibold text-[#2563EB]">
              Ideal for:
            </p>
            <ul className="mb-6 list-disc pl-5 text-sm text-[#4B5563] space-y-2">
              <li>Kids who prefer in-person learning</li>
              <li>Improving focus & classroom discipline</li>
              <li>Tournament preparation</li>
            </ul>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <User className="h-5 w-5 text-[#2563EB] mt-0.5" />
                <span className="font-medium text-[#111827]">
                  One-on-One Offline Coaching
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="h-5 w-5 text-[#2563EB] mt-0.5" />
                <span className="font-medium text-[#111827]">
                  Offline Group Classes
                </span>
              </li>
            </ul>
          </div>

          {/* HYBRID */}
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 hover:shadow-lg transition">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F59E0B]/20">
                <Layers className="h-6 w-6 text-[#F59E0B]" />
              </div>
              <h3 className="text-xl font-bold text-[#111827]">
                Hybrid Program
              </h3>
            </div>

            <p className="text-[#4B5563] leading-relaxed mb-5">
              A balanced combination of online convenience and offline
              interaction — designed for consistent improvement.
            </p>

            <p className="mb-4 text-sm font-semibold text-[#2563EB]">
              Ideal for:
            </p>
            <ul className="mb-6 list-disc pl-5 text-sm text-[#4B5563] space-y-2">
              <li>Students seeking faster progress</li>
              <li>Families balancing schedules</li>
              <li>Long-term chess development</li>
            </ul>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Laptop className="h-5 w-5 text-[#2563EB] mt-0.5" />
                <span className="font-medium text-[#111827]">
                  Weekly Online Training
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="h-5 w-5 text-[#2563EB] mt-0.5" />
                <span className="font-medium text-[#111827]">
                  Offline Practice Sessions
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Reassurance */}
        <div className="mt-18 text-center">
          <button onClick={onDemoClick} className="hover:text-[#2563EB] cursor-pointer text-sm text-[#4B5563]">
            Not sure which program suits your child?{" "}
            <span className="font-semibold text-[#2563EB]">
              Book a free demo and our coach will guide you personally.
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
