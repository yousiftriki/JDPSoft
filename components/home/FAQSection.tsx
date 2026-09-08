"use client";

import * as React from "react";
import { Plus } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/layout/SectionHeading";
import { faqs } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FAQSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section className="bg-off-white py-24 sm:py-28">
      <Container className="flex flex-col items-center gap-14">
        <SectionHeading title="Frequently asked questions" />

        <div className="w-full max-w-2xl divide-y divide-border rounded-3xl border border-border bg-white">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.question}>
                <button
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                >
                  <span className="text-[15px] font-medium text-ink">
                    {faq.question}
                  </span>
                  <Plus
                    className={cn(
                      "h-4 w-4 shrink-0 text-muted transition-transform duration-200",
                      open && "rotate-45 text-accent",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "grid overflow-hidden transition-[grid-template-rows] duration-300",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="min-h-0">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
