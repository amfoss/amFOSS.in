import React from "react";
import Title from "../ui/title";
import data from "@/content/clublife.json";
import {motion} from 'framer-motion';

const activitiesComponent = () => {
  const activityVarients={
    initial:{ opacity: 0, y: 50 },
    animate:{ opacity: 1, y: 0 }
  }
  const imageVarients={
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
  }
  return (
    <div className="md:bg-[#242424]">
      <div className="mt-5 md:pt-20 md:mt-20 pb-10 min-h-fit">
        <motion.div className="max-w-screen-2xl mx-auto w-full px-5 mb-10 sm:px-16 sm:pt-10"
        variants={imageVarients}
        transition={{ duration: 0.5, delay: 0.1 }}
        initial="initial"
        whileInView="animate"
        viewport={{once:true}}
        >
          <Title title="ACTIVITIES" />
        </motion.div>
        <div className="grid max-w-screen-2xl px-5 2xl:grid-cols-2 grid-cols-1 gap-x-20 mx-auto sm:px-16 text-justify">

          {/* fosstalks */}
          <motion.div className="md:pt-10 2xl:pb-32  md:pr-30 w-full"
          variants={activityVarients}
          transition={{ duration: 0.5, delay: 0.1 }}
          initial="initial"
          whileInView="animate"
          viewport={{once:true}}
          >
            <h1 className="md:text-4xl text-lg tracking-[0.2em] relative md:mb-10 mb-5">
              {data.activities.fosstalks.title}
            </h1>
            <p className="md:text-xl text-white ">
              {data.activities.fosstalks.description}
            </p>
          </motion.div>
          <motion.img 
          src= {data.activities.amfossplays.image}
          alt="amFOSS members playing football during amFOSS play"
          className="row-span-2 h-[90%] bg-white mr-20 2xl:block hidden"
          variants={imageVarients}
          initial="initial"
          whileInView="animate"
          viewport={{once:true}} 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}>
          </motion.img>

          {/* opentalks */}
          <motion.div className="pt-10 2xl:pb-32  md:pr-30 w-full"
          variants={activityVarients}
          transition={{ duration: 0.5, delay: 0.1 }}
          initial="initial"
          whileInView="animate"
          viewport={{once:true}}
          
          
          
          >
            <h1 className="md:text-4xl text-lg tracking-[0.2em] relative md:mb-10 mb-5">
              {data.activities.opentalks.title}
            </h1>
            <p className="md:text-xl text-white ">
              {data.activities.opentalks.description}
            </p>
          </motion.div>
          {/* documentary */}
          <motion.div className="pt-10 2xl:pb-32  md:pr-30 w-full"
           variants={activityVarients}
           transition={{ duration: 0.5, delay: 0.3 }}
           initial="initial"
           whileInView="animate"
           viewport={{once:true}} 
          >
            <h1 className="md:text-4xl text-lg tracking-[0.2em] relative md:mb-10 mb-5">
              {data.activities.documentary.title}
            </h1>
            <p className="md:text-xl text-white ">
              {data.activities.documentary.description}
            </p>
          </motion.div>
          {/* amfossplays */}
          <motion.div className="pt-10 2xl:pb-32  md:pr-30 w-full"
          variants={activityVarients}
          transition={{ duration: 0.5, delay: 0.3 }}
          initial="initial"
          whileInView="animate"
          viewport={{once:true}} 
          >
            <h1 className="md:text-4xl text-lg tracking-[0.2em] relative md:mb-10 mb-5">
              {data.activities.amfossplays.title}
            </h1>
            <p className="md:text-xl text-white ">
              {data.activities.amfossplays.description}
            </p>
          </motion.div>
          <motion.img 
          src= {data.activities.socialservice.image}
          alt="amFOSS members doing social work"
           className="row-span-2 h-[90%] bg-white mr-20 2xl:block hidden"
           variants={imageVarients}
           initial="initial"
           whileInView="animate"
           viewport={{once:true}} 
           whileHover={{ scale: 1.02 }}
           transition={{ duration: 0.3 }}>
           </motion.img>
          {/* amfossbiosnight */}
          <motion.div className="pt-10 2xl:pb-32  md:pr-30 w-full"
           variants={activityVarients}
           transition={{ duration: 0.5, delay: 0.4 }}
           initial="initial"
           whileInView="animate"
           viewport={{once:true}} 
          
          
          >
            <h1 className="md:text-4xl text-lg tracking-[0.2em] relative md:mb-10 mb-5">
              {data.activities.amfossbiosnight.title}
            </h1>
            <p className="md:text-xl text-white">
              {data.activities.amfossbiosnight.description}
            </p>
          </motion.div>
          {/* socialservice */}
          <motion.div className="pt-10 md:pb-20  md:pr-30 w-full"
          
          variants={activityVarients}
          transition={{ duration: 0.5, delay: 0.4 }}
          initial="initial"
          whileInView="animate"
          viewport={{once:true}} 
          >
            <h1 className="md:text-4xl text-lg tracking-[0.2em] relative md:mb-10 mb-5">
              {data.activities.socialservice.title}
            </h1>
            <p className="md:text-xl text-white">
              {data.activities.socialservice.description}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default activitiesComponent;
