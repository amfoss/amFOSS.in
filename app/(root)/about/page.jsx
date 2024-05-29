"use client";
import React from "react";
import Hero from "@/components/about/Hero";
import { useRef, useState, useEffect } from "react";
import OurMission from "@/components/about/OurMission";
import Modus from "@/components/about/Modus";
import Contact from "../contact/page";
import { motion } from 'framer-motion'
import ScrollDownButton from "@/components/shared/ScrollDown";

const About = () => {
  const scrollRef = useRef(null);
  const baseText = "ABOUT";

  return (
    <>
      <div className="px-10 md:mx-[3vw] lg:mx-[9vw] xl:mx-[8vw] 2xl:mx-[9vw]">
        <div className="overflow-hidden">
          <div className="flex-col flex-center justify-center items-center">
            <div className="md:text-left py-72 md:min-h-[95vh] max-w-screen-2xl">
              <h1 className="text-7xl max-md-custom:text-4xl max-sm:text-3xl tracking-wide leading-[110px] px-[1vw]">
                {baseText.split("").map((word, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      initial: {
                        opacity: 0,
                        y: 20,
                      },
                      animate: {
                        opacity: 1,
                        y: 0,
                      },
                    }}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.02,
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>
              <ScrollDownButton targetRef={scrollRef} />
            </div>
          </div>
          <div ref={scrollRef}>
            <Hero />
            {/* Our mission */}
            <OurMission />
            {/* Modus Operandi */}
            <Modus />
          </div>
        </div>
      </div>
      {/* Contact Us */}
      <Contact />
    </>
  );
};

export default About;