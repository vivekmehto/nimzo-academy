import React from "react";
import { Star } from "lucide-react";

type Testimonial = {
  name: string;
  relation: string;
  rating: number;
  feedback: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Rohit",
    relation: "Parent of Aarav (Age 9)",
    rating: 5,
    feedback:
      "We noticed a clear improvement in Aarav’s focus and confidence within a few weeks. The coaching approach is structured, calm, and very effective.",
  },
  {
    name: "Sneha",
    relation: "Parent of Riya (Age 11)",
    rating: 5,
    feedback:
      "What stood out for us was the discipline and clarity in teaching. Regular feedback helped us understand our child’s progress clearly.",
  },
  {
    name: "Ankit",
    relation: "Parent of Kunal (Age 13)",
    rating: 4,
    feedback:
      "My son enjoys every class and has become more thoughtful during games. The coaches focus equally on fundamentals and practice.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-[#F8F9FB] py-24" id="testimonials">
      <div className="mx-auto max-w-7xl px-4">

        {/* Heading */}
        <div className="mb-20 max-w-3xl">
          <h2 className="text-3xl font-bold text-[#0B0B0B] md:text-4xl">
            What Parents Say About Us
          </h2>
          <p className="mt-4 text-lg text-[#6B7280]">
            Honest feedback from parents who have seen real improvement in their
            child’s learning and confidence.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="
                rounded-3xl bg-white p-8
                shadow-[0_12px_50px_rgba(0,0,0,0.06)]
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-[0_20px_70px_rgba(0,0,0,0.08)]
              "
            >
              {/* Rating */}
              <div className="mb-4 flex items-center gap-1">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-[#F4B400] text-[#F4B400]"
                  />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-sm leading-relaxed text-[#4B5563]">
                “{item.feedback}”
              </p>

              {/* Parent Info */}
              <div className="mt-6 border-t border-gray-100 pt-4">
                <p className="font-semibold text-[#0B0B0B]">
                  {item.name}
                </p>
                <p className="text-sm text-[#6B7280]">
                  {item.relation}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Line */}
        <div className="mt-16 text-center">
          <p className="text-sm text-[#6B7280]">
            ⭐ Rated 4.8/5 by parents across our chess programs
          </p>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
