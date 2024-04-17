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
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="flex flex-col row-span-3 ">
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
            <motion.div key={cont.title} className="text-white md:px-20 px-5"
              variants={taskForceTitles}
              transition={{ duration: 0.5, delay: 0.1 }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <p className="md:text-3xl font-medium tracking-[0.3em] uppercase fond-bold">
                {cont.title}
              </p>
              <p className="md:text-xl md:mt-10 md:mb-20 my-5 tracking-wide">
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
