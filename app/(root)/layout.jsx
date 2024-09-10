import React from "react";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import SmoothScrolling from "@/components/shared/SmoothScroll";
import Bg from "@/components/shared/bg"
const layout = ({ children }) => {
  return (
    <>
      <Bg />
      <Navbar />
      <SmoothScrolling>
        <div className="md:-mt-[92px] xl:-mt-[96px]">
          {children}
        </div>
      </SmoothScrolling>  
      <Footer />
    </>
  );
};

export default layout;
