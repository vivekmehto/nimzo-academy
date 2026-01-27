import React from "react";
import {
  Brain,
  Target,
  Clock,
  TrendingUp,
  Lightbulb,
  Puzzle,
} from "lucide-react";

import { motion } from "framer-motion";

const WhyChessHelps: React.FC = () => {
  return (
    <section className="bg-[#F5F9FF] py-28">
      <div className="mx-auto max-w-7xl px-4">
        
        {/* Shared container */}
        <div className="rounded-4xl border border-slate-200 bg-slate-50 p-8 md:p-14">
             <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mb-16 flex justify-center"
    >
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827]">
                Why Chess Helps Children
              </h2>
            </motion.div>
          
          <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-2">
            {/* IMAGE */}
            <div className="relative">
              <div className="overflow-hidden rounded-3xl shadow-sm">
                <img
                  src="/why-chess.jpg"
                  alt="Child learning chess"
                  className="w-full  object-cover"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="flex flex-col justify-center">
              
             

              <p className="mt-4 max-w-xl text-lg text-[#4B5563]">
                Chess is more than a game. It develops important life skills
                that help children grow academically, emotionally, and socially.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8">
                {[
                  {
                    icon: <Brain className="h-5 w-5 text-[#2563EB]" />,
                    title: "Improves Concentration",
                    desc: "Builds the ability to focus for longer periods.",
                    bg: "bg-[#2563EB]/10",
                  },
                  {
                    icon: <Puzzle className="h-5 w-5 text-[#2563EB]" />,
                    title: "Logical Thinking",
                    desc: "Encourages analysis and structured reasoning.",
                    bg: "bg-[#22D3EE]/20",
                  },
                  {
                    icon: <Clock className="h-5 w-5 text-[#2563EB]" />,
                    title: "Patience & Discipline",
                    desc: "Teaches children to slow down and plan.",
                    bg: "bg-[#2563EB]/10",
                  },
                  {
                    icon: <Target className="h-5 w-5 text-[#2563EB]" />,
                    title: "Strong Memory",
                    desc: "Improves recall and visualization ability.",
                    bg: "bg-[#22D3EE]/20",
                  },
                  {
                    icon: <TrendingUp className="h-5 w-5 text-[#2563EB]" />,
                    title: "Boosts Confidence",
                    desc: "Helps children believe in their decisions.",
                    bg: "bg-[#2563EB]/10",
                  },
                  {
                    icon: <Lightbulb className="h-5 w-5 text-[#2563EB]" />,
                    title: "Decision Making",
                    desc: "Encourages responsible thinking.",
                    bg: "bg-[#22D3EE]/20",
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${item.bg}`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#111827]">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm text-[#4B5563]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChessHelps;
