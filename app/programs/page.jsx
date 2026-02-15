import { Suspense } from "react";
import ProgramsClient from "./ProgramsClient";

export default function ProgramsPage() {
  return (
    <Suspense fallback={<div />}>
      <ProgramsClient />
    </Suspense>
  );
}
