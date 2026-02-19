import AboutIntro from "@/components/about/AboutIntro";
import AboutWhy from "@/components/about/AboutWhy";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import AboutFounder from "@/components/about/AboutFounder";
import AboutJourney from "@/components/about/AboutJourney";
import AboutTrust from "@/components/about/AboutTrust";
import AboutCTA from "@/components/about/AboutCTA";
import PageProgressBar from "@/components/ui/PageProgressBar";

export const metadata = {
  title: "About Nimzo Academy | Professional Chess Coaching",
  description:
    "Learn about Nimzo Academy, founded by experienced chess coaches offering structured online and offline training for children aged 5–16 in Dwarka.",
};


export default function AboutPage() {
  return (
    <main className="bg-light-100">
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
