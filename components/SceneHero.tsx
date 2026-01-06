"use client";

import { useRef } from "react";
import { profile } from "@/content/profile";
import { Mail, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";

export const SceneHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <section ref={containerRef} className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative pt-20 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -z-10" />

      <motion.div 
        style={{ y, opacity, scale }}
        className="relative z-10 flex flex-col items-center max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
          animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8 w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-accent/10"
        >
          <img
            src={profile.image}
            alt={profile.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full" />
        </motion.div>

        <div className="space-y-6">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-accent font-medium tracking-wide text-sm md:text-base uppercase"
          >
            {profile.headline}
          </motion.h2>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50"
          >
            {profile.name}
          </motion.h1>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-balance"
          >
            {profile.shortBio}
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex justify-center gap-4 pt-4"
          >
            <a
              href={`mailto:${profile.email}`}
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium transition-transform hover:scale-105 active:scale-95"
            >
              <Mail className="w-4 h-4" />
              <span>Email Me</span>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/10 rounded-full font-medium hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-50"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};
