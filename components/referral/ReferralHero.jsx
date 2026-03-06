import Image from "next/image";

export default function ReferralHero() {
  return (
    <section className="bg-[var(--color-back-500)] py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-6 animate-fade-up">

          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--color-heading-900)]">
            Chess Referral Program 
          </h1>

          <p className="text-lg text-[var(--color-body-700)]">
            Help us grow a focused and disciplined chess community in Delhi by
            nominating a child who wants to learn chess the right way at Nimzo Academy.
          </p>

          <p className="text-sm text-[var(--color-muted-500)]">
            Open to active Nimzo Academy families.
          </p>

          <div>
            <a
              href="#referral-form"
              className="
              inline-block
              px-8 py-3
              rounded-[var(--radius-md)]
              bg-[var(--color-accent-500)]
              hover:bg-[var(--color-accent-600)]
              text-white
              font-semibold
              transition
              shadow-md
              "
            >
              Nominate a Student
            </a>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative animate-fade-up">

          {/* gradient glow behind image */}
          <div className="absolute -inset-2 bg-gradient-to-tr from-[var(--color-accent-400)]/20 to-transparent rounded-[var(--radius-lg)] blur-xl"></div>

          <div className="relative overflow-hidden rounded-[var(--radius-lg)] shadow-2xl">

            <Image
              src="/gallery/training-3.jpg"
              alt="Children learning chess at Nimzo Academy"
              width={700}
              height={500}
              priority
              className="w-full h-[280px] md:h-[380px] object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}