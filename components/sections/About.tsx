import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <Container>
        <div className="max-w-3xl space-y-6">
          <SectionHeading
            eyebrow="About"
            title="An independent developer focused on modern digital presentation."
          />

          <div className="space-y-5 text-base leading-7 text-white/66">
            <p>
              My work centers on clarity, structure, and visual quality —
              building websites and interfaces that feel professional, usable,
              and well put together.
            </p>
            <p>
              I have built projects ranging from service-business websites to a
              workflow dashboard, and I’m currently focused on working with
              businesses, founders, and creators who need a stronger web
              presence.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}