import { useState, useEffect } from "react";
import { useScroll } from "framer-motion";

/**
 * Hook to manage navbar background color based on scroll position
 * Returns whether navbar should have solid background (true) or gradient (false)
 */

export const useNavbarColor = () => {
  const [navColor, setNavColor] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleNavColor = (latest) => {
      setNavColor((prevNavColor) => {
        if (latest + 93 <= window.innerHeight && prevNavColor === true) {
          return false;
        } else if (latest + 93 > window.innerHeight && prevNavColor === false) {
          return true;
        }
        return prevNavColor;
      });
    };

    const handleScroll = () => {
      const latest = window.scrollY;
      handleNavColor(latest);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return navColor;
};

export default useNavbarColor;