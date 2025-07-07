"use client";
import React from "react";
import { useRef } from "react";
import { motion } from "framer-motion";
import GSOCComponent from "@/components/achievements/gsocComponent/gsocComponent";
import HackathonsComponent from "@/components/achievements/hackathonsComponent/hackathonsComponent";
import TalksComponent from "@/components/achievements/talks/talksComponent"
import Contact from "../contact/page";
import ScrollDownButton from "@/components/shared/ScrollDown";
import OpenSourceComponent from "@/components/achievements/openSourceComponent/openSourceComponent";

const page = () => {
  const baseText = "ACHIEVEMENTS";
  const scrollRef = useRef(null);

  return (
    <div className="overflow-hidden">
      <div className="flex-col flex-center justify-center items-center">
        <div className="max-sm:py-8 md:text-left text-center max-md:justify-center md:py-32 py-72 md:h-screen mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16 flex items-center">
          <h1 className="text-7xl max-md-custom:text-5xl max-sm:text-3xl tracking-wide leading-[110px]">
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
                viewport={{ once: true }}
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
      <div className="p-[5vw] pb-0 max-sm:mt-[10vw] md:mt-6 min-[1700px]:mt-28" ref={scrollRef}>
        <OpenSourceComponent />
        <GSOCComponent/>
        <HackathonsComponent/>
        <TalksComponent/>
      </div>
    <Contact/>
    </div>
  );
};

export default page;
