import React from "react";
import {
  Users,
  Star,
  Trophy,
  CalendarCheck
} from "lucide-react";

type Indicator = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

const indicators: Indicator[] = [
  {
    icon: <Users className="h-6 w-6 text-[#1FB6E0]" />,
    value: "500+",
    label: "Students Trained",
  },
  {
    icon: <Star className="h-6 w-6 text-[#F4B400]" />,
    value: "4.8/5",
    label: "Parent Rating",
  },
  {
    icon: <Trophy className="h-6 w-6 text-[#1FB6E0]" />,
    value: "100+",
    label: "Tournament Wins",
  },
  {
    icon: <CalendarCheck className="h-6 w-6 text-[#1FB6E0]" />,
    value: "5+ Years",
    label: "Coaching Experience",
  },
];

const TrustIndicators: React.FC = () => {
  return (
    <section className="bg-[#0F0F0F] py-14">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
          {indicators.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3"
            >
              {/* Icon Container */}
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                {item.icon}
              </div>

              {/* Value */}
              <p className="text-2xl font-bold text-white">
                {item.value}
              </p>

              {/* Label */}
              <p className="text-sm text-gray-400">
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
