import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Globe2,
  House,
  MapPinned,
  ShieldCheck,
} from "lucide-react";
import DemoFormContent from "@/components/forms/DemoFormContent";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Book a Free Chess Demo Class in Delhi and Online",
  description:
    "Book a free chess demo class with Nimzo Academy for chess classes across Delhi, home coaching in select areas, or live online training from anywhere.",
  path: "/book-free-chess-demo",
  keywords: [
    "book free chess demo",
    "chess demo class in Delhi",
    "online chess demo class",
    "home chess coaching demo",
  ],
});

const heroPoints = [
  "We usually reply within 24 hours and help coordinate the next step.",
  "Suitable for complete beginners, improving students, and parents still comparing formats.",
  "Guidance covers Delhi centres, home coaching in select areas, and online classes worldwide.",
];

const quickFacts = [
  {
    label: "Response time",
    value: "Within 24 hours",
    icon: Clock3,
  },
  {
    label: "Formats covered",
    value: "Centre, home, or online",
    icon: Globe2,
  },
  {
    label: "What you get",
    value: "Clear stage guidance",
    icon: ShieldCheck,
  },
];

const formatCards = [
  {
    icon: MapPinned,
    title: "Delhi Centre Classes",
    text: "Best for families who want in-person structure, classroom rhythm, and academy environment.",
  },
  {
    icon: House,
    title: "Home Coaching",
    text: "Useful when convenience, one-to-one attention, or a more familiar setting matters most.",
  },
  {
    icon: Globe2,
    title: "Online Learning",
    text: "A strong option for flexible schedules, travel, or students learning from outside Delhi.",
  },
];

const demoSteps = [
  {
    number: "01",
    title: "We understand the student first",
    text: "We start with the child’s age, current exposure to chess, and how comfortable they already feel.",
  },
  {
    number: "02",
    title: "The student experiences the class",
    text: "The demo includes guided teaching so the child can experience Nimzo’s pace, style, and interaction quality.",
  },
  {
    number: "03",
    title: "You get a clear recommendation",
    text: "We guide you towards the right stage and format instead of pushing a random enrollment decision.",
  },
];

const trustPoints = [
  "The demo is meant to reduce guesswork, not create sales pressure.",
  "Parents get clarity on the best format before making a commitment.",
  "The student gets a first real feel for the teaching style and learning environment.",
];

