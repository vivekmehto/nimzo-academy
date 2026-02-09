import Section from "@/components/ui/Section";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <Section className="bg-back-500" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-bold text-heading-900"
          >
            What Parents Say About Nimzo Academy
          </h2>
          <p className="mt-4 text-body-700">
            Real experiences from parents whose children are learning chess with
            us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div
          className="
            grid gap-6
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {testimonials.map((item, idx) => (
            <article
              key={idx}
              aria-label={`Parent testimonial from ${item.name}`}
              className="
                rounded-lg
                bg-white-100
                p-6 sm:p-7
                border border-border-300
              "
            >
              <div className="flex flex-col gap-4">
                {/* Quote */}
                <p className="text-body-700 leading-[1.6]">“{item.text}”</p>

                {/* Divider */}
                <div className="h-px w-10 bg-border-300" />

                {/* Parent Info */}
                <div>
                  <p className="font-medium text-heading-900">{item.name}</p>
                  <p className="text-sm text-muted-500">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
