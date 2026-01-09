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
    icon: <Users className="h-6 w-6 text-emerald-600" />,
    value: "500+",
    label: "Students Trained",
  },
  {
    icon: <Star className="h-6 w-6 text-amber-500" />,
    value: "4.8/5",
    label: "Parent Rating",
  },
  {
    icon: <Trophy className="h-6 w-6 text-indigo-600" />,
    value: "100+",
    label: "Tournament Wins",
  },
  {
    icon: <CalendarCheck className="h-6 w-6 text-sky-600" />,
    value: "5+ Years",
    label: "Coaching Experience",
  },
];

const TrustIndicators: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-2 gap-6 text-center md:grid-cols-4">
          {indicators.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-50">
                {item.icon}
              </div>
              <p className="text-2xl font-bold text-gray-900">
                {item.value}
              </p>
              <p className="text-sm text-gray-600">
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
