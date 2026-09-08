import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { caseStudies } from "@/lib/constants";

// NOTE: caseStudies in lib/constants.ts are marked TODO/placeholder content.
// The "Illustrative example" badge below must stay until real client
// results replace these entries — do not present placeholder copy as proof.
export function CaseStudiesSection() {
  return (
    <section className="py-24 sm:py-28">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          title="Real systems, built for real businesses"
          description="A look at the shape of work we do. Full client case studies are coming soon."
        />

        <div className="grid w-full gap-5 lg:grid-cols-3">
          {caseStudies.map((cs) => (
            <div
              key={cs.industry}
              className="flex flex-col gap-5 rounded-3xl border border-border bg-white p-7"
            >
              <div className="flex items-center justify-between">
                <Badge>{cs.industry}</Badge>
                <span className="text-[11px] font-medium uppercase tracking-wide text-muted/70">
                  Illustrative example
                </span>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  The Problem
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/80">
                  {cs.problem}
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  What JDPsoft Built
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink/80">
                  {cs.built}
                </p>
              </div>

              <div className="mt-auto rounded-xl bg-off-white px-4 py-3">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  The Result
                </p>
                <p className="mt-1 text-sm font-medium text-ink">{cs.result}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
