import Hero from "@/components/home/Hero";
import DwarkaSpotlight from "@/components/home/DwarkaSpotlight";
import Programs from "@/components/home/Programs";
import TrustIndicators from "@/components/home/TrustIndicators";
import ChessLearningPath from "@/components/home/ChessLearningPath";
import WhyParentsTrust from "@/components/home/WhyParentsTrust";
import Testimonials from "@/components/home/Testimonials";
import CoachSection from "@/components/home/CoachSection";
import FAQ from "@/components/home/FAQ";
import TeachingProcess from "@/components/home/TeachingProcess";
import FinalCTA from "@/components/home/FinalCTA";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Chess Classes in Delhi and Online Worldwide",
  description:
    "Nimzo Academy offers chess classes across Delhi, home coaching in select areas, school tie-ups, and live online learning for children worldwide.",
  path: "/",
});



export default function Home() {
  return (
    <>
      <Hero />
      <Programs />
      <TrustIndicators />
      <Testimonials />
      <TeachingProcess />
      <WhyParentsTrust />
      <ChessLearningPath />
      {/* <CoachSection /> */}
      <DwarkaSpotlight />
      <FAQ />
      <FinalCTA />
    </>
  );
}
