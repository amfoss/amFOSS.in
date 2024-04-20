"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Component1 from "@/components/gallery/Component1";
import Component2 from "@/components/gallery/Component2";
import Component3 from "@/components/gallery/Component3";
import Contact from "../contact/page";
import { motion } from "framer-motion";

const Gallery = () => {
  const baseText = "Gallery";
  const router = useRouter();

  return (
    <>
      <div className="flex-col flex-center justify-center items-center">
        <div className="max-sm:py-8 md:text-left text-center py-72 md:min-h-[95vh] mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16">
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
        </div>
      </div>
      <Component1 />
      <Component2 />
      <Component3 />
      <div className="py-5"></div>
      <Contact />
    </>
  );
};

export default Gallery;
