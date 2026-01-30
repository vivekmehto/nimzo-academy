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


type HomeProps = {
  onDemoClick: () => void;
};

const Home: React.FC<HomeProps> = ({ onDemoClick }) => {
  return (
    <>
      <Hero onDemoClick={onDemoClick} />
      <TrustIndicators />
      <WhatWeOffer onDemoClick={onDemoClick} />
      <WhyChessHelps />
      <Programs />
      <WhyChooseUs onDemoClick={onDemoClick}/>
      <Testimonials />
      <HowClassesWork onDemoClick={onDemoClick}/>
      <FAQ onDemoClick={onDemoClick}/>
      <FinalCTA onDemoClick={onDemoClick}/>
    </>
  );
};

export default Home;
