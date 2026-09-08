import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ParticleBackground } from "@/components/effects/ParticleBackground";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-black">
      <ParticleBackground variant="cta" />
      <div className="pointer-events-none absolute inset-0 bg-grid-dark" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />

      <Container className="relative z-10 flex flex-col items-center gap-8 py-24 text-center sm:py-28">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Ready to build a better system for your business?
        </h2>
        <p className="max-w-md text-white/60">
          Start with a free strategy call or request an audit. We&apos;ll help
          you find the highest-value opportunities first.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/book-a-call" size="lg">
            Book a Free Strategy Call
          </Button>
          <Button href="#audit" variant="outline" size="lg">
            Get a Free Audit
          </Button>
        </div>
      </Container>
    </section>
  );
}
