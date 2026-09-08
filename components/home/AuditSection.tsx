"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Input, Textarea, Label } from "@/components/ui/Input";
import { StatusDot } from "@/components/ui/Badge";

export function AuditSection() {
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire up to CRM/email endpoint. No backend connected yet.
    setSubmitted(true);
  }

  return (
    <section id="audit" className="scroll-mt-24 py-24 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <SectionHeading
          align="left"
          eyebrow="Free Audit"
          title="Get a Free Growth &amp; Automation Audit"
          description="Tell us about your business. We'll look for opportunities to improve your website, lead flow, and repetitive workflows."
          className="lg:pr-6"
        />

        <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-[0_25px_60px_-30px_rgba(0,0,0,0.25)]">
          <div className="flex items-center justify-between border-b border-border px-6 py-4">
            <p className="text-xs font-medium text-muted">Audit Request</p>
            <span className="flex items-center gap-1.5 text-[11px] font-medium text-ink/70">
              <StatusDot />
              Reviewed within 1 business day
            </span>
          </div>

          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center gap-3 py-10 text-center">
                <CheckCircle2 className="h-10 w-10 text-accent" />
                <p className="text-lg font-semibold text-ink">Request received</p>
                <p className="max-w-xs text-sm text-muted">
                  We&apos;ll review your business and follow up with your audit
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" required placeholder="Jane Doe" />
                  </div>
                  <div>
                    <Label htmlFor="business">Business</Label>
                    <Input id="business" name="business" required placeholder="Acme Plumbing" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="website">Website</Label>
                    <Input id="website" name="website" placeholder="acmeplumbing.com" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" name="email" type="email" required placeholder="jane@acme.com" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="(555) 555-5555" />
                </div>

                <div>
                  <Label htmlFor="challenge">What do you want to improve?</Label>
                  <Textarea
                    id="challenge"
                    name="challenge"
                    placeholder="Website, lead follow-up, repetitive tasks..."
                  />
                </div>

                <Button type="submit" className="mt-2 w-full">
                  Request My Audit
                </Button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
