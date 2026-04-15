import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Globe2,
  House,
  MapPinned,
  PhoneCall,
  School,
} from "lucide-react";
import Button from "@/components/ui/Button";
import {
  centreLocations,
  cityOverviewLocation,
  homeLocations,
  locationPages,
} from "@/data/locations";
import { seoConfig } from "@/lib/seo";

const typeConfig = {
  Headquarters: {
    eyebrow: "Nimzo Academy Headquarters",
    icon: MapPinned,
    quickLabel: "Centre format",
    quickText:
      "Best for families who want regular academy rhythm, in-person structure, and a long-term coaching path.",
  },
  "Offline Branch": {
    eyebrow: "Delhi Offline Branch",
    icon: School,
    quickLabel: "Branch format",
    quickText:
      "Best for children who improve better with regular class rhythm, coach-led discipline, and in-person learning.",
  },
  "Home Coaching Service Area": {
    eyebrow: "Home Coaching Service Area",
    icon: House,
    quickLabel: "Home coaching format",
    quickText:
      "Best for families who want more convenience, personal attention, and a calmer weekly learning setup.",
  },
  "City Overview": {
    eyebrow: "Delhi Coverage Guide",
    icon: Compass,
    quickLabel: "Coverage overview",
    quickText:
      "Best for parents comparing centre classes, home coaching, and online support before choosing the right route.",
  },
};

