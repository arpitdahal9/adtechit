"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const highlights = [
  {
    value: "3+ Years",
    label: "Experience",
    detail: "Managing enterprise systems and operations.",
  },
  {
    value: "Cloud Native",
    label: "Microsoft Stack",
    detail: "Expert in Entra ID, Intune, and M365 Security.",
  },
  {
    value: "SecOps",
    label: "Security First",
    detail: "Integrating security into every layer of infrastructure.",
  },
  {
    value: "DevOps",
    label: "CI/CD Integration",
    detail: "Automating workflows for reliable deployments.",
  },
];

export const SceneImpact = () => {
  const containerRef = useRef(null);
  
  return (
    <section ref={containerRef} className="py-24 md:py-32 border-t border-white/5 bg-surface/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-2"
            >
              <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
                {item.value}
              </span>
              <span className="text-accent font-medium text-sm tracking-wider uppercase">
                {item.label}
              </span>
              <p className="text-secondary text-sm max-w-[200px]">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
