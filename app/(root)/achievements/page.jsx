"use client";
import React from "react";
import { motion } from "framer-motion";
import GridComponent from "@/components/achievements/gridComponent";
import Contact from "../contact/page";

const page = () => {
  const baseText = "ACHIEVEMENTS";
  return (
    <div className="overflow-hidden">
      <div className="flex-col flex-center justify-center items-center">
        <div className="max-sm:py-8 md:text-left text-center py-72 md:min-h-[95vh] mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16">
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
        </div>
      </div>
      {/* <div className="mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16"> */}
        <GridComponent />
      {/* </div> */}
      <div className="py-12 px-16"></div>
      <Contact />
    </div>
  );
};

export default page;
