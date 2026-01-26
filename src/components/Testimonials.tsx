import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { motion } from "framer-motion";

import "swiper/swiper-bundle.css";

const testimonials = [
  {
    parent: "Sonal Tewari",
    country: "India",
    image: "/parents/parent1.jpg",
    review:
      "We enrolled our son during the summer camp and the experience exceeded our expectations. The classes are interactive, well-planned, and fun. He now looks forward to every chess session.",
  },
  {
    parent: "Meera Kapoor",
    country: "India",
    image: "/parents/parent2.jpg",
    review:
      "The coaches are extremely patient and encouraging. My daughter was initially shy, but she now confidently participates and enjoys every class. We’ve seen great improvement in her focus.",
  },
  {
    parent: "Rahul Singh",
    country: "India",
    image: "/parents/parent3.jpg",
    review:
      "Very structured learning approach with regular feedback and analysis. My child’s confidence, discipline, and strategic thinking have improved significantly.",
  },
  {
    parent: "Anita Fernandez",
    country: "United Arab Emirates",
    image: "/parents/parent1.jpg",
    review:
      "Being based overseas, we were looking for quality online chess coaching and this academy delivered exactly that. The sessions are engaging and very well organized.",
  },
  {
    parent: "David Miller",
    country: "United States",
    image: "/parents/parent2.jpg",
    review:
      "Clear teaching methods and excellent mentors. My child enjoys learning chess here and has developed better concentration and analytical thinking.",
  },
  {
    parent: "Mark Johnson",
    country: "United Kingdom",
    image: "/parents/parent3.jpg",
    review:
      "The curriculum is well structured and suitable for children. The coaches explain concepts clearly and ensure every child understands before moving ahead.",
  },
];

const Testimonials: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-6 flex justify-center"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-black">
              Our Student's Happy Parents
            </h2>
          </motion.div>
        </div>

        {/* Slider Area */}
        <div className="relative mt-16 flex items-center gap-6">
          {/* LEFT ARROW */}
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
            aria-label="Previous testimonial"
          >
            ❮
          </button>

          {/* SWIPER */}
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{ clickable: true }}
            loop
            spaceBetween={32}
            breakpoints={{
              0: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
            }}
            className="flex-1 m-4"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="h-full rounded-4xl bg-white p-10 text-center shadow-lg border border-gray-200 flex">
                  <div className="flex h-full flex-col ">
                    <div className="flex justify-center">
                      <img
                        src={item.image}
                        alt={item.parent}
                        className="h-16 w-16 rounded-full object-cover shadow"
                      />
                    </div>

                    <div className="mt-4 min-h-35 flex items-center justify-center">
                      <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                        <span className="text-orange-400 text-xl font-bold">
                          “
                        </span>
                        {item.review}
                        <span className="text-orange-400 text-xl font-bold">
                          ”
                        </span>
                      </p>
                    </div>

                    <div className="mt-6">
                      <p className="font-semibold">— {item.parent}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* RIGHT ARROW */}
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="hidden md:flex h-12 w-12 items-center justify-center rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
            aria-label="Next testimonial"
          >
            ❯
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
