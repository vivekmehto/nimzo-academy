import Hero from "@/components/home/Hero";
import TrustIndicators from "@/components/home/TrustIndicators";
import Programs from "@/components/home/Programs";
import WhyChessHelps from "@/components/home/WhyChessHelps";
import ChessLearningPath from "@/components/home/ChessLearningPath";
import WhyParentsTrust from "@/components/home/WhyParentsTrust";
import Testimonials from "@/components/home/Testimonials";
import CoachSection from "@/components/home/CoachSection";
import FAQ from "@/components/home/FAQ";
import TeachingProcess from "@/components/home/TeachingProcess";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <Programs />
      <WhyChessHelps />
      <ChessLearningPath />
      <WhyParentsTrust />
      <Testimonials />
      <CoachSection />
      <FAQ />
      <TeachingProcess />
      <FinalCTA />
    </>
  );
}
