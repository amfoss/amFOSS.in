import React from "react";
import data from "@/content/branding.json";
import data1 from "@/content/primary.json";
import Title from "../ui/title";
import { motion } from "framer-motion";
import { handleDownload } from "@/lib/download.js";

const BulbWithText = () => {
  const galleryVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  };

  const team2Varients = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <>
      <motion.div
        className="w-full flex flex-col justify-center sm:py-12 mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16"
        variants={galleryVariants}
        transition={{ duration: 0.5, delay: 0.1 }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <Title title={data?.third?.title} />
      </motion.div>

      <motion.div
        className="w-full px-6 xs:px-8 sm:px-16 mx-auto max-w-screen-2xl mb-24"
        variants={team2Varients}
        transition={{ duration: 0.5, delay: 0.2 }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-xl overflow-hidden border border-neutral-800 min-h-[350px]">
          <div className="bg-black p-8 sm:p-12 flex flex-col items-center justify-center">
            <img
              src={data?.third?.imageURLS[0]?.url}
              alt={data?.third?.imageURLS[0]?.description || "White asset"}
              className="w-32 h-32 object-contain mb-6"
            />

            <button
              onClick={() =>
                handleDownload(
                  data?.third?.imageURLS[0]?.url,
                  "amfoss-bulb-text-white@3x.png",
                )
              }
              className="w-40 px-4 py-2 bg-zinc-50 text-black hover:bg-zinc-200 font-semibold rounded transition text-sm text-center"
            >
              Download Light
            </button>
          </div>

          <div className="bg-neutral-100 p-8 sm:p-12 flex flex-col items-center justify-center border-b border-neutral-800 lg:border-b-0 lg:border-r">
            <img
              src={data?.third?.imageURLS[1]?.url}
              alt={data?.third?.imageURLS[1]?.description || "Black asset"}
              className="w-32 h-32 object-contain mb-6"
            />

            <button
              onClick={() =>
                handleDownload(
                  data?.third?.imageURLS[1]?.url,
                  "amfoss-footer-white@3x ",
                )
              }
              className="w-40 px-4 py-2 bg-black text-white hover:bg-neutral-800 font-semibold rounded transition text-sm text-center"
            >
              Download Dark
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default BulbWithText;
