"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useIsomorphicLayoutEffect } from "@/lib/gsap";
import { skills } from "@/content/skills";
import { useReducedMotion } from "@/lib/motion";
import { Check } from "lucide-react";

export const SceneSkills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion) return;
    
    // Ensure plugin is registered
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".skill-category", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom 70%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section id="skills" ref={containerRef} className="py-24 md:py-32 bg-surface/20">
      <div className="container mx-auto px-6">
        <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Capabilities</h2>
          <p className="text-secondary text-lg">
            A balanced mix of infrastructure stability, cloud modernization, and security operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group, idx) => (
            <div
              key={idx}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
