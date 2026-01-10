import React from "react";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  child: string;
  rating: number;
  feedback: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Rohit",
    child: "Parent of Aarav (Age 9)",
    rating: 5,
    feedback:
      "We noticed a clear improvement in Aarav’s focus and confidence within a few weeks. The coaches are very patient and explain concepts in a way kids truly understand.",
  },
  {
    name: "Sneha",
    child: "Parent of Riya (Age 11)",
    rating: 5,
    feedback:
      "The structured approach and regular feedback really stood out for us. The demo class itself showed how professional and organized the academy is.",
  },
  {
    name: "Ankit",
    child: "Parent of Kunal (Age 13)",
    rating: 4,
    feedback:
      "My son enjoys every class and looks forward to learning. The focus on both fundamentals and practice games makes a big difference.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            What Parents Say About Our Chess Classes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Honest feedback from parents who have seen real improvement in
            their child’s learning and confidence.
          </p>
        </div>

        {/* Google Reviews Badge */}
        <div className="mb-10 flex items-center gap-3">
          <img
            src="/google-logo.svg"
            alt="Google Reviews"
            className="h-6"
          />
          <div className="flex items-center gap-1">
            <span className="text-lg font-semibold text-gray-900">4.8</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
          </div>
          <span className="text-sm text-gray-500">
            Rated by parents on Google
          </span>
        </div>

        {/* Testimonials Grid (Slider-ready later) */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              {/* Stars */}
              <div className="mb-4 flex items-center gap-1">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-700 leading-relaxed">
                “{item.feedback}”
              </p>

              {/* Parent Info */}
              <div className="mt-6 border-t pt-4">
                <p className="font-semibold text-gray-900">
                  {item.name}
                </p>
                <p className="text-sm text-gray-500">
                  {item.child}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#demo"
            className="inline-block rounded-full bg-amber-500 px-8 py-3 text-base font-semibold text-white shadow hover:bg-amber-600 transition"
          >
            Book a Free Demo Class
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
