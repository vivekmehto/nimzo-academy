import ReferralHero from "@/components/referral/ReferralHero";
import ReferralSnapshot from "@/components/referral/ReferralSnapshot";
import ReferralForm from "@/components/referral/ReferralForm";
import ReferralRewards from "@/components/referral/ReferralRewards";
import ReferralHow from "@/components/referral/ReferralHow";
import ReferralTestimonials from "@/components/referral/ReferralTestimonials";
import ReferralFAQ from "@/components/referral/ReferralFAQ";
import ReferralTerms from "@/components/referral/ReferralTerms";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Chess Referral Program at Nimzo Academy",
  description:
    "Refer a student to Nimzo Academy and earn coaching fee credits when the referral completes enrollment and 30 days of active training.",
  path: "/chess-referral-program",
});

export default function Page() {
  return (
    <>
      <ReferralHero />
      <ReferralSnapshot />
      <ReferralForm />
      <ReferralRewards />
      <ReferralHow />
      <ReferralTestimonials />
      <ReferralFAQ />
      <ReferralTerms />
    </>
  );
}
