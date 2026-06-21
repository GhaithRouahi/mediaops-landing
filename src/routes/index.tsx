import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Play, FileText, Bot, Settings, Smartphone, Sparkles, Scissors, Target, Clock, Search, BarChart3, Rocket, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
});

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] } }),
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

function Landing() {
  return (
    <div className="min-h-screen bg-[#09090F] text-[#EEEEF5] font-[Inter,sans-serif] overflow-x-hidden">
      {/* Nav */}
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 border-b border-white/[0.06] bg-[#09090F]/90 backdrop-blur-md"
      >
        <Link to="/" className="font-[Syne] font-extrabold text-[18px] tracking-tight text-white">
          Media<span className="text-[#6C3CF7]">Ops</span>
        </Link>
        <div className="hidden md:flex gap-7 text-[13px] text-white/50">
          <a href="#how-it-works" className="hover:text-white transition-colors">How it works</a>
          <a href="#modules" className="hover:text-white transition-colors">Core Modules</a>
          <a href="#autopilot" className="hover:text-white transition-colors">Autopilot</a>
          <a href="#stack" className="hover:text-white transition-colors">Infrastructure</a>
        </div>
        <Link
          to="/dashboard"
          className="bg-[#6C3CF7] hover:bg-[#7D4FF8] text-white px-5 py-2 rounded-md text-[13px] font-medium transition flex items-center gap-1.5"
        >
          Get started <ArrowRight className="size-3.5" />
        </Link>
      </motion.nav>

      {/* Hero */}
      <section className="relative px-6 md:px-10 pt-20 pb-16 text-center max-w-3xl mx-auto">
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-[radial-gradient(closest-side,rgba(108,60,247,0.18),transparent)] blur-2xl" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 bg-[#6C3CF7]/[0.12] border border-[#6C3CF7]/30 rounded-full px-3.5 py-1 font-mono text-[11px] text-[#9B7BFA] tracking-wider mb-7"
        >
          <span className="size-1.5 rounded-full bg-[#6C3CF7] animate-pulse" />
          Agentic AI · Short-Form Production Industrialized
        </motion.div>

        <motion.h1
          initial="hidden"
          animate="show"
          variants={container}
          className="font-[Syne] font-extrabold text-[40px] md:text-[56px] leading-[1.05] tracking-[-1.5px] text-white mb-5"
        >
          {["Stop feeding the", "content machine.", "Automate it."].map((line, i) => (
            <motion.span key={i} variants={fadeUp} custom={i} className="block">
              {i === 1 ? <em className="not-italic text-[#6C3CF7]">{line}</em> : line}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[17px] text-white/50 max-w-xl mx-auto mb-9 leading-relaxed"
        >
          MediaOps coordinates specialized AI agents to handle the complete loop — text research, narrative scripting, voiceovers, automated editing, and multi-platform publishing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="flex gap-3 justify-center flex-wrap"
        >
          <Link
            to="/dashboard"
            className="bg-[#6C3CF7] hover:bg-[#7D4FF8] hover:-translate-y-0.5 text-white px-7 py-3 rounded-lg text-sm font-medium transition-all shadow-lg shadow-[#6C3CF7]/30"
          >
            Start Automating
          </Link>
          <a
            href="#demo"
            className="border border-white/15 hover:border-white/35 text-white/70 hover:text-white px-6 py-3 rounded-lg text-sm transition-all flex items-center gap-2"
          >
            Watch System Demo <span className="text-xs">↓</span>
          </a>
        </motion.div>
      </section>

      {/* Pipeline */}
      <motion.div
        id="how-it-works"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="mx-6 md:mx-auto my-14 p-6 md:p-8 bg-[#0E0E18] border border-white/[0.07] rounded-2xl max-w-3xl"
      >
        <div className="flex items-center justify-between gap-2 flex-wrap md:flex-nowrap">
          {[
            { icon: FileText, label: "Input Context", sub: "Prompt or Web URL", color: "v" },
            { icon: Bot, label: "Agent Orchestration", sub: "Llama 3.1 Scenario Chain", color: "c" },
            { icon: Settings, label: "Asset Assembly", sub: "TTS + FFmpeg Rendering", color: "c" },
            { icon: Smartphone, label: "Ready to Scale", sub: "9:16 Auto-Subtitled", color: "r" },
          ].map((n, i, arr) => {
            const colors = {
              v: "bg-[#6C3CF7]/15 border-[#6C3CF7]/30 text-[#9B7BFA]",
              c: "bg-[#00D4FF]/10 border-[#00D4FF]/20 text-[#00D4FF]",
              r: "bg-[#34D399]/10 border-[#34D399]/25 text-[#34D399]",
            }[n.color];
            return (
              <div key={i} className="flex items-center gap-2 flex-1 min-w-[140px] md:min-w-0">
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.12, type: "spring", stiffness: 200 }}
                  className="flex flex-col items-center gap-2.5 flex-1"
                >
                  <div className={`size-13 w-13 h-13 rounded-xl border flex items-center justify-center ${colors}`} style={{ width: 52, height: 52 }}>
                    <n.icon className="size-5" />
                  </div>
                  <div className="text-[12px] font-medium text-white/70 text-center px-1">{n.label}</div>
                  <div className="font-mono text-[10px] text-white/30 text-center">{n.sub}</div>
                </motion.div>
                {i < arr.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.12 }}
                    className="text-white/15 mb-7"
                  >
                    <ArrowRight className="size-4" />
                  </motion.div>
                )}
              </div>
            );
          })}
        </div>
        <div className="flex gap-1.5 mt-6 justify-center">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className={`size-1.5 rounded-full ${i < 3 ? "bg-[#6C3CF7]" : "bg-white/10"}`}
            />
          ))}
        </div>
      </motion.div>

      {/* Demo video */}
      <Section id="demo" label="System Proof of Concept" title="End-to-End Pipeline Execution" sub="Witness how text context turns into a fully rendered short video asset in minutes, completely managed by headless microservices.">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="relative bg-[#0E0E18] border border-white/[0.08] rounded-2xl overflow-hidden aspect-video"
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-[#0E0E18] to-[#12102A]">
            <div className="font-[Syne] font-bold text-[22px] text-white/[0.12] tracking-tight">MEDIAOPS · PIPELINE WALKTHROUGH</div>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="size-16 rounded-full bg-[#6C3CF7]/90 hover:bg-[#7D4FF8] flex items-center justify-center shadow-2xl shadow-[#6C3CF7]/40"
              aria-label="Play demo"
            >
              <Play className="size-6 text-white fill-white ml-1" />
            </motion.button>
            <div className="font-mono text-xs text-white/35 tracking-wide">4:12 Benchmarked Core Routine</div>
          </div>
          {/* subtle scanline shimmer */}
          <motion.div
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-[#6C3CF7]/[0.05] to-transparent pointer-events-none"
          />
        </motion.div>
      </Section>

      {/* Modules */}
      <Section id="modules" label="System Architectural Modules" title="Four Paradigms of Automated Creation" sub="Stateless microservices designed to scale across container landscapes." wide>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { icon: Sparkles, name: "Create", desc: "Turn text concepts into narrative sequences. Fully managed routing picks ideal specialized personas.", tag: "Text → Reel", color: "#9B7BFA", bg: "rgba(108,60,247,0.12)" },
            { icon: Scissors, name: "Clipper", desc: "Ingest long files. Isolate stand-alone high-retention hooks natively using semantic alignment.", tag: "Long → Shorts", color: "#00D4FF", bg: "rgba(0,212,255,0.1)" },
            { icon: Target, name: "Highlighter", desc: "Sequence prime timestamps chronologically to generate high-impact teaser files effortlessly.", tag: "Media Trailer", color: "#F472B6", bg: "rgba(236,72,153,0.12)" },
            { icon: Clock, name: "Autopilot", desc: "Configure automated cron schedules. Background agents track trends, scoring options automatically.", tag: "Pro · Automated", color: "#34D399", bg: "rgba(52,211,153,0.1)" },
          ].map((m) => (
            <motion.div
              key={m.name}
              variants={fadeUp}
              whileHover={{ y: -4, borderColor: "rgba(108,60,247,0.5)" }}
              className="bg-[#0E0E18] border border-white/[0.07] rounded-xl p-5 flex flex-col justify-between transition-colors"
            >
              <div>
                <div className="size-10 rounded-lg flex items-center justify-center mb-4" style={{ background: m.bg, color: m.color }}>
                  <m.icon className="size-[18px]" />
                </div>
                <div className="font-[Syne] font-bold text-[16px] text-white mb-1.5">{m.name}</div>
                <div className="text-[12.5px] text-white/45 leading-relaxed mb-4">{m.desc}</div>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded self-start tracking-wide" style={{ background: m.bg, color: m.color }}>{m.tag}</span>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Stats */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {[
            { num: "4", unit: "min", label: "Average end-to-end rendering loop duration on standard infrastructure" },
            { num: "0", unit: "x", label: "Manual timeline touchpoints. Code-driven montage workflows" },
            { num: "4", unit: "+", label: "Native cognitive agent profiles (News, Sports, Tuts, Stories)" },
          ].map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="bg-[#0E0E18] border border-white/[0.07] rounded-xl p-6">
              <div className="font-[Syne] font-extrabold text-4xl text-white tracking-[-1px] leading-none">
                {s.num}<span className="text-xl text-[#6C3CF7]">{s.unit}</span>
              </div>
              <div className="text-xs text-white/40 mt-2">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Autopilot */}
      <Section id="autopilot" label="Automated Operations">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="bg-[#0E0E18] border border-[#34D399]/20 rounded-2xl p-7 md:p-8 grid md:grid-cols-2 gap-8 items-center"
        >
          <div>
            <div className="inline-flex items-center gap-1.5 bg-[#34D399]/10 border border-[#34D399]/25 rounded text-[#34D399] font-mono text-[10px] px-2.5 py-1 tracking-wider mb-4">
              <Zap className="size-3" /> PLATFORM SCHEDULER
            </div>
            <h3 className="font-[Syne] font-bold text-[22px] text-white mb-2.5 tracking-tight">Continuous Strategy Management</h3>
            <p className="text-[13px] text-white/45 leading-relaxed mb-5">
              Set ingestion parameters once. The service handles content updates, semantic deduction, deduplication, and execution scheduling entirely behind the scenes.
            </p>
            <div className="flex flex-col gap-2.5">
              {[
                { icon: Search, text: "Scans monitored streams on set cron sequences" },
                { icon: BarChart3, text: "Scores viral potentials and filters text variations" },
                { icon: Rocket, text: "Dispatches routines directly to worker layers" },
              ].map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-2.5 text-xs text-white/55"
                >
                  <div className="size-7 rounded-md bg-[#34D399]/[0.08] border border-[#34D399]/20 flex items-center justify-center text-[#34D399]">
                    <s.icon className="size-3.5" />
                  </div>
                  {s.text}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="bg-white/[0.03] border border-white/[0.05] rounded-xl p-4">
            <div className="font-mono text-[11px] text-white/25 mb-3 tracking-wider">ACTIVE WORKERS STATUS</div>
            {[
              { name: "Tech Digest Worker", meta: "Interval: 6h · Active Pipeline", active: true },
              { name: "Sports Breakdown", meta: "Interval: 24h · Standby Mode", active: false },
              { name: "Educational Concepts", meta: "Interval: 12h · Active Pipeline", active: true },
            ].map((w, i) => (
              <div key={i} className={`flex items-center justify-between py-2.5 text-xs ${i < 2 ? "border-b border-white/[0.05]" : ""}`}>
                <div>
                  <div className="text-white/70 font-medium">{w.name}</div>
                  <div className="font-mono text-[10px] text-white/30 mt-0.5">{w.meta}</div>
                </div>
                <div className={`flex items-center gap-1.5 text-[11px] ${w.active ? "text-[#34D399]" : "text-white/30"}`}>
                  <span className={`size-1.5 rounded-full ${w.active ? "bg-[#34D399] animate-pulse shadow-[0_0_8px] shadow-[#34D399]" : "bg-white/20"}`} />
                  {w.active ? "Active" : "Paused"}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Stack */}
      <section id="stack" className="px-6 md:px-10 pb-20 max-w-3xl mx-auto text-center">
        <div className="font-mono text-[11px] text-white/20 tracking-wider uppercase mb-5">Decoupled Microservice Landscape</div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="flex flex-wrap gap-2.5 justify-center"
        >
          {["React Frontend", "NestJS Enterprise Core", "FastAPI Processing Tiers", "PostgreSQL Data Storage", "LangChain Pipeline Chains", "Llama 3.1 Processing", "Whisper Structural Alignment", "Docker Swarm Cluster", "Redis Queue"].map((p) => (
            <motion.div
              key={p}
              variants={fadeUp}
              whileHover={{ borderColor: "rgba(108,60,247,0.4)", color: "#9B7BFA" }}
              className="bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-1.5 font-mono text-xs text-white/40 transition-colors"
            >
              {p}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 pb-20 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative bg-[#0E0E18] border border-[#6C3CF7]/20 rounded-2xl p-12 md:p-14 text-center overflow-hidden"
        >
          <div className="absolute inset-0 -z-0 bg-[radial-gradient(closest-side,rgba(108,60,247,0.15),transparent)]" />
          <div className="relative z-10">
            <h2 className="font-[Syne] font-extrabold text-3xl md:text-[36px] text-white tracking-[-1px] mb-3">Industrialize your content loop.</h2>
            <p className="text-[15px] text-white/45 mb-7">Stop touching timelines. Start dispatching routines.</p>
            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                to="/dashboard"
                className="bg-[#6C3CF7] hover:bg-[#7D4FF8] hover:-translate-y-0.5 text-white px-7 py-3 rounded-lg text-sm font-medium transition-all shadow-lg shadow-[#6C3CF7]/30"
              >
                Open the platform
              </Link>
              <a href="#how-it-works" className="border border-white/15 hover:border-white/35 text-white/70 hover:text-white px-6 py-3 rounded-lg text-sm transition-all">
                Read the docs
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] px-6 md:px-10 py-6 flex justify-between items-center">
        <div className="font-[Syne] font-extrabold text-[15px] text-white/30">
          Media<span className="text-[#6C3CF7]/60">Ops</span>
        </div>
        <div className="font-mono text-xs text-white/20">© 2026 · v2.4.0 · build 8f3a</div>
      </footer>
    </div>
  );
}

function Section({ id, label, title, sub, children, wide }: { id?: string; label?: string; title?: string; sub?: string; children: React.ReactNode; wide?: boolean }) {
  return (
    <section id={id} className={`px-6 md:px-10 pb-20 mx-auto ${wide ? "max-w-5xl" : "max-w-3xl"}`}>
      {label && (
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-mono text-[11px] text-[#6C3CF7] tracking-widest uppercase mb-3">
          {label}
        </motion.div>
      )}
      {title && (
        <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="font-[Syne] font-bold text-[30px] text-white tracking-[-0.5px] mb-2">
          {title}
        </motion.h2>
      )}
      {sub && (
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-sm text-white/45 mb-7 max-w-2xl">
          {sub}
        </motion.p>
      )}
      {children}
    </section>
  );
}
