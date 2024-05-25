"use client";
import { ReactLenis } from "lenis/react";

function SmoothScrolling({ children }) {
  return (
    <ReactLenis root options={{ lerp: 0.06, duration: 1.5, smoothTouch: true, smoothWheel:true }}>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;