import React, { useEffect, useState, useRef } from "react";
import data from "@/content/gsoc.json";
import Gsoc from "./gsoc";
import Image from "next/image";
import Title from "@/components/ui/title";

export default function GridderComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [scrollDir, setScrollDir] = useState("scrolling down");
  const ref1 = useRef(null);
  const offs = useRef(0);

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
      const elem = document.getElementById('victim');
      const rect = elem.getBoundingClientRect();
      var mq = window.matchMedia("(min-width: 768px)");
      if (mq.matches){
        if (scrollDir === "scrolling up") {
          setScrollY((window.scrollY - offs.current + rect.height + window.innerHeight) * 0.8);
        } else {
          setScrollY((window.scrollY - offs.current) * 0.8);
        }
      }else{
        window.removeEventListener('scroll', handleScroll)
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

    if (ref1.current) {
      observer.observe(ref1.current);
    }

    return () => {
      if (ref1.current) {
        observer.unobserve(ref1.current);
      }
    };
  }, []);

  return (
    <>
      <div className="relative md:mb-[50vh] mb-[50vw] max-md:mb-24">
        <div className="absolute -z-10 flex h-full w-full">
          <div id="controls"></div>
          <div className="flex-1 text-center transform" style={{ transform: `translateY(${scrollY}px)` }}>
            <p className="text-[13vw] max-md:hidden tracking-wide">GSOC</p>
            <div className="md:hidden">
              <Title title="GSOC"/>
            </div>
          </div>
        </div>
        <div>
          <div className="md:min-h-[60vh] min-h-[30vw] max-sm:min-h-14 max-md:min-h-20"></div>
          <div ref={ref1} id="victim">
            {data.map((yearData, index) => {
              const year = Object.keys(yearData)[0];
              const people = yearData[year];
              return <Gsoc key={index} year={year} people={people} number={index} />;
            })}
            <div className={`${(data.length + 1) % 2 === 0 ? '' : 'md:justify-start'} justify-end sm:text-2xl md-custom-2:text-[3vw] md-grid:text-4xl mt-[-7vw] md:mt-[-5vh] flex w-full`}>
              and many more...
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
