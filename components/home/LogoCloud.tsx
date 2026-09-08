import { Container } from "@/components/layout/Container";
import { trustedByPlaceholders } from "@/lib/constants";

export function LogoCloud() {
  return (
    <section className="border-b border-border bg-off-white py-12">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          Trusted by businesses we support
        </p>
        <div className="mt-7 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {trustedByPlaceholders.map((name) => (
            <div
              key={name}
              className="flex h-14 items-center justify-center rounded-xl border border-border/70 bg-white text-sm font-medium text-muted/60 grayscale transition-all hover:grayscale-0 hover:text-ink/70"
            >
              {name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
