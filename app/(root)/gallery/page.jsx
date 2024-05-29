"use client";
import React from "react";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import Component1 from "@/components/gallery/Component1";
import Component2 from "@/components/gallery/Component2";
import Component3 from "@/components/gallery/Component3";
import Contact from "../contact/page";
import { motion } from "framer-motion";
import ScrollDownButton from "@/components/shared/ScrollDown";

const Gallery = () => {
  const baseText = "GALLERY";
  const router = useRouter();
  const scrollRef = useRef(null);

  return (
    <>
      <div className="px-10 md:mx-[3vw] lg:mx-[9vw] xl:mx-[8vw] 2xl:mx-[9vw]">
        <div className="flex-col flex-center justify-center items-center">
          <div className="md:text-left py-72 md:min-h-[95vh] max-w-screen-2xl">
            <h1 className="text-7xl max-md-custom:text-4xl max-sm:text-3xl tracking-wide leading-[110px] ">
              {baseText.split(" ").map((word, index) => (
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
                    delay: index * 0.1,
                  }}
                >
                  {word + " "}
                </motion.span>
              ))}
            </h1>
            <ScrollDownButton targetRef={scrollRef} />
          </div>
        </div>
        <div ref={scrollRef} />
        <Component1 />
        <Component2 />
        <Component3 />
        <div className="py-5"></div>
      </div>
      <Contact />
    </>
  );
};

export default Gallery;
