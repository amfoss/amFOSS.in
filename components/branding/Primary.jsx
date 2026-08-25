import React from "react";
import data from "@/content/branding.json";
import data1 from "@/content/primary.json";
import Title from "../ui/title";
import { motion } from "framer-motion";
import { handleDownload } from "@/lib/download.js";

const Primary = () => {
  const galleryVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  };

  const team2Varients = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.div
        className="w-full flex flex-col justify-center sm:py-12 mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16"
        variants={galleryVariants}
        transition={{ duration: 0.5, delay: 0.1 }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <Title title={data?.first?.title} />
      </motion.div>

      <motion.div
        className="w-full flex-1 flex flex-col mt-6 justify-center items-center px-6 xs:px-8 sm:px-16 mx-auto max-w-screen-2xl mb-24"
        variants={team2Varients}
        transition={{ duration: 0.5, delay: 0.1 }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center gap-6 w-full max-w-4xl mx-auto">
          <div className="flex justify-center lg:justify-start">
            <img
              src={data?.first?.imageURLS[0]?.url}
              className="max-md:mx-5 object-contain"
              alt={data1?.first?.imageURLS[0]?.description || "icon"}
              width={200}
              height={200}
            />
          </div>
          <div className="flex flex-col items-center lg:items-end gap-3 mt-4 lg:mt-0 lg:self-center">
            <button 
            onClick={() => handleDownload(data?.first?.imageURLS[0]?.url, "amfoss-white-full.png")}
            className="w-40 px-4 py-2 border border-white text-white font-semibold rounded hover:bg-white hover:text-black transition text-sm whitespace-nowrap text-center">
              PNG: White
            </button>
            <button 
            onClick={() => handleDownload(data?.first?.imageURLS[1]?.url, "amfoss-full-black@3x.png")}
            className="w-40 px-4 py-2 bg-black border border-neutral-700 text-white font-semibold rounded hover:bg-neutral-900 transition text-sm whitespace-nowrap text-center">
              PNG: Black
            </button>

            <button 
            onClick={() => handleDownload(data?.first?.imageURLS[2]?.url, "amfoss_svg_full.svg")}
            className="w-40 px-4 py-2 bg-[#FFC107] text-black font-semibold rounded hover:bg-yellow-400 transition text-sm whitespace-nowrap text-center">
              SVG: Full
            </button>
          </div>
        </div>

        {/* <h1 className="md:text-[31px] text-center text-3xl mt-5">
          {data1?.icon1?.title}
        </h1> */}
      </motion.div>
    </>
  );
};

export default Primary;
