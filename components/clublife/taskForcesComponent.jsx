"use client";
import React from "react";
import data from "@/content/clublife.json";
import {motion} from 'framer-motion'

const taskForcesComponent = () => {
  const taskForceTitles={
    initial:{ opacity: 0, y: 50 },
    animate:{ opacity: 1, y: 0 }
  }
  const taskForceDesc={
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
  }
  return (
    <>
      <div className="md:bg-[#242424] mt-5 md:pt-40 min-h-fit">
        <div className="grid md:grid-cols-3 grid-cols-1">
          <div className="flex flex-col row-span-3 ">
            <motion.h1 className="md:text-4xl text-lg tracking-[0.3em] px-5 md:text-center text-left"
            variants={taskForceTitles} 
            transition={{ duration: 0.5, delay: 0.1 }}
            initial="initial"
            whileInView="animate"
            viewport={{once:true}}
            >
              {data.taskForces.title}
            </motion.h1>
            <motion.p className="md:text-xl text-white my-10 tracking-wide md:text-center md:px-12 px-5"
            variants={taskForceTitles} 
            transition={{ duration: 0.5, delay: 0.1 }}
            initial="initial"
            whileInView="animate"
            viewport={{once:true}}
            >
              {data.taskForces.description}
            </motion.p>
          </div>
          {data.taskForces.content.map((cont) => (
            <motion.div key={cont.title} className="text-white md:px-20 px-5"
              variants={taskForceTitles} 
              transition={{ duration: 0.5, delay: 0.1 }}
              initial="initial"
              whileInView="animate"
              viewport={{once:true}}
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
