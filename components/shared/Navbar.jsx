"use client";
import Image from "next/image";
import Link from "next/link";
import NavbarData from "@/content/navbartab.json";
import Socials from "@/content/socials.json";
import { useState, useEffect } from "react";
import MenuDrawer from "./MenuDrawer";
import { motion, useScroll } from "framer-motion";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [navColor, setNavColor] = useState(false)
  const { scrollY } = useScroll();

  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  function handleNavColor(latest) {
    setNavColor((prevNavColor) => {
      if (latest+93 <= window.innerHeight && prevNavColor === true) {
        return false;
      } else if (latest+93 > window.innerHeight && prevNavColor === false) {
        return true;
      }
      return prevNavColor;
    });
  }
  
  useEffect(() => {
    const handleScroll = () => {
      const latest = window.scrollY;
      const previous = scrollY.getPrevious();
      if (latest > previous && latest > 150) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      if (isDrawerOpen && window.innerHeight>424) {
        closeDrawer();
      }
      handleNavColor(latest);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isDrawerOpen, scrollY]);
  
  return (
    <>
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`sticky ${navColor==true?'bg-navbar':'bg-gradient-to-b from-navbar'} flex top-0 z-50 w-full justify-around py-6 text-white`}>
      <div className="flex justify-between item-center w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16">
        <Link href="/">
          <Image
            src="/assets/icons/logo_white.svg"
            width={170}
            height={170}
            alt="amFOSS logo"
            className="max-sm:w-[100px]"
          />
        </Link>

          <Image
            src="/assets/icons/hamburger-menu.svg"
            width={25}
            height={25}
            alt="Hamburger menu"
            className="block cursor-pointer md-nav:hidden"
            onClick={openDrawer}
          />
          <ul className="flex items-center text-l gap-x-1 max-md-nav:hidden md-nav:gap-x-3 xl:gap-8 max-lg:gap-x-10">
            {NavbarData.map((tab, index) => (
              <li key={index} className="relative group">
                <Link
                  href={tab.ref}
                  className="p-2 transition duration-200 relative text-xl"
                >
                  {tab.title}
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-px bg-white transition-width duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex items-center text-l max-md-nav:hidden md-nav:gap-x-3 xl:gap-6">
            {Socials.map((social, index) => (
              <li key={index}>
                <Link href={social.ref}>
                  <Image
                    src={social.image}
                    width={22}
                    height={22}
                    alt={social.title}
                    className="hover:animate-pulse cursor-pointer transition duration-200"
                  />
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex items-center text-l max-md-nav:hidden ">
            <Link href={"https://join.amfoss.in/"} target={"_blank"}>
              <button className="group relative inline-flex items-center overflow-hidden rounded-[5px] border-2 border-[#D0A730] xl:px-4 xl:py-2  md-nav:px-2 md-nav:py-1 md-nav:ml-2 text-lg font-medium hover:bg-gray-50 hover:text-white">
                <span className="duration-400 ease absolute left-0 top-1/2 block h-0 w-full bg-[#D0A730] opacity-100 transition-all group-hover:top-0 group-hover:h-full"></span>
                <span className="ease absolute right-0 flex h-10 w-10 translate-x-full transform items-center justify-start duration-500 group-hover:-translate-x-1/2">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="relative transform duration-300 group-hover:-translate-x-28">JOIN US</span>
              </button>
            </Link>
          </ul>



        </div>
      </motion.nav>
      <MenuDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </>
  );
};

export default Navbar;
