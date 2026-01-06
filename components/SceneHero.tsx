"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useIsomorphicLayoutEffect } from "@/lib/gsap";
import { profile } from "@/content/profile";
import { Mail, Linkedin } from "lucide-react";
import { useReducedMotion } from "@/lib/motion";

export const SceneHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion) return;
    
    // Ensure plugin is registered
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0, filter: "blur(10px)" },
        { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1.2, ease: "power3.out" }
      )
        .fromTo(
          ".hero-text-item",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.8, ease: "power2.out" },
          "-=0.6"
        )
        .fromTo(
          ".hero-btn",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.1, duration: 0.6, ease: "power2.out" },
          "-=0.4"
        );
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative pt-20"
    >
      <div className="relative mb-8 w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-accent/10">
        <img
          ref={imageRef}
          src={profile.image}
          alt={profile.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full" />
      </div>

      <div ref={textRef} className="max-w-3xl mx-auto space-y-6">
        <h2 className="hero-text-item text-accent font-medium tracking-wide text-sm md:text-base uppercase">
          {profile.headline}
        </h2>
        <h1 className="hero-text-item text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
          {profile.name}
        </h1>
        <p className="hero-text-item text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-balance">
          {profile.shortBio}
        </p>

        <div className="flex justify-center gap-4 pt-4">
          <a
            href={`mailto:${profile.email}`}
            className="hero-btn group relative inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-medium transition-transform hover:scale-105 active:scale-95"
          >
            <Mail className="w-4 h-4" />
            <span>Email Me</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn group relative inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/10 rounded-full font-medium hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-bounce opacity-50">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
};
