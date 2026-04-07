import Link from "next/link";
import { locationPages } from "@/data/locations";
import { seoConfig } from "@/lib/seo";

export default function LocationPage({ location }) {
  const relatedLocations = locationPages.filter(
    (item) => item.slug !== location.slug,
  );

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

  return (
    <main className="bg-light-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-back-500 py-18 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-600">
              {location.type}
            </p>
            <h1 className="mt-3 text-4xl font-bold text-heading-900 md:text-5xl">
              {location.h1}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-body-700 md:text-lg">
              {location.intro}
            </p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-body-700">
              {location.focus}
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/book-free-chess-demo"
                className="inline-flex items-center justify-center rounded-(--radius-md) bg-accent-500 px-7 py-3 text-sm font-semibold text-heading-900 transition hover:bg-accent-600"
              >
                Book a Free Demo Class
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-(--radius-md) border border-primary-600 px-7 py-3 text-sm font-semibold text-primary-600 transition hover:bg-primary-600/5"
              >
                Contact Nimzo Academy
              </Link>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-(--radius-lg) border border-border-300 bg-white-100 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-heading-900">
                {location.snapshotTitle}
              </h2>

              <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {location.snapshot.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-(--radius-md) border border-border-300 bg-light-100 p-4"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-600">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-medium leading-relaxed text-heading-900">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-(--radius-lg) border border-border-300 bg-white-100 p-6 shadow-sm">
              <h2 className="text-2xl font-semibold text-heading-900">
                {location.whyTitle}
              </h2>
              <ul className="mt-5 space-y-4 text-body-700">
                {location.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-6 text-sm leading-relaxed text-muted-500">
                {location.availability}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-100 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-heading-900">
                {location.practicalTitle}
              </h2>
              <p className="mt-4 text-body-700 leading-relaxed">
                {location.practicalIntro}
              </p>

              <div className="mt-6 space-y-4">
                {location.practicalPoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-(--radius-md) border border-border-300 bg-light-100 p-4"
                  >
                    <p className="text-body-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-semibold text-heading-900">
                {location.programsTitle}
              </h2>
              <p className="mt-4 text-body-700 leading-relaxed">
                {location.programsIntro}
              </p>

              <div className="mt-6 space-y-4">
                {location.programs.map((item) => (
                  <div
                    key={item}
                    className="rounded-(--radius-md) border border-border-300 bg-light-100 p-4"
                  >
                    <p className="text-body-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-heading-900">
                {location.fitTitle}
              </h2>
              <p className="mt-4 text-body-700 leading-relaxed">
                {location.fitIntro}
              </p>

              <div className="mt-6 space-y-4">
                {location.fitPoints.map((item) => (
                  <div
                    key={item}
                    className="rounded-(--radius-md) border border-border-300 bg-light-100 p-4"
                  >
                    <p className="text-body-700">{item}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-heading-900">
                  Explore related locations and formats
                </h3>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {relatedLocations.map((item) => (
                    <Link
                      key={item.slug}
                      href={`/${item.slug}`}
                      className="rounded-(--radius-md) border border-border-300 bg-white px-4 py-4 text-sm font-medium text-primary-600 transition hover:border-primary-600"
                    >
                      {item.h1}
                    </Link>
                  ))}

                  <Link
                    href="/programs"
                    className="rounded-(--radius-md) border border-border-300 bg-white px-4 py-4 text-sm font-medium text-primary-600 transition hover:border-primary-600"
                  >
                    Explore all chess programs
                  </Link>
                  <Link
                    href="/school-chess-program"
                    className="rounded-(--radius-md) border border-border-300 bg-white px-4 py-4 text-sm font-medium text-primary-600 transition hover:border-primary-600"
                  >
                    School chess program in Delhi
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-back-500 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="text-3xl font-semibold text-heading-900">
            Frequently asked questions about {location.h1.toLowerCase()}
          </h2>

          <div className="mt-8 space-y-5">
            {location.faqs.map((item) => (
              <div
                key={item.question}
                className="rounded-(--radius-md) border border-border-300 bg-white-100 p-5"
              >
                <h3 className="text-lg font-semibold text-heading-900">
                  {item.question}
                </h3>
                <p className="mt-3 text-body-700 leading-relaxed">
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
