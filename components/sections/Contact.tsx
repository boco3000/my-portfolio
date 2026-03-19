import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 md:p-12">
          <div className="max-w-3xl space-y-6">
            <p className="text-xs uppercase tracking-[0.24em] text-white/45">
              Contact
            </p>

            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-white md:text-4xl">
              Open to new projects and collaborations.
            </h2>

            <p className="text-base leading-7 text-white/66 md:text-lg md:leading-8">
              If you’re looking to build or improve a website or interface,
              reach out and tell me a bit about what you need.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button href="mailto:you@example.com">you@example.com</Button>
              <Button href="#" variant="secondary">
                GitHub
              </Button>
              <Button href="#" variant="secondary">
                LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}