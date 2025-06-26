import { useState, useRef } from "react";
import data from "@/content/gsoc.json";
import OpenSource from "./openSource";
import Title from "@/components/ui/title";
import ParallaxComponent from "../parallaxComponent";

export default function GSOCComponent() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef(null);
  const id='gsoc';
  ParallaxComponent({scrollY, setScrollY, ref, id})
  return (
    <>
      <div className="relative md:mb-[50vh] mb-[50vw] max-md:mb-24">
        <div className="absolute -z-10 flex h-full w-full">
          <div id="controls"></div>
          <div className="flex-1 text-center transform" style={{ transform: `translateY(${scrollY}px)` }}>
            <p className="text-[13vw] max-md:hidden tracking-wide">Open Source</p>
            <div className="md:hidden">
              <Title title="Open Source"/>
            </div>
          </div>
        </div>
        <div>
          <div className="md:min-h-[60vh] min-h-[30vw] max-sm:min-h-14 max-md:min-h-20"></div>
          <div ref={ref} id="openSource">
            <OpenSource />
          </div>
        </div>
      </div>
    </>
  );
}
