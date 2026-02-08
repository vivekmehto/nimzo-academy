import Link from "next/link";

export default function Button({
  href,
  children,
  onClick,
  type = "button",
  full = false,
  variant = "primary",
  size = "md",
}) {
  const base =
    "clickable inline-flex items-center justify-center rounded-[var(--radius-md)] font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-600/40";

  const variants = {
    primary:
      "bg-[var(--color-accent-500)] text-[var(--color-heading-900)] hover:bg-[var(--color-accent-600)] shadow-sm hover:shadow-md",
    secondary:
      "bg-white text-[var(--color-primary-600)] border border-[var(--color-primary-600)] hover:bg-[var(--color-back-500)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3 text-base",
  };

  const className = `
    ${base}
    ${variants[variant]}
    ${sizes[size]}
    ${full ? "w-full" : ""}
  `;

  if (href) {
    return (
      <Link href={href} className={className} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>

    
  );
}