export default function BookFreeDemo() {
  return (
    <>
      <section className="relative overflow-hidden bg-[radial-gradient(900px_420px_at_top,rgba(49,75,200,0.18),transparent_58%),linear-gradient(180deg,#f7f9ff_0%,#eef1ff_48%,#ffffff_100%)] py-16 md:py-20">
        <div className="absolute inset-x-0 top-0 h-56 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.88),transparent_72%)]" />

        <div className="relative mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-start">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full border border-[var(--color-primary-600)]/12 bg-white/85 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)] backdrop-blur-sm">
                Free Demo Booking
              </span>

              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-[var(--color-heading-900)] md:text-5xl">
                Book a free chess demo class for your child
              </h1>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--color-body-700)] md:text-lg">
                Share a few details and we will guide you towards the right
                starting point, whether you are considering Delhi centre classes,
                home coaching, or live online lessons.
              </p>

              <ul className="mt-8 space-y-3">
                {heroPoints.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-body-700)] sm:text-base"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-primary-600)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="#demo-form"
                  className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent-500)] px-6 py-3 text-sm font-semibold text-[var(--color-heading-900)] transition hover:bg-[var(--color-accent-600)]"
                >
                  Start Booking
                </Link>
                <Link
                  href="#what-to-expect"
                  className="inline-flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-primary-600)] bg-white/70 px-6 py-3 text-sm font-semibold text-[var(--color-primary-600)] transition hover:bg-white"
                >
                  See What Happens in the Demo
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {quickFacts.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="rounded-[calc(var(--radius-lg)+0.05rem)] border border-white/80 bg-white/88 p-5 shadow-[0_16px_40px_rgba(17,26,77,0.06)] backdrop-blur-sm"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-primary-600)]/10 text-[var(--color-primary-600)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary-600)]">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--color-heading-900)]">
                        {item.value}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:sticky lg:top-28">
              <div className="rounded-[calc(var(--radius-lg)+0.08rem)] border border-white/80 bg-white/94 p-5 shadow-[0_24px_60px_rgba(17,26,77,0.10)] backdrop-blur md:p-6">
                <div className="rounded-[var(--radius-md)] border border-[var(--color-border-300)] bg-[linear-gradient(180deg,rgba(238,241,255,0.65),rgba(255,255,255,0.96))] px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary-600)]">
                    Free Demo Request
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-body-700)]">
                    Share the student details below and we will help you choose the
                    right format and next step.
                  </p>
                </div>

                <div
                  id="demo-form"
                  className="mt-5 rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-white px-4 py-3 shadow-[0_12px_30px_rgba(17,26,77,0.04)] md:px-5 md:py-4"
                >
                  <DemoFormContent
                    type="demo"
                    eyebrowOverride="Start Booking"
                    titleOverride="Tell us about the student"
                    subtitleOverride="We use these details to recommend the right format and coordinate the demo timing."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="relative">
              <div className="absolute -left-4 -top-4 hidden h-full w-full rounded-[2rem] bg-[var(--color-back-500)] lg:block" />
              <div className="relative overflow-hidden rounded-[calc(var(--radius-lg)+0.2rem)] border border-[var(--color-border-300)] bg-white shadow-[0_20px_50px_rgba(17,26,77,0.08)]">
                <Image
                  src="/gallery/training-3.jpg"
                  alt="Students learning chess with structured guidance at Nimzo Academy"
                  width={760}
                  height={620}
                  className="h-[320px] w-full object-cover md:h-[420px]"
                />
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
                Before You Enrol
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[var(--color-heading-900)] md:text-4xl">
                Why families prefer to start with a demo
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-body-700)] md:text-lg">
                The demo is not just a trial for the sake of it. It helps us
                understand the student properly and helps parents decide with more
                confidence.
              </p>

              <ul className="mt-6 space-y-4">
                {trustPoints.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-relaxed text-[var(--color-body-700)] sm:text-base"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-primary-600)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {formatCards.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-[var(--color-light-100)] p-5"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-primary-600)]/10 text-[var(--color-primary-600)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-[var(--color-heading-900)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--color-body-700)]">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-to-expect" className="bg-[var(--color-light-100)] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
              What Happens Next
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[var(--color-heading-900)] md:text-4xl">
              What happens in the demo class
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-body-700)] md:text-lg">
              We use the session to understand the student, let the child
              experience the class, and then recommend a sensible next step.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {demoSteps.map((item) => (
              <div
                key={item.number}
                className="rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-white p-7 shadow-sm"
              >
                <p className="inline-flex rounded-full bg-[var(--color-primary-600)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
                  Step {item.number}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-[var(--color-heading-900)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-body-700)]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1fr_0.92fr] lg:items-start">
          <div className="rounded-[calc(var(--radius-lg)+0.08rem)] border border-[var(--color-border-300)] bg-[var(--color-back-500)] p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
              Booking With Confidence
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[var(--color-heading-900)] md:text-4xl">
              A calmer first step for families who need clarity
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-body-700)]">
              If you are still deciding, the demo gives you a clearer view of the
              right format, the likely starting stage, and whether Nimzo Academy
              feels like the right fit for your child.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {quickFacts.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[var(--radius-md)] border border-[var(--color-border-300)] bg-white px-4 py-4"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary-600)]">
                    {item.label}
                  </p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--color-heading-900)]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
              Still Comparing
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-[var(--color-heading-900)]">
              Want to compare programs or Delhi coverage first?
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-body-700)]">
              If you want more clarity before booking, review the learning stages
              on the programs page or explore Delhi locations and formats first.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/programs"
                className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent-500)] px-6 py-3 text-sm font-semibold text-[var(--color-heading-900)] transition hover:bg-[var(--color-accent-600)]"
              >
                Compare Programs
              </Link>
              <Link
                href="/locations"
                className="inline-flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-primary-600)] px-6 py-3 text-sm font-semibold text-[var(--color-primary-600)] transition hover:bg-[var(--color-primary-600)]/5"
              >
                Explore Locations
              </Link>
            </div>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-600)] transition hover:text-[var(--color-primary-700)]"
            >
              Prefer to contact us first
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
