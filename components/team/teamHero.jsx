import React from "react";
import data from "@/content/team.json";
import {motion} from 'framer-motion'
const teamHero = () => {
  const team1Varients={
    initial:{ opacity: 0, y: 50 },
    animate:{ opacity: 1, y: 0 }
  }
  const team2Varients={
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
  }
  return (
    <>
      <div className="flex max-md:flex-col mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16 text-white ">
        <motion.div
        className="w-full flex-1 flex flex-col mt-6 justify-center items-center"
        variants={team2Varients} 
        transition={{ duration: 0.5, delay: 0.1 }}
        initial="initial"
        whileInView="animate"
        viewport={{once:true}}>
          <img src={data.hero.img}
          className="sm:w-[35rem] max-sm:w-[23rem] max-md:mx-5 sm:h-95"
            alt="Vipin Pavithran, chief mentor and founder"/>
          <h1 className="md:text-[31px] text-center text-3xl mt-5">{data.hero.title}</h1>
          <p className="mt-3 text-[1.1rem] text-center">
            {data.hero.subtitle}
          </p>
        </motion.div>
        <motion.div
        className="flex-[3.75] md:pl-20 text-justify"
        variants={team1Varients} 
        transition={{ duration: 0.5, delay: 0.1 }}
        initial="initial"
        whileInView="animate"
        viewport={{once:true}}>
          {data.hero.description.map((desc, id) => {
            return (
              <p className="md:text-xl mt-5" key={id}>
                {desc}
              </p>
            );
          })}
          <p className="md:text-xl mt-5">"{data.hero.quote}"</p>  
        </motion.div>
      </div>
    </>
  );
};

export default teamHero;
