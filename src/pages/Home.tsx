import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Hero from "../components/Hero";
import HowClassesWork from "../components/HowClassesWork";
import Programs from "../components/Programs";
import Testimonials from "../components/Testimonials";
import TrustIndicators from "../components/TrustIndicators";
import WhatWeOffer from "../components/WhatWeOffer";
import WhyChessHelps from "../components/WhyChessHelps";
import WhyChooseUs from "../components/WhyChooseUs";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <WhatWeOffer />
      <WhyChessHelps />
      <Programs />
      <WhyChooseUs />
      <Testimonials />
      <HowClassesWork />
      <FAQ />
      <FinalCTA />
    </>
  );
};

export default Home;
