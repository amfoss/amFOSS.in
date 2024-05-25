"use client";
import React from "react";
import { useRef } from "react";
import data from "@/content/clublife.json";
import Title from "../../(root)/../../components/ui/title";
import TaskForcesComponent from "@/components/clublife/taskForcesComponent";
import ActivitiesComponent from "@/components/clublife/activitiesComponent";
import Contact from "../contact/page";
import { motion } from "framer-motion";
import ScrollDownButton from "@/components/shared/ScrollDown";

const page = () => {
  const scrollRef = useRef(null);
  const baseText = "LIFE IN THE CLUB";
  const clubLife1Varients = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
  };
  const clubLife2Varients = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  };

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
                viewport={{ once: true }}
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
      {/* foss lab */}
      <div ref={scrollRef} >
      <div className="md:bg-[#242424] grid items-center justify-center md:grid-cols-3 grid-cols-1 min-h-fit sm:mx-0 md:place-items-center">
        <motion.div
          className="flex flex-col col-span-1 pt-5 mx-5 mb-5 md:mb-10"
          variants={clubLife1Varients}
          transition={{ duration: 0.5, delay: 0.1 }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <Title title={data.fosslab.title} />
        </motion.div>

        <motion.div
          className="md:col-span-2 col-span-1 md:py-10 lg:px-32 md:px-5"
          variants={clubLife2Varients}
          transition={{ duration: 0.5, delay: 0.1 }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <p className="h-full flex justify-center items-center text-white md:text-2xl p-5">
            {data.fosslab.description}
          </p>
        </motion.div>
        <img src="/assets/misc/thelab3.png" className="w-full h-auto p-5" />
        <img src="/assets/misc/thelab.png"  className="w-full h-auto p-5" />
        <img src="/assets/misc/thelab2.png" className="w-full h-auto p-5" />
      </div>
      </div>
      {/* taskforces */}
      <TaskForcesComponent />
      {/* activities */}
      <ActivitiesComponent />
      <div className="py-12"></div>
      {/* Contact Us */ }
      <Contact/>
      
    </>
  );
};

export default page;
