import CountUp from "../utils/CountUp";

const HeroStats = () => {
  return (
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-gray-200 pt-8 max-w-xl">
      {/* Students */}
      <div>
        <p className="text-2xl font-bold text-[#111827]">
          <CountUp end={500} />+
        </p>
        <p className="mt-1 text-sm text-[#4B5563]">Young learners trained</p>
      </div>

      {/* Experience */}
      <div>
        <p className="text-2xl font-bold text-[#111827]">
          <CountUp end={6} />+
        </p>
        <p className="mt-1 text-sm text-[#4B5563]">
          Years of coaching excellence
        </p>
      </div>

      {/* Coaches */}
      <div>
        <p className="text-2xl font-bold text-[#111827]">FIDE</p>
        <p className="mt-1 text-sm text-[#4B5563]">
          Certified & experienced coaches
        </p>
      </div>
    </div>
  );
};

export default HeroStats;
