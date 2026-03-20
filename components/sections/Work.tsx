import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/portfolio";

export function Work() {
  return (
    <section id="work" className="pt-16 pb-24 md:pt-20 md:pb-32">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="A curated selection of projects across business websites and interfaces."
          description="Real projects presented clearly, with an emphasis on layout, hierarchy, responsiveness, and polish."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <ProjectCard project={projects[0]} featured />
          <ProjectCard project={projects[1]} />
          <ProjectCard project={projects[2]} />
        </div>
      </Container>
    </section>
  );
}