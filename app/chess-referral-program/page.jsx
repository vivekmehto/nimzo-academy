import ReferralHero from "@/components/referral/ReferralHero";
import ReferralWhy from "@/components/referral/ReferralWhy";
import ReferralHow from "@/components/referral/ReferralHow";
import ReferralRewards from "@/components/referral/ReferralRewards";
import ReferralTerms from "@/components/referral/ReferralTerms";
import ReferralCTA from "@/components/referral/ReferralCTA";
import ReferralForm from "@/components/referral/ReferralForm";

export const metadata = {
  title: "Chess Referral Program in Dwarka | Nimzo Academy",
  description:
    "Join Nimzo Academy’s Chess Referral Program in Dwarka, Delhi. Earn scholarship credits and help grow a structured chess community.",
};

export default function Page() {
  return (
    <>
      <ReferralHero />
      <ReferralWhy />
      <ReferralHow />
      <ReferralRewards />
      <ReferralTerms />
      <ReferralCTA />
      <ReferralForm />
    </>
  );
}
