export default function Section({
  id,
  title,
  subtitle,
  children,
  align = "left",
  className = "",
}) {
  return (
    <section
      id={id}
      className={`py-12 md:py-20 ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div
          className={
            align === "center"
              ? "mx-auto max-w-3xl text-center"
              : "max-w-3xl"
          }
        >
          {title && (
            <h2
              className="
                text-2xl font-bold
                text-heading-900
                md:text-4xl
              "
            >
              {title}
            </h2>
          )}

          {subtitle && (
            <p
              className="
                mt-3
                text-base
                text-muted-500
                md:text-lg
              "
            >
              {subtitle}
            </p>
          )}
        </div>

        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
