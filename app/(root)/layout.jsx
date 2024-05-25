import React from "react";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import SmoothScrolling from "@/components/shared/SmoothScroll";

const layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <SmoothScrolling>
        {children}
      </SmoothScrolling>
      <Footer />
    </>
  );
};

export default layout;
