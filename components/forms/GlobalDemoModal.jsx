"use client";

import { useDemoModal } from "@/context/DemoModalContext";
import DemoModal from "./DemoModal";

export default function GlobalDemoModal() {
  const { isOpen, closeModal, bookingType } = useDemoModal();

  return (
    <DemoModal
      isOpen={isOpen}
      onClose={closeModal}
      type={bookingType}
    />
  );
}
