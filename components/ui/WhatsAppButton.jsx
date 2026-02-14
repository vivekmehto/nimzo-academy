"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function WhatsAppButton() {
  const pathname = usePathname();

  const [showBubble, setShowBubble] = useState(false);
  const [hasClicked, setHasClicked] = useState(false);

  // ---- Page-based dynamic messages ----
  const messageMap = {
    "/": "Hi, I’d like to know more about your chess academy.",
    "/programs":
      "Hi, I’m interested in your chess programs for my child. Please share details.",
    "/contact":
      "Hi, I’d like to get in touch regarding chess classes.",
  };

  const message =
    messageMap[pathname] ||
    "Hi, I’m interested in chess classes for my child. Please share details.";

  const phone = "919718086186"; 
  const encodedMessage = encodeURIComponent(message);

  // ---- First-time helper bubble ----
  useEffect(() => {
    const seen = localStorage.getItem("wa-bubble-seen");
    const clicked = localStorage.getItem("wa-clicked");

    if (!seen) {
      setShowBubble(true);
      localStorage.setItem("wa-bubble-seen", "true");

      setTimeout(() => setShowBubble(false), 4000);
    }

    if (clicked) {
      setHasClicked(true);
    }
  }, []);

  // ---- Click handler ----
  const handleClick = () => {
    setHasClicked(true);
    localStorage.setItem("wa-clicked", "true");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
      {/* Helper Bubble */}
      {showBubble && (
        <div className="animate-fade-in max-w-55 rounded-lg bg-white px-4 py-2 text-sm text-neutral-800 shadow-md">
          Have questions? <br />
          Chat with us on WhatsApp
        </div>
      )}

      {/* WhatsApp Button */}
      <Link
        href={`https://wa.me/${phone}?text=${encodedMessage}`}
        target="_blank"
        rel="noopener noreferrer nofollow"
        aria-label="Chat with us on WhatsApp"
        onClick={handleClick}
        className="
          relative flex h-14 w-14 items-center justify-center
          rounded-full bg-[#25D366]
          shadow-lg
          transition-transform duration-300
          hover:scale-105
          focus:outline-none focus:ring-4 focus:ring-green-300
        "
      >
        {/* Pulse animation (stops after click) */}
        {!hasClicked && (
          <span className="absolute inset-0 rounded-full bg-[#25D366]/60 animate-ping-slow" />
        )}

        {/* WhatsApp Icon */}
        <FaWhatsapp
          size={28}
          className="relative text-white"
          aria-hidden="true"
        />
      </Link>
    </div>
  );
}
