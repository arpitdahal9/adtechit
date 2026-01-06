"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (isHome) {
      e.preventDefault();
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const NavLink = ({ id, label }: { id: string; label: string }) => (
    <Link 
      href={`/#${id}`} 
      onClick={(e) => scrollTo(e, id)}
      className="hover:text-primary transition-colors"
    >
      {label}
    </Link>
  );

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 transition-all duration-300",
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent"
      )}
    >
      <Link href="/" className="font-bold text-lg tracking-tight hover:text-accent transition-colors">
        AD
      </Link>
      <div className="flex gap-6 text-sm font-medium text-secondary">
        <NavLink id="projects" label="Projects" />
        <NavLink id="skills" label="Skills" />
        <NavLink id="about" label="About" />
        <NavLink id="contact" label="Contact" />
        <Link 
          href="/plan" 
          className={cn(
            "transition-colors",
            pathname === "/plan" ? "text-accent" : "hover:text-primary"
          )}
        >
          Plan
        </Link>
      </div>
    </nav>
  );
};
