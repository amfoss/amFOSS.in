import React from "react";
import { useRef, useState, useEffect } from "react";
import Image from 'next/image';
import { motion } from "framer-motion";

const ScrollDownButton = ({ targetRef }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsVisible(false);
        } else {
            setIsVisible(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => {
        targetRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="absolute bottom-14 right-14 cursor-pointer hidden md:flex"
            onClick={handleClick}
        >
            <div className="md:text-xl text-[#D0A730] mr-2">
                Read More
            </div>
            <Image src="/assets/icons/down-arrow.svg" width={32} height={32} alt="Arrow icon"/>
        </motion.div>
    );
};

export default ScrollDownButton;