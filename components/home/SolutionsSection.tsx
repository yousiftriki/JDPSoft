import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { solutions } from "@/lib/constants";

export function SolutionsSection() {
  return (
    <section id="solutions" className="scroll-mt-24 bg-off-white py-24 sm:py-28">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          title="What we build"
          description="Digital systems designed around the way your business actually works."
        />

        <div className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => {
            const Icon = solution.icon;
            return (
              <div
                key={solution.id}
                className="group flex flex-col rounded-3xl border border-border bg-white p-7 transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-[0_20px_50px_-25px_rgba(0,0,0,0.25)]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>

                <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">
                  {solution.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {solution.description}
                </p>

                <Link
                  href={solution.href}
                  className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-ink transition-colors group-hover:text-accent"
                >
                  {solution.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
