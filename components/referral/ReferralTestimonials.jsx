import { MessageSquareQuote, ShieldCheck, Sparkles, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function ReferralTestimonials() {
  const featuredTestimonials = testimonials.slice(0, 3);
  const trustPoints = [
    "Structured chess learning path",
    "Regular updates for parents",
    "Serious coaching in a child-friendly environment",
  ];

  return (
    <section className="bg-[var(--color-back-500)] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
            Parent Trust
          </p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--color-heading-900)] md:text-4xl">
            Why parents feel comfortable recommending Nimzo Academy
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--color-body-700)] md:text-lg">
            Families usually refer us for one simple reason: they have already
            seen steady progress, thoughtful teaching, and clear communication.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {trustPoints.map((point, index) => {
            const icons = [ShieldCheck, Sparkles, Star];
            const Icon = icons[index];

            return (
              <div
                key={point}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border-300)] bg-white px-4 py-2.5 text-sm text-[var(--color-body-700)] shadow-sm"
              >
                <Icon className="h-4 w-4 text-[var(--color-primary-600)]" />
                <span>{point}</span>
              </div>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredTestimonials.map((item) => (
            <article
              key={item.name}
              className="relative flex h-full flex-col rounded-[calc(var(--radius-lg)+0.1rem)] border border-[var(--color-border-300)] bg-[var(--color-white-100)] p-8 md:p-9 shadow-sm"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="inline-flex items-center gap-3 rounded-full bg-[var(--color-back-500)] px-4 py-2 text-sm font-medium text-[var(--color-primary-600)]">
                  <MessageSquareQuote className="h-4 w-4" />
                  Parent testimonial
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-primary-600)] text-sm font-semibold text-white">
                  {item.name
                    .split(" ")
                    .map((word) => word[0])
                    .join("")
                    .slice(0, 2)}
                </div>
              </div>
              <p className="text-lg leading-relaxed text-[var(--color-body-700)]">
                “{item.text}”
              </p>
              <div className="mt-6 h-px w-12 bg-[var(--color-border-300)]" />
              <p className="mt-5 font-medium text-[var(--color-heading-900)]">
                {item.name}
              </p>
              <p className="text-sm text-[var(--color-muted-500)]">{item.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
