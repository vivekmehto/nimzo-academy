import Image from "next/image";

export default function AboutFounder() {
  return (
    <section className="bg-[var(--color-white-100)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Founder Image */}
        <div className="animate-fade-up">
          <div className="overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-light-100)]">
            <Image
              src="/nimzo-academy-coach.png"
              alt="Founder and lead chess coach at Nimzo Academy"
              width={520}
              height={640}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Founder Content */}
        <div className="animate-fade-up">
          {/* Softer kicker */}
          <p className="text-sm font-medium text-[var(--color-muted-500)] mb-3">
            Founder & Lead Coach
          </p>

          {/* Human heading */}
          <h2
            className="
              text-3xl md:text-4xl
              font-semibold
              text-[var(--color-heading-900)]
              leading-tight
              max-w-xl
            "
          >
            A Coach Who Cares About How Children Learn
          </h2>

          {/* First-person connection */}
          <p
            className="
              mt-6
              text-base md:text-lg
              leading-relaxed
              text-[var(--color-body-700)]
              max-w-xl
            "
          >
            Nimzo Academy began with a simple observation — many children were
            being pushed to play chess before they were taught how to think
            through the game. I wanted to create a learning space where children
            could slow down, understand the basics clearly, and grow with
            confidence.
          </p>

          {/* Divider / emotional pause */}
          <div
            className="
              mt-6
              border-l-4
              border-[var(--color-primary-600)]
              pl-4
              italic
              text-[var(--color-body-700)]
              max-w-lg
            "
          >
            Teaching children is not about faster results — it’s about building
            the right foundation.
          </div>

          {/* Team mention (kept subtle) */}
          <p
            className="
              mt-6
              text-base
              leading-relaxed
              text-[var(--color-body-700)]
              max-w-xl
            "
          >
            While the academy is founder-led, sessions are supported by a small,
            trained coaching team that follows the same philosophy and structured
            approach — ensuring consistency across both online and offline
            programs.
          </p>

          {/* Trust footer */}
          <div className="mt-6 text-sm font-medium text-[var(--color-muted-500)]">
            Founder-led guidance • Child-first teaching • Calm learning
          </div>
        </div>
      </div>
    </section>
  );
}
