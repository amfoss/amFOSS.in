import React from "react";
import Title from "../ui/title";
import { motion } from "framer-motion";
import { Ban } from "lucide-react";

const ColorPaletteSection = ({ data }) => {
  const containerVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
  };

  // Official brand hex codes to avoid diluting amFOSS identity
  const restrictedColors = ["HEX 033368", "HEX A4123F", "HEX 000000"];

  return (
    <section className="w-full bg-[#181818] py-12 sm:py-16">
      {/* Title Header */}
      <motion.div
        className="w-full flex flex-col justify-center mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16"
        variants={containerVariants}
        transition={{ duration: 0.5, delay: 0.1 }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <Title title={data?.colorsSection?.title || "BRAND COLORS"} />
      </motion.div>

      {/* Main Content Grid */}
      <motion.div
        className="w-full px-6 xs:px-8 sm:px-16 mx-auto max-w-screen-2xl mt-8 text-white"
        variants={containerVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Color Swatches */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* amFOSS Gold Swatch (#FFC201) */}
            <div>
              <div className="bg-[#FFC201] text-black p-6 aspect-square flex flex-col justify-end space-y-4 rounded-xl shadow-md">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider opacity-80">
                    RGB
                  </p>
                  <p className="text-sm font-bold tracking-widest">
                    255 &nbsp;194 &nbsp;1
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider opacity-80">
                    HEX
                  </p>
                  <p className="text-sm font-bold tracking-widest">#FFC201</p>
                </div>
              </div>
              <p className="mt-3 text-sm font-bold uppercase tracking-wider text-neutral-200">
                AMFOSS GOLD
              </p>
            </div>

            {/* Dark Charcoal Swatch (#181818) */}
            <div>
              <div className="bg-[#181818] border-2 border-neutral-700/80 text-white p-6 aspect-square flex flex-col justify-end space-y-4 rounded-xl shadow-lg relative overflow-hidden">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider opacity-60 text-neutral-400">
                    RGB
                  </p>
                  <p className="text-sm font-bold tracking-widest">
                    24 &nbsp;24 &nbsp;24
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider opacity-60 text-neutral-400">
                    HEX
                  </p>
                  <p className="text-sm font-bold tracking-widest">#181818</p>
                </div>
              </div>
              <p className="mt-3 text-sm font-bold uppercase tracking-wider text-neutral-200">
                DARK CHARCOAL
              </p>
            </div>

          </div>

          {/* Right Column: amFOSS Palette Guidelines */}
          <div className="lg:col-span-6 space-y-6 lg:pl-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Primary & Accent Palette
            </h3>

            <p className="text-sm leading-relaxed text-neutral-300">
              The primary visual identity of amFOSS relies heavily on contrast, minimalism, and dark themes. While complementary shades can be used in event posters and graphics, avoid using colors that clash with our official identity or mirror parent institutional brandings directly. <strong className="font-bold text-white">Clean, high-contrast typography with minimal color accents defines our open-source aesthetic.</strong>
            </p>

            {/* Restricted Color Cards */}
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">
                Avoid Overusing Primary Institutional Shades
              </p>
              <div className="grid grid-cols-3 gap-3">
                {restrictedColors.map((hex, index) => (
                  <div
                    key={index}
                    className="border border-neutral-800 bg-[#0d0d0d] rounded-xl p-4 flex flex-col justify-between items-start space-y-6 shadow-inner"
                  >
                    <Ban className="w-5 h-5 text-red-500 stroke-[1.5]" />
                    <span className="text-xs font-bold text-neutral-300 tracking-tight">
                      {hex}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default ColorPaletteSection;