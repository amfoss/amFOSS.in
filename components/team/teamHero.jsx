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
      <div className="grid md:grid-cols-4 grid-cols-1 md:px-10 px-5 text-white">
        <motion.div className="w-full flex flex-col justify-center items-center mt-6"
        variants={team2Varients} 
        transition={{ duration: 0.5, delay: 0.1 }}
        initial="initial"
        whileInView="animate"
        viewport={{once:true}}>
          <img src={data.hero.img} alt="team" />
          <h1 className="md:text-4xl text-center text-3xl mt-5">{data.hero.title}</h1>
          <p className="mt-3 text-[1.1rem] text-center">
            {data.hero.subtitle}
          </p>
        </motion.div>
        <motion.div className="md:col-span-3 col-span-1 px-5 text-justify"
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
