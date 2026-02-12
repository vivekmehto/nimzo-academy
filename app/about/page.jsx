import AboutIntro from "@/components/about/AboutIntro";
import AboutWhy from "@/components/about/AboutWhy";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import AboutFounder from "@/components/about/AboutFounder";
import AboutJourney from "@/components/about/AboutJourney";
import AboutTrust from "@/components/about/AboutTrust";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <main className="bg-[var(--color-light-100)]">
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
