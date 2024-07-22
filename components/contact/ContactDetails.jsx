import React from "react";
import data from "@/content/contact.json";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion'
const ContactDetails = () => {
    const contact1Varients = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 }
    }
    const contact2Varients = {
        initial: { opacity: 0, x: -50 },
        animate: { opacity: 1, x: 0 }
    }
    return (
        <>
            <div className="grid sm:grid-cols-4 md-custom:grid-cols-5 grid-cols-1 md:mx-10 px-6 py-10 sm:pb-20 sm:pt-0 text-white">
                <motion.div className="text-left sm:col-span-2 self-end"
                    variants={contact1Varients}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}>
                    <Image
                        src="/assets/icons/socials/mail.svg"
                        width={40}
                        height={40}
                        alt="Mail Us"
                        className="cursor-pointer mr:5 md:mr-10 transition duration-200 "
                    />
                    {data.contact.address1.map((desc, id) => {
                        return (
                            <p className="text-xl md:text-xl ml-1 mt-2" key={id}>
                                {desc}
                            </p>
                        );
                    })}
                </motion.div>
                <motion.div className="hidden md-custom:block m-auto"
                    variants={contact2Varients}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}>
                    <img src={data.contact.img} width={155}
                        height={155}
                        alt="white bulb" />
                </motion.div>
                <motion.div className="py-10 sm:py-0 text-left sm:text-right sm:col-span-2 self-end"
                    variants={contact1Varients}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}>
                    <Image
                        src="/assets/icons/socials/location.svg"
                        width={40}
                        height={40}
                        alt="Location"
                        className="cursor-pointer sm:m-auto object-left mr:5 sm:mr-0 transition duration-200 "
                    />
                    {data.contact.address2.map((desc, id) => {
                        return (
                            <p className="text-xl md:text-xl ml-1 mt-2" key={id}>
                                {desc}
                            </p>
                        );
                    })}
                </motion.div>
                <div className="sm:col-span-2 sm:col-start-2 md-custom:col-span-3 md-custom:col-start-2 ml-1 md:pt-2 pb-5 sm:m-auto">
                    <ul className="flex items-center bottom-16 text-l gap-x-6 md:gap-x-10 pt-5 sm:pt-10 md-custom:p-3">
                        {data.contact.socials.map((social, index) => (
                            <motion.li key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    staggerChildren: 0.1,
                                    delay: 0.1 * (index + 1),
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true }}
                            >
                                <Link href={social.ref}>
                                    <Image
                                        src={social.url}
                                        width={social.width}
                                        height={social.height}
                                        alt={`Icon for ${social.name}`}
                                        className="hover:animate-pulse cursor-pointer transition duration-200"
                                    />
                                </Link>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* <div className="grid grid-cols-1 sm:grid-cols-2 py-2 sm:py-4 md:px-8 bg-[#2e2e2e]">
                <div className="mt-7 lg:mt-4 place-self-center sm:place-self-start sm:ml-8">
                    <Image
                        src="/assets/icons/amrita-white.png"
                        width={180}
                        height={180}
                        alt="Amrita University"
                        className="cursor-pointer transition duration-200 "
                    />
                </div>

                <div className="p-5 text-white text-lg text-center max-sm:text-sm mt-1 place-self-center sm:place-self-end">
                    © Team amFOSS 2007-{dayjs().year()}. All Rights Reserved.
                </div>

            </div> */}
        </>
    );
};

export default ContactDetails;
