import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Rss, Plus, Search, Clock, Workflow, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/autopilot")({
  head: () => ({ meta: [{ title: "Autopilot · MediaOps" }] }),
  component: Autopilot,
});

const rules = [
  { id: "r_01", source: "TechCrunch RSS", type: "rss", interval: "6h", worker: "Tech Digest", nextRun: "in 2h 14m", state: "active" },
  { id: "r_02", source: "@everything 'NBA highlights'", type: "search", interval: "12h", worker: "Sports Analyst", nextRun: "in 4h 02m", state: "active" },
  { id: "r_03", source: "Hacker News /front", type: "rss", interval: "24h", worker: "Tech Digest", nextRun: "in 11h", state: "active" },
  { id: "r_04", source: "@finance 'fed rate decision'", type: "search", interval: "6h", worker: "Market Pulse", nextRun: "paused", state: "paused" },
];

function Autopilot() {
  return (
    <>
      <PageHeader
        eyebrow="Scheduler · Ingestion"
        title="Autopilot"
        description="Configure cron schedules and ingestion rules that feed the cognitive worker layer."
        actions={
          <button className="px-4 py-2.5 rounded-lg bg-primary text-primary-foreground font-display font-semibold shadow-lg shadow-primary/30 hover:scale-[1.02] transition flex items-center gap-2">
            <Plus className="size-4" /> New Rule
          </button>
        }
      />

      <div className="glass-card rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="font-display font-semibold">Background Process Flow</h3>
            <p className="text-xs text-muted-foreground">End-to-end automation graph</p>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--neon)] flex items-center gap-2">
            <span className="size-1.5 rounded-full bg-[var(--neon)] shadow-[0_0_8px] shadow-[var(--neon)]" />Operational
          </span>
        </div>
        <div className="relative grid grid-cols-5 gap-3 items-stretch">
          {[
            { icon: Rss, title: "Ingest Context", sub: "RSS / Search / Webhook", count: "4 sources" },
            { icon: Search, title: "Extract Signal", sub: "LangChain reducer", count: "247 today" },
            { icon: Workflow, title: "Score Viral Potential", sub: "Embedding rank · k=12", count: "84.6 avg" },
            { icon: Clock, title: "Queue & Throttle", sub: "Priority bucketing", count: "12 in queue" },
            { icon: Workflow, title: "Dispatch to Workers", sub: "Swarm scheduler", count: "5 active" },
          ].map((n, i, arr) => (
            <div key={i} className="relative">
              <div className="glass-card glass-card-hover rounded-xl p-4 h-full">
                <div className="size-9 rounded-lg bg-primary/15 border border-primary/30 flex items-center justify-center mb-3">
                  <n.icon className="size-4 text-primary" />
                </div>
                <div className="font-display font-semibold text-sm leading-tight">{n.title}</div>
                <div className="text-[10px] font-mono text-muted-foreground mt-1 uppercase tracking-wider">{n.sub}</div>
                <div className="text-xs text-[var(--cyan)] font-mono mt-2">{n.count}</div>
              </div>
              {i < arr.length - 1 && (
                <ArrowRight className="absolute top-1/2 -right-2.5 -translate-y-1/2 size-4 text-primary/50 z-10" />
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="glass-card rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-semibold">Ingestion Rules</h3>
          <span className="text-xs text-muted-foreground font-mono">{rules.filter(r => r.state === "active").length} / {rules.length} active</span>
        </div>
        <div className="space-y-2">
          <div className="grid grid-cols-12 gap-3 px-3 py-2 text-[10px] font-mono uppercase tracking-wider text-muted-foreground border-b border-border/40">
            <div className="col-span-1">ID</div>
            <div className="col-span-4">Source</div>
            <div className="col-span-1">Type</div>
            <div className="col-span-2">Interval</div>
            <div className="col-span-2">Worker</div>
            <div className="col-span-2 text-right">Next run</div>
          </div>
          {rules.map((r) => (
            <div key={r.id} className="grid grid-cols-12 gap-3 items-center p-3 rounded-lg bg-[var(--elevated)]/40 border border-border/40 hover:border-primary/30 transition">
              <div className="col-span-1 font-mono text-xs text-muted-foreground flex items-center gap-2">
                <span className={`size-1.5 rounded-full ${r.state === "active" ? "bg-[var(--neon)] shadow-[0_0_6px] shadow-[var(--neon)]" : "bg-muted-foreground/40"}`} />
                {r.id}
              </div>
              <div className="col-span-4 text-sm font-medium">{r.source}</div>
              <div className="col-span-1 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[var(--background)]/60 border border-border/40 text-[var(--cyan)] w-fit">{r.type}</div>
              <div className="col-span-2 font-mono text-sm">every {r.interval}</div>
              <div className="col-span-2 text-sm">{r.worker}</div>
              <div className="col-span-2 text-right font-mono text-xs text-muted-foreground">{r.nextRun}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
