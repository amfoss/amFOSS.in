"use client";
import React from 'react'
import { useRef } from 'react'
import herotext from '@/content/homehero.json'
import whoweare from '@/content/whoweare.json'
import Contact from '../contact/page';
import Title from '@/components/ui/title'
import Dynamicard from '@/components/ui/dynamicard'
import whatwedo from '@/content/whatwedo.json'
import Achievement from '@/components/ui/achievement'
import achievement from '@/content/firsttodo.json'
import { motion } from 'framer-motion'
import companies_data from "@/content/companies";
import summerschools_data from "@/content/summerschools";
import InfiniteSlider from '@/components/achievements/infiniteSlider';
import ScrollDownButton from '@/components/shared/ScrollDown';

const page = () => {
  const baseText = herotext.hero;
  const scrollRef = useRef(null);

  const clubLife1Varients = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 }
  }
  const clubLife2Varients = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
  }

  const companies_slices = [
    { data: companies_data, direction: true },
  ];

  const summerschool_slices = [
    { data: summerschools_data, direction: false },
  ];

  const imageVarients={
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
  }

  return (
    <div className="flex-col flex-center justify-center overflow-clip items-center">
      <div className="max-sm:py-8 md:text-left text-center max-md:justify-center md:py-32 py-72 md:h-screen mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16 flex items-center">
        <h1 className="text-7xl max-md-custom:text-5xl max-sm:text-3xl tracking-wide leading-[110px] md:text-left">
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
                delay: index * 0.01,
              }}
            >
              {word + " "}
            </motion.span>
          ))}
        </h1>
        <ScrollDownButton targetRef={scrollRef}/>
      </div>
      <div ref={scrollRef}>
      <div className="bg-[#1E1D1D] flex items-center relative">
        <div className="grid grid-cols-3 py-16 max-sm:py-16 mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16">
          <div className="flex items-start md:mt-8 col-span-2 md:col-span-1">
            <motion.div className="flex flex-col col-span-1 sm:mb-8 md:mt-0 mt-4"
              variants={clubLife2Varients}
              transition={{ duration: 0.5, delay: 0.1 }}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}>
              <Title title="WHO WE ARE" />
            </motion.div>
          </div>
          <motion.div className="col-span-2 max-md-grid:col-span-3 col-start-2"
            variants={clubLife1Varients}
            transition={{ duration: 0.5, delay: 0.05 }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}>
            <br />
            <p className="text-xl md-grid:text-2xl md:mt-8 max-sm:text-sm text-white text-justify tracking-wide">
              {whoweare.desc1}
              <br /> <br />
              {whoweare.desc2}
            </p>
          </motion.div>
        </div>
      </div>
      <div className='bg-[#1E1D1D]'>
        <motion.img 
            src={whoweare.image} 
            alt='Club members group photo'
            className="w-full max-w-[70rem] max-h-[42rem] object-cover max-w-screen-2xl mx-auto md:py-10 pb-10 md:pb-20 xl:mb-10 px-6 xs:px-8 sm:px-16"          
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            loading='lazy'
            />
        </div>  
      <div className="py-12 sm:py-48 mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <motion.div
          variants={clubLife2Varients}
          transition={{ duration: 0.5, delay: 0.1 }}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        ><Title title="WHAT WE DO" /></motion.div>
        <div className="grid grid-cols-2 gap-1 pt-8 sm:pt-16">
          {whatwedo.map((item, index) => (
            <motion.div key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                staggerChildren: 0.1,
                delay: 0.1 * index,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            ><Dynamicard
                title={item.title}
                description={item.desc}
              /></motion.div>
          ))}
        </div>
      </div>

      <div className="bg-[#1E1D1D] flex items-center relative block">
        <div className="py-12 bg-[#1E1D1D] sm:pt-24 mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16">
          <motion.div
            variants={clubLife2Varients}
            transition={{ duration: 0.5, delay: 0.1 }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          ><Title title="OUR ALUMNI ARE AT" /></motion.div>
          <motion.div className="text-2xl lg:text-3xl pt-8 2xl:text-3xl md:my-20 w-full tracking-[0.2em]"
            variants={clubLife2Varients}
            transition={{ duration: 0.5, delay: 0.1 }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            COMPANIES
          </motion.div>
          <div
            className={`overflow-hidden duration-1000 ease-in-out
        }`}
          >
            {companies_slices.map((slice, index) => (
              <div className="py-12 pr-1">
                <InfiniteSlider
                  // key={index}
                  data={slice.data}
                  direction={slice.direction}
                />
              </div>
            ))}
          </div>

          <motion.div className="text-2xl lg:text-3xl 2xl:text-3xl md:my-10 w-full tracking-[0.2em]"
            variants={clubLife2Varients}
            transition={{ duration: 0.5, delay: 0.1 }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            UNIVERSITIES
          </motion.div>

          <div
            className={`overflow-hidden transition-opacity transition-height duration-1000 ease-in-out`}
          >
            {summerschool_slices.map((slice, index) => (
              <div className="py-12 pr-1">
                <InfiniteSlider
                  // key={index}
                  data={slice.data}
                  direction={slice.direction}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

        <div className="mx-auto max-w-screen-2xl px-6 pt-12 sm:pt-48 xs:px-8 sm:px-16">
          <div className="flex flex-wrap">
            <div className="w-full md-custom:w-1/2 lg:w-1/3 px-4 md-custom:mb-24 lg:mb-8">
              <h1 className="sticky top-36 text-4xl text-start tracking-wide">
                Members of amFOSS were the first in Amritapuri to
              </h1>
            </div>
            <div className="w-full md-custom:w-1/2 lg:w-2/3 flex flex-wrap">
              {achievement.map((item, index) => (
                <div key={index} className="w-1/2 px-6 mb-8 mt-3">
                  <Achievement
                    achievement={item.Achievement}
                    event={item.Event}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='pt-5 md:pt-40'><Contact /></div>
      </div>
    </div>
  )
}

export default page