import ProgramHero from "@/components/programs/ProgramHero";
import ProgramsCTA from "@/components/programs/ProgramsCTA";
import BeginnerSection from "../../components/programs/BeginnerSection";
import IntermediateSection from "../../components/programs/IntermediateSection";
import AdvancedSection from "../../components/programs/AdvancedSection";
import MasterSection from "../../components/programs/MasterSection";
import ProgramPhilosophy from "../../components/programs/ProgramPhilosphy";
import ProgramTimeline from "../../components/programs/ProgramTimeline";

export default function ProgramsPage() {
  return (
    <>
<ProgramHero />
<ProgramPhilosophy />
<ProgramTimeline />
  <BeginnerSection />
  <IntermediateSection />
  <AdvancedSection />
  <MasterSection />

<ProgramsCTA />
</>
  );
}
