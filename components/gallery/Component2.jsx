import React from "react";
import data from "@/content/gallery.json";
import Title from "../ui/title";
import { motion } from "framer-motion";
import Slider from "./slider";

const Component2 = () => {
  const galleryVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
  }

  return (
    <>
      <motion.div
        variants={galleryVariants}
        transition={{ duration: 0.5, delay: 0.1 }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="mt-10">
          <Title title={data.second.title} />
          <Slider sliderImageUrl={data.second.imageURLS} />
        </div>
      </motion.div>
    </>
  );
};

export default Component2;
