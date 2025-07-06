import { useState, useEffect } from "react";

export default function ParallaxComponent({ ref, tar }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const updateScreenSize = () => setIsLargeScreen(mq.matches);
    mq.addEventListener("change", updateScreenSize);
    setIsLargeScreen(mq.matches);

    return () => {
      mq.removeEventListener("change", updateScreenSize);
    };
  }, []);

  useEffect(() => {
    if (!isLargeScreen) {
      tar.current.style.transform = `translateY(0px)`;
      return;
    }
    if (!isVisible) return;
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          {
            if (!ref?.current || !tar?.current) return;
            else {
              const tar_rect = tar.current.getBoundingClientRect();
              const ref_rect = ref.current.getBoundingClientRect();
              tar.current.style.transform = `translateY(${
                (window.innerHeight / 2 +
                  ref_rect.height -
                  tar_rect.height / 2) *
                (1 - ref_rect.bottom / (ref_rect.height + window.innerHeight))
              }px)`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isVisible, isLargeScreen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { root: null, rootMargin: "0px", threshold: [0] }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
}
