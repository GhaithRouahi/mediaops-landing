import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Database, Server, Boxes, Cpu, Layers, Code2 } from "lucide-react";

export const Route = createFileRoute("/infrastructure")({
  head: () => ({ meta: [{ title: "Infrastructure · MediaOps" }] }),
  component: Infrastructure,
});

const nodes = [
  { name: "React Frontend", layer: "Edge", state: "healthy", uptime: "99.99%", latency: "12ms", instances: 4, icon: Code2 },
  { name: "NestJS Enterprise Core", layer: "API", state: "healthy", uptime: "99.97%", latency: "34ms", instances: 6, icon: Server },
  { name: "FastAPI Processing Tier", layer: "Compute", state: "healthy", uptime: "99.94%", latency: "118ms", instances: 8, icon: Cpu },
  { name: "PostgreSQL Primary", layer: "Storage", state: "healthy", uptime: "99.99%", latency: "3ms", instances: 1, icon: Database },
  { name: "PostgreSQL Replicas", layer: "Storage", state: "degraded", uptime: "99.82%", latency: "8ms", instances: 3, icon: Database },
  { name: "LangChain Pipelines", layer: "AI", state: "healthy", uptime: "99.91%", latency: "412ms", instances: 12, icon: Layers },
  { name: "Docker Swarm Cluster", layer: "Orchestration", state: "healthy", uptime: "100%", latency: "—", instances: 18, icon: Boxes },
  { name: "Redis Job Queue", layer: "Cache", state: "healthy", uptime: "99.98%", latency: "1ms", instances: 3, icon: Layers },
];

const stateStyle: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  healthy: { bg: "bg-[var(--neon)]/10", text: "text-[var(--neon)]", border: "border-[var(--neon)]/30", dot: "bg-[var(--neon)]" },
  degraded: { bg: "bg-amber-500/10", text: "text-amber-400", border: "border-amber-500/30", dot: "bg-amber-400" },
  down: { bg: "bg-destructive/10", text: "text-destructive", border: "border-destructive/30", dot: "bg-destructive" },
};

function Infrastructure() {
  return (
    <>
      <PageHeader eyebrow="System Topology" title="Infrastructure State" description="Distributed microservices landscape · real-time node health." />

      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          ["Total nodes", "55", "var(--cyan)"],
          ["Healthy", "52", "var(--neon)"],
          ["Degraded", "3", "oklch(0.78 0.18 80)"],
          ["P99 latency", "418ms", "var(--primary)"],
        ].map(([k, v, c]) => (
          <div key={k} className="glass-card rounded-xl p-5">
            <div className="text-3xl font-display font-bold" style={{ color: c }}>{v}</div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mt-1">{k}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {nodes.map((n) => {
          const s = stateStyle[n.state];
          return (
            <div key={n.name} className="glass-card glass-card-hover rounded-xl p-5">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="size-10 rounded-lg bg-[var(--elevated)] border border-border/40 flex items-center justify-center">
                    <n.icon className="size-5 text-[var(--cyan)]" />
                  </div>
                  <div>
                    <div className="font-display font-semibold">{n.name}</div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mt-0.5">{n.layer} layer</div>
                  </div>
                </div>
                <div className={`flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded border ${s.bg} ${s.text} ${s.border}`}>
                  <span className="relative flex size-1.5">
                    {n.state === "healthy" && <span className={`absolute inline-flex h-full w-full rounded-full ${s.dot} opacity-60 animate-ping`} />}
                    <span className={`relative inline-flex size-1.5 rounded-full ${s.dot}`} />
                  </span>
                  {n.state}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border/40">
                <div>
                  <div className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground">Uptime</div>
                  <div className="text-sm font-display font-semibold mt-0.5">{n.uptime}</div>
                </div>
                <div>
                  <div className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground">Latency</div>
                  <div className="text-sm font-display font-semibold mt-0.5">{n.latency}</div>
                </div>
                <div>
                  <div className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground">Instances</div>
                  <div className="text-sm font-display font-semibold mt-0.5">{n.instances}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
