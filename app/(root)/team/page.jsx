"use client";
import React from "react";
import { useRef } from "react";
import TeamHero from "@/components/team/teamHero";
import MembersAndAlumni from "@/components/team/membersAndAlumni";
import { motion } from 'framer-motion'
import Contact from "../contact/page";
import ScrollDownButton from "@/components/shared/ScrollDown";

const page = () => {
  const baseText = "MEET THE TEAM";
  const scrollRef = useRef(null);
  const imgVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
  }
  return (
    <>
      <div className="flex-col flex-center justify-center items-center">
        <div className="max-sm:py-8 md:text-left text-center max-md:justify-center md:py-32 py-72 md:h-screen mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16 flex items-center">
          <h1 className="text-7xl max-md-custom:text-5xl max-sm:text-3xl tracking-wide leading-[110px]">
            {baseText.split(" ").map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  initial: {
                    opacity: 0,
                    y: 20,
                  },
                  animate: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                {word + " "}
              </motion.span>
            ))}
          </h1>
          <ScrollDownButton targetRef={scrollRef} />
        </div>
      </div>
      <div ref={scrollRef} className="md:mt-6 min-[1700px]:mt-28"/>
      <TeamHero />

      <div className="w-full flex justify-center items-center my-20">
        <motion.img
          variants={imgVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          src="/assets/images/team.jpg"
          className="md:w-[50rem] sm:w-[35rem] w-[23rem] mx-5 md:h-[35rem] sm:h-95 h-[45] md:px-3"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        />

      </div>
      <MembersAndAlumni contentFor="members" />
      <MembersAndAlumni contentFor="alumni" />
      <Contact />
    </>
  );
};

export default page;
