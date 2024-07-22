import React from "react";
import data from "@/content/about.json";
import Title from "../ui/title";
import {motion } from 'framer-motion';

const Modus = () => {
  const about1Varients={
    initial:{ opacity: 0, x: 50 },
    animate:{ opacity: 1, x: 0 }
  }
  const about2Varients={
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
  }
  return (
    <>
      <div className="w-full flex flex-col justify-center mx-auto max-w-screen-2xl px-6 lg:py-24 sm:pt-48 xs:px-8 sm:px-16 text-justify space-y-12">
        <div>
          <motion.img src={data.modus.image} className="w-full" 
          alt="amFOSS lab"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          />
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 text-white">
          <motion.div className="flex flex-col md:col-span-3 col-span-1 sm:mt-10 mb-10"
          variants={about2Varients} 
          transition={{ duration: 0.5, delay: 0.1 }}
          initial="initial"
          whileInView="animate"
          viewport={{once:true}} 
          >
            <Title title={data.modus.title} />
          </motion.div>
          {data.modus.items.map((cont, index) => (
            <>
              <motion.div key={index} className="text-2xl lg:text-3xl 2xl:text-3xl md:my-20 w-full tracking-[0.2em] text-yellow-400"
               variants={about2Varients} 
                transition={{ duration: 0.5, delay: 0.1 * index }}
                initial="initial"
                whileInView="animate"
                viewport={{once:true}}
              >
                {cont.title}
              </motion.div>

              <motion.div key={index} className="md:col-span-2 col-span-1 md:text-xl lg:text-2xl md:my-20 my-5"
                variants={about2Varients} 
                transition={{ duration: 0.5, delay: 0.1 * index}}
                initial="initial"
                whileInView="animate"
                viewport={{once:true}}
              >
                {cont.description}
              </motion.div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Modus;
