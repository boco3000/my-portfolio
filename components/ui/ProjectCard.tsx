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

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.045] ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden border-b border-white/10 bg-neutral-900 ${
          featured ? "aspect-[16/9]" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes={
            featured
              ? "(min-width: 1024px) 66vw, 100vw"
              : "(min-width: 1024px) 33vw, 100vw"
          }
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

        <div className="absolute inset-x-6 top-6 flex items-center justify-between text-[11px] uppercase tracking-[0.2em] text-white/70">
          <span>{project.category}</span>
          <span>Preview</span>
        </div>

        <div className="absolute inset-x-6 bottom-6">
          <div className="max-w-lg rounded-xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-sm">
            <div className="mb-1 text-sm text-white/65">{project.title}</div>
            <div className="text-lg font-medium tracking-[-0.03em] text-white">
              Structured, polished, business-facing design.
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-xl font-semibold tracking-[-0.04em] text-white">
              {project.title}
            </h3>

            <span className="mt-1 rounded-full border border-white/10 px-2.5 py-1 text-[11px] uppercase tracking-[0.16em] text-white/45">
              Case
            </span>
          </div>

          <p className="text-base leading-7 text-white/82">
            {project.description}
          </p>

          <p className="text-sm leading-6 text-white/58">{project.details}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/55"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5 pt-1 text-sm text-white/72">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            Live Site
          </a>
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            View Code
          </a>
        </div>
      </div>
    </article>
  );
}
