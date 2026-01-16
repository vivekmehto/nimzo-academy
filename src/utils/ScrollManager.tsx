import { useEffect, useRef } from "react";
import { useLocation, useNavigationType } from "react-router";

const ScrollManager = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const positions = useRef<Record<string, number>>({});

  useEffect(() => {
    const key = location.key;

    // Restore scroll position on back/forward
    if (navigationType === "POP" && positions.current[key] !== undefined) {
      window.scrollTo({
        top: positions.current[key],
        behavior: "auto",
      });
    } else {
      // New navigation → scroll to top
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
