"use client";

import React from "react";
import { motion } from 'framer-motion';
import ScrollDownButton from "@/components/shared/ScrollDown";
import useScrollRef from "@/lib/hooks/useScrollRef";
import Primary from "@/components/branding/Primary";
import Bulb from "@/components/branding/Bulb";
import BulbWithText from "@/components/branding/BulbText";
import Footer from "@/components/shared/Footer";
import FossFooter from "@/components/branding/FossFooter";
import ColorPalette from "@/components/branding/ColorPalette";
import Contact from "../contact/page";
import DownloadKit from "@/components/branding/DownloadKit";

function Branding(){
    const {scrollRef} = useScrollRef();
    const baseText = "BRANDING";

    return(
        <>
        <div className="flex-col flex-center justify-center items-center">
        <div className="max-sm:py-8 md:text-left text-center max-md:justify-center md:py-32 py-72 md:h-screen mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16 flex items-center">
          <h1 className="text-7xl max-md-custom:text-5xl max-sm:text-3xl tracking-wide leading-[110px]">
            {baseText.split("").map((word, index) => (
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
                  delay: index * 0.02,
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <ScrollDownButton targetRef={scrollRef} />
          
        </div>
      </div>
      <div ref={scrollRef} >
            <Primary/>
            <Bulb/>
            <BulbWithText/>
            <FossFooter/>
            <ColorPalette/>
            <DownloadKit/>
      </div>
      <div className='md:pt-38'><Contact /></div>
        </>
    );
}

export default Branding;