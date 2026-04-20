import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Globe2, House, MapPinned } from "lucide-react";
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

const formatCards = [
  {
    icon: MapPinned,
    title: "Centre Classes",
    text: "A strong fit for families who want academy rhythm and in-person structure.",
  },
  {
    icon: House,
    title: "Home Coaching",
    text: "Useful for children who need more convenience or closer personal attention.",
  },
  {
    icon: Globe2,
    title: "Online Learning",
    text: "Best when flexibility, travel, or distance matters most.",
  },
];

const demoSteps = [
  {
    number: "01",
    title: "Initial understanding",
    text: "We get a quick sense of the student&apos;s age, exposure to chess, and comfort level.",
  },
  {
    number: "02",
    title: "Sample learning session",
    text: "The child experiences Nimzo&apos;s teaching style through guided instruction and practical interaction.",
  },
  {
    number: "03",
    title: "Parent guidance",
    text: "We recommend the right stage and format instead of pushing a random enrollment.",
  },
];

const trustPoints = [
  "Clear advice before enrollment",
  "Suitable for Delhi centre, home, and online enquiries",
  "A practical next step for complete beginners and improving students",
];

export default function BookFreeDemo() {
  return (
    <>
      <section className="bg-[linear-gradient(180deg,white_0%,var(--color-back-500)_55%,white_100%)] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
            <div>
              <span className="inline-flex items-center rounded-full bg-[var(--color-primary-600)]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
                Demo Booking
              </span>
              <h1 className="mt-5 text-4xl font-bold leading-tight text-[var(--color-heading-900)] md:text-5xl">
                Book a free chess demo class with the right context from the start
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--color-body-700)] md:text-lg">
                This is the simplest way to begin if you are comparing Delhi
                centre classes, home coaching, or online learning and want honest
                guidance before enrolling.
              </p>

              <div className="mt-8 flex flex-wrap gap-3 text-xs font-medium text-[var(--color-muted-500)] sm:text-sm">
                <span className="rounded-full border border-[var(--color-border-300)] bg-white px-4 py-2">
                  Delhi centres
                </span>
                <span className="rounded-full border border-[var(--color-border-300)] bg-white px-4 py-2">
                  Home coaching in select areas
                </span>
                <span className="rounded-full border border-[var(--color-border-300)] bg-white px-4 py-2">
                  Online classes worldwide
                </span>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {formatCards.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.title}
                      className="rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-white p-5 shadow-sm"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-primary-600)]/10 text-[var(--color-primary-600)]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="mt-4 text-lg font-semibold text-[var(--color-heading-900)]">
                        {item.title}
                      </h2>
                      <p className="mt-2 text-sm leading-relaxed text-[var(--color-body-700)]">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 overflow-hidden rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-white shadow-sm">
                <Image
                  src="/gallery/training-3.jpg"
                  alt="Students learning chess with structured guidance at Nimzo Academy"
                  width={700}
                  height={450}
                  priority
                  className="h-[300px] w-full object-cover"
                />
              </div>
            </div>

            <div className="rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-white p-6 shadow-[0_24px_50px_rgba(17,26,77,0.08)] md:p-8">
              <DemoFormContent type="demo" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
              What Happens Next
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[var(--color-heading-900)] md:text-4xl">
              What happens in the demo class
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-body-700)] md:text-lg">
              The demo is meant to create clarity for both the parent and the student.
              It is not just a trial lesson with no direction.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {demoSteps.map((item) => (
              <div
                key={item.number}
                className="rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-[var(--color-light-100)] p-7 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
                  Step {item.number}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-[var(--color-heading-900)]">
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

      <section className="bg-[var(--color-back-500)] py-16 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1fr_0.92fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
              Why Families Start Here
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[var(--color-heading-900)] md:text-4xl">
              The demo helps you choose with more confidence
            </h2>
            <div className="mt-6 space-y-4">
              {trustPoints.map((item) => (
                <div key={item} className="flex gap-3 text-sm leading-relaxed text-[var(--color-body-700)] sm:text-base">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-primary-600)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-white p-8 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
              Still Comparing
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-[var(--color-heading-900)]">
              Want to understand programs or Delhi coverage first?
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-body-700)]">
              If you want more clarity before booking, compare learning stages on
              the programs page or review Delhi formats and locations first.
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
