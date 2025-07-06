import { useRef } from "react";
import Talks from "./talks.jsx";
import Title from "@/components/ui/title.jsx";
import ParallaxComponent from "../parallaxComponent.jsx";

export default function TalksComponent() {
  const ref = useRef(null);
  const tar = useRef(null);
  ParallaxComponent({ ref, tar });

  return (
    <>
      <div className="relative pb-5 md:pb-20">
        <div className="absolute -z-10 h-full w-full">
          <div className="flex-1 text-center" ref={tar}>
            <p className="text-[13vw] max-md:hidden tracking-wide">TALKS</p>
            <div className="md:hidden">
              <Title title="TALKS" />
            </div>
          </div>
        </div>
        <div>
          <div className="md:min-h-[60vh] min-h-[50vw] max-sm:min-h-14 max-md:min-h-20"></div>
          <div ref={ref} id="talks">
            <Talks />
          </div>
        </div>
      </div>
    </>
  );
}
