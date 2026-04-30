import ReferralHero from "@/components/referral/ReferralHero";
import ReferralSnapshot from "@/components/referral/ReferralSnapshot";
import ReferralForm from "@/components/referral/ReferralForm";
import ReferralRewards from "@/components/referral/ReferralRewards";
import ReferralHow from "@/components/referral/ReferralHow";
import ReferralTestimonials from "@/components/referral/ReferralTestimonials";
import ReferralFAQ from "@/components/referral/ReferralFAQ";
import ReferralTerms from "@/components/referral/ReferralTerms";
import ReferralCTA from "@/components/referral/ReferralCTA";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Chess Referral Program at Nimzo Academy",
  description:
    "Current Nimzo Academy families can refer a new student and earn coaching fee credits after enrollment, first-month payment, and 30 active days.",
  path: "/chess-referral-program",
});

export default function Page() {
  return (
    <>
      <ReferralHero />
      <ReferralSnapshot />
      <ReferralHow />
      <ReferralRewards />
      <ReferralTestimonials />
      <ReferralForm />
      <ReferralFAQ />
      <ReferralTerms />
      <ReferralCTA />
    </>
  );
}
