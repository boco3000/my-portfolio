import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Github, Instagram, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-16 pb-16 md:pt-20 md:pb-24">
      <Container>
        <div className="max-w-2xl space-y-6 md:space-y-8 mt-2">
          <div className="space-y-3">
            <h1 className="text-5xl font-semibold tracking-[-0.07em] text-white md:text-7xl md:leading-[0.98]">
              Bo Cochran
            </h1>

            <p className="text-lg font-medium tracking-[-0.03em] text-white/78 md:text-xl">
              Independent Web Developer
            </p>
          </div>

          <p className="max-w-xl text-base leading-7 text-white/62 md:text-lg md:leading-8">
            I design and build modern websites and interfaces that feel clear, structured, and intentional.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                <Github size={20} />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white/70 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
              >
                <Instagram size={20} />
              </a>
            </div>

            <Button href="#contact" variant="secondary">
              Get in Touch
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}