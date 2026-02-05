import Hero from "@/components/home/Hero";
import TrustIndicators from "@/components/home/TrustIndicators";
import Programs from "@/components/home/Programs";
import WhyChessHelps from "@/components/home/WhyChessHelps";
import ChessLearningPath from "@/components/home/ChessLearningPath";
import WhyParentsTrust from "@/components/home/WhyParentsTrust";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <Programs />
      <WhyChessHelps />
      <ChessLearningPath />
      <WhyParentsTrust />
    </>
  );
}
