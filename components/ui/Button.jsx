import Link from "next/link";

export default function Button({
  href,
  children,
  full = false,
  onClick,
  type = "button",
}) {
  const className = `
    inline-flex items-center justify-center
    rounded-[var(--radius-md)]
    bg-[var(--color-accent-500)]
    px-5 py-2
    text-sm font-medium
    text-[var(--color-heading-900)]
    transition-colors
    hover:bg-[var(--color-accent-600)]
    ${full ? "w-full py-3" : ""}
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
