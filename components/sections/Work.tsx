import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { FeaturedProjectCard } from "@/components/ui/FeaturedProjectCard";
import { ProjectListItem } from "@/components/ui/ProjectListItem";
import { projects } from "@/data/portfolio";

export function Work() {
  const featuredProject = projects.find((project) => project.featured);
  const listProjects = projects.filter((project) => !project.featured);

  return (
    <section id="work" className="pt-4 pb-20 md:pt-8 md:pb-24">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Selected work"
            title="A curated selection of projects across business websites and interfaces."
            description="Recent work focused on clarity, hierarchy, responsiveness, and polished presentation."
          />
        </FadeIn>

        {featuredProject ? (
          <FadeIn delay={0.05} className="mt-10">
            <FeaturedProjectCard project={featuredProject} />
          </FadeIn>
        ) : null}

        <FadeIn delay={0.08} className="mt-10">
          <div className="space-y-0">
            {listProjects.map((project) => (
              <ProjectListItem key={project.title} project={project} />
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
