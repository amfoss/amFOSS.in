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
      <div className="flex-col flex-center justify-center items-center">
        <div className="max-sm:py-8 md:text-left text-center max-md:justify-center md:py-32 py-72 md:h-screen mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16 flex items-center">
          <h1 className="text-7xl max-md-custom:text-5xl max-sm:text-3xl tracking-wide leading-[110px]">
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
      <div ref={scrollRef} className="md:mt-10" />
      <Component1 />
      <Component2 />
      <Component3 />
      <div className='md:pt-38'><Contact /></div>
    </>
  );
};

export default Gallery;
