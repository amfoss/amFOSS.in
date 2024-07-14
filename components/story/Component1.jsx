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
      <motion.div className="text-justify w-full flex flex-col justify-center sm:pb-20 mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16 md:pt-32"
      variants={storyVarients} 
      transition={{ duration: 0.5, delay: 0.1 }}
      initial="initial"
      whileInView="animate"
      viewport={{once:true}}
      >
        <Title title={data.first.title} />
        <div className="text-white md:text-xl tracking-wide md:mb-20">
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
