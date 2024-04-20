import React from "react";
import data from "@/content/about.json";
import Title from "../ui/title";
import { motion } from 'framer-motion'
const OurMission = () => {
  const about1Varients = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 }
  }
  const about2Varients = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
  }
  return (
    <>
      <div className="bg-[#242424] pt-10 min-h-fit text-white tracking-wide">
        <div className="grid md:grid-cols-3 grid-cols-1 md:px-40 px-5">
          <motion.div className="flex flex-col md:col-span-3 col-span-1 mb-10 md:ml-4 md:mt-15 mt-14"
            variants={about2Varients}
            transition={{ duration: 0.5, delay: 0.1 }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}>
            <Title title="OUR MISSION" />
          </motion.div>

          {data.mission.map((cont, index) => (
            <>
              <motion.div key={index} className="text-xl 2xl:text-3xl sm:mr-5 md:px-5 sm:mt-9" variants={about2Varients}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}>{cont.title}</motion.div>

              <div className="md:col-span-2 col-span-1 my-10">
                {cont.points.map((point, index) => (
                  <div
                    key={index}
                    className="relative min-h-20 md:text-xl md:ml-0 ml-5"
                  >
                    <div className="absolute -left-5 top-2 h-full">
                      <div className="w-2 h-2 bg-[#D9D9D9] rounded-full " />
                      {index !== cont.points.length - 1 && (
                        <div className="w-2 h-full flex justify-center">
                          <div className="w-[2px] bg-[#D0A730]"></div>
                        </div>
                      )}
                    </div>
                    <motion.p className=""
                      variants={about1Varients}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                    >{point}</motion.p>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default OurMission;
