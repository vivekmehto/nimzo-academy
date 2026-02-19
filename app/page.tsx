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

export const metadata = {
  title: "Chess Classes in Dwarka & Online for Kids",
  description:
    "Professional chess coaching for children aged 5–16 in Dwarka. Structured beginner to advanced training available in online, offline and hybrid formats. Book a free demo class.",

  alternates: {
    canonical: "https://nimzoacademy.com/",
  },

  openGraph: {
    title: "Chess Classes in Dwarka & Online | Nimzo Academy",
    description:
      "Structured chess coaching for children aged 5–16 in Dwarka and online.",
    url: "https://nimzoacademy.com/",
  },
};



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
