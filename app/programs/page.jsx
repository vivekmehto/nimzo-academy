import { Suspense } from "react";
import ProgramsClient from "./ProgramsClient";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Chess Coaching Programs in Delhi and Online",
  description:
    "Explore beginner to advanced chess coaching programs at Nimzo Academy, including classes across Delhi, home coaching in select areas, and online learning options worldwide.",
  path: "/programs",
});



export default function ProgramsPage() {
  return (
    <Suspense fallback={<div />}>
      <ProgramsClient />
    </Suspense>
  );
}
