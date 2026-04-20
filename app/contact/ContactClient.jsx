"use client";

import Link from "next/link";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPinned,
  MessageSquare,
  Phone,
  School,
} from "lucide-react";
import Button from "@/components/ui/Button";
import ContactForm from "../../components/contact/ContactForm";

const quickPoints = [
  "Parents usually hear back within 24 hours",
  "Support for Delhi centres, home coaching, and online classes",
  "School partnerships and structured program discussions available",
];

const contactCards = [
  {
    icon: Phone,
    title: "Call or WhatsApp",
    value: "+91 96672 75083",
    href: "tel:+919667275083",
  },
  {
    icon: Mail,
    title: "Email",
    value: "nimzoacademy@gmail.com",
    href: "mailto:nimzoacademy@gmail.com",
  },
  {
    icon: Clock3,
    title: "Office hours",
    value: "Mon to Sat, 10:00 AM to 7:00 PM",
  },
];

const supportAreas = [
  "Chess classes in Delhi through our centre network",
  "Home coaching in select areas including Janakpuri, Kirti Nagar, and Delhi Cantt",
  "Online classes for students learning from India and abroad",
  "School chess program enquiries for institutions in Delhi",
];

const locationLinks = [
  { href: "/chess-classes-in-dwarka", label: "Dwarka centre" },
  { href: "/chess-classes-in-rohini", label: "Rohini classes" },
  { href: "/chess-classes-in-janakpuri", label: "Janakpuri home coaching" },
  { href: "/chess-classes-in-kirti-nagar", label: "Kirti Nagar home coaching" },
  { href: "/home-chess-coaching-in-delhi-cantt", label: "Delhi Cantt home coaching" },
  { href: "/chess-coaching-in-delhi", label: "Delhi coverage overview" },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-[linear-gradient(135deg,var(--color-primary-700)_0%,var(--color-primary-600)_55%,#4f78ff_100%)] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="text-white">
              <span className="inline-flex items-center rounded-full bg-white/12 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/88">
                Contact and Guidance
              </span>
              <h1 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                Talk to Nimzo Academy about the right chess format for your child
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/88 md:text-lg">
                Reach out for centre classes in Delhi, home coaching in select
                areas, school chess partnerships, or live online coaching for
                students learning from anywhere.
              </p>

              <div className="mt-8 space-y-3">
                {quickPoints.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-white/88 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-500)]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {contactCards.map((card) => {
                const Icon = card.icon;

                return (
                  <div
                    key={card.title}
                    className="rounded-[calc(var(--radius-lg)+0.05rem)] border border-white/16 bg-white/10 p-5 text-white backdrop-blur-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/14">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/65">
                      {card.title}
                    </p>
                    {card.href ? (
                      <a
                        href={card.href}
                        className="mt-2 block text-sm font-medium leading-relaxed text-white transition hover:text-[var(--color-accent-500)]"
                      >
                        {card.value}
                      </a>
                    ) : (
                      <p className="mt-2 text-sm font-medium leading-relaxed text-white">
                        {card.value}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-light-100)] px-4 py-14 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-white p-6 shadow-[0_24px_50px_rgba(17,26,77,0.08)] md:p-8">
              <div className="border-b border-[var(--color-border-300)] pb-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary-600)]">
                  Send a Message
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-[var(--color-heading-900)]">
                  Tell us what kind of support you need
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-body-700)]">
                  Share the student details and we will guide you towards the right
                  stage, format, and next step.
                </p>
              </div>

              <ContactForm />
            </div>

            <div className="space-y-6">
              <div className="rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-primary-600)]/10 text-[var(--color-primary-600)]">
                    <MapPinned className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary-600)]">
                      Main Centre
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-[var(--color-heading-900)]">
                      Dwarka, New Delhi
                    </h3>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-[var(--color-body-700)]">
                  262, Block-A, Sector 8, Dwarka, New Delhi - 110077
                </p>
                <a
                  href="https://maps.app.goo.gl/QQ5At2Kcg7Uky1M56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-600)] transition hover:text-[var(--color-primary-700)]"
                >
                  Open in Google Maps
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-[var(--color-back-500)] p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-primary-600)]/10 text-[var(--color-primary-600)]">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary-600)]">
                      What We Help With
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-[var(--color-heading-900)]">
                      Questions parents ask before joining
                    </h3>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  {supportAreas.map((item) => (
                    <div key={item} className="flex gap-3 text-sm leading-relaxed text-[var(--color-body-700)]">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent-600)]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--color-primary-600)]/10 text-[var(--color-primary-600)]">
                    <School className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-primary-600)]">
                      Explore Coverage
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-[var(--color-heading-900)]">
                      Compare formats and Delhi locations
                    </h3>
                  </div>
                </div>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {locationLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-[var(--radius-md)] border border-[var(--color-border-300)] bg-[var(--color-light-100)] px-4 py-4 text-sm font-medium text-[var(--color-heading-900)] transition hover:border-[var(--color-primary-600)] hover:text-[var(--color-primary-600)]"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div className="overflow-hidden rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] shadow-sm">
            <iframe
              title="Nimzo Academy Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.86707554049!2d77.07187627520065!3d28.57375398674804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1bdead0658c3%3A0x7a2678bb398026ae!2sNimzo%20Academy!5e0!3m2!1sen!2sin!4v1771493825714!5m2!1sen!2sin"
              className="h-[360px] w-full md:h-[480px]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="rounded-[calc(var(--radius-lg)+0.05rem)] border border-[var(--color-border-300)] bg-[var(--color-heading-900)] p-8 text-white shadow-[0_20px_50px_rgba(17,26,77,0.12)]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
              Visit by Appointment
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight">
              Prefer to speak first before visiting?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/82">
              That is usually the best way to start. We can first understand the
              child&apos;s age, current level, and preferred format, then guide you
              towards the right next step.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/book-free-chess-demo" size="md">
                Book Free Demo
              </Button>
              <Button href="/programs" variant="secondary" size="md" className="border-white bg-transparent hover:text-white hover:bg-white/10">
                Compare Programs
              </Button>
            </div>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=28.57375398674804,77.07187627520065"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent-500)] transition hover:text-[var(--color-accent-600)]"
            >
              Get directions to Dwarka
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
