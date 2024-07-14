import React from "react";
import data from "@/content/gallery.json";
import Title from "../ui/title";
import { motion } from "framer-motion";
import Slider from "./slider";

const Component1 = () => {
  const galleryVariants={
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
  }

  return (
    <>
      <motion.div className="w-full flex flex-col justify-center sm:py-12 mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16"
      variants={galleryVariants} 
      transition={{ duration: 0.5, delay: 0.1 }}
      initial="initial"
      whileInView="animate"
      viewport={{once:true}}
      >
        <Title title={data.first.title} />
        <Slider sliderImageUrl={data.first.imageURLS} showDescription={true}/>
      </motion.div>
    </>
  );
};

export default Component1;
