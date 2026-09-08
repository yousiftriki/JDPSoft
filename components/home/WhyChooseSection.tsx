import { Check } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";
import { whyChoosePoints } from "@/lib/constants";

export function WhyChooseSection() {
  return (
    <section className="py-24 sm:py-28">
      <Container className="flex flex-col items-center gap-10 text-center">
        <SectionHeading
          title="Built around your business, not a fixed menu."
          description="Every business has different systems, bottlenecks, and goals. We scope each project after understanding what will create the most value."
        />

        <ul className="flex flex-col gap-3 sm:flex-row sm:gap-8">
          {whyChoosePoints.map((point) => (
            <li key={point} className="flex items-center gap-2 text-sm font-medium text-ink/80">
              <Check className="h-4 w-4 text-accent" strokeWidth={2.5} />
              {point}
            </li>
          ))}
        </ul>

        <Button href="/book-a-call" size="lg">
          Schedule a Consultation
        </Button>
      </Container>
    </section>
  );
}
