import React, { useEffect } from "react";
import { useState, useRef } from "react";
import data from "@/content/hackathonWinners.json";
import Hackathons from "./hackathons";
import Title from "@/components/ui/title";

export default function gridderComponent(){
    const [isVisible, setIsVisible] = useState(false);
    const [scrollY, setScrollY]=useState(0);
    

    const [scrollDir, setScrollDir] = useState("scrolling down");

    useEffect(() => {
        const threshold = 0.5;
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateScrollDir = () => {
            const scrollY = window.scrollY;

            if (Math.abs(scrollY - lastScrollY) < threshold) {
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
    }, [scrollDir]);

    useEffect(()=>{
        const handleScroll=()=>{
            const container=document.getElementById('controls');
            const elem=document.getElementById('victim');
            const rect=elem.getBoundingClientRect();
            container.innerHTML="";
            var mq = window.matchMedia("(min-width: 768px)");
            if (mq.matches){
                if(scrollDir=="scrolling up"){
                    setScrollY((window.scrollY-offs+rect['height']+window.innerHeight));
                }else{
                    setScrollY(window.scrollY-offs);
                }
            }else{
                setScrollY(0);
                window.removeEventListener('scroll', handleScroll)
              }
        }
        const offs=window.scrollY;
        if (isVisible){
            window.addEventListener('scroll', handleScroll);
        }
        return()=>{
            setScrollY(0)
            window.removeEventListener('scroll', handleScroll);
        }
    },[isVisible]);

    const ref=useRef(null);

    useEffect(()=>{
        const observer=new IntersectionObserver(
        ([entry])=>{
            setIsVisible(entry.isIntersecting);
        },
        {   root: null,
            rootMargin: '0px',
            threshold: [0],
        });
        if (ref.current){
            observer.observe(ref.current);
        }
        return()=>{
            if (ref.current){
                observer.unobserve(ref.current);
            }
        }
    },[]);

    return(
        <>
        <div className="relative md:mb-[50vh] mb-[10vw] max-md:mb-24">
            <div className="absolute -z-10 flex h-full w-full" >
                <div id="controls"></div>
                <div className="flex-1 text-center" style={{ transform:`translateY(${(scrollY*(0.83))}px)`}}>
                    <p className="text-[10vw] max-md:hidden tracking-wide">HACKATHONS</p>
                    <div className="md:hidden">
                        <Title title="HACKATHONS"/>
                    </div>
                </div>
            </div>
            <div>
            <div className="md:min-h-[60vh] min-h-[50vw] max-sm:min-h-14 max-md:min-h-20"></div>
            <div ref={ref} id="victim">
                {Object.keys(data)
                    .map((key, value)=>(
                        <Hackathons props={data[key]} name={key} number={value}/>
                    ))}
            </div>
            </div>
        </div>
        </>
    )
}