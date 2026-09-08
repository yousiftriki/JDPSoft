import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { processSteps } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section className="py-24 sm:py-28">
      <Container className="flex flex-col items-center gap-16">
        <SectionHeading title="A simple process from idea to launch" />

        <div className="relative grid w-full gap-8 lg:grid-cols-5 lg:gap-6">
          <div className="pointer-events-none absolute inset-x-0 top-3 hidden h-px bg-border lg:block" />

          {processSteps.map((step) => (
            <div key={step.number} className="relative flex flex-col gap-3">
              <span className="relative w-fit bg-background pr-3 text-sm font-semibold text-accent">
                {step.number}
              </span>
              <h3 className="text-lg font-semibold tracking-tight text-ink">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
