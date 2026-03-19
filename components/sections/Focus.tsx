import { Container } from "@/components/layout/Container";
import { focusAreas } from "@/data/portfolio";

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

export function Focus() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <SectionHeading
          eyebrow="Focus"
          title="What I focus on"
          description="The kinds of work I want to keep building and refining."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {focusAreas.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="text-lg font-medium tracking-[-0.03em] text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/60">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}