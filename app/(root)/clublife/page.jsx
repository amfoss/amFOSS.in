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
      <div ref={scrollRef}>
        <div className="md:bg-[#242424] md:pt-6 min-[1700px]:pt-28">
          <div className="w-full sm:py-12 mx-auto max-w-screen-2xl xs:px-8 sm:px-11  grid items-center justify-center md:grid-cols-3 grid-cols-1 min-h-fit">
            <motion.div
              className="flex flex-col col-span-1 md:pb-20 mx-5 md:mb-7"
              variants={clubLife1Varients}
              transition={{ duration: 0.5, delay: 0.1 }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <Title title={data.fosslab.title} />
            </motion.div>

          <motion.div
            className="md:col-span-2 col-span-1 md:py-10 md:px-5"
            variants={clubLife2Varients}
            transition={{ duration: 0.5, delay: 0.1 }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <p className="h-full flex justify-center items-center text-white md:text-2xl p-5 text-justify">
              {data.fosslab.description}
            </p>
          </motion.div>
          <motion.img
            alt="Inside the amFOSS lab with computers and students"
            src="/assets/misc/thelab3.png"
            className="w-full h-auto p-5"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            alt="Mentor Mentee meeting at amFOSS lab"
            src="/assets/misc/thelab.png"
            className="w-full h-auto p-5"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            alt="Collaborative project at amFOSS lab"
            src="/assets/misc/thelab2.png"
            className="w-full h-auto p-5"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>  
      </div>
      {/* taskforces */}
      <TaskForcesComponent />
      {/* activities */}
      <ActivitiesComponent />
      {/* Contact Us */ } 
      <div className='pt-5 md:pt-40'><Contact /></div>     
    </>
  );
};

export default page;
