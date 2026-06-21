import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { Sparkles, Link2, Mic, Zap, ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/create")({
  head: () => ({ meta: [{ title: "Create · MediaOps" }] }),
  component: Create,
});

const personas = [
  { id: "news", name: "News Reporter", desc: "Sharp factual delivery, 3-act briefing", tone: "Authoritative" },
  { id: "sport", name: "Sport Analyst", desc: "Play-by-play with statistical depth", tone: "Energetic" },
  { id: "tutorial", name: "Tutorial Creator", desc: "Step-by-step with on-screen captions", tone: "Instructive" },
  { id: "story", name: "Storyteller", desc: "Cinematic narrative arcs", tone: "Atmospheric" },
];

function Create() {
  const [persona, setPersona] = useState(personas[0].id);
  const [orient, setOrient] = useState<"v" | "h">("v");

  return (
    <>
      <PageHeader eyebrow="Pipeline · Step 01" title="Create" description="Initiate a new automated text-to-video production routine." />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-7 rounded-md bg-primary/20 text-primary flex items-center justify-center font-mono text-xs">01</div>
              <h3 className="font-display font-semibold">Context Source</h3>
            </div>
            <div className="flex gap-2 mb-3">
              <button className="text-xs px-3 py-1.5 rounded-md bg-primary/15 text-primary border border-primary/40 font-mono uppercase tracking-wider">Prompt</button>
              <button className="text-xs px-3 py-1.5 rounded-md bg-[var(--elevated)] text-muted-foreground border border-border/40 font-mono uppercase tracking-wider hover:text-foreground"><Link2 className="size-3 inline mr-1" />URL</button>
              <button className="text-xs px-3 py-1.5 rounded-md bg-[var(--elevated)] text-muted-foreground border border-border/40 font-mono uppercase tracking-wider hover:text-foreground">RSS</button>
            </div>
            <textarea
              className="w-full h-40 rounded-lg bg-[var(--background)]/60 border border-border/60 px-4 py-3 text-sm font-mono resize-none focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20"
              placeholder="Describe the video you want to generate, or paste an article URL / topic seed…&#10;&#10;e.g. 'Explain the implications of yesterday's Federal Reserve decision in the style of a 45-second financial briefing.'"
              defaultValue=""
            />
            <div className="flex justify-between text-xs text-muted-foreground mt-2 font-mono">
              <span>0 / 4096 tokens</span><span>Auto-summarize · ON</span>
            </div>
          </div>

          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-7 rounded-md bg-primary/20 text-primary flex items-center justify-center font-mono text-xs">02</div>
              <h3 className="font-display font-semibold">Cognitive Agent Persona</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {personas.map((p) => (
                <button
                  key={p.id}
                  onClick={() => setPersona(p.id)}
                  className={`text-left p-4 rounded-lg border transition ${
                    persona === p.id
                      ? "border-primary/60 bg-primary/10 shadow-lg shadow-primary/10"
                      : "border-border/40 bg-[var(--elevated)]/40 hover:border-primary/30"
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <div className="font-semibold text-sm">{p.name}</div>
                    <span className="text-[9px] font-mono uppercase tracking-wider text-[var(--cyan)] px-1.5 py-0.5 rounded bg-[var(--cyan)]/10 border border-[var(--cyan)]/30">{p.tone}</span>
                  </div>
                  <div className="text-xs text-muted-foreground">{p.desc}</div>
                </button>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-7 rounded-md bg-primary/20 text-primary flex items-center justify-center font-mono text-xs">03</div>
              <h3 className="font-display font-semibold">Output Configuration</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Orientation</label>
                <div className="flex gap-2 mt-2">
                  <button onClick={() => setOrient("v")} className={`flex-1 flex flex-col items-center gap-1.5 p-3 rounded-lg border ${orient === "v" ? "border-primary/60 bg-primary/10" : "border-border/40 bg-[var(--elevated)]/40"}`}>
                    <div className="w-5 h-8 rounded border border-current" />
                    <span className="text-xs font-mono">9:16</span>
                  </button>
                  <button onClick={() => setOrient("h")} className={`flex-1 flex flex-col items-center gap-1.5 p-3 rounded-lg border ${orient === "h" ? "border-primary/60 bg-primary/10" : "border-border/40 bg-[var(--elevated)]/40"}`}>
                    <div className="w-8 h-5 rounded border border-current" />
                    <span className="text-xs font-mono">16:9</span>
                  </button>
                </div>
              </div>
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Voice Synthesis</label>
                <button className="mt-2 w-full flex items-center justify-between p-3 rounded-lg border border-border/40 bg-[var(--elevated)]/40 hover:border-primary/30">
                  <span className="flex items-center gap-2 text-sm"><Mic className="size-4 text-[var(--cyan)]" /> ElevenLabs · Atlas</span>
                  <ChevronDown className="size-4 text-muted-foreground" />
                </button>
              </div>
            </div>
            <div className="flex items-center gap-6 mt-4 pt-4 border-t border-border/40">
              {["Auto-caption", "B-roll synthesis", "Music bed", "Watermark"].map((o, i) => (
                <label key={o} className="flex items-center gap-2 text-xs cursor-pointer">
                  <input type="checkbox" defaultChecked={i < 3} className="size-3.5 accent-[var(--primary)]" />
                  <span>{o}</span>
                </label>
              ))}
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-primary via-primary to-[var(--cyan)] text-white font-display font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.01] transition">
            <Zap className="size-5" />
            Dispatch Pipeline Routine
            <span className="text-xs font-mono opacity-70 ml-2">≈ 4m 12s ETA</span>
          </button>
        </div>

        <div className="space-y-6">
          <div className="glass-card rounded-xl p-6 sticky top-6">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="size-4 text-[var(--neon)]" />
              <h3 className="font-display font-semibold">Live Preview</h3>
            </div>
            <div className={`mx-auto rounded-lg grid-bg border border-border/60 ${orient === "v" ? "aspect-[9/16] w-40" : "aspect-video w-full"} flex items-center justify-center`}>
              <span className="text-xs font-mono text-muted-foreground">awaiting dispatch</span>
            </div>
            <div className="mt-5 space-y-3 text-xs">
              {[
                ["Persona", personas.find(p => p.id === persona)?.name],
                ["Orientation", orient === "v" ? "9:16 Vertical" : "16:9 Horizontal"],
                ["Voice", "Atlas"],
                ["Est. cost", "0.42 credits"],
                ["Queue position", "#3"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-border/30 pb-2">
                  <span className="text-muted-foreground font-mono uppercase tracking-wider text-[10px]">{k}</span>
                  <span className="font-medium">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
