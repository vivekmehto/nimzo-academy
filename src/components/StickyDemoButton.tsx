import React from "react";

type Props = {
  onClick: () => void;
};

const StickyDemoButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      
      className="
  fixed right-0 top-1/2 z-40 -translate-y-1/2
  -rotate-90 origin-bottom-right
  rounded-t-lg bg-amber-500 px-4 py-2
  text-sm font-semibold text-white
"

      aria-label="Book Free Demo"
    >
      Book Free Demo
    </button>
  );
};

export default StickyDemoButton;
