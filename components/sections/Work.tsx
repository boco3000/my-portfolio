import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/FadeIn";

export function Work() {
  return (
    <section id="work" className="pt-4 pb-20 md:pt-8 md:pb-24">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Selected work"
            title="A curated selection of projects across business websites and interfaces."
            description="Real projects presented clearly, with an emphasis on layout, hierarchy, responsiveness, and polish."
          />
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            <ProjectCard project={projects[0]} featured />
            <ProjectCard project={projects[1]} />
            <ProjectCard project={projects[2]} />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
