"use client";

import { useEffect, useState } from "react";
import { profile } from "@/content/profile";
import { Mail, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

export const SceneHero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative pt-20">
      <div
        className={cn(
          "relative mb-8 w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl shadow-accent/10 transition-all duration-1000 ease-out transform",
          mounted ? "scale-100 opacity-100 blur-0" : "scale-90 opacity-0 blur-sm"
        )}
      >
        <img
          src={profile.image}
          alt={profile.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full" />
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        <h2
          className={cn(
            "text-accent font-medium tracking-wide text-sm md:text-base uppercase transition-all duration-700 delay-300 transform",
            mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          )}
        >
          {profile.headline}
        </h2>
        <h1
          className={cn(
            "text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance transition-all duration-700 delay-500 transform",
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          {profile.name}
        </h1>
        <p
          className={cn(
            "text-secondary text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-balance transition-all duration-700 delay-700 transform",
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
        >
          {profile.shortBio}
        </p>

        <div
          className={cn(
            "flex justify-center gap-4 pt-4 transition-all duration-700 delay-1000 transform",
            mounted ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          )}
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
