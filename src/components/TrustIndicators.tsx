import React from "react";
import { Users, CalendarCheck, ShieldCheck, Star } from "lucide-react";

type Indicator = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

const indicators: Indicator[] = [
  {
    icon: <Users className="h-10 w-10 text-white" />,
    value: "500+",
    label: "Young learners trained",
  },
  {
    icon: <CalendarCheck className="h-10 w-10 text-white" />,
    value: "6+ Years",
    label: "Coaching excellence",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-white" />,
    value: "FIDE",
    label: "Certified coaches",
  },
  {
    icon: <Star className="h-10 w-10 text-white" />,
    value: "4.8★",
    label: "Parent satisfaction",
  },
];

const TrustIndicators: React.FC = () => {
  return (
    <section className="bg-[#4760D0] py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-10 text-center md:grid-cols-4">
          {indicators.map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-3">
              {/* Icon container */}
              <div className="flex h-12 w-12 text-white  items-center justify-center rounded-full">
                {item.icon}
              </div>

              {/* Value */}
              <p className="text-3xl text-white font-bold ]">{item.value}</p>

              {/* Label */}
              <p className="text-lg text-white">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
