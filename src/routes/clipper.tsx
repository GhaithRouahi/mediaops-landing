import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Upload, Scissors, Flame, Play } from "lucide-react";

export const Route = createFileRoute("/clipper")({
  head: () => ({ meta: [{ title: "Clipper · MediaOps" }] }),
  component: Clipper,
});

const hooks = [
  { start: "00:02:14", dur: "0:38", score: 94, hook: "The moment the CEO admitted the truth about Q4 earnings", tags: ["Reveal", "Finance"] },
  { start: "00:08:47", dur: "0:52", score: 91, hook: "Why every founder needs to rethink their hiring loop", tags: ["Insight", "Hiring"] },
  { start: "00:15:03", dur: "0:41", score: 88, hook: "Three frameworks that 10x'd our shipping velocity", tags: ["Tactical"] },
  { start: "00:22:18", dur: "1:04", score: 84, hook: "The biggest mistake I made building the first version", tags: ["Story", "Lesson"] },
  { start: "00:31:55", dur: "0:46", score: 79, hook: "How we use AI to write 80% of our internal docs", tags: ["AI", "Workflow"] },
  { start: "00:42:11", dur: "0:33", score: 72, hook: "A counterintuitive take on remote-first culture", tags: ["Culture"] },
];

function Clipper() {
  return (
    <>
      <PageHeader eyebrow="Slicing Engine" title="Clipper" description="Long-form to short-form. Semantic AI alignment finds the viral hooks for you." />

      <div className="glass-card rounded-xl p-6 mb-6">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-lg bg-[var(--background)]/60 border border-dashed border-border/60 hover:border-primary/40 transition">
            <Upload className="size-5 text-muted-foreground" />
            <input className="flex-1 bg-transparent text-sm font-mono focus:outline-none placeholder:text-muted-foreground" placeholder="Drop video file or paste YouTube / Vimeo / direct URL…" defaultValue="https://youtu.be/dQw4w9WgXcQ" />
          </div>
          <button className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-display font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition flex items-center gap-2">
            <Scissors className="size-4" /> Analyze & Slice
          </button>
        </div>
      </div>

      <div className="glass-card rounded-xl p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-display font-semibold">Semantic Alignment Map</h3>
            <p className="text-xs text-muted-foreground">Detected viral inflection points across 47:23 source</p>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--neon)]">6 hooks identified</span>
        </div>
        <div className="relative h-24 rounded-lg bg-[var(--background)]/60 border border-border/40 overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-50" />
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 100">
            <defs>
              <linearGradient id="wave" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.62 0.24 295)" stopOpacity="0.6" />
                <stop offset="100%" stopColor="oklch(0.62 0.24 295)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d={`M0,50 ${Array.from({ length: 100 }, (_, i) => `L${i * 10},${50 + Math.sin(i / 3) * 20 + Math.cos(i / 7) * 15}`).join(" ")} L1000,100 L0,100 Z`}
              fill="url(#wave)"
            />
          </svg>
          {[5, 18, 31, 46, 65, 87].map((x, i) => (
            <div key={i} className="absolute top-0 bottom-0 w-px bg-[var(--neon)]" style={{ left: `${x}%` }}>
              <div className="absolute -top-1 -left-1 size-2 rounded-full bg-[var(--neon)] shadow-[0_0_8px] shadow-[var(--neon)]" />
              <div className="absolute bottom-1 left-1 text-[9px] font-mono text-[var(--neon)]">{hooks[i]?.score}</div>
            </div>
          ))}
          <div className="absolute bottom-1 left-2 text-[10px] font-mono text-muted-foreground">00:00</div>
          <div className="absolute bottom-1 right-2 text-[10px] font-mono text-muted-foreground">47:23</div>
        </div>
      </div>

      <div className="glass-card rounded-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-semibold">Recommended Hooks</h3>
          <div className="flex gap-2 text-xs">
            <button className="px-3 py-1 rounded border border-border/60 hover:border-primary/40">Sort: Score</button>
            <button className="px-3 py-1 rounded border border-primary/60 bg-primary/10 text-primary">Export selected</button>
          </div>
        </div>
        <div className="space-y-2">
          {hooks.map((h, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-[var(--elevated)]/40 border border-border/40 hover:border-primary/30 transition group">
              <input type="checkbox" defaultChecked={i < 3} className="size-4 accent-[var(--primary)]" />
              <div className="flex flex-col items-center gap-0.5 font-mono text-xs">
                <span className="text-[var(--cyan)]">{h.start}</span>
                <span className="text-muted-foreground">{h.dur}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-sm">{h.hook}</div>
                <div className="flex gap-1.5 mt-1.5">
                  {h.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-[var(--elevated)] border border-border/40 text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Flame className={`size-4 ${h.score > 90 ? "text-[var(--neon)]" : h.score > 80 ? "text-[var(--cyan)]" : "text-muted-foreground"}`} />
                <div>
                  <div className="font-display font-bold text-lg leading-none">{h.score}</div>
                  <div className="text-[9px] font-mono uppercase tracking-wider text-muted-foreground">virality</div>
                </div>
              </div>
              <button className="size-9 rounded-lg border border-border/60 hover:border-primary/60 hover:bg-primary/10 hover:text-primary flex items-center justify-center transition">
                <Play className="size-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
