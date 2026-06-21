import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Activity, Clock, Film, Workflow, Play, Pause, ArrowUpRight, Cpu } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Overview · MediaOps" }] }),
  component: Overview,
});

const metrics = [
  { label: "Avg E2E Render Loop", value: "4:12", unit: "min", delta: "-18%", icon: Clock, accent: "var(--neon)" },
  { label: "Short Videos Processed", value: "12,847", unit: "total", delta: "+342 / 24h", icon: Film, accent: "var(--cyan)" },
  { label: "Deployed Cron Pipelines", value: "28", unit: "active", delta: "3 scheduled", icon: Workflow, accent: "var(--primary)" },
  { label: "Queue Throughput", value: "94.6", unit: "vid/hr", delta: "+12%", icon: Cpu, accent: "var(--neon)" },
];

const workers = [
  { name: "Tech Digest Worker", persona: "News Reporter", status: "active", jobs: 142, last: "2s ago" },
  { name: "Sports Analyst", persona: "Sport Analyst", status: "active", jobs: 89, last: "12s ago" },
  { name: "Tutorial Synthesizer", persona: "Tutorial Creator", status: "active", jobs: 56, last: "1m ago" },
  { name: "Lore Weaver", persona: "Storyteller", status: "paused", jobs: 0, last: "2h ago" },
  { name: "Market Pulse", persona: "News Reporter", status: "active", jobs: 211, last: "4s ago" },
];

const recent = [
  { id: "vid_9F2A", title: "Apple unveils Vision Pro 2 — full breakdown", agent: "Tech Digest", status: "Published", duration: "0:42" },
  { id: "vid_9F2B", title: "Top 5 NBA buzzer beaters from last night", agent: "Sports Analyst", status: "Ready", duration: "0:58" },
  { id: "vid_9F2C", title: "How to deploy a Postgres replica in 60s", agent: "Tutorial", status: "Rendering", duration: "1:12" },
  { id: "vid_9F2D", title: "The forgotten city beneath Istanbul", agent: "Storyteller", status: "Ready", duration: "1:34" },
  { id: "vid_9F2E", title: "Fed rate decision — market reaction", agent: "Market Pulse", status: "Rendering", duration: "0:47" },
  { id: "vid_9F2F", title: "OpenAI o4 benchmark deep-dive", agent: "Tech Digest", status: "Published", duration: "1:08" },
];

const statusStyle: Record<string, string> = {
  Published: "bg-[var(--neon)]/15 text-[var(--neon)] border-[var(--neon)]/30",
  Ready: "bg-[var(--cyan)]/15 text-[var(--cyan)] border-[var(--cyan)]/30",
  Rendering: "bg-primary/15 text-primary border-primary/30",
};

function Ring({ value, color = "var(--primary)" }: { value: number; color?: string }) {
  const c = 2 * Math.PI * 28;
  return (
    <svg className="size-16 -rotate-90" viewBox="0 0 64 64">
      <circle cx="32" cy="32" r="28" stroke="oklch(0.25 0.03 280)" strokeWidth="5" fill="none" />
      <circle cx="32" cy="32" r="28" stroke={color} strokeWidth="5" fill="none" strokeDasharray={c} strokeDashoffset={c - (c * value) / 100} strokeLinecap="round" />
    </svg>
  );
}

