import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { DashboardMockup } from "@/components/home/DashboardMockup";
import { ParticleBackground } from "@/components/effects/ParticleBackground";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black">
      <ParticleBackground variant="hero" />
      <div className="pointer-events-none absolute inset-0 bg-grid-dark" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/50 to-black" />

      <Container className="relative z-10 grid gap-14 pb-20 pt-16 lg:grid-cols-2 lg:items-center lg:pb-28 lg:pt-24">
        <div className="flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/70">
            Websites · AI · Automation · Software
          </span>

          <h1 className="max-w-xl text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
            Websites, AI &amp; Automation for Growing Businesses
          </h1>

          <p className="max-w-lg text-base leading-relaxed text-white/60 sm:text-lg">
            JDPsoft builds digital systems that help businesses capture leads,
            respond faster, and eliminate repetitive work.
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <Button href="/book-a-call" size="lg">
              Book a Free Strategy Call
            </Button>
            <Button href="#audit" variant="outline" size="lg">
              Get a Free Audit
            </Button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <DashboardMockup />
        </div>
      </Container>
    </section>
  );
}
