import {
  ShieldCheck,
  Users,
  BookOpen,
  Target,
  Monitor,
  LineChart,
} from "lucide-react";

import { motion } from "framer-motion";

const reasons = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-[#2563EB]" />,
    title: "Certified & Experienced Coaches",
    desc: "Professional coaches with proven experience in training children across all skill levels.",
  },
  {
    icon: <Users className="h-6 w-6 text-[#2563EB]" />,
    title: "Small Batch & Personal Attention",
    desc: "Limited students per batch ensure focused learning and individual guidance.",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-[#2563EB]" />,
    title: "Structured Curriculum",
    desc: "Step-by-step learning system designed for long-term chess improvement.",
  },
  {
    icon: <Monitor className="h-6 w-6 text-[#2563EB]" />,
    title: "Online & Offline Learning",
    desc: "Flexible class modes without compromising teaching quality.",
  },
  {
    icon: <Target className="h-6 w-6 text-[#2563EB]" />,
    title: "Tournament-Oriented Training",
    desc: "Real-game preparation with analysis and competitive exposure.",
  },
  {
    icon: <LineChart className="h-6 w-6 text-[#2563EB]" />,
    title: "Progress Tracking & Feedback",
    desc: "Clear reports to help parents monitor learning progress.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#F5F9FF] py-28">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16 flex justify-center"
        >
             <h2 className="text-3xl md:text-5xl font-extrabold text-[#111827]">
                   Why Choose Nimzo Chess Academy?
              </h2>
        
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            {reasons.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm">
                  {item.icon}
                </div>

                <div>
                  <h4 className="font-semibold text-[#111827]">{item.title}</h4>
                  <p className="mt-1 text-sm text-[#4B5563]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT IMAGE PANEL */}
          <div className="relative flex justify-center">
            <div className="relative rounded-4xl  p-6">
              <img
                src="/why-choose-us.jpg"
                alt="Child learning chess"
                className="rounded-3xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
