"use client"
import React from "react";
import data from "@/content/about.json";
import { useRouter } from "next/navigation";
import { motion } from 'framer-motion'

const Hero = () => {
  const router = useRouter();
  const aboutTitles = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 }
  }

  return (
    <>
      <div className="w-full flex flex-col justify-center sm:pb-24 mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16 mb-16">
        <div className="w-full my-10">
          <motion.img
            alt="Group photo with founder Vipin Pavithran at FOSS-bi0S Night event"
            src={data.hero.image}
            className="w-full"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          />

        </div>
        <motion.h1 className="text-center sm:text-start text-white text-2xl 2xl:text-2xl my-8"

          variants={aboutTitles}
          transition={{ duration: 0.5, delay: 0.1 }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {data.hero.description}
        </motion.h1>
        <div className="grid lg:grid-cols-5 md:grid-cols-4 place-items-center md:place-items-start">
          <div className="col-span-5 sm:col-span-2 md:col-span-2 lg:col-span-1 sm:mr-2">
            <button
              onClick={() => router.push("/story")}
              className="text-2xl bg-[#D0A730] font-medium rounded-xl text-black w-fit px-8 py-2 tracking-wide mt-8 hover:text-[#D0A730] hover:bg-transparent border-solid border-2 border-[#D0A730] transition duration-200"
            >
              {data.hero.button1}
            </button>
          </div>
          <div className="col-span-5 sm:col-span-2 md:col-span-2 sm:ml-2 lg:col-span-1">
            <button
              onClick={() => router.push("/team")}
              className="text-2xl font-medium rounded-xl text-[#D0A730] w-fit px-8 py-2 tracking-wide mt-8 hover:text-black hover:bg-[#D0A730] border-solid border-2 border-[#D0A730] transition duration-200"
            >
              {data.hero.button2}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