function Overview() {
  return (
    <>
      <PageHeader eyebrow="Mission Control" title="Overview" description="Live telemetry across your automated video generation microservices fleet." />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {metrics.map((m) => (
          <div key={m.label} className="glass-card glass-card-hover rounded-xl p-5">
            <div className="flex items-start justify-between mb-4">
              <m.icon className="size-5" style={{ color: m.accent }} />
              <span className="text-[10px] font-mono text-muted-foreground">{m.delta}</span>
            </div>
            <div className="text-3xl font-display font-bold tracking-tight">{m.value}</div>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-xs text-muted-foreground">{m.unit}</span>
            </div>
            <div className="text-xs text-muted-foreground mt-3 uppercase tracking-wider">{m.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="glass-card rounded-xl p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h2 className="font-display font-semibold text-lg">Render Loop Performance</h2>
              <p className="text-xs text-muted-foreground mt-0.5">Last 24h · per-stage latency breakdown</p>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--neon)] flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-[var(--neon)] shadow-[0_0_8px] shadow-[var(--neon)]" />Live
            </span>
          </div>
          <div className="flex items-end gap-1.5 h-48">
            {Array.from({ length: 48 }).map((_, i) => {
              const h = 30 + Math.sin(i / 3) * 25 + Math.random() * 30;
              return (
                <div key={i} className="flex-1 flex flex-col gap-0.5 justify-end">
                  <div className="rounded-sm bg-primary/70" style={{ height: `${h}%` }} />
                  <div className="rounded-sm bg-[var(--cyan)]/60" style={{ height: `${h * 0.4}%` }} />
                </div>
              );
            })}
          </div>
          <div className="flex gap-5 mt-4 text-xs">
            <div className="flex items-center gap-2"><span className="size-2 rounded-sm bg-primary" /> Synthesis</div>
            <div className="flex items-center gap-2"><span className="size-2 rounded-sm bg-[var(--cyan)]" /> Render</div>
          </div>
        </div>

        <div className="glass-card rounded-xl p-6">
          <h2 className="font-display font-semibold text-lg mb-4">Pipeline Health</h2>
          <div className="space-y-5">
            {[
              { label: "GPU Saturation", val: 72, color: "var(--primary)" },
              { label: "Queue Depth", val: 41, color: "var(--cyan)" },
              { label: "Cache Hit", val: 94, color: "var(--neon)" },
            ].map((r) => (
              <div key={r.label} className="flex items-center gap-4">
                <Ring value={r.val} color={r.color} />
                <div>
                  <div className="text-2xl font-display font-bold">{r.val}<span className="text-sm text-muted-foreground">%</span></div>
                  <div className="text-xs text-muted-foreground">{r.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="glass-card rounded-xl p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-display font-semibold text-lg">Active Workers</h2>
              <p className="text-xs text-muted-foreground">Background cognitive agents</p>
            </div>
            <Activity className="size-4 text-muted-foreground" />
          </div>
          <div className="space-y-2">
            {workers.map((w) => (
              <div key={w.name} className="flex items-center gap-3 p-3 rounded-lg bg-[var(--elevated)]/40 border border-border/40 hover:border-primary/30 transition">
                {w.status === "active" ? (
                  <span className="relative flex size-2.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--neon)] opacity-60 animate-ping" />
                    <span className="relative inline-flex size-2.5 rounded-full bg-[var(--neon)] shadow-[0_0_10px] shadow-[var(--neon)]" />
                  </span>
                ) : (
                  <span className="size-2.5 rounded-full bg-muted-foreground/40" />
                )}
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-sm truncate">{w.name}</div>
                  <div className="text-xs text-muted-foreground font-mono">{w.persona} · {w.last}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-display font-semibold">{w.jobs}</div>
                  <div className="text-[10px] text-muted-foreground uppercase">jobs</div>
                </div>
                <button className="size-7 rounded-md hover:bg-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary">
                  {w.status === "active" ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-xl p-6 lg:col-span-3">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="font-display font-semibold text-lg">Recent Generations</h2>
              <p className="text-xs text-muted-foreground">Asset pipeline feed</p>
            </div>
            <button className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1">View all <ArrowUpRight className="size-3" /></button>
          </div>
          <div className="space-y-1">
            <div className="grid grid-cols-12 gap-3 px-3 py-2 text-[10px] font-mono uppercase tracking-wider text-muted-foreground border-b border-border/40">
              <div className="col-span-1">ID</div>
              <div className="col-span-6">Title</div>
              <div className="col-span-2">Status</div>
              <div className="col-span-1">Dur</div>
              <div className="col-span-2 text-right">Action</div>
            </div>
            {recent.map((v) => (
              <div key={v.id} className="grid grid-cols-12 gap-3 items-center px-3 py-2.5 rounded-lg hover:bg-[var(--elevated)]/50 transition text-sm">
                <div className="col-span-1 font-mono text-xs text-muted-foreground">{v.id.slice(-4)}</div>
                <div className="col-span-6 min-w-0">
                  <div className="truncate font-medium">{v.title}</div>
                  <div className="text-[11px] text-muted-foreground font-mono">{v.agent}</div>
                </div>
                <div className="col-span-2">
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded border ${statusStyle[v.status]}`}>{v.status}</span>
                </div>
                <div className="col-span-1 font-mono text-xs text-muted-foreground">{v.duration}</div>
                <div className="col-span-2 text-right">
                  <button className="text-xs px-3 py-1 rounded-md border border-border/60 hover:border-primary/60 hover:bg-primary/10 hover:text-primary transition">Preview</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
