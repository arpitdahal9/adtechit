import { useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Safe isomorphic effect
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

// Singleton registration helper
let isRegistered = false;

export const registerGsap = () => {
  if (typeof window !== "undefined" && !isRegistered) {
    gsap.registerPlugin(ScrollTrigger);
    
    // Set defaults
    gsap.defaults({
      ease: "power2.out",
      duration: 1,
    });
    
    isRegistered = true;
  }
};

// Auto-register on import if client
if (typeof window !== "undefined") {
  registerGsap();
}

export { gsap, ScrollTrigger };
