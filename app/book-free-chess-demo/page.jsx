import Image from "next/image";
import DemoFormContent from "@/components/forms/DemoFormContent";

export const metadata = {
  title: "Book Free Chess Demo Class in Dwarka | Nimzo Academy",
  description:
    "Book a free chess demo class for your child at Nimzo Academy in Dwarka. Structured chess coaching focused on discipline, logic and tournament preparation.",
};

export default function BookFreeDemo() {
  return (
    <>
      {/* ================= HERO ================= */}
  <section className="relative overflow-hidden bg-gradient-to-b from-white via-[var(--color-back-500)] to-white py-20 md:py-24">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* LEFT SIDE */}
      <div className="space-y-8">
        <div className="h-1 w-16 bg-[var(--color-primary-600)]" />

        <h1 className="text-4xl md:text-5xl font-semibold leading-[1.05] tracking-tight text-[var(--color-heading-900)]">
          Book a Free Chess Demo Class
        </h1>

        <p className="text-lg text-[var(--color-body-700)] max-w-lg">
          Structured training designed to develop focus, discipline,
          strategic thinking, and tournament readiness.
        </p>

        <div className="space-y-3 text-[var(--color-body-700)]">
          <p>• Structured Curriculum</p>
          <p>• Focused Personal Attention</p>
          <p>• Tournament Preparation</p>
        </div>

        <div className="rounded-[var(--radius-lg)] overflow-hidden border border-[var(--color-border-300)]">
          <Image
            src="/gallery/training-3.jpg"
            alt="Students training at Nimzo Academy"
            width={700}
            height={450}
            priority
            className="w-full h-[300px] object-cover"
          />
        </div>
      </div>

      {/* RIGHT SIDE – FORM */}
      <div
        className="bg-white p-10 shadow-lg border border-[var(--color-border-300)]"
        style={{ borderRadius: "var(--radius-lg)" }}
      >
        <DemoFormContent type="demo" />
      </div>

    </div>
  </div>
</section>

      {/* ================= WHAT HAPPENS ================= */}
      <section className="py-24 border-t bg-back-500 border-[var(--color-border-300)]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-[var(--color-heading-900)]">
            What Happens in the Demo Class
          </h2>

          <div className="mt-14 grid md:grid-cols-3 gap-12 text-[var(--color-body-700)]">
            <div>
              <h3 className="font-semibold mb-3">
                Concept Introduction
              </h3>
              <p>
                Understanding fundamentals of board control and piece movement.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">
                Tactical Evaluation
              </h3>
              <p>
                Interactive exercises to assess calculation and pattern recognition.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">
                Performance Feedback
              </h3>
              <p>
                Clear guidance on skill level and recommended next steps.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}