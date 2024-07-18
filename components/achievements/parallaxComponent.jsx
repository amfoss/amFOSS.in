import { useState, useEffect, useRef } from "react";

export default function ParallaxComponent({ scrollY, setScrollY, ref, id }){
    const [isVisible, setIsVisible] = useState(false);
    const offs=useRef(0);
    const [scrollDir, setScrollDir] = useState("scrolling down");
  
    useEffect(() => {
      let lastScrollY = window.scrollY;
      let ticking = false;
  
      const updateScrollDir = () => {
        const scrollY = window.scrollY;
        if (Math.abs(scrollY - lastScrollY) < 5) {
          ticking = false;
          return;
        }
        setScrollDir(scrollY > lastScrollY ? "scrolling down" : "scrolling up");
        lastScrollY = scrollY > 0 ? scrollY : 0;
        ticking = false;
      };
  
      const onScroll = () => {
        if (!ticking) {
          window.requestAnimationFrame(updateScrollDir);
          ticking = true;
        }
      };
  
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
  
    useEffect(() => {
      const handleScroll = () => {
        const elem = document.getElementById(id);
        if (elem){
            const rect = elem.getBoundingClientRect();
            var mq = window.matchMedia("(min-width: 768px)");
            if (mq.matches){
            if (scrollDir === "scrolling up") {
                setScrollY((window.scrollY - offs.current + rect.height + window.innerHeight)*0.8);
            } else {
                setScrollY((window.scrollY - offs.current)*0.8);
            }
            }else{
            window.removeEventListener('scroll', handleScroll)
            }
        }
      };
  
      offs.current = window.scrollY;
  
      if (isVisible) {
        window.addEventListener('scroll', handleScroll);
      } else {
        setScrollY(0)
        window.removeEventListener('scroll', handleScroll);
      }
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [isVisible]);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(entry.isIntersecting);
        },
        { root: null, rootMargin: '0px', threshold: [0] }
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