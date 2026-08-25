"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Loader2 } from "lucide-react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const DownloadKitSection = () => {
  const [isZipping, setIsZipping] = useState(false);

  // File paths mapped directly to your public directory
  const brandingFiles = [
    "/assets/branding/logos/png/amfoss-bulb-text-black@3x.png",
    "/assets/branding/logos/png/amfoss-bulb-text-white@3x.png",
    "/assets/branding/logos/png/amfoss-bulb-white@3x.png",
    "/assets/branding/logos/png/amfoss-footer-black@3x.png",
    "/assets/branding/logos/png/amfoss-footer-white@3x.png",
    "/assets/branding/logos/png/amfoss-full-black@3x.png",
    "/assets/branding/logos/png/amfoss-white-full.png",
    "/assets/branding/logos/png/amrita-pink.png",
    "/assets/branding/logos/png/amrita-white.png",
    "/assets/branding/logos/svg/amfoss_svg_full.svg",
    "/assets/branding/logos/svg/amrita-logo.svg",
    "/assets/branding/amfoss_cover.jpeg",
    "/assets/branding/amFOSS.png",
  ];

  const handleDownloadZip = async () => {
    setIsZipping(true);
    const zip = new JSZip();

    try {
      const downloadPromises = brandingFiles.map(async (filePath) => {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`Failed to fetch ${filePath}`);

        const blob = await response.blob();

        // Preserve original folder organization inside the ZIP archive
        const relativePath = filePath.replace("/assets/branding/", "");
        zip.file(relativePath, blob);
      });

      await Promise.all(downloadPromises);

      const content = await zip.generateAsync({ type: "blob" });
      saveAs(content, "amfoss-brand-kit.zip");
    } catch (error) {
      console.error("Error generating ZIP file:", error);
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <section className="w-full bg-[#242424] py-16 border-t border-neutral-800">
      <motion.div
        className="w-full mx-auto max-w-screen-2xl px-6 xs:px-8 sm:px-16"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="bg-[#0d0d0d] border border-neutral-800 rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-tight text-white mb-2">
              Download Complete Kit
            </h3>
            <p className="text-sm text-neutral-400 max-w-xl">
              Download our official design assets and brand guidelines bundled
              for event posters, press releases, and digital media.
            </p>
          </div>

          <button
            onClick={handleDownloadZip}
            disabled={isZipping}
            className="px-6 py-3 bg-[#FFC201] text-black font-bold rounded-lg hover:bg-[#e0ab00] transition flex items-center gap-2 text-sm whitespace-nowrap disabled:opacity-50"
          >
            {isZipping ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" /> Bundling Assets...
              </>
            ) : (
              <>
                <Download className="w-4 h-4" /> Download Brand Kit (.ZIP)
              </>
            )}
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default DownloadKitSection;
