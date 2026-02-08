import Section from "@/components/ui/Section";
import { items } from "@/data/trust";

export default function TrustIndicators() {
  return (
    <Section
      className="
        relative
        py-16 sm:py-24
      bg-[#4760D0]
        "
    >
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
            <div key={idx}>
              <Icon
                className="
                  mx-auto
                  h-14 w-14 lg:h-16 lg:w-16
                  text-white
                "
                strokeWidth={1.6}
              />

              <h3 className="mt-4 text-lg font-bold text-white lg:text-xl">
                {item.title}
              </h3>

              {/* <p
                className="
                  mt-3
                  text-sm lg:text-base
                  text-white/90
                  max-w-xs mx-auto
                "
              >
                {item.desc}
              </p> */}
            </div>
          );
        })}
      </div>
    </Section>
  );
}
