import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import NavbarData from "@/content/navbartab.json";
import Socials from "@/content/socials.json";
import dayjs from "dayjs";
import { motion, AnimatePresence } from 'framer-motion';

const MenuDrawer = ({ isOpen, onClose }) => {
  const sideNavRef = useRef(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function handleClickOutside(event) {
    if (sideNavRef.current && !sideNavRef.current.contains(event.target)) {
      handleClose();
    }
  }

  function handleScroll() {
      if (isOpen && window.innerHeight>424) {
        handleClose();
      }
  }

  function handleClose() {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 600);
  }

  return (
    <AnimatePresence>
      {isOpen && !isClosing && (
        <motion.div
          className={`fixed inset-0 bg-black bg-opacity-50 z-50 text-white`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              delay: 0.2,
              duration: 0.2,
              ease: "easeOut",
            },
          }}
        >
          <motion.div
            ref={sideNavRef}
            className={`flex flex-col fixed inset-y-0 right-0 max-w-full h-screen w-3/4 bg-[#0f0f0f] overflow-y-auto transform ${isOpen ? "translate-x-0" : "-translate-x-full"
              } duration-500`}
            animate={{
              width: isOpen && !isClosing ? '60%' : 0,
            }}
            initial={{
              width: 0,
            }}
            transition={{
              delay: 0.2,
              ease: "easeIn",
              bounce: 0,
              duration: 0.2,
            }}
            exit={{
              width: 0,
              transition: {
                delay: 0.2,
                duration: 0.2,
                ease: "easeOut",
              },
            }}
          >
            <div className="p-4 mt-2 flex justify-between">
              <Image
                src="/assets/icons/amfoss_bulb_white.svg"
                width={25}
                height={25}
                alt="white bulb"
                className="cursor-pointer hover:animate-bounce transition duration-200"
              />
              <button onClick={handleClose} className="text-gray-600">
                <Image
                  src="/assets/icons/close.svg"
                  width={30}
                  height={30}
                  alt="Close menu"
                  className="cursor-pointer mr:5 md:mr-10 transition duration-200"
                />
              </button>
            </div>
            <div className="flex flex-grow overflow-hidden">
              <ul className={`flex flex-col w-full items-start max-sm:text-lg text-2xl gap-y-4 p-4 max-h- overflow-y-auto mt-[5vh]`}>
                {NavbarData.map((tab, index) => (
                  <motion.li
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      staggerChildren: 0.1,
                      delay: 0.1 * (index + 1),
                      ease: "easeOut",
                    }}
                    viewport={{ once: false }}
                  >
                    <Link
                      href={tab.ref}
                      className="p-2 transition duration-200 relative"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClose();
                      }}
                    >
                      {tab.title}
                      <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-white transition-width duration-300 group-hover:w-full"></span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="flex items-center bottom-16 text-l gap-x-6 px-4 pt-1">
                {Socials.map((social, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      staggerChildren: 0.1,
                      delay: 0.1 * (index + 1),
                      ease: "easeOut",
                    }}
                    viewport={{ once: false }}
                  >
                    <Link
                      href={social.ref}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleClose();
                      }}
                    >
                      <Image
                        src={social.image}
                        width={25}
                        height={25}
                        alt={social.title}
                        className="hover:animate-pulse cursor-pointer transition duration-200"
                      />
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className=" p-4 text-gray-500 text-lg max-sm:text-sm">
                © Team amFOSS 2007-{dayjs().year()}. All Rights Reserved.
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MenuDrawer;
