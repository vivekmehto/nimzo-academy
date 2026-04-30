import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function ReferralHero() {
  return (
    <section className="bg-[linear-gradient(135deg,#f8faff_0%,#ffffff_50%,#f3f6ff_100%)] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="space-y-6">

            {/* Tag */}
            <p className="inline-block rounded-full border px-4 py-2 text-xs font-semibold tracking-wide text-blue-600 bg-white">
              FOR ACTIVE NIMZO ACADEMY FAMILIES
            </p>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
              Refer a student. Earn fee credits.
            </h1>

            {/* Subtext */}
            <p className="text-lg text-gray-600 max-w-xl">
              Invite a parent to Nimzo Academy. It takes less than a minute,
              and we’ll handle the conversation from there.
            </p>

            {/* Small badges */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="px-4 py-3 rounded-xl border bg-white text-sm font-medium shadow-sm">
                ✔ Valid referral
              </div>
              <div className="px-4 py-3 rounded-xl border bg-white text-sm font-medium shadow-sm">
                ⏱ 30 active days
              </div>
              <div className="px-4 py-3 rounded-xl border bg-white text-sm font-medium shadow-sm">
                🎁 Earn rewards
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button
                href="#referral-form"
                size="lg"
                className="gap-2 px-8"
              >
                Submit a Referral
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/gallery/training-3.jpg"
                alt="Kids learning chess at Nimzo Academy"
                width={700}
                height={500}
                className="w-full h-[420px] object-cover"
              />
            </div>

            {/* Reward Overlay (Clean, Minimal) */}
            <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-white/80 backdrop-blur-md p-4 shadow-lg">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                Reward Ladder
              </p>

              <div className="mt-2 text-sm text-gray-700 space-y-1">
                <div className="flex justify-between">
                  <span>1 referral</span>
                  <span className="font-semibold">₹500</span>
                </div>
                <div className="flex justify-between">
                  <span>2 referrals</span>
                  <span className="font-semibold">₹1200</span>
                </div>
                <div className="flex justify-between">
                  <span>4 referrals</span>
                  <span className="font-semibold">1 Month Free</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}