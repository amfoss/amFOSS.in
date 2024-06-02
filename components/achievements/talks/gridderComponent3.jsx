import React, { useEffect } from "react";
import { useState, useRef } from "react";
import data from "@/content/talks.json";
import Talks from "./talks.jsx"

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
            }
        }
        const offs=window.scrollY;
        if (isVisible){
            window.addEventListener('scroll', handleScroll);
        }
        return()=>{
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
        <div className="relative">
            <div className="absolute -z-10 flex h-full w-full" >
                <div id="controls"></div>
                <div className="flex-1 text-center" style={{ transform:`translateY(${(scrollY*(0.8))}px)`}}>
                    <p className="md:text-[200px] text-7xl tracking-wide">TALKS</p>
                </div>
            </div>
            <div>
            <div className="md:min-h-[60vh] min-h-[30vh]"></div>
            <div ref={ref} id="victim">
                {Object.keys(data)
                    .map((key, value)=>(
                        <Talks props={data[key]} name={key} number={value}/>
                    ))}
            </div>
            </div>
            <div className="md:min-h-[30vh] min-h-[10vh]"></div>
        </div>
        </>
    )
}