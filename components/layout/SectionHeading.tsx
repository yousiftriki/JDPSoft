import * as React from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "text-xs font-semibold uppercase tracking-[0.14em]",
            tone === "dark" ? "text-white/50" : "text-accent",
          )}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={cn(
          "max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl",
          tone === "dark" ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "max-w-xl text-base leading-relaxed",
            tone === "dark" ? "text-white/60" : "text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
