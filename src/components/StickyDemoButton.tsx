import React from "react";

type Props = {
  onClick: () => void;
};

const StickyDemoButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      aria-label="Book Free Demo"
      className="
        md:hidden fixed bottom-4 left-1/2 z-40
    -translate-x-1/2
    rounded-full bg-amber-500
    px-6 py-3 text-sm font-semibold text-white
    shadow-lg
  "
    >
      Book Free Demo
    </button>
  );
};

export default StickyDemoButton;
