import { useState, useRef } from "react";
import Hackathons from "./hackathons";
import Title from "@/components/ui/title";
import ParallaxComponent from "../parallaxComponent";

export default function HackathonsComponent(){
    const [scrollY, setScrollY]=useState(0);
    const ref=useRef(null);
    const id='hack';
    ParallaxComponent({scrollY, setScrollY, ref, id})
    return(
        <>
        <div className="relative md:mb-[50vh] mb-[10vw] max-md:mb-24">
            <div className="absolute -z-10 flex h-full w-full" >
                <div id="controls"></div>
                <div className="flex-1 text-center" style={{ transform:`translateY(${(scrollY)}px)`}}>
                    <p className="text-[10vw] max-md:hidden tracking-wide">HACKATHONS</p>
                    <div className="md:hidden">
                        <Title title="HACKATHONS"/>
                    </div>
                </div>
            </div>
            <div>
            <div className="md:min-h-[60vh] min-h-[50vw] max-sm:min-h-14 max-md:min-h-20"></div>
            <div ref={ref} id="hack">
                <Hackathons/>
            </div>
            </div>
        </div>
        </>
    )
}