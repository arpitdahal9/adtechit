"use client";

import { useRef, useState, useEffect } from "react";
import { projects } from "@/content/projects";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export const SceneProjects = () => {
  const [activeId, setActiveId] = useState<string>(projects[0].id);

  // Intersection Observer for highlighting navigation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id.replace("project-card-", "");
            setActiveId(id);
          }
        });
      },
      { rootMargin: "-20% 0px -50% 0px", threshold: 0.1 }
    );

    projects.forEach((project) => {
      const el = document.getElementById(`project-card-${project.id}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* Sticky Navigation (Desktop) */}
          <div className="hidden lg:flex flex-col sticky top-32 h-fit w-1/3 space-y-8">
            <h2 className="text-3xl font-bold mb-4">Selected Projects</h2>
            <div className="relative border-l border-white/10 pl-6 space-y-6">
              {projects.map((project) => (
                <button
                  key={project.id}
                  onClick={() => {
                    document.getElementById(`project-card-${project.id}`)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={cn(
                    "block text-left text-lg transition-all duration-300 w-full hover:text-white",
                    activeId === project.id
                      ? "text-white font-medium scale-105 origin-left"
                      : "text-secondary/60"
                  )}
                >
                  {project.title}
                </button>
              ))}
              <div
                className="absolute left-[-1px] top-0 w-[2px] h-8 bg-accent transition-all duration-300 ease-out"
                style={{
                  transform: `translateY(${
                    projects.findIndex((p) => p.id === activeId) * 52 
                  }px)`,
                }}
              />
            </div>
          </div>

          {/* Project Cards (Scrollable with stack effect) */}
          <div className="w-full lg:w-2/3 space-y-24">
             <h2 className="lg:hidden text-3xl font-bold mb-8">Selected Projects</h2>
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.9, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      id={`project-card-${project.id}`}
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="group relative bg-surface/50 border border-white/10 rounded-2xl p-8 md:p-12 transition-all hover:border-white/20 hover:bg-surface/80"
    >
      <div className="absolute top-0 right-0 p-8 opacity-20 text-6xl font-bold select-none text-white/10 group-hover:text-accent/10 transition-colors">
        0{index + 1}
      </div>
      
      <div className="space-y-6">
        <div>
          <span className="text-accent text-sm font-medium tracking-wider uppercase mb-2 block">
            {project.category}
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-primary">
            {project.title}
          </h3>
        </div>

        <div className="space-y-4 text-secondary leading-relaxed">
          <div>
            <h4 className="text-white text-sm font-semibold mb-1 uppercase tracking-wide opacity-80">Context</h4>
            <p>{project.context}</p>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-1 uppercase tracking-wide opacity-80">Role & Action</h4>
            <p>{project.whatIDid}</p>
          </div>
          <div className="relative pl-4 border-l-2 border-accent/50">
            <h4 className="text-white text-sm font-semibold mb-1 uppercase tracking-wide opacity-80">Outcome</h4>
            <p className="text-white/90">{project.outcome}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-4">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70 whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
