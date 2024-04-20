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
      <motion.div className="w-full md:px-40 px-5 bg-[#242424] py-3"
      variants={storyVarients} 
      transition={{ duration: 0.5, delay: 0.1 }}
      initial="initial"
      whileInView="animate"
      viewport={{once:true}}
      >
        <div className="mt-10">
        <Title title={data.second.title} />
        <img src={data.second.image} className="my-10" />
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
