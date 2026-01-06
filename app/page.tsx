"use client";

import { useEffect } from "react";
import { Nav } from "@/components/Nav";
import { SceneHero } from "@/components/SceneHero";
import { SceneImpact } from "@/components/SceneImpact";
import { SceneProjects } from "@/components/SceneProjects";
import { SceneSkills } from "@/components/SceneSkills";
import { SceneAbout } from "@/components/SceneAbout";
import { SceneContact } from "@/components/SceneContact";

export default function Home() {
  useEffect(() => {
    // Force scroll to top on load to ensure animations play correctly
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background selection:bg-accent/30 selection:text-white">
      <Nav />
      <div className="flex flex-col">
        <SceneHero />
        <SceneImpact />
        <SceneProjects />
        <SceneSkills />
        <SceneAbout />
        <SceneContact />
      </div>
    </main>
  );
}
