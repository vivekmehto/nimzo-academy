export default function Badge({
  children,
  variant = "default",
}) {
  const variants = {
    default: `
      bg-[var(--color-light-100)]
      text-[var(--color-body-700)]
      border border-[var(--color-border-300)]
    `,
    primary: `
      bg-[var(--color-primary-600)]
      text-white
    `,
    accent: `
      bg-[var(--color-accent-500)]
      text-[var(--color-heading-900)]
    `,
    outline: `
      bg-transparent
      text-[var(--color-body-700)]
      border border-[var(--color-border-300)]
    `,
  };

  return (
    <span
      className={`
        inline-flex items-center
        rounded-sm
        px-3 py-1
        text-xs font-medium
        whitespace-nowrap
        ${variants[variant]}
      `}
    >
      {children}
    </span>
  );
}
