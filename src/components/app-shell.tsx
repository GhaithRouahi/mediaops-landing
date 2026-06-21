import { Link, useRouterState } from "@tanstack/react-router";
import { LayoutDashboard, Sparkles, Scissors, Target, Clock, Server, Activity } from "lucide-react";

const nav = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard, emoji: "📊" },
  { to: "/create", label: "Create", icon: Sparkles, emoji: "✨" },
  { to: "/clipper", label: "Clipper", icon: Scissors, emoji: "✂️" },
  { to: "/highlighter", label: "Highlighter", icon: Target, emoji: "🎯" },
  { to: "/autopilot", label: "Autopilot", icon: Clock, emoji: "⏳" },
  { to: "/infrastructure", label: "Infrastructure", icon: Server, emoji: "⚙️" },
] as const;

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div className="min-h-screen flex w-full text-foreground">
      <aside className="w-64 shrink-0 border-r border-border/60 bg-[var(--panel)]/40 backdrop-blur-xl flex flex-col sticky top-0 h-screen">
        <div className="px-6 py-6 border-b border-border/60">
          <div className="flex items-center gap-2.5">
            <div className="size-9 rounded-lg bg-gradient-to-br from-primary via-primary to-[var(--cyan)] flex items-center justify-center shadow-lg shadow-primary/30">
              <Activity className="size-5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <div className="font-display font-bold text-base tracking-tight">MediaOps</div>
              <div className="text-[10px] text-muted-foreground font-mono uppercase tracking-widest">v2.4 · prod</div>
            </div>
          </div>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-1">
          <div className="px-3 pb-2 text-[10px] font-mono uppercase tracking-widest text-muted-foreground">Workspace</div>
          {nav.map((item) => {
            const active = pathname === item.to;
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`group flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${
                  active
                    ? "bg-primary/15 text-foreground border border-primary/40 shadow-sm shadow-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-[var(--elevated)]/60 border border-transparent"
                }`}
              >
                <Icon className={`size-4 ${active ? "text-primary" : ""}`} />
                <span className="font-medium">{item.label}</span>
                {active && <span className="ml-auto size-1.5 rounded-full bg-[var(--neon)] shadow-[0_0_8px] shadow-[var(--neon)]" />}
              </Link>
            );
          })}
        </nav>

        <div className="m-3 p-4 rounded-xl glass-card">
          <div className="flex items-center gap-2 mb-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--neon)] opacity-60 animate-ping" />
              <span className="relative inline-flex size-2 rounded-full bg-[var(--neon)]" />
            </span>
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">System</span>
          </div>
          <div className="text-sm font-semibold">All systems nominal</div>
          <div className="text-xs text-muted-foreground mt-1">12 workers · 4ms RTT</div>
        </div>
      </aside>

      <main className="flex-1 min-w-0">
        <div className="max-w-[1400px] mx-auto px-8 py-8">{children}</div>
      </main>
    </div>
  );
}
