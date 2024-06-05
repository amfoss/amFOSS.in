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
    { data: companies_data.slice(0, 18), direction: false },
    { data: companies_data.slice(19, 35), direction: false },
  ];

  const summerschool_slices = [
    { data: summerschools_data.slice(0, 6), direction: false },
    { data: summerschools_data.slice(7, 14), direction: false },
  ];

  const imageVarients={
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 }
  }

  return (
    <div className="flex-col flex-center justify-center overflow-hidden items-center">
      <div className="max-sm:py-8 text-center py-72 md:min-h-screen mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16">
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
            className="w-full max-w-screen-2xl mx-auto md:py-10 pb-10 md:pb-20 xl:mb-10 px-6 xs:px-8 sm:px-16"          
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            />    
        </div>  
      {/* <div className="flex-col flex-center mx-auto sm:py-48 ">
        <div className="flex gap-2">
          <Image
            src="/home_1.png"
            width={985}
            height={175}
            alt="image 1"
          />
          <Image
            src="/home_2.png"
            width={423}
            height={175}
            alt="image 2"
          />
        </div>
        <div className="flex gap-2 py-2">
          <Image
            src="/home_3.png"
            width={844}
            height={175}
            alt="image 3"
          />
          <Image
            src="/home_4.png"
            width={564}
            height={175}
            alt="image 4"
          />
        </div>
      </div> */}
      <div className="py-12 sm:py-16 sm:mb-10 mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16">
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
                  key={index}
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
            SUMMER SCHOOLS
          </motion.div>

          <div
            className={`overflow-hidden transition-opacity transition-height duration-1000 ease-in-out`}
          >
            {summerschool_slices.map((slice, index) => (
              <div className="py-12 pr-1">
                <InfiniteSlider
                  key={index}
                  data={slice.data}
                  direction={slice.direction}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-screen-2xl px-6 pt-12 sm:pt-48 xs:px-8 sm:px-16">
        <h1 className="text-3xl md-custom:text-7xl sm:text-4xl text-start tracking-wide">
          Members of amFOSS were the
          <br />
          first in Amritapuri to
        </h1>
        <div className="py-12 sm:py-25">
          {achievement.map((item, index) => (
            <div
              key={index}
              className={`w-1/2 md-custom:w-1/3 max-sm:w-full mb-8 ${index % 3 === 0
                  ? "mr-auto"
                  : index % 3 === 1 
                    ? "ml-auto"
                    : "mx-auto"
                }`}
            >
              <Achievement achievement={item.Achievement} event={item.Event} />
            </div>
          ))}
        </div>
      </div>
      <Contact />
    </div>
    </div>
  )
}

export default page