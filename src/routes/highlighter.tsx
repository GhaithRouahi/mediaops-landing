import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Film, Wand2 } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/highlighter")({
  head: () => ({ meta: [{ title: "Highlighter · MediaOps" }] }),
  component: Highlighter,
});

const segments = [
  { t: "00:00:42", dur: 8, title: "Opening monologue · key thesis", intensity: 78 },
  { t: "00:04:12", dur: 12, title: "First product reveal", intensity: 92 },
  { t: "00:09:30", dur: 6, title: "Audience reaction shot", intensity: 65 },
  { t: "00:14:55", dur: 10, title: "Demo · live coding moment", intensity: 88 },
  { t: "00:21:08", dur: 14, title: "Co-founder cameo", intensity: 71 },
  { t: "00:27:44", dur: 9, title: "Pricing reveal", intensity: 95 },
  { t: "00:33:21", dur: 11, title: "Roadmap reveal · 2026", intensity: 84 },
  { t: "00:38:50", dur: 7, title: "Closing call-to-action", intensity: 81 },
];

function Highlighter() {
  const [selected, setSelected] = useState<number[]>([1, 3, 5, 6]);
  const toggle = (i: number) => setSelected((s) => s.includes(i) ? s.filter(x => x !== i) : [...s, i]);
  const totalDur = selected.reduce((a, i) => a + segments[i].dur, 0);

  return (
    <>
      <PageHeader
        eyebrow="Trailer Compositor"
        title="Highlighter"
        description="Sequence prime timestamps chronologically into a unified, high-impact promotional teaser."
        actions={
          <button className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-[var(--cyan)] text-white font-display font-semibold shadow-lg shadow-primary/30 hover:scale-[1.02] transition flex items-center gap-2">
            <Wand2 className="size-4" /> Compile Trailer
          </button>
        }
      />

      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          ["Selected segments", selected.length],
          ["Total duration", `${totalDur}s`],
          ["Avg. intensity", `${Math.round(selected.reduce((a, i) => a + segments[i].intensity, 0) / Math.max(selected.length, 1))}`],
          ["Est. render", "1m 48s"],
        ].map(([k, v]) => (
          <div key={k as string} className="glass-card rounded-xl p-4">
            <div className="text-2xl font-display font-bold">{v}</div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mt-1">{k}</div>
          </div>
        ))}
      </div>

      <div className="glass-card rounded-xl p-6 mb-6">
        <h3 className="font-display font-semibold mb-4">Trailer Sequence</h3>
        <div className="relative">
          <div className="absolute left-0 right-0 top-1/2 h-px bg-border/60" />
          <div className="relative flex items-center gap-2 overflow-x-auto pb-2">
            {selected.length === 0 ? (
              <div className="w-full text-center py-8 text-sm text-muted-foreground font-mono">Select segments below to build the sequence</div>
            ) : selected.map((i, idx) => (
              <div key={i} className="shrink-0 flex flex-col items-center gap-1">
                <div className="text-[10px] font-mono text-[var(--cyan)]">{segments[i].t}</div>
                <div className="relative w-32 h-20 rounded-lg grid-bg border border-primary/50 bg-primary/5 flex items-center justify-center text-xs p-2 text-center">
                  <Film className="absolute top-1.5 left-1.5 size-3 text-primary" />
                  <span className="font-medium leading-tight">{segments[i].title.split(" · ")[0]}</span>
                </div>
                <div className="text-[10px] font-mono text-muted-foreground">{segments[i].dur}s</div>
                {idx < selected.length - 1 && <div className="absolute" />}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="glass-card rounded-xl p-6">
        <h3 className="font-display font-semibold mb-4">Available Segments</h3>
        <div className="space-y-1.5">
          {segments.map((s, i) => {
            const isSel = selected.includes(i);
            return (
              <button
                key={i}
                onClick={() => toggle(i)}
                className={`w-full flex items-center gap-4 p-3 rounded-lg border transition text-left ${
                  isSel ? "border-primary/60 bg-primary/10" : "border-border/40 bg-[var(--elevated)]/40 hover:border-primary/30"
                }`}
              >
                <div className={`size-5 rounded border-2 flex items-center justify-center ${isSel ? "border-primary bg-primary" : "border-border/60"}`}>
                  {isSel && <svg className="size-3 text-white" viewBox="0 0 20 20" fill="currentColor"><path d="M16.7 5.3l-8 8-4-4 1.4-1.4 2.6 2.6 6.6-6.6z" /></svg>}
                </div>
                <div className="font-mono text-xs text-[var(--cyan)] w-20">{s.t}</div>
                <div className="flex-1 text-sm font-medium">{s.title}</div>
                <div className="w-32 h-1.5 rounded-full bg-[var(--elevated)] overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-primary to-[var(--neon)]" style={{ width: `${s.intensity}%` }} />
                </div>
                <div className="font-mono text-xs w-8 text-right">{s.intensity}</div>
                <div className="font-mono text-xs text-muted-foreground w-10 text-right">{s.dur}s</div>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
