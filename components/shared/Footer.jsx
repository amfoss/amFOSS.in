import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dayjs from 'dayjs';

const Footer = () => {
  return (
    <footer className="bg-[#2e2e2e] text-white py-6 px-6 sm:px-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Image
            src="/assets/icons/amrita-white.png"
            width={160}
            height={160}
            alt="Amrita University"
            className="cursor-pointer transition duration-200"
          />
        </div>

        <div className="flex items-center gap-6 text-sm font-medium text-gray-300">
          <Link href="/about" className="hover:text-[#D0A730] transition">
            ABOUT
          </Link>
          <Link href="/achievements" className="hover:text-[#D0A730] transition">
            ACHIEVEMENTS
          </Link>
          <Link href="/team" className="hover:text-[#D0A730] transition">
            TEAM
          </Link>
          <Link href="/footprint" className="hover:text-[#D0A730] font-bold text-[#D0A730] transition">
            FOOTPRINT
          </Link>
        </div>

        <div className="text-sm text-gray-400 text-center md:text-right">
          © Team amFOSS 2007-{dayjs().year()}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;