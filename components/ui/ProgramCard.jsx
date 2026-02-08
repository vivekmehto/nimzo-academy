import { Star } from "lucide-react";

export default function ProgramCard({
  icon: Icon,
  title,
  description,
  idealFor,
  includes,
  outcome,
  featured = false,
}) {
  return (
    <div
      className={`
    relative flex h-full flex-col
    rounded-(--radius-lg)
    bg-white p-6
    transition-all duration-300 ease-out
lg:hover:-translate-y-1
   ${
     featured
       ? `
    border border-accent-500/30
    shadow-mdF:
    hover:shadow-lg
  `
       : `
    border border-border-300
    shadow-sm
    hover:shadow-md
    hover:border-border-400
  `
   }

  `}
    >
      {/* Featured Badge */}
      {featured && (
        <div
          className="
          absolute right-4 top-4
          flex items-center gap-1
          rounded-full
          bg-accent-500/20
          px-3 py-1
          text-xs font-medium
          text-accent-600
        "
        >
          <Star className="h-3 w-3" />
          Most Effective
        </div>
      )}

      {/* Icon */}
      <div
        className={`
          mb-4 inline-flex h-12 w-12 items-center justify-center
         rounded-xl transition-colors duration-300

          ${
            featured
              ? "bg-accent-500/15 text-accent-600"
              : "bg-primary-600/10 text-primary-600"
          }
        `}
      >
        <Icon className="h-6 w-6" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-heading-900">{title}</h3>

      {/* Description */}
      <p className="mt-2 w-[90%] text-sm text-body-700 md:line-clamp-3">
        {description}
      </p>

      {/* Ideal For */}
      <ul className="mt-4 space-y-1 text-sm text-muted-500/90">
        {idealFor.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="text-primary-600">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Outcome */}
      <p className="mt-4 text-sm font-medium text-primary-600">⚡ {outcome}</p>

      {/* Includes */}

      <div className="mt-auto pt-4 space-y-1 text-sm text-muted-500/85">
        {includes.map((item) => (
          <p key={item} className="flex gap-2">
            <span className="text-primary-600">✓</span>
            <span>{item}</span>
          </p>
        ))}
      </div>
    </div>
  );
}
