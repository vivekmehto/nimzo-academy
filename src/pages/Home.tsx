import Coaches from "../components/Coaches";
import FAQ from "../components/FAQ";
import FinalCTA from "../components/FinalCTA";
import Hero from "../components/Hero";
import HowClassesWork from "../components/HowClassesWork";
import Programs from "../components/Programs";
import Testimonials from "../components/Testimonials";
import TrustIndicators from "../components/TrustIndicators";
import WhyChooseUs from "../components/WhyChooseUs";


const Home: React.FC = () => {
  return (
    <>
    <Hero />
    <TrustIndicators />
    <Programs />
    <WhyChooseUs />
    <HowClassesWork />
    <Coaches />
    <Testimonials />
    <FAQ />
    <FinalCTA />
    </>
  )
}

export default Home