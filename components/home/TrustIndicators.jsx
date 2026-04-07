import Section from "@/components/ui/Section";
import { items } from "@/data/trust";

export default function TrustIndicators() {
  return (
    <Section
      className="
        relative
        bg-[linear-gradient(135deg,var(--color-primary-700)_0%,var(--color-primary-600)_55%,var(--color-primary-500)_100%)]
        py-16 sm:py-24
        "
    >
      <div className="mx-auto mb-12 max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
          Why Families Choose Nimzo
        </p>
        <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
          Clear formats, clear guidance, and a clear learning path
        </h2>
      </div>

      <div
        className="
          grid grid-cols-2 gap-10
          lg:grid-cols-4
          text-center
        "
      >
        {items.map((item, idx) => {
          const Icon = item.icon;

          return (
            <div
              key={idx}
              className="rounded-[calc(var(--radius-lg)+0.05rem)] border border-white/12 bg-white/8 px-4 py-6 backdrop-blur-sm"
            >
              <Icon
                className="
                  mx-auto
                  h-12 w-12 lg:h-14 lg:w-14
                  text-white
                "
                strokeWidth={1.6}
              />

              <h3 className="mt-4 text-lg font-bold text-white lg:text-xl">
                {item.title}
              </h3>

              <p
                className="
                  mt-3
                  text-sm lg:text-[0.95rem]
                  text-white/90
                  max-w-xs mx-auto
                "
              >
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
