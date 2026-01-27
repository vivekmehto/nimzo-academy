import CountUp from "../utils/CountUp";

const HeroStats = () => {
  return (
    <div className="relative mt-4 max-w-xl">
      {/* Glow background */}
      <div className="absolute -inset-10 bg-[#3B5998]/15 blur-3xl rounded-full pointer-events-none" />

      {/* Content */}
      <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-gray-200 pt-8">
        {/* Students */}
        <div>
          <p className="text-3xl font-bold text-[#111827]">
            <CountUp end={500} />+
          </p>
          <p className="mt-1 text-md text-[#4B5563]">
            Young learners trained
          </p>
        </div>

        {/* Experience */}
        <div>
          <p className="text-3xl font-bold text-[#111827]">
            <CountUp end={6} />+
          </p>
          <p className="mt-1 text-md text-[#4B5563]">
            Years of coaching excellence
          </p>
        </div>

        {/* Coaches */}
        <div>
          <p className="text-3xl font-bold text-[#111827]">FIDE</p>
          <p className="mt-1 text-md text-[#4B5563]">
            Certified & experienced coaches
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroStats;
