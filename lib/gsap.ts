import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register immediately on client-side import to avoid race conditions
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  
  // Config defaults
  gsap.defaults({
    ease: "power2.out",
    duration: 1,
  });
}

export const registerGsap = () => {
  // Kept for compatibility, but registration happens on import now.
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }
};

export { gsap, ScrollTrigger };
