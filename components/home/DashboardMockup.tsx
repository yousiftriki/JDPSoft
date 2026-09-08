import { ArrowUpRight, Bot, CheckCircle2, MessageSquare, Users } from "lucide-react";
import { StatusDot } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const barHeights = [30, 46, 38, 58, 44, 66, 52];

export function DashboardMockup({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-white shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)]",
        className,
      )}
    >
      {/* chrome bar */}
      <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
          <span className="h-2.5 w-2.5 rounded-full bg-border" />
        </div>
        <p className="text-xs font-medium text-muted">JDPsoft — Growth Console</p>
        <span className="flex items-center gap-1.5 text-[11px] font-medium text-ink/70">
          <StatusDot />
          Live
        </span>
      </div>

      <div className="grid grid-cols-1 gap-px bg-border sm:grid-cols-2">
        {/* leads */}
        <div className="flex items-center justify-between bg-white p-5">
          <div>
            <p className="text-xs font-medium text-muted">New Leads</p>
            <p className="mt-1 text-2xl font-semibold text-ink">128</p>
          </div>
          <span className="flex items-center gap-1 rounded-full bg-off-white px-2.5 py-1 text-xs font-medium text-ink/70">
            <ArrowUpRight className="h-3.5 w-3.5 text-accent" />
            18%
          </span>
        </div>

        {/* automations */}
        <div className="bg-white p-5">
          <p className="text-xs font-medium text-muted">Automations Running</p>
          <div className="mt-1 flex items-center gap-2">
            <p className="text-2xl font-semibold text-ink">6</p>
            <StatusDot />
          </div>
        </div>

        {/* chart */}
        <div className="bg-white p-5 sm:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-medium text-muted">Website Analytics</p>
            <span className="text-xs font-medium text-ink/50">7 days</span>
          </div>
          <div className="flex h-16 items-end gap-2">
            {barHeights.map((h, i) => (
              <span
                key={i}
                className={cn(
                  "flex-1 rounded-sm",
                  i === barHeights.length - 1 ? "bg-accent" : "bg-off-white",
                )}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </div>

        {/* AI assistant */}
        <div className="flex items-start gap-3 bg-white p-5">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black text-white">
            <Bot className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="text-xs font-medium text-muted">AI Assistant</p>
            <p className="mt-1 truncate text-sm text-ink/80">
              Booked a call with Sarah M. — Thu, 2:00 PM
            </p>
          </div>
        </div>

        {/* support tickets */}
        <div className="bg-white p-5">
          <div className="mb-2 flex items-center gap-2 text-xs font-medium text-muted">
            <MessageSquare className="h-3.5 w-3.5" />
            Support Tickets
          </div>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1.5 text-ink/80">
              <CheckCircle2 className="h-3.5 w-3.5 text-ink/40" />
              14 resolved
            </span>
          </div>
          <div className="mt-1 flex items-center gap-1.5 text-sm text-ink/80">
            <Users className="h-3.5 w-3.5 text-ink/40" />
            2 open
          </div>
        </div>
      </div>
    </div>
  );
}
