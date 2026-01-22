import React from "react";
import {
  Users,
  CalendarCheck,
  ShieldCheck,
  Star,
} from "lucide-react";

type Indicator = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

const indicators: Indicator[] = [
  {
    icon: <Users className="h-6 w-6 text-[#2563EB]" />,
    value: "500+",
    label: "Young learners trained",
  },
  {
    icon: <CalendarCheck className="h-6 w-6 text-[#2563EB]" />,
    value: "6+ Years",
    label: "Coaching excellence",
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-[#22D3EE]" />,
    value: "FIDE",
    label: "Certified coaches",
  },
  {
    icon: <Star className="h-6 w-6 text-[#F59E0B]" />,
    value: "4.8★",
    label: "Parent satisfaction",
  },
];

const TrustIndicators: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-10 text-center md:grid-cols-4">
          {indicators.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3"
            >
              {/* Icon container */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2563EB]/10">
                {item.icon}
              </div>

              {/* Value */}
              <p className="text-2xl font-bold text-[#111827]">
                {item.value}
              </p>

              {/* Label */}
              <p className="text-sm text-[#4B5563]">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
