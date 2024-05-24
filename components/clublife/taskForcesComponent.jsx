"use client";
import React from "react";
import data from "@/content/clublife.json";
import Title from "../ui/title";
import { motion } from 'framer-motion'

const taskForcesComponent = () => {
  const taskForceTitles = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 }
  }
  const taskForceDesc = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
  }
  return (
    <>
      <div className="mt-5 md:pt-40 min-h-fit">
        <div className="grid sm-custom:grid-cols-3">
          <div className="flex flex-col row-span-1 ">
            <motion.div className="flex flex-col col-span-1 mx-5 md:mx-14 mb-5 md:mb-10"
              variants={taskForceTitles}
              transition={{ duration: 0.5, delay: 0.1 }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}>
              <Title title={data.taskForces.title} />
            </motion.div>
            <motion.div className="md:col-span-2 col-span-1 md:px-10"
              variants={taskForceTitles}
              transition={{ duration: 0.5, delay: 0.1 }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}>
              <p className="h-full flex justify-center items-center text-white md:text-2xl p-5">
                {data.taskForces.description}
              </p>
            </motion.div>
          </div>
          {data.taskForces.content.map((cont) => (
            <motion.div key={cont.title} className="bg-[#242424] mx-5 shadow-custom max-md:p-6 max-sm-custom:p-12 mb-8 sm-custom:p-10 sm-custom:mb-20 rounded-xl"
              variants={taskForceTitles}
              transition={{ duration: 0.5, delay: 0.1 }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <p className="md:text-3xl font-medium tracking-[0.3em] uppercase">
                {cont.title}
              </p>
              <p className="md:text-xl md:mt-10 text-white  my-5 tracking-wide">
                {cont.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default taskForcesComponent;
