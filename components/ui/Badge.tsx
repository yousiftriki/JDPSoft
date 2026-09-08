import * as React from "react";
import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-border bg-off-white px-3 py-1 text-xs font-medium text-muted",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export function StatusDot({ className }: { className?: string }) {
  return (
    <span className={cn("relative flex h-1.5 w-1.5", className)}>
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
    </span>
  );
}
