import Image from "next/image";

export default function AboutIntro() {
  return (
    <section className="bg-back-500 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">
        
        {/* TEXT SIDE */}
        <div className="animate-fade-up">

          {/* Soft kicker — semantic improvement */}
          <h2
            className="
              text-sm
              font-medium
              text-muted-500
              mb-2
            "
          >
            About Nimzo Academy
          </h2>

          {/* Headline */}
          <h1
            className="
              text-3xl md:text-4xl
              font-semibold
              text-(--color-heading-900)
              leading-tight
              max-w-xl
            "
          >
            Helping Children Learn Chess
            <span className="block">the Right Way</span>
          </h1>

          {/* Primary paragraph */}
          <p
            className="
              mt-5 md:mt-6
              text-base md:text-lg
              leading-relaxed
              text-body-700
              max-w-xl
            "
          >
            Nimzo Academy was created with one simple belief: chess should help
            children think better, not feel pressured. We focus on beginners and
            growing learners who need clarity, patience, and structured
            guidance—especially in their early stages.
          </p>

          {/* Quote — softened on mobile */}
          <div
            className="
              mt-5 md:mt-6
              border-l-2 md:border-l-4
              border-primary-600
              pl-4
              text-body-700
              italic
              max-w-lg
            "
          >
            Chess is not about winning early — it’s about learning to think
            clearly, calmly, and confidently.
          </div>

          {/* Micro outcomes — semantic list */}
          <ul
            className="
              mt-6 md:mt-8
              grid grid-cols-1 sm:grid-cols-2
              gap-3
              text-sm
              text-body-700
            "
          >
            <li>Designed for children & beginners</li>
            <li>Strong focus on thinking skills</li>
            <li>Structured learning path</li>
            <li>Online & offline coaching</li>
          </ul>
        </div>

        {/* IMAGE SIDE */}
        <div className="relative animate-fade-up">
          <div
            className="
              overflow-hidden
              rounded-(--radius-lg)
              bg-white-100
              shadow-sm
            "
          >
            <Image
              src="/about-intro-chess.jpg"
              alt="Chess coaching for children at Nimzo Academy"
              width={560}
              height={420}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          {/* Caption */}
          <p className="mt-3 text-xs text-muted-500">
            A calm, supportive environment for young learners
          </p>
        </div>
      </div>
    </section>
  );
}
