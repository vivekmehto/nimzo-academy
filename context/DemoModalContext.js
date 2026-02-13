"use client";

import { createContext, useContext, useState } from "react";

const DemoModalContext = createContext();

export function DemoModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const [bookingType, setBookingType] = useState("demo");

  const openModal = (type = "demo") => {
    setBookingType(type);
    setIsOpen(true);
  };
  const closeModal = () => setIsOpen(false);

  return (
    <DemoModalContext.Provider
      value={{ isOpen, openModal, closeModal, bookingType }}
    >
      {children}
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  return useContext(DemoModalContext);
}
