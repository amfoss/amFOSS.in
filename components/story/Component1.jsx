import React from "react";
import data from "@/content/ourstory.json";
import Title from "../ui/title";
import { motion } from "framer-motion";
const Component1 = () => {
  const storyVarients={
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
  }

  return (
    <>
      <motion.div className="w-full md:px-40 px-5 py-10"
      variants={storyVarients} 
      transition={{ duration: 0.5, delay: 0.1 }}
      initial="initial"
      whileInView="animate"
      viewport={{once:true}}
      >
        <Title title={data.first.title} />
        <div className="text-white md:text-xl tracking-wide md:my-20">
          {data.first.description.map((desc, index) => (
            <p key={index} className="my-10">
              {desc}
            </p>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Component1;
