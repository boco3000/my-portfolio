import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

const approachPoints = [
  {
    label: "Goal",
    text: "Start with the goal — presenting a business clearly, organizing information well, or making an interface easier to use.",
  },
  {
    label: "Structure",
    text: "Build the structure first, focusing on layout, hierarchy, and responsiveness before refining visual details.",
  },
  {
    label: "Polish",
    text: "Keep the final result modern, deliberate, and easy to navigate without adding unnecessary complexity.",
  },
];

export function Approach() {
  return (
    <section id="approach" className="pt-4 pb-20 md:pt-8 md:pb-24">
      <Container>
        <FadeIn>
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Approach"
              title="Clear structure first. Then polish."
              description="I approach projects by getting the hierarchy right early, then refining the visual system and interaction without overcomplicating the experience."
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.05}>
          <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-5 md:p-7">
            <div className="divide-y divide-white/10">
              {approachPoints.map((point, index) => (
                <div
                  className="grid gap-2 md:grid-cols-[120px_1fr] md:gap-6 py-3"
                  key={index}
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-white/40">
                    {point.label}
                  </p>
                  <p className="text-sm leading-7 text-white/62 md:text-[15px]">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
