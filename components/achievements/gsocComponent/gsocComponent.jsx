import { useRef } from "react";
import data from "@/content/gsoc.json";
import Gsoc from "./gsoc";
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
            <p className="text-[13vw] max-md:hidden tracking-wide">GSOC</p>
            <div className="md:hidden">
              <Title title="GSOC" />
            </div>
          </div>
        </div>
        <div>
          <div className="md:min-h-[60vh] min-h-[30vw] max-sm:min-h-14 max-md:min-h-20"></div>
          <div ref={ref} id="gsoc">
            <Gsoc />
            <div
              className={`${
                (data.length + 1) % 2 === 0 ? "" : "md:justify-start"
              } justify-end sm:text-2xl md-custom-2:text-[3vw] md-grid:text-4xl mt-[-7vw] md:mt-[-5vh] flex w-full`}
            >
              and many more...
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
