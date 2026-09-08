import { Container } from "@/components/layout/Container";
import { trustedBusinesses } from "@/lib/constants";

export function LogoCloud() {
  return (
    <section className="border-b border-border bg-off-white py-12">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          Trusted by businesses we support
        </p>
        <div className="mt-7 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {trustedBusinesses.map((business) => (
            <a
              key={business.href}
              href={business.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-14 items-center justify-center rounded-xl border border-border/70 bg-white px-3 text-center text-sm font-medium text-muted/60 grayscale transition-all hover:grayscale-0 hover:text-ink/70"
            >
              {business.name}
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
