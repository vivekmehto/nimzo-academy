"use client";

import { useState, useEffect, useRef } from "react";
import CurriculumPanel from "@/components/programs/CurriculumPanel";

import {
  beginnerCurriculum,
  intermediateCurriculum,
  advancedCurriculum,
  masterCurriculum,
} from "@/data/curriculum";

import ProgramHero from "@/components/programs/ProgramHero";
import ProgramsCTA from "@/components/programs/ProgramsCTA";
import BeginnerSection from "../../components/programs/BeginnerSection";
import IntermediateSection from "../../components/programs/IntermediateSection";
import AdvancedSection from "../../components/programs/AdvancedSection";
import MasterSection from "../../components/programs/MasterSection";
import ProgramPhilosophy from "../../components/programs/ProgramPhilosphy";
import ProgramTimeline from "../../components/programs/ProgramTimeline";
import PageProgressBar from "../../components/ui/PageProgressBar";

import { useRouter, useSearchParams } from "next/navigation";

export default function ProgramsPage() {
  const [activeCurriculum, setActiveCurriculum] = useState(null);

    const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const section = searchParams.get("section");

    if (section) {
      const element = document.getElementById(section);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }

      // Remove query from URL (clean URL again)
      router.replace("/programs");
    }
  }, [searchParams, router]);

  const curriculumMap = {
    beginner: beginnerCurriculum,
    intermediate: intermediateCurriculum,
    advanced: advancedCurriculum,
    master: masterCurriculum,
  };

  // Lock body scroll when panel open
  useEffect(() => {
    document.body.style.overflow = activeCurriculum ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeCurriculum]);


  return (
    <>
      <PageProgressBar />

      <ProgramHero />
      <ProgramPhilosophy />
      <ProgramTimeline />

      <BeginnerSection setActiveCurriculum={setActiveCurriculum} />
      <IntermediateSection setActiveCurriculum={setActiveCurriculum} />
      <AdvancedSection setActiveCurriculum={setActiveCurriculum} />
      <MasterSection setActiveCurriculum={setActiveCurriculum} />

      <ProgramsCTA />

      {activeCurriculum && (
        <CurriculumPanel
          stage={curriculumMap[activeCurriculum].stage}
          title={curriculumMap[activeCurriculum].title}
          content={curriculumMap[activeCurriculum]}
          onClose={() => setActiveCurriculum(null)}
        />
      )}
    </>
  );
}
