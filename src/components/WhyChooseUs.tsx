import {
  ShieldCheck,
  Users,
  BookOpen,
  Target,
  Monitor,
  LineChart,
} from "lucide-react";

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
        {/* Title pill */}
        <div className="mb-14">
          <span className="inline-block rounded-full bg-[#2563EB] px-8 py-3 text-white text-xl font-semibold">
            Why Choose Nimzo Chess Academy?
          </span>
        </div>

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
            <div className="relative rounded-4xl bg-[#2563EB] p-6">
              <img
                src="/why-choose-us-child.png"
                alt="Child learning chess"
                className="rounded-3xl w-full max-w-sm object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
