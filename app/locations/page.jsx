import Link from "next/link";
import { Globe2, House, MapPinned, School } from "lucide-react";
import PhotoStoryGrid from "@/components/ui/PhotoStoryGrid";
import {
  centreLocations,
  cityOverviewLocation,
  homeLocations,
  locationPages,
} from "@/data/locations";
import { getGalleryImagesByIds } from "@/data/gallery";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Chess Coaching Locations in Delhi and Online Worldwide",
  description:
    "Explore Nimzo Academy locations and learning formats across Delhi, home classes in select areas, school tie-ups, and online coaching worldwide.",
  path: "/locations",
  keywords: [
    "chess coaching in Delhi",
    "chess classes in Dwarka",
    "chess classes in Rohini",
    "home chess coaching in Delhi",
    "online chess classes for kids",
  ],
});

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

const decisionCards = [
  {
    title: "Centre Classes",
    text: "Best for families who want regular academy rhythm, peer learning, and in-person structure.",
    href: "/chess-coaching-in-delhi",
    cta: "View Delhi centre options",
  },
  {
    title: "Home Coaching",
    text: "Best for children who need more personal attention or families who want less travel each week.",
    href: "/chess-classes-in-janakpuri",
    cta: "Explore home coaching areas",
  },
  {
    title: "Online Classes",
    text: "Best for students learning outside Delhi, abroad, or with schedules that need more flexibility.",
    href: "/book-free-chess-demo",
    cta: "Book an online-first discussion",
  },
];

const coverageSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Nimzo Academy Delhi and online coverage pages",
  itemListElement: locationPages.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `https://nimzoacademy.com/${item.slug}`,
    name: item.h1,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://nimzoacademy.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Locations",
      item: "https://nimzoacademy.com/locations",
    },
  ],
};

const coveragePhotos = getGalleryImagesByIds([3, 20, 26]);

export default function LocationsPage() {
  return (
    <main className="bg-[var(--color-light-100)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coverageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-[linear-gradient(135deg,var(--color-back-500)_0%,white_55%,var(--color-light-100)_100%)] py-18 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <nav className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-muted-500)]">
                <Link href="/" className="transition hover:text-[var(--color-primary-600)]">
                  Home
                </Link>
                <span>/</span>
                <span className="text-[var(--color-heading-900)]">Locations</span>
              </nav>

              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
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

              <div className="mt-8 flex flex-wrap gap-3 text-xs font-medium text-[var(--color-muted-500)] sm:text-sm">
                <span className="rounded-full border border-[var(--color-border-300)] bg-white px-4 py-2">
                  Delhi centre classes
                </span>
                <span className="rounded-full border border-[var(--color-border-300)] bg-white px-4 py-2">
                  Home coaching in select areas
                </span>
                <span className="rounded-full border border-[var(--color-border-300)] bg-white px-4 py-2">
                  Online classes worldwide
                </span>
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

      <PhotoStoryGrid
        eyebrow="Across Our Formats"
        title="Real students, real class energy, real training moments"
        description="Families usually decide faster when they can see the environment instead of only reading about it. These moments reflect the concentration, tournament exposure, and classroom rhythm that run through Nimzo Academy across Delhi."
        photos={coveragePhotos}
        ctaHref="/gallery"
        ctaLabel="See more classroom and tournament photos"
        backgroundClassName="bg-[var(--color-light-100)]"
      />

      <section className="bg-white py-16 md:py-18">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
              Start Here
            </p>
            <h2 className="mt-3 text-3xl font-bold text-[var(--color-heading-900)] md:text-4xl">
              Choose the learning format before choosing the exact page
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-body-700)] md:text-lg">
              Parents usually convert faster when the decision is simple: first
              choose the format that fits the child and routine, then compare the
              best location or coverage page.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {decisionCards.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-[var(--color-light-100)] p-7 shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--color-primary-600)] hover:shadow-md"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-600)]">
                  Best fit
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-[var(--color-heading-900)]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-body-700)]">
                  {item.text}
                </p>
                <p className="mt-5 text-sm font-medium text-[var(--color-primary-600)]">
                  {item.cta}
                </p>
              </Link>
            ))}
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
              Need the simplest next step?
            </h3>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-body-700)]">
              Start with our Delhi overview page if you want to compare centres,
              home coaching, and online support more carefully.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href={`/${cityOverviewLocation.slug}`}
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

      <section className="bg-[var(--color-back-500)] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.92fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
                Coverage Summary
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[var(--color-heading-900)] md:text-4xl">
                One academy, multiple ways to learn across Delhi and beyond
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-body-700)] md:text-lg">
                Nimzo Academy is not limited to one format. Families can start
                from a Delhi centre, choose a home-coaching area when it fits
                better, or learn online from anywhere in the world.
              </p>
            </div>

            <div className="rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-white p-8 shadow-sm">
              <h3 className="text-2xl font-semibold text-[var(--color-heading-900)]">
                Need help choosing the right route?
              </h3>
              <p className="mt-4 leading-relaxed text-[var(--color-body-700)]">
                We can help you decide based on the child&apos;s stage, your weekly
                routine, your location, and whether centre, home, or online
                learning will work best.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/book-free-chess-demo"
                  className="inline-flex items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent-500)] px-6 py-3 text-sm font-semibold text-[var(--color-heading-900)] transition hover:bg-[var(--color-accent-600)]"
                >
                  Book Free Demo
                </Link>
                <Link
                  href="/programs"
                  className="inline-flex items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-primary-600)] px-6 py-3 text-sm font-semibold text-[var(--color-primary-600)] transition hover:bg-[var(--color-primary-600)]/5"
                >
                  Compare Programs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
