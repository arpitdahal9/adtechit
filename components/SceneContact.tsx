"use client";

import { profile } from "@/content/profile";
import { Mail, Linkedin } from "lucide-react";

export const SceneContact = () => {
  return (
    <section id="contact" className="py-32 md:py-48 text-center relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Connect?</h2>
        <p className="text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-12">
          I am currently open to conversations about Systems Administration, Infrastructure, and Security Operations roles.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black rounded-full font-bold text-lg transition-transform hover:scale-105 active:scale-95"
          >
            <Mail className="w-5 h-5" />
            <span>{profile.email}</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 text-white border border-white/10 rounded-full font-bold text-lg hover:bg-white/20 transition-all hover:scale-105 active:scale-95"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn Profile</span>
          </a>
        </div>

        <footer className="mt-32 text-secondary/40 text-sm">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </footer>
      </div>
    </section>
  );
};
