export default function Card({
  children,
  as = "div",
  clickable = false,
}) {
  const Component = as;

  return (
    <Component
      className={`
        rounded-lg
        border border-border-300
        bg-white-100
        p-5
        shadow-sm
        transition
        ${clickable ? "hover:shadow-md" : ""}
      `}
    >
      {children}
    </Component>
  );
}
