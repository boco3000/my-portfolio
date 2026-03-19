import { Container } from "@/components/layout/Container";

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

export function Approach() {
  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Approach"
              title="Clear structure first. Then polish."
              description="I approach projects by getting the hierarchy right early, then refining the visual system and interaction without overcomplicating the experience."
            />
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-8">
            <div className="space-y-5 text-sm leading-7 text-white/66">
              <p>
                Each project starts with the goal: presenting a business
                clearly, organizing information well, or making an interface
                easier to use.
              </p>
              <p>
                From there, I focus on layout, content hierarchy, and
                responsiveness before refining visual details and motion.
              </p>
              <p>
                The result should feel modern, deliberate, and easy to navigate
                — not overloaded.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}