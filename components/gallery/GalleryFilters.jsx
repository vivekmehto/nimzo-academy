export default function GalleryFilters({ categories, active, onChange }) {
  return (
    <div className="mb-8 flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`rounded-full px-4 py-2 text-sm transition cursor-pointer
            ${
              active === category
                ? "bg-primary-600 text-white"
                : "bg-white border text-gray-700 hover:bg-blue-50"
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
