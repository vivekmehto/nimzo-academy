import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const testimonials = [
  {
    parent: "Poovandhree Naidoo",
    country: "South Africa",
    image: "/parents/parent1.jpg",
    review:
      "Nimzo Chess Academy offers fantastic online classes with brilliant coaches. My 9-year-old son enjoys learning and has improved his game a lot. I highly recommend Nimzo Chess Academy.",
  },
  {
    parent: "Sonal Tewari",
    country: "India",
    image: "/parents/parent2.jpg",
    review:
      "I enrolled my son for the first time during summer camp. After that, he developed a keen interest in chess. The classes are very interactive and we have seen good progress.",
  },
  {
    parent: "Meera Kapoor",
    country: "India",
    image: "/parents/parent3.jpg",
    review:
      "The coaches are very patient and supportive. My daughter has gained confidence and enjoys every session.",
  },
  {
    parent: "Rahul Singh",
    country: "India",
    image: "/parents/parent4.jpg",
    review:
      "Very structured learning approach. My child’s focus and discipline have improved significantly.",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#2563EB]">
          Our Student’s Happy Parents
        </h2>
        <div className="mx-auto mt-3 h-1 w-20 bg-[#2563EB]" />

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          loop
          centeredSlides
          spaceBetween={40}
          slidesPerView={1.2}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 2.2,
            },
          }}
          className="mt-20"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="relative rounded-3xl border-2 border-dashed border-[#F59E0B] bg-white px-10 pb-10 pt-20 text-left shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500">
                {/* Floating image */}
                <div className="absolute -top-10 left-10">
                  <div className="relative">
                    <div className="absolute -inset-2 rotate-6 bg-[#2563EB]" />
                    <img
                      src={item.image}
                      alt={item.parent}
                      className="relative h-20 w-20 rounded-full object-cover bg-white"
                    />
                  </div>
                </div>

                {/* Quote */}
                <p className="text-[#111827] leading-relaxed">
                  “{item.review}”
                </p>

                {/* Parent */}
                <p className="mt-6 font-semibold text-[#111827]">
                  — {item.parent}
                </p>

                <p className="text-sm text-[#4B5563]">{item.country}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
