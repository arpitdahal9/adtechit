"use client";

import { useRef } from "react";
import { skills } from "@/content/skills";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

export const SceneSkills = () => {
  return (
    <section id="skills" className="py-24 md:py-32 bg-surface/20">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Technical Capabilities
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-secondary text-lg"
          >
            A balanced mix of infrastructure stability, cloud modernization, and security operations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="skill-category bg-background border border-white/5 p-8 rounded-xl hover:border-white/10 transition-colors"
            >
              <h3 className="text-xl font-bold mb-6 text-accent/90">{group.category}</h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-secondary text-sm md:text-base">
                    <Check className="w-5 h-5 text-accent/60 shrink-0 mt-[2px]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
