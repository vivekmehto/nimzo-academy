import Image from "next/image";
import Section from "@/components/ui/Section";
import { trustPillars } from "@/data/trustPillars";


export default function WhyParentsTrust() {
  return (
    <Section>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-heading-900">
            Why Parents Trust Nimzo Academy
          </h2>
          <p className="mt-4 text-body-700">
            A disciplined, structured, and child-focused approach to chess education.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-12 items-start md:grid-cols-2">
          {/* Image */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/parents-trust-chess-academy.jpg"
              alt="Chess coach guiding children in a focused learning environment"
              width={520}
              height={680}   // ⬅ Taller image (key change)
              className="w-full h-auto rounded-lg object-cover"
              priority
            />
          </div>

          {/* Trust Pillars */}
          <div className="grid gap-6 pt-1">
            {trustPillars.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex gap-4">
                  <div
                    className="
                      shrink-0
                      h-11 w-11
                      rounded-md
                      bg-primary-600/10
                      text-primary-600
                      flex items-center justify-center
                    "
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-heading-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-body-700 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
