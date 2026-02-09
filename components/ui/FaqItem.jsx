export default function FaqItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="py-5">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="
          w-full text-left
          flex items-center justify-between gap-6
          focus:outline-none
        "
      >
        <span className="text-base sm:text-lg font-medium text-heading-900">
          {question}
        </span>

        <span
          className="
            text-muted-500
            text-xl
            leading-none
          "
          aria-hidden
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {isOpen && (
        <div className="mt-3 pr-6 text-sm text-body-700 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}
