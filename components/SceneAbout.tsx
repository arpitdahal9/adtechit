"use client";

import { useRef } from "react";
import { profile } from "@/content/profile";

export const SceneAbout = () => {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="grid md:grid-cols-[1fr_250px] gap-12 items-start">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">About Me</h2>
            <div className="prose prose-invert prose-lg text-secondary">
              <p>
                I am a Systems Administrator with over 2.5 years of experience in enterprise environments,
                where I've transitioned from frontline support to managing core infrastructure and security operations.
                My work is defined by a calm, methodical approach to troubleshooting and a strong ownership mindset—I don't just fix issues; I look for the root cause and document the solution.
              </p>
              <p>
                Currently, I manage internal IT infrastructure, bridging the gap between traditional reliability (Windows Server, Networking) and modern agility (Azure, M365).
                I have a growing focus on Blue Team operations, actively training in incident response and vulnerability management to better protect the systems I administer.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h3 className="text-xl font-semibold mb-4 text-white">Now / Next</h3>
              <p className="text-secondary">
                Focusing on deeply integrating security into daily operations. Currently studying for
                specialized security certifications and building automated detection labs to simulate real-world SOC scenarios.
              </p>
            </div>
          </div>

          <div className="bg-surface/50 p-6 rounded-xl border border-white/5 space-y-6 md:sticky md:top-32">
            <div>
              <span className="block text-xs uppercase tracking-wider text-secondary mb-1">Role</span>
              <span className="font-medium text-white">System Administrator</span>
            </div>
            <div>
              <span className="block text-xs uppercase tracking-wider text-secondary mb-1">Location</span>
              <span className="font-medium text-white">{profile.location}</span>
            </div>
             <div>
              <span className="block text-xs uppercase tracking-wider text-secondary mb-1">Focus</span>
              <span className="font-medium text-white">Infrastructure & SecOps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
