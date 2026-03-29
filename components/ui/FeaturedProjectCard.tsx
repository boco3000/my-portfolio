import Image from "next/image";

type Project = {
  title: string;
  category: string;
  description: string;
  details: string;
  tags: string[];
  live: string;
  code: string;
  image: string;
};

type FeaturedProjectCardProps = {
  project: Project;
};

export function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-[var(--accent-border)] hover:bg-white/[0.045]">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10 bg-neutral-900">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          className="object-cover transition duration-500 ease-out group-hover:scale-[1.02]"
          sizes="(min-width: 1024px) 66vw, 100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

        <div className="absolute inset-x-6 top-6">
          <div className="inline-flex items-center rounded-md border border-white/10 bg-black/40 px-3 py-1 backdrop-blur-md">
            <span className="text-[11px] uppercase tracking-[0.22em] text-white/80">
              {project.category}
            </span>
          </div>
        </div>

        <div className="absolute inset-x-6 bottom-6">
          <div className="max-w-xl rounded-lg border border-white/10 bg-black/20 px-3 py-2 backdrop-blur-sm">
            <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--accent)]">
              Featured Project
            </p>
            <h3 className="mt-2 text-2xl font-semibold tracking-[-0.05em] text-white md:text-[28px]">
              {project.title}
            </h3>
          </div>
        </div>
      </div>

      <div className="space-y-5 p-6 md:p-7">
        <div className="space-y-3">
          <p className="text-base leading-7 text-white/78 md:text-[17px]">
            {project.description}
          </p>
          <p className="text-sm leading-7 text-white/55">{project.details}</p>
        </div>

        <div className="flex items-center gap-2 min-w-0">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[var(--accent-border)] bg-[var(--accent-soft)] px-3 py-1 text-xs leading-none text-[var(--accent)]/85"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5 pt-1 text-sm tracking-[-0.02em] text-white/72">
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
      </div>
    </article>
  );
}
