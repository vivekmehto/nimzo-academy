"use client"

import Image from "next/image";
import Link from "next/link";
import { Globe2, House, MapPinned } from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";

export default function Hero() {

  const {openModal } = useDemoModal();
  const coverageItems = [
    {
      icon: MapPinned,
      title: "Delhi Centre Classes",
      text: "Structured in person learning for families who want classroom rhythm and coach led guidance.",
    },
    {
      icon: House,
      title: "Home Coaching",
      text: "Personalised chess coaching in select Delhi areas for families who prefer learning at home.",
    },
    {
      icon: Globe2,
      title: "Online Worldwide",
      text: "Live online coaching for families in India and abroad.",
    },
  ];
  return (
   <section
  className="
    relative
    bg-[radial-gradient(1100px_520px_at_top,rgba(47,91,234,0.32),transparent_58%),linear-gradient(to_bottom,rgba(238,242,255,1),rgba(248,250,252,1))]
    py-20 sm:py-24
  "
>
  {/* Glass overlay */}
  <div
    className="
      absolute inset-0
      bg-white/30
      backdrop-blur-[2px]
      pointer-events-none
    "
  />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 z-10 relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          {/* LEFT — CONTENT */}
          <div className="text-center lg:text-left">
            <h1
              className="
                text-4xl sm:text-5xl lg:text-6xl
                font-bold
                leading-tight
                tracking-tight
                text-heading-900
              "
            >
              Chess Classes in Delhi
       
              <span className="text-primary-600"> and Online Worldwide</span>
            </h1>

            <p
              className="
                mt-6
                text-lg sm:text-xl
                text-body-700
                font-medium
                max-w-xl mx-auto lg:mx-0
              "
            >
              Centre classes in Delhi, home coaching in select areas and live
              online coaching for children worldwide.
            </p>

            <p
              className="
                mt-4
                max-w-xl
                mx-auto lg:mx-0
                text-base
                leading-relaxed
                text-muted-500
              "
            >
              Nimzo Academy helps children build focus, confidence, and strong
              thinking habits through coach led training that matches the
              family&apos;s location, schedule and learning preference.
            </p>

            {/* CTA */}
            <div
              className="
                mt-10
                flex flex-col sm:flex-row
                gap-4
                justify-center lg:justify-start
              "
            >
              <button
          
                onClick={()=> openModal("demo")}
                className="
                  inline-flex items-center justify-center
                  rounded-(--radius-md)
                  bg-accent-500
                  px-7 py-3
                  text-base font-semibold
                  text-heading-900
                  hover:bg-accent-600
                  transition
                  cursor-pointer
                "
              >
                Book a Free Demo Class
              </button>

              <Link
                href="/programs"
                className="
                  inline-flex items-center justify-center
                  rounded-(--radius-md)
                  border border-primary-600
                  px-7 py-3
                  text-base font-semibold
                  text-primary-600
                  hover:bg-primary-600/5
                  transition
                  cursor-pointer
                "
              >
                Compare Programs
              </Link>
            </div>

            <p className="mt-5 text-sm text-muted-500">
              Centre classes in Delhi • Home coaching • Online worldwide
            </p>

            <p className="mt-3 text-sm text-body-700">
              Looking for our main academy?{" "}
              <Link
                href="/chess-classes-in-dwarka"
                className="font-semibold text-primary-600 transition hover:text-primary-700"
              >
                Explore chess classes in Dwarka
              </Link>
            </p>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {coverageItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-[calc(var(--radius-lg)+0.05rem)] border border-white/70 bg-white/80 px-4 py-4 text-left shadow-sm"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600/10 text-primary-600">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-3 text-sm font-semibold text-heading-900">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-body-700">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="relative">
            <div className="absolute right-0 top-6 hidden h-[85%] w-[88%] rounded-[2.5rem] bg-primary-600 lg:block" />

            <div className="relative lg:pr-8 lg:pt-8">
              <div className="overflow-hidden rounded-[2.2rem] border border-white/80 bg-white p-4 shadow-[0_28px_70px_rgba(15,23,42,0.12)] sm:p-5">
                <div className="overflow-hidden rounded-[1.8rem]">
                  <Image
                    src="/hero-chess.jpg"
                    alt="Children learning chess in a calm and structured environment at Nimzo Academy"
                    width={720}
                    height={760}
                    priority
                    className="h-[420px] w-full object-cover sm:h-[540px]"
                  />
                </div>
              </div>

              <div className="absolute -left-4 bottom-8 hidden rounded-[1.4rem] bg-white px-4 py-4 shadow-[0_18px_40px_rgba(15,23,42,0.10)] lg:block">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary-600">
                  Nimzo Academy
                </p>
                <p className="mt-2 text-sm font-medium leading-relaxed text-heading-900">
                  Calm classes.
                  <br />
                  Real progress.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
