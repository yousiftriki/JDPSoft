import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { problems } from "@/lib/constants";

export function ProblemsSection() {
  return (
    <section className="py-24 sm:py-28">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading title="Are any of these slowing your business down?" />

        <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => {
            const Icon = problem.icon;
            return (
              <div
                key={problem.title}
                className="flex items-start gap-4 rounded-2xl border border-border bg-white p-6 transition-colors hover:border-black/15"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-off-white text-ink/70">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <p className="pt-2 text-[15px] leading-snug text-ink/85">
                  {problem.title}
                </p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          JDPsoft builds the system that fixes it.
        </p>
      </Container>
    </section>
  );
}
