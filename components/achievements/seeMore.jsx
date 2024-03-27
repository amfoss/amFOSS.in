import React from "react";
import Image from "next/image";
import Link from "next/link";
const seeMore = () => {
  return (
    <>
      <Link href="/">
        <div className="flex flex-col justify-center items-center md:mt-20 mt-5">
          <p className="text-center md:text-3xl text-xl">See more</p>
          <Image
            src="/assets/icons/seeMore.png"
            width={100}
            height={100}
            alt=""
            className="md:w-14 w-10"
          />
        </div>
      </Link>
    </>
  );
};

export default seeMore;
