import Link from "next/link";
import { Globe2, House, MapPinned, School } from "lucide-react";
import { locationPages } from "@/data/locations";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Chess Coaching Locations in Delhi and Online Worldwide",
  description:
    "Explore Nimzo Academy locations and learning formats across Delhi, home classes in select areas, school tie-ups, and online coaching worldwide.",
  path: "/locations",
});

const centreLocations = locationPages.filter((item) =>
  ["Headquarters", "Offline Branch"].includes(item.type),
);
const homeLocations = locationPages.filter(
  (item) => item.type === "Home Coaching Service Area",
);
const delhiOverview = locationPages.find(
  (item) => item.slug === "chess-coaching-in-delhi",
);

const formatHighlights = [
  {
    icon: MapPinned,
    title: "Centres",
    text: "Learn through our main Dwarka centre and wider Delhi class network.",
  },
  {
    icon: House,
    title: "Home Classes",
    text: "Coach-led home chess coaching across select Delhi areas for families who want a more personalised setup.",
  },
  {
    icon: Globe2,
    title: "Online",
    text: "Live online chess classes for students in India and around the world.",
  },
  {
    icon: School,
    title: "Schools",
    text: "Structured school chess programs for institutions building long-term chess culture.",
  },
];

export default function LocationsPage() {
  return (
    <main className="bg-[var(--color-light-100)]">
      <section className="bg-[linear-gradient(135deg,var(--color-back-500)_0%,white_55%,var(--color-light-100)_100%)] py-18 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
                Nimzo Academy Coverage
              </p>
              <h1 className="mt-3 text-4xl font-bold leading-tight text-[var(--color-heading-900)] md:text-5xl">
                Chess coaching through Delhi centres, home classes, and online learning worldwide
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[var(--color-body-700)] md:text-lg">
                Families choose Nimzo Academy in different ways. Some prefer
                centre classes, some choose home coaching across Delhi, and
                others join online from India and abroad.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/book-free-chess-demo"
                  className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent-500)] px-7 py-3 text-sm font-semibold text-[var(--color-heading-900)] transition hover:bg-[var(--color-accent-600)]"
                >
                  Book a Free Demo Class
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-primary-600)] px-7 py-3 text-sm font-semibold text-[var(--color-primary-600)] transition hover:bg-[var(--color-primary-600)]/5"
                >
                  Talk to Nimzo Academy
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {formatHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary-600)]/10 text-[var(--color-primary-600)]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-4 text-xl font-semibold text-[var(--color-heading-900)]">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-body-700)]">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-18 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
              Centre Classes
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[var(--color-heading-900)] md:text-4xl">
              In-person chess classes through Nimzo Academy centres
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-body-700)] md:text-lg">
              Families who want regular academy rhythm, in-person discipline, and
              direct class supervision usually begin with our centre formats.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {centreLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/${location.slug}`}
                className="group rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-[var(--color-light-100)] p-7 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--color-primary-600)] hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-600)]">
                  {location.type}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--color-heading-900)]">
                  {location.area}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-body-700)]">
                  {location.intro}
                </p>
                <p className="mt-5 text-sm font-medium text-[var(--color-primary-600)]">
                  Explore {location.area} classes
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-back-500)] py-18 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
              Home Classes Across Delhi
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[var(--color-heading-900)] md:text-4xl">
              Personalised home chess coaching in select Delhi areas
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-body-700)] md:text-lg">
              Home coaching works especially well for children who need more
              individual attention, less travel, or a calmer learning environment.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {homeLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/${location.slug}`}
                className="group rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--color-primary-600)] hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-600)]">
                  {location.area}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-[var(--color-heading-900)]">
                  {location.h1}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-body-700)]">
                  {location.snapshot[1].value}
                </p>
                <p className="mt-5 text-sm font-medium text-[var(--color-primary-600)]">
                  Explore home coaching in {location.area}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-18 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div className="rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-[var(--color-primary-600)] p-8 text-white shadow-[0_20px_50px_rgba(47,91,234,0.18)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
              Online Worldwide
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight">
              Live online classes for students learning from anywhere
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/88">
              Nimzo Academy also works with families outside Delhi and outside India.
              If location, travel, or routine makes centre learning difficult, our
              online coaching keeps the learning path consistent.
            </p>
          </div>

          <div className="rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-[var(--color-light-100)] p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-[var(--color-heading-900)]">
              Need help choosing the right format?
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-body-700)]">
              Start with our Delhi overview page if you want to compare centres,
              home coaching, and online support more carefully.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`/${delhiOverview.slug}`}
                className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent-500)] px-6 py-3 text-sm font-semibold text-[var(--color-heading-900)] transition hover:bg-[var(--color-accent-600)]"
              >
                Explore Delhi Coverage
              </Link>
              <Link
                href="/school-chess-program"
                className="inline-flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-primary-600)] px-6 py-3 text-sm font-semibold text-[var(--color-primary-600)] transition hover:bg-[var(--color-primary-600)]/5"
              >
                View School Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
