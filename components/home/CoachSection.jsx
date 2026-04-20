import Image from "next/image";
import Section from "@/components/ui/Section";

export default function CoachSection() {
  return (
    <Section>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-heading-900">
            Meet Your Child’s Chess Coach
          </h2>
          <p className="mt-4 text-body-700">
            I personally work with every student and stay involved in their learning journey.
          </p>
        </div>

        {/* Content */}
        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Coach Image */}
          <div className="flex justify-center md:justify-start">
            <Image
              src="/nimzo-academy-coach.png"
              alt="Vivek Mehto, founder and chess coach at Nimzo Academy teaching children"
              width={520}
              height={640}
              className="rounded-lg object-cover border border-border-300"
              priority
            />
          </div>

          {/* Coach Content */}
          <div className="max-w-xl">
            <h3 className="text-2xl font-semibold text-heading-900">
              Founder & Chess Coach
            </h3>
            <p className="mt-1 text-sm text-muted-500">Vivek Mehto</p>

            <p className="mt-5 text-body-700 leading-relaxed">
              Hi, I’m Vivek.
            </p>

            <p className="mt-4 text-body-700 leading-relaxed">
              I’ve been teaching chess to kids for a few years now and what I’ve seen is that every child learns differently. Some pick things up quickly, some take time, but with the right guidance, all of them improve.
            </p>

            <p className="mt-4 text-body-700 leading-relaxed">
              In my classes, I focus on making sure the child understands what they are doing. Not just moves, but why those moves make sense. This helps them stay confident and not get confused during games.
            </p>

            <p className="mt-4 text-body-700 leading-relaxed">
              I am personally involved in the training, whether it’s offline classes, online sessions or guiding the team. We follow a clear structure, but I also make sure every student gets attention based on their level.
            </p>

            <p className="mt-4 text-body-700 leading-relaxed">
              You will also get regular updates, so you can clearly see how your child is progressing.
            </p>

            {/* Key Points */}
            <ul className="mt-7 space-y-3 text-body-700">
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-600 shrink-0" />
                <span>Focus on understanding, not just winning</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-600 shrink-0" />
                <span>Patient and simple teaching style for kids</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-600 shrink-0" />
                <span>Clear step by step learning</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-600 shrink-0" />
                <span>Regular updates for parents</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}