import AboutIntro from "@/components/about/AboutIntro";
import AboutWhy from "@/components/about/AboutWhy";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import AboutFounder from "@/components/about/AboutFounder";
import AboutJourney from "@/components/about/AboutJourney";
import AboutTrust from "@/components/about/AboutTrust";
import AboutCTA from "@/components/about/AboutCTA";
import PageProgressBar from "@/components/ui/PageProgressBar";


export default function AboutPage() {
  return (
    <main className="bg-[var(--color-light-100)]">
      <PageProgressBar />
      <AboutIntro />
      <AboutWhy />
      <AboutPhilosophy />
      <AboutFounder />
      <AboutJourney />
      <AboutTrust />
      <AboutCTA />
    </main>
  );
}
