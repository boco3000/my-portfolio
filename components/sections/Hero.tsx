import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative py-28 md:py-36">
      <Container>
        <div className="max-w-4xl space-y-8">
          <p className="text-xs uppercase tracking-[0.24em] text-white/45">
            Independent web developer
          </p>

          <div className="space-y-5">
            <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.06em] text-white md:text-6xl md:leading-[1.02]">
              I build modern websites and web interfaces.
            </h1>

            <p className="max-w-2xl text-base leading-7 text-white/68 md:text-lg md:leading-8">
              Focused on clarity, structure, and visual polish for businesses,
              founders, and digital products that need to feel professional and
              easy to trust.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button href="#work">View Work</Button>
            <Button href="#contact" variant="secondary">
              Get in Touch
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}