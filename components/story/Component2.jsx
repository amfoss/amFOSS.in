import React from "react";
import data from "@/content/ourstory.json";
import Title from "../ui/title";
import { motion } from "framer-motion";

const Component2 = () => {
  const storyVarients={
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
  }

  return (
    <>
      <motion.div className="text-justify w-full flex flex-col justify-center sm:pb-24 mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16"
      variants={storyVarients} 
      transition={{ duration: 0.5, delay: 0.1 }}
      initial="initial"
      whileInView="animate"
      viewport={{once:true}}
      >
        <div>
        <Title title={data.second.title} />
        <motion.img 
            src={data.second.image} 
            className="my-10"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            loading='lazy'
            />
        <div className="text-white md:text-xl tracking-wide md:my-20">
          {data.second.description.map((desc, index) => (
            <p key={index} className="my-10">
              {desc}
            </p>
          ))}
        </div>
        </div>
      </motion.div>
    </>
  );
};

export default Component2;
