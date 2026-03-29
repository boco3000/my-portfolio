type Project = {
  title: string;
  category: string;
  description: string;
  details: string;
  tags: string[];
  live: string;
  code: string;
};

type ProjectListItemProps = {
  project: Project;
};

export function ProjectListItem({ project }: ProjectListItemProps) {
  return (
    <article className="group border-t border-white/10 py-6 transition-colors duration-300 hover:border-[var(--accent-border)]">
      <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr] md:gap-8">
        <div className="space-y-2">
          <div className="space-y-1">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
              {project.category}
            </p>
            <h3 className="text-xl font-semibold tracking-[-0.04em] text-white md:text-[22px]">
              {project.title}
            </h3>
          </div>

          <p className="max-w-2xl text-sm leading-7 text-white/72 md:text-[15px]">
            {project.description}
          </p>

          <p className="max-w-2xl text-sm leading-7 text-white/50">
            {project.details}
          </p>
        </div>

        <div className="flex h-full flex-col justify-between gap-4">
          <div className="flex items-center gap-5 text-sm tracking-[-0.02em] text-white/70">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-[var(--accent)]"
            >
              Live Site
            </a>
            <a
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-[var(--accent)]"
            >
              View Code
            </a>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] px-2.5 py-1 text-[11px] leading-none text-[var(--accent)]/85"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
