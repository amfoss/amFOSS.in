"use client";
import Image from "next/image";
import Link from "next/link";
import NavbarData from "@/content/navbartab.json";
import Socials from "@/content/socials.json";
import { useState } from "react";
import MenuDrawer from "./MenuDrawer";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const openDrawer = () => {
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="sticky bg-navbar flex top-0 z-50 w-full justify-around py-6 text-white">
      <div className="flex justify-between item-center w-full max-w-screen px-6 xs:px-8 sm:px-16">
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
        <ul className="flex items-center text-l gap-x-1 max-md-nav:hidden md-nav:gap-x-8 max-lg:gap-x-10">
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

        <ul className="flex items-center text-l max-md-nav:hidden md-nav:gap-x-6">
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
      </div>
      <MenuDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </motion.nav>
  );
};

export default Navbar;
