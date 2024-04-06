"use client"
import React from "react";
import data from "@/content/about.json";
import { useRouter } from "next/navigation";
import {motion} from 'framer-motion'

const Hero = () => {
  const router = useRouter();
  const aboutTitles={
    initial:{ opacity: 0, y: 50 },
    animate:{ opacity: 1, y: 0 }
  }

  return (
    <>
      <div className="w-full flex flex-col justify-center md:px-40 px-5 mb-20">
        <div className="w-full my-10">
        <motion.img
        src={data.hero.image}
        className="w-full"
        />

        </div>
        <motion.h1 className="text-justify text-white text-xl 2xl:text-3xl tracking-wide my-10"
        
        variants={aboutTitles} 
            transition={{ duration: 0.5, delay: 0.1 }}
            initial="initial"
            whileInView="animate"
            viewport={{once:true}}
        >
          {data.hero.description}
        </motion.h1>
        <div className="flex justify-center">
          <button
            onClick={() => router.push("/story")}
            className="text-2xl bg-[#D0A730] font-medium rounded-xl text-black w-fit px-10 py-2 tracking-wide mt-8 hover:text-white hover:bg-[#242424] transition duration-200"
          >
            {data.hero.button}
          </button>
        </div>
      </div>
    </>
  );
};

export default Hero;