export default function LocationPage({ location }) {
  const config = typeConfig[location.type];
  const TypeIcon = config.icon;
  const relatedLocations = locationPages.filter((item) => item.slug !== location.slug);
  const siblingLocations = relatedLocations.filter(
    (item) => item.type === location.type,
  );
  const alternativeLocations =
    location.type === "Home Coaching Service Area"
      ? centreLocations
      : homeLocations;
  const featuredLinks =
    location.type === "City Overview"
      ? [...centreLocations, ...homeLocations]
      : siblingLocations.length
        ? siblingLocations
        : alternativeLocations;
  const compareLinks = [
    ...(location.type !== "City Overview" && cityOverviewLocation
      ? [cityOverviewLocation]
      : []),
    ...featuredLinks,
  ]
    .filter((item, index, array) => {
      return (
        item.slug !== location.slug &&
        array.findIndex((entry) => entry.slug === item.slug) === index
      );
    })
    .slice(0, 6);
  const decisionCards = [
    {
      title: "Who it suits",
      text: location.fitPoints[0],
    },
    {
      title: config.quickLabel,
      text: config.quickText,
    },
    {
      title: "What parents value",
      text: location.highlights[0],
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${location.h1} | ${seoConfig.siteName}`,
    serviceType: location.schemaServiceType,
    provider: {
      "@type": "EducationalOrganization",
      name: seoConfig.siteName,
      url: seoConfig.siteUrl,
    },
    areaServed: {
      "@type": "Place",
      name: location.area,
    },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceLocation: {
        "@type": "Place",
        name: location.area,
      },
    },
    description: location.description,
    url: `${seoConfig.siteUrl}/${location.slug}`,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: location.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
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
        item: seoConfig.siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: `${seoConfig.siteUrl}/locations`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: location.area,
        item: `${seoConfig.siteUrl}/${location.slug}`,
      },
    ],
  };

  return (
    <main className="bg-[var(--color-light-100)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="bg-[linear-gradient(135deg,var(--color-back-500)_0%,white_62%,var(--color-light-100)_100%)] py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <div>
            <nav className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-muted-500)]">
              <Link href="/" className="transition hover:text-[var(--color-primary-600)]">
                Home
              </Link>
              <span>/</span>
              <Link
                href="/locations"
                className="transition hover:text-[var(--color-primary-600)]"
              >
                Locations
              </Link>
              <span>/</span>
              <span className="text-[var(--color-heading-900)]">{location.area}</span>
            </nav>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-primary-600)]/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
              <TypeIcon className="h-3.5 w-3.5" />
              {config.eyebrow}
            </div>

            <h1 className="mt-5 text-4xl font-bold leading-tight text-[var(--color-heading-900)] md:text-5xl">
              {location.h1}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-[var(--color-body-700)] md:text-lg">
              {location.intro}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--color-body-700)]">
              {location.focus}
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-xs font-medium text-[var(--color-muted-500)] sm:text-sm">
              {location.snapshot.map((item) => (
                <span
                  key={item.label}
                  className="rounded-full border border-[var(--color-border-300)] bg-white px-4 py-2"
                >
                  {item.value}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/book-free-chess-demo" size="lg">
                Book a Free Demo Class
              </Button>
              <Button href="/programs" variant="secondary" size="lg">
                Compare Programs
              </Button>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-white p-6 shadow-[0_24px_50px_rgba(17,26,77,0.08)]">
              <h2 className="text-2xl font-semibold text-[var(--color-heading-900)]">
                {location.snapshotTitle}
              </h2>
              <div className="mt-5 grid gap-4">
                {location.snapshot.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[var(--radius-md)] border border-[var(--color-border-300)] bg-[var(--color-light-100)] p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-600)]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-[var(--color-heading-900)]">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-[var(--color-heading-900)] p-6 text-white shadow-[0_20px_50px_rgba(17,26,77,0.12)]">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[var(--color-accent-500)]">
                  <PhoneCall className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                    Parent guidance
                  </p>
                  <h2 className="mt-1 text-xl font-semibold">
                    Clear advice before enrollment
                  </h2>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/82">
                {location.availability}
              </p>
              <div className="mt-5 space-y-3">
                {location.fitPoints.slice(0, 2).map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-relaxed text-white/88">
                    <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[var(--color-accent-500)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent-500)] transition hover:text-[var(--color-accent-600)]"
              >
                Speak with Nimzo Academy
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-18">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 md:grid-cols-3">
            {decisionCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-[var(--color-light-100)] p-6 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary-600)]">
                  Quick view
                </p>
                <h2 className="mt-3 text-xl font-semibold text-[var(--color-heading-900)]">
                  {card.title}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-body-700)]">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-light-100)] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.92fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
                Why Parents Enquire
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[var(--color-heading-900)]">
                {location.whyTitle}
              </h2>
              <ul className="mt-6 space-y-4 text-[var(--color-body-700)]">
                {location.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-[var(--radius-md)] border border-[var(--color-border-300)] bg-white p-4 shadow-sm"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-600)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
                Practical Fit
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[var(--color-heading-900)]">
                {location.practicalTitle}
              </h2>
              <p className="mt-4 leading-relaxed text-[var(--color-body-700)]">
                {location.practicalIntro}
              </p>

              <div className="mt-6 space-y-4">
                {location.practicalPoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-[var(--radius-md)] border border-[var(--color-border-300)] bg-white p-4 shadow-sm"
                  >
                    <p className="text-[var(--color-body-700)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
                Program Fit
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[var(--color-heading-900)]">
                {location.programsTitle}
              </h2>
              <p className="mt-4 leading-relaxed text-[var(--color-body-700)]">
                {location.programsIntro}
              </p>

              <div className="mt-6 space-y-4">
                {location.programs.map((item) => (
                  <div
                    key={item}
                    className="rounded-[var(--radius-md)] border border-[var(--color-border-300)] bg-[var(--color-light-100)] p-4"
                  >
                    <p className="text-[var(--color-body-700)]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
                Parent Decision Support
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[var(--color-heading-900)]">
                {location.fitTitle}
              </h2>
              <p className="mt-4 leading-relaxed text-[var(--color-body-700)]">
                {location.fitIntro}
              </p>

              <div className="mt-6 space-y-4">
                {location.fitPoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-[var(--radius-md)] border border-[var(--color-border-300)] bg-[var(--color-light-100)] p-4"
                  >
                    <p className="text-[var(--color-body-700)]">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-[var(--color-back-500)] p-6">
                <h3 className="text-lg font-semibold text-[var(--color-heading-900)]">
                  Not sure if this is the best route yet?
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--color-body-700)]">
                  If you are still comparing centre classes, home coaching, and
                  online support, use the broader pages below before booking.
                </p>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <Button href="/locations" size="md">
                    Explore All Locations
                  </Button>
                  <Button href="/programs" variant="secondary" size="md">
                    Compare Learning Stages
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-back-500)] py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
                Related Pages
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[var(--color-heading-900)]">
                Explore related locations and formats
              </h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-[var(--color-body-700)]">
                These pages help parents compare Delhi centres, home coaching
                areas, and broader format options before booking.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {compareLinks.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    className="group rounded-[var(--radius-md)] border border-[var(--color-border-300)] bg-white px-4 py-4 text-sm font-medium text-[var(--color-heading-900)] transition hover:-translate-y-0.5 hover:border-[var(--color-primary-600)]"
                  >
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-600)]">
                      {item.area}
                    </span>
                    <span className="mt-2 block">{item.h1}</span>
                  </Link>
                ))}
                <Link
                  href="/school-chess-program"
                  className="group rounded-[var(--radius-md)] border border-[var(--color-border-300)] bg-white px-4 py-4 text-sm font-medium text-[var(--color-heading-900)] transition hover:-translate-y-0.5 hover:border-[var(--color-primary-600)]"
                >
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-primary-600)]">
                    Delhi Schools
                  </span>
                  <span className="mt-2 block">School chess program in Delhi</span>
                </Link>
              </div>
            </div>

            <div className="rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-white p-7 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
                Next Step
              </p>
              <h2 className="mt-3 text-3xl font-bold text-[var(--color-heading-900)]">
                Book a class discussion with confidence
              </h2>
              <p className="mt-4 leading-relaxed text-[var(--color-body-700)]">
                We help parents choose the right stage and the right format before
                enrollment, so the child starts in a setup that actually fits.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Get guidance based on the child's level and weekly routine",
                  "Discuss centre classes, home coaching, or online learning",
                  "Start with a free demo or assessment before committing",
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-sm leading-relaxed text-[var(--color-body-700)]">
                    <Globe2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-[var(--color-primary-600)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/book-free-chess-demo" size="md">
                  Book Free Demo
                </Button>
                <Button href="/contact" variant="secondary" size="md">
                  Contact Nimzo Academy
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-semibold text-[var(--color-heading-900)]">
            Frequently asked questions about {location.h1.toLowerCase()}
          </h2>

          <div className="mt-8 space-y-5">
            {location.faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-[var(--radius-md)] border border-[var(--color-border-300)] bg-[var(--color-light-100)] p-5"
              >
                <h3 className="text-lg font-semibold text-[var(--color-heading-900)]">
                  {item.question}
                </h3>
                <p className="mt-3 leading-relaxed text-[var(--color-body-700)]">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
