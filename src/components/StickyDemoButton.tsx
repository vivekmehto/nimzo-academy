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
    cursor-pointer
    fixed right-0 top-1/3 z-40 -translate-y-1/2
    -rotate-90 origin-bottom-right
    rounded-t-lg bg-amber-500 px-4 py-2
    text-sm font-semibold text-white

    /* ✨ Animation + Hover */
    shadow-lg
    transition-all duration-300 ease-out
    hover:bg-amber-600
    hover:shadow-2xl
    hover:-translate-x-1
    active:scale-95

  "
>
  Book Free Demo
</button>

  );
};

export default StickyDemoButton;
