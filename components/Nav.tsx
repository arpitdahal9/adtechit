"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent"
      )}
    >
      <div className="font-bold text-lg tracking-tight">AD</div>
      <div className="flex gap-6 text-sm font-medium text-secondary">
        <button onClick={() => scrollTo("projects")} className="hover:text-primary transition-colors">
          Projects
        </button>
        <button onClick={() => scrollTo("skills")} className="hover:text-primary transition-colors">
          Skills
        </button>
        <button onClick={() => scrollTo("about")} className="hover:text-primary transition-colors">
          About
        </button>
        <button onClick={() => scrollTo("contact")} className="hover:text-primary transition-colors">
          Contact
        </button>
      </div>
    </nav>
  );
};
