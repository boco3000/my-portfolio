import { Container } from "@/components/layout/Container";
import { FadeIn } from "@/components/ui/FadeIn";

export function Contact() {
  return (
    <section id="contact" className="pt-20 pb-8 md:pt-24 md:pb-0">
      <Container>
        <FadeIn>
          <div className="max-w-2xl space-y-5 border-t border-white/10 pt-10">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--accent)]">
              Contact
            </p>

            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white md:text-4xl md:leading-[1.05]">
              Open to new projects and collaborations.
            </h2>

            <p className="text-base leading-7 text-white/60 md:text-[17px]">
              If you’re looking to build or improve a website or interface,
              reach out and tell me a bit about what you need.
            </p>

            <div className="pt-2">
              <a
                href="mailto:bo.theoddjobsapp.com"
                className="inline-flex items-center text-base font-medium tracking-[-0.02em] text-white transition-colors duration-300 hover:text-[var(--accent)]"
              >
                bo.theoddjobsapp.com
              </a>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
