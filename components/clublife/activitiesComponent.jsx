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
    <>
      <div className="md:bg-[#242424] mt-5 md:pt-40 pb-10 min-h-fit">
        <motion.div className="w-full md:px-40 px-5 mb-10"
        variants={imageVarients}
        transition={{ duration: 0.5, delay: 0.1 }}
        initial="initial"
        whileInView="animate"
        viewport={{once:true}}
        >
          <Title title="ACTIVITIES" />
        </motion.div>
        <div className="md:px-40 px-5 grid md:grid-cols-2 grid-cols-1 gap-x-20">
          {/* fosstalks */}
          <motion.div className="text-white md:pt-10 md:pb-32 md:pr-40 w-full"
          variants={activityVarients}
          transition={{ duration: 0.5, delay: 0.1 }}
          initial="initial"
          whileInView="animate"
          viewport={{once:true}}
          >
            <h1 className="md:text-4xl text-lg tracking-[0.2em] relative md:mb-10 mb-5">
              <p className="absolute text-7xl -top-9 -left-10">.</p>
              {data.activities.fosstalks.title}
            </h1>
            <p className="md:text-xl">
              {data.activities.fosstalks.description}
            </p>
          </motion.div>
          <motion.div className="row-span-2 h-[90%] bg-white ml-10 mr-20 md:block hidden"
          variants={imageVarients}
          transition={{ duration: 0.5, delay: 0.3 }}
          initial="initial"
          whileInView="animate"
          viewport={{once:true}} 
          
          
          
          ></motion.div>
          {/* opentalks */}


          <motion.div className="text-white pt-10 md:pb-32 md:pr-40 w-full"
          variants={activityVarients}
          transition={{ duration: 0.5, delay: 0.1 }}
          initial="initial"
          whileInView="animate"
          viewport={{once:true}}
          
          
          
          >
            <h1 className="md:text-4xl text-lg tracking-[0.2em] relative md:mb-10 mb-5">
              <p className="absolute text-7xl -top-9 -left-10">.</p>
              {data.activities.opentalks.title}
            </h1>
            <p className="md:text-xl">
              {data.activities.opentalks.description}
            </p>
          </motion.div>
          {/* documentary */}
          <motion.div className="text-white pt-10 md:pb-32 md:pr-40 w-full"
           variants={activityVarients}
           transition={{ duration: 0.5, delay: 0.3 }}
           initial="initial"
           whileInView="animate"
           viewport={{once:true}} 
          >
            <h1 className="md:text-4xl text-lg tracking-[0.2em] relative md:mb-10 mb-5">
              <p className="absolute text-7xl -top-9 -left-10">.</p>
              {data.activities.documentary.title}
            </h1>
            <p className="md:text-xl">
              {data.activities.documentary.description}
            </p>
          </motion.div>
          {/* amfossplays */}
          <motion.div className="text-white pt-10 md:pb-32 md:pr-40 md:ml-20 w-full"
          variants={activityVarients}
          transition={{ duration: 0.5, delay: 0.3 }}
          initial="initial"
          whileInView="animate"
          viewport={{once:true}} 
          >
            <h1 className="md:text-4xl text-lg tracking-[0.2em] relative md:mb-10 mb-5">
              <p className="absolute text-7xl -top-9 -left-10">.</p>
              {data.activities.amfossplays.title}
            </h1>
            <p className="md:text-xl">
              {data.activities.amfossplays.description}
            </p>
          </motion.div>
          <motion.div className="row-span-2 h-[90%] bg-white -ml-10 mr-40 md:block hidden"
           variants={imageVarients}
           transition={{ duration: 0.5, delay: 0.3 }}
           initial="initial"
           whileInView="animate"
           viewport={{once:true}} 
          
          
          ></motion.div>
          {/* amfossbiosnight */}
          <motion.div className="text-white pt-10 md:pb-32 md:pr-40 md:ml-20 w-full"
           variants={activityVarients}
           transition={{ duration: 0.5, delay: 0.4 }}
           initial="initial"
           whileInView="animate"
           viewport={{once:true}} 
          
          
          >
            <h1 className="md:text-4xl text-lg tracking-[0.2em] relative md:mb-10 mb-5">
              <p className="absolute text-7xl -top-9 -left-10">.</p>
              {data.activities.amfossbiosnight.title}
            </h1>
            <p className="md:text-xl">
              {data.activities.amfossbiosnight.description}
            </p>
          </motion.div>
          {/* socialservice */}
          <motion.div className="text-white pt-10 md:pb-32 md:pr-40 md:ml-20 w-full"
          
          variants={activityVarients}
          transition={{ duration: 0.5, delay: 0.4 }}
          initial="initial"
          whileInView="animate"
          viewport={{once:true}} 
          >
            <h1 className="md:text-4xl text-lg tracking-[0.2em] relative md:mb-10 mb-5">
              <p className="absolute text-7xl -top-9 -left-10">.</p>
              {data.activities.socialservice.title}
            </h1>
            <p className="md:text-xl">
              {data.activities.socialservice.description}
            </p>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default activitiesComponent;
