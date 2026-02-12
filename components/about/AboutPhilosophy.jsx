import Image from "next/image";

export default function AboutPhilosophy() {
  return (
    <section className="bg-[var(--color-light-100)] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">

        {/* Header */}
        <div className="max-w-3xl mb-10 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-heading-900)]">
            Our Teaching Philosophy
          </h2>

          <p className="mt-4 text-base md:text-lg leading-relaxed text-[var(--color-body-700)]">
            We believe children learn best when they are given time, clarity,
            and the confidence to think for themselves. Chess should support a
            child’s growth — not rush it.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-start">

          {/* TEXT — FIRST ON MOBILE */}
          <div className="md:col-span-3 space-y-10 md:space-y-8 order-1">
            <div>
              <h3 className="font-semibold text-[var(--color-heading-900)]">
                We don’t rush beginners
              </h3>
              <p className="mt-2 text-[var(--color-body-700)] leading-relaxed">
                Children start with strong fundamentals and move forward only
                when concepts are clearly understood. Progress is guided by
                readiness, not speed.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[var(--color-heading-900)]">
                Every child follows a clear path
              </h3>
              <p className="mt-2 text-[var(--color-body-700)] leading-relaxed">
                Learning is structured into simple, predictable stages so
                children always know where they are and what comes next.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[var(--color-heading-900)]">
                Thinking matters more than winning
              </h3>
              <p className="mt-2 text-[var(--color-body-700)] leading-relaxed">
                Children are encouraged to analyze positions, explain decisions,
                and learn from mistakes — building independence and confidence
                over time.
              </p>
            </div>
          </div>

          {/* IMAGE — SECONDARY, QUIET */}
          <div className="md:col-span-2 order-2 md:pt-2">
            <div className="overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-white-100)]">
              <Image
                src="/about-teaching-philosophy.jpg"
                alt="Calm and thoughtful chess coaching environment for children"
                width={520}
                height={380}
                className="w-full h-auto object-cover"
              />
            </div>

            <p className="mt-3 text-sm text-[var(--color-muted-500)] max-w-sm">
              A calm learning environment where children are guided patiently
              and encouraged to think independently.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
