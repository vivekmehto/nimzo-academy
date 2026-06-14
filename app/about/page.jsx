import AboutIntro from "@/components/about/AboutIntro";
import AboutWhy from "@/components/about/AboutWhy";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import AboutFounder from "@/components/about/AboutFounder";
import AboutJourney from "@/components/about/AboutJourney";
import AboutTrust from "@/components/about/AboutTrust";
import AboutCTA from "@/components/about/AboutCTA";
import PageProgressBar from "@/components/ui/PageProgressBar";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Nimzo Academy in Delhi and Online",
  description:
    "Learn about Nimzo Academy, with chess classes across Delhi, home coaching in select areas, school tie-ups, and online students across India and abroad.",
  path: "/about",
});


export default function AboutPage() {
  return (
    <main className="bg-light-100">
      <PageProgressBar />
      <AboutIntro />
      <AboutWhy />
      <AboutPhilosophy />
      {/* <AboutFounder /> */}
      <AboutJourney />
      <AboutTrust />
      <AboutCTA />
    </main>
  );
}
