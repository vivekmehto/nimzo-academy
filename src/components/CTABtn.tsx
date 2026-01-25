import React from "react";

type Props = {
  onClick: () => void;
};

const CTABtn: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="rounded-full
                bg-[#F59E0B]
                px-6 py-2.5
                text-sm font-semibold text-white
                shadow-[0_6px_20px_rgba(245,158,11,0.35)]
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[#D97706]
"
      aria-label="Book Free Demo"
    >
      Book Free Demo
    </button>
  );
};

export default CTABtn;
