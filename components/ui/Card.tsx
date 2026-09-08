import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-border bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)]",
        className,
      )}
      {...props}
    />
  );
}
