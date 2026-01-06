"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useReducedMotion } from "@/lib/motion";

const highlights = [
  {
    value: "99.9%",
    label: "Uptime Maintained",
    detail: "For core IIS & internal business services.",
  },
  {
    value: "< 15m",
    label: "Response Time",
    detail: "Achieved for critical P1 incidents via improved triage.",
  },
  {
    value: "100%",
    label: "Audit Readiness",
    detail: "Technical evidence aligned for ISO 27001 certification.",
  },
  {
    value: "Zero",
    label: "Vendor Reliance",
    detail: "Eliminated MSP dependency for core infrastructure.",
  },
];

export const SceneImpact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".impact-item", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section ref={containerRef} className="py-24 md:py-32 border-t border-white/5 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {highlights.map((item, idx) => (
            <div key={idx} className="impact-item flex flex-col items-center text-center space-y-2">
              <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                {item.value}
              </span>
              <span className="text-accent font-medium text-sm tracking-wider uppercase">
                {item.label}
              </span>
              <p className="text-secondary text-sm max-w-[200px]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
