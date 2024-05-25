"use client";
import React from "react";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import Component1 from "@/components/story/Component1";
import Component2 from "@/components/story/Component2";
import Component3 from "@/components/story/Component3";
import { motion } from "framer-motion";
import ScrollDownButton from "@/components/shared/ScrollDown";

const OurStory = () => {
  const baseText = "OUR STORY";
  const router = useRouter();
  const scrollRef = useRef(null);

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
                viewport={{once:true,}}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                {word+" "}
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
      <div className="md:px-40 px-5 flex justify-center mb-10">
        <button
          onClick={() => router.push("/about")}
          className="text-2xl bg-[#D0A730] font-medium rounded-xl text-black w-fit px-10 py-2 tracking-wide mt-8 hover:text-white hover:bg-[#242424] transition duration-200"
        >
          Return to About
        </button>
      </div>
    </>
  );
};

export default OurStory;
