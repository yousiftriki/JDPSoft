import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";
import { packages } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function PackagesSection() {
  return (
    <section className="bg-off-white py-24 sm:py-28">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading
          title="Start with the system your business needs most"
          description="Transparent starting points. Every project is scoped to fit."
        />

        <div className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={cn(
                "relative flex flex-col rounded-3xl border bg-white p-7",
                pkg.featured ? "border-accent/40 shadow-[0_20px_50px_-25px_rgba(199,92,92,0.35)]" : "border-border",
              )}
            >
              {pkg.featured ? (
                <span className="absolute -top-3 left-7 rounded-full border border-accent/30 bg-white px-3 py-1 text-[11px] font-semibold text-accent">
                  Most Requested
                </span>
              ) : null}

              <h3 className="text-base font-semibold text-ink">{pkg.name}</h3>

              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="text-xs font-medium text-muted">Starting at</span>
              </div>
              <div className="flex items-baseline gap-1.5">
                <span className="text-3xl font-semibold tracking-tight text-ink">
                  {pkg.price}
                </span>
                {pkg.priceNote ? (
                  <span className="text-xs text-muted">{pkg.priceNote}</span>
                ) : null}
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                {pkg.description}
              </p>

              <Button href="#audit" variant="outline-dark" className="mt-6 w-full">
                Get Started
              </Button>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted">
          Every project is scoped around your business, goals, and expected
          outcome.
        </p>
      </Container>
    </section>
  );
}
