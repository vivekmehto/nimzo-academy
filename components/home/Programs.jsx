import Section from "@/components/ui/Section";
import ProgramCard from "@/components/ui/ProgramCard";
import {programs} from "@/data/programs";

export default function Programs() {
  return (
    <Section id="programs" className="bg-back-500">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-semibold text-heading-900 sm:text-4xl">
          Chess Learning Programs
        </h2>
        <p className="mt-4 text-base text-body-700">
          Structured chess programs designed to support every child’s learning
          style, pace, and confidence — guided by experienced coaches.
        </p>
      </div>

      {/* Programs Grid */}
    
<div
  className="
    mt-12 grid gap-6 md:gap-8
    grid-cols-1
    sm:grid-cols-2
    md:grid-cols-3
  "
>
  {programs.map((program) => (
    <ProgramCard
      key={program.id}
      featured={program.featured}
      icon={program.icon}
      title={program.title}
      description={program.description}
      idealFor={program.idealFor}
      outcome={program.outcome}
      includes={program.includes}
    />
  ))}
</div>


      {/* CTA */}
      <div className="mt-14 text-center">
        <p className="text-sm text-muted-500">
          Not sure which program suits your child?
        </p>
        <p className="mt-1 text-sm">
          <span className="font-medium text-primary-600">
            Book a free demo
          </span>{" "}
          and get personal guidance from our coach.
        </p>
      </div>
    </Section>
  );
}
