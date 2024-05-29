"use client";
import React from "react";
import ContactDetails from "@/components/contact/ContactDetails";
import { motion } from 'framer-motion'

const Contact = () => {
  const baseText = "CONTACT US";
  return (
    <div className="mx-[4vw]">
      <div className="overflow-hidden mt-5 sm:mt-20">
        <div className="flex-col flex-center justify-center items-center px-5 md:mt-3 md:px-20 md-custom:px-40 ">
          <div className="sm:pb-10 md:pb-20 text-left max-w-screen-2xl">
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
          </div>
        </div>
        {/* Contact Details */}
        <ContactDetails />
      </div>
    </div>
  );
};

export default Contact;
