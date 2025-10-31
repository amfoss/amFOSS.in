"use client";

import React from "react";
import TeamHero from "@/components/team/teamHero";
import { motion } from 'framer-motion';
import ScrollDownButton from "@/components/shared/ScrollDown";
import useScrollRef from '@/lib/hooks/useScrollRef';
import useAnimationVariants from '@/lib/hooks/useAnimationVariants';

const TeamHeroSection = () => {
    const baseText = "MEET THE TEAM";
    const { scrollRef } = useScrollRef();
    const { imageVariants: imgVariants, textAnimationVariants } = useAnimationVariants();

    return (
        <>
            <div className="flex-col flex-center justify-center items-center">
                <div className="max-sm:py-8 md:text-left text-center max-md:justify-center md:py-32 py-72 md:h-screen mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16 flex items-center">
                    <h1 className="text-7xl max-md-custom:text-5xl max-sm:text-3xl tracking-wide leading-[110px]">
                        {baseText.split(" ").map((word, index) => (
                            <motion.span
                                key={index}
                                variants={textAnimationVariants}
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
            {/* The scrollRef target must be inside this component */}
            <div ref={scrollRef} className="md:mt-6 min-[1700px]:mt-28" />
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
        </>
    );
};

export default TeamHeroSection;