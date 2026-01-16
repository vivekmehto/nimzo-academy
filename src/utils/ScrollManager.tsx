import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router";

const ScrollManager = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const positions = useRef<Record<string, number>>({});

  useEffect(() => {
    const {  hash, key } = location;

    // If URL contains hash (#contact)
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    // Restore scroll on back/forward
    if (navigationType === "POP" && positions.current[key] !== undefined) {
      window.scrollTo({
        top: positions.current[key],
        behavior: "auto",
      });
    } else {
      // Normal navigation → scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    return () => {
      positions.current[key] = window.scrollY;
    };
  }, [location, navigationType]);

  return null;
};

export default ScrollManager;
