import { useState, useEffect } from "react";
import { useScroll } from "framer-motion";

export const useScrollDirection = (isDrawerOpen, closeDrawer) => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      const latest = window.scrollY;
      const previous = scrollY.getPrevious();

      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      if (isDrawerOpen && window.innerHeight > 424) {
        closeDrawer();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDrawerOpen, scrollY, closeDrawer]);

  return hidden;
};

export default useScrollDirection;