import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const registerGsap = () => {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
    
    // Config default defaults
    gsap.defaults({
      ease: "power2.out",
      duration: 1,
    });
  }
};

export { gsap, ScrollTrigger };
