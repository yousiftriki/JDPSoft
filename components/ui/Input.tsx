import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-12 w-full rounded-xl border border-border bg-white px-4 text-sm text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-black/30 focus:ring-2 focus:ring-accent/30",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      "min-h-28 w-full resize-none rounded-xl border border-border bg-white px-4 py-3 text-sm text-ink placeholder:text-muted/70 outline-none transition-colors focus:border-black/30 focus:ring-2 focus:ring-accent/30",
      className,
    )}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export function Label({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("mb-1.5 block text-xs font-medium text-ink/80", className)}
      {...props}
    />
  );
}
