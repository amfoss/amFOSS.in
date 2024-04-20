import React from "react";
import data from "@/content/gallery.json";
import Title from "../ui/title";
import { motion } from "framer-motion";
import Slider from "./slider";

const Component3 = () => {
  const galleryVariants={
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
  }
  return (
    <>
      <motion.div className="w-full md:px-40 px-5 py-10 mt-7"
      variants={galleryVariants} 
      transition={{ duration: 0.5, delay: 0.1 }}
      initial="initial"
      whileInView="animate"
      viewport={{once:true}}>
        <Title title={data.third.title} />
        <Slider sliderImageUrl={data.third.imageURLS}/>
      </motion.div>
    </>
  );
};

export default Component3;
