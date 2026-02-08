import Image from "next/image";

export default function Hero() {
  return (
   <section
  className="
    relative
    bg-[radial-gradient(1100px_520px_at_top,rgba(47,91,234,0.32),transparent_58%),linear-gradient(to_bottom,rgba(238,242,255,1),rgba(248,250,252,1))]
    py-20 sm:py-24
  "
>
  {/* Glass overlay */}
  <div
    className="
      absolute inset-0
      bg-white/30
      backdrop-blur-[2px]
      pointer-events-none
    "
  />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 z-10 relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT — CONTENT */}
          <div className="text-center lg:text-left">
            <h1
              className="
                text-4xl sm:text-5xl lg:text-6xl
                font-bold
                leading-tight
                tracking-tight
                text-heading-900
              "
            >
              Chess Classes for kids
              <br  />
              <span className="text-2xl lg:text-3xl text-primary-600">
                Structured, Calm & Effective
              </span>
            </h1>

            <p
              className="
                mt-6
                text-lg sm:text-xl
                text-body-700
                font-medium
                max-w-xl mx-auto lg:mx-0
              "
            >
              Chess learning program that helps kids build focus, confidence,
              and strong thinking habits.
            </p>

            <p
              className="
                mt-4
                max-w-xl
                mx-auto lg:mx-0
                text-base
                leading-relaxed
                text-muted-500
              "
            >
              At Nimzo Academy, children learn chess through a clear step by
              step process guided by experienced, child focused coaches. Our approach emphasizes
              discipline, logical thinking, and steady progress without
              pressure.
            </p>

            {/* CTA */}
            <div
              className="
                mt-10
                flex flex-col sm:flex-row
                gap-4
                justify-center lg:justify-start
              "
            >
              <a
                href="/contact"
                className="
                  inline-flex items-center justify-center
                  rounded-(--radius-md)
                  bg-accent-500
                  px-7 py-3
                  text-base font-semibold
                  text-heading-900
                  hover:bg-accent-600
                  transition
                "
              >
                Book a Free Demo Class
              </a>

              <a
                href="/programs"
                className="
                  inline-flex items-center justify-center
                  rounded-(--radius-md)
                  border border-primary-600
                  px-7 py-3
                  text-base font-semibold
                  text-primary-600
                  hover:bg-primary-600/5
                  transition
                "
              >
                View Learning Programs
              </a>
            </div>

            {/* Trust Points */}
            <div
              className="
                mt-12
                grid gap-4
                sm:grid-cols-3
                text-sm
                text-body-700
              "
            >
              <p>Age-appropriate learning</p>
              <p>Experienced chess coaches</p>
              <p>Regular parent feedback</p>
            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="relative">
            {/* Soft overlay for premium feel */}
            <div className="absolute inset-0 rounded-xl bg-white/10 pointer-events-none" />

            <div className="overflow-hidden rounded-xl">
              <Image
                src="/hero-chess.jpg"
                alt="Children learning chess in a calm and structured environment at Nimzo Academy"
                width={640}
                height={520}
                priority
                className="
        w-full h-auto object-cover
        contrast-[1.08]
        saturate-[0.95]
      "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
