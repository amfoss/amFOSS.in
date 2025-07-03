import { useRef } from "react";
import OpenSource from "./openSource";
import Title from "@/components/ui/title";
import ParallaxComponent from "../parallaxComponent";

export default function GSOCComponent() {
  const ref = useRef(null);
  const tar = useRef(null);
  ParallaxComponent({ ref, tar });
  return (
    <>
      <div className="relative md:mb-[50vh] mb-[50vw] max-md:mb-24">
        <div className="absolute -z-10 h-full w-full">
          <div ref={tar} className="flex-1 text-center transform">
            <p className="text-[13vw] max-md:hidden tracking-wide">
              Open Source
            </p>
            <div className="md:hidden">
              <Title title="Open Source" />
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
