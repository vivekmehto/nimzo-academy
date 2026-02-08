import Section from "@/components/ui/Section";
import { teachingProcess as items } from "@/data/teachingProcess";

export default function TeachingProcess() {
  return (
    <Section className="bg-light-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-heading-900">
            How Our Chess Teaching Process Works
          </h2>
          <p className="mt-4 text-sm sm:text-base text-body-700 leading-relaxed">
            A clear, supportive, and structured learning journey designed to help
            children grow confidently — while keeping parents informed at every step.
          </p>
        </div>

        {/* Steps */}
        <div
          className="
            grid gap-5 sm:gap-6
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
          "
        >
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.step}
                className="
                  group
                  relative
                  rounded-3xl
                  bg-white-100
                  p-6 sm:p-7
                  border border-border-300
                  shadow-sm
                  text-center
                  transition-all
                  hover:-translate-y-1
                  hover:shadow-md
                "
              >
                {/* Step pill */}
                <div
                  className="
                    inline-flex items-center justify-center
                    mb-4
                    rounded-full
                    bg-light-100
                    px-3 py-1
                    text-xs
                    text-primary-600
                    font-bold
                    tracking-wide
                  "
                >
                  Step {item.step}
                </div>

                {/* Icon */}
                <div
                  className="
                    mx-auto
                    mb-5
                    flex h-12 w-12 sm:h-14 sm:w-14
                    items-center justify-center
                    rounded-full
                    bg-primary-600/12
                    text-primary-600
                    transition
                    group-hover:scale-105
                  "
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-semibold text-heading-900 leading-snug">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-body-700">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Reassurance line */}
        <div className="mt-10 sm:mt-14 text-center text-xs sm:text-sm text-primary-600 font-medium">
          ✓ No pressure after demo &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Flexible class timings
          &nbsp;&nbsp;•&nbsp;&nbsp; ✓ Regular parent updates
        </div>
      </div>
    </Section>
  );
}
