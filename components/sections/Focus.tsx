import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { focusAreas } from "@/data/portfolio";
import { FadeIn } from "@/components/ui/FadeIn";

export function Focus() {
  return (
    <section id="focus" className="pt-4 pb-20 md:pt-8 md:pb-24">
      <Container>
        <FadeIn>
          <SectionHeading
            eyebrow="Focus"
            title="What I focus on"
            description="The kinds of work I want to keep building and refining."
          />
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {focusAreas.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 "
              >
                <h3 className="text-lg font-medium tracking-[-0.03em] text-white">
                  {item.title}
                </h3>
              <p className="mt-3 text-sm leading-6 text-white/55">
                {item.text}
              </p>
            </article>
          ))}
        </div>
        </FadeIn>
      </Container>
    </section>
  );
}