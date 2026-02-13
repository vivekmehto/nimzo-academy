export default function LoadMoreButton({ onClick, hasMore, isLoading }) {
  if (!hasMore) return null;

  return (
    <div className="mt-16 flex justify-center">
      <button
        onClick={onClick}
        disabled={isLoading}
        aria-busy={isLoading}
        className="
          group inline-flex items-center gap-2
          rounded-full border border-primary-600
          px-8 py-3
          text-primary-600 font-medium
          transition-all duration-200
          hover:bg-primary-600 hover:text-white
          hover:-translate-y-0.5
          disabled:opacity-50 disabled:cursor-not-allowed
        "
      >
        {isLoading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
            <span>Loading</span>
          </>
        ) : (
          <>
            <span>Load more</span>
            <span className="transition-transform duration-200 group-hover:translate-y-0.5">
              ↓
            </span>
          </>
        )}
      </button>
    </div>
  );
}
