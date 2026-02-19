import { Suspense } from "react";
import ProgramsClient from "./ProgramsClient";

export const metadata = {
  title: "Chess Training Programs in Dwarka for Kids",
  description:
    "Structured beginner to advanced chess programs for children aged 5–16 in Dwarka. Available in online, offline and hybrid formats with professional coaching.",

  alternates: {
    canonical: "https://nimzoacademy.com/programs",
  },

  openGraph: {
    title: "Chess Training Programs in Dwarka | Nimzo Academy",
    description:
      "Beginner to advanced structured chess training for children aged 5–16.",
    url: "https://nimzoacademy.com/programs",
  },
};



export default function ProgramsPage() {
  return (
    <Suspense fallback={<div />}>
      <ProgramsClient />
    </Suspense>
  );
}
