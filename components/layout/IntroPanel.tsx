"use client";

import { Button } from "@/components/ui/Button";
import { Github, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";

export function IntroPanel() {
  return (
    <aside className="py-16 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-sm space-y-5"
      >
        <div className="space-y-2">
          <h1 className="text-5xl font-semibold tracking-[-0.08em] text-white md:text-6xl lg:text-7xl lg:leading-[0.95]">
            Bo Cochran
          </h1>

          <p className="text-lg font-medium tracking-[-0.04em] text-white/80 md:text-[22px]">
            Independent Web Developer
          </p>
        </div>

        <p className="max-w-xs text-base leading-8 text-white/60 md:text-[17px]">
          I design and build modern websites and interfaces that feel clear,
          structured, and intentional.
        </p>
        <div className="flex items-center gap-3 pt-3 text-white/35">
          <SiNextdotjs
            size={18}
            title="Next.js"
            className="transition-colors duration-300 hover:text-white/70"
          />
          <SiReact
            size={18}
            title="React"
            className="transition-colors duration-300 hover:text-white/70"
          />
          <SiTypescript
            size={18}
            title="TypeScript"
            className="transition-colors duration-300 hover:text-white/70"
          />
          <SiTailwindcss
            size={18}
            title="Tailwind CSS"
            className="transition-colors duration-300 hover:text-white/70"
          />
          <SiVercel
            size={18}
            title="Vercel"
            className="transition-colors duration-300 hover:text-white/70"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
        className="mt-8 flex flex-wrap items-center gap-3 lg:mt-0"
      >
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/boco3000"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-border)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
          >
            <Github size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/bocochranosu/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-border)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="https://instagram.com/boco3000"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--accent-border)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent)]"
          >
            <Instagram size={20} />
          </a>
        </div>
        <Button href="mailto:bo@theoddjobsapp.com" variant="secondary">
          Get in Touch
        </Button>
      </motion.div>
    </aside>
  );
}
