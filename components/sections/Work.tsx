import { Container } from "@/components/layout/Container";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/portfolio";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-2xl space-y-3">
      {eyebrow ? (
        <p className="text-xs uppercase tracking-[0.22em] text-white/45">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-[-0.04em] text-white md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-white/65">{description}</p>
      ) : null}
    </div>
  );
}

export function Work() {
  return (
    <section id="work" className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Selected work"
          title="A focused set of projects across business websites and interfaces."
          description="Real projects presented clearly, with an emphasis on layout, hierarchy, responsiveness, and polish."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <ProjectCard project={projects[0]} featured />
          <ProjectCard project={projects[1]} />
          <ProjectCard project={projects[2]} />
          <ProjectCard project={projects[3]} />
        </div>
      </Container>
    </section>
  );
}