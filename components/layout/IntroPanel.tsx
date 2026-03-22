"use client";

import { Button } from "@/components/ui/Button";
import { Github, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

export function IntroPanel() {
  return (
    <aside className="py-16 lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-md space-y-6"
      >
        <div className="space-y-3">
          <h1 className="text-5xl font-semibold tracking-[-0.08em] text-white md:text-6xl lg:text-7xl lg:leading-[0.95]">
            Bo Cochran
          </h1>

          <p className="text-lg font-medium tracking-[-0.04em] text-white/80 md:text-[22px]">
            Independent Web Developer
          </p>
        </div>

        <p className="max-w-sm text-base leading-8 text-white/60 md:text-[17px]">
          I design and build modern websites and interfaces that feel clear,
          structured, and intentional.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08, ease: "easeOut" }}
        className="mt-10 flex flex-wrap items-center gap-4 lg:mt-0"
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

        <Button href="#contact" variant="secondary">
          Get in Touch
        </Button>
      </motion.div>
    </aside>
  );
}
