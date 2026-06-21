export function PageHeader({ eyebrow, title, description, actions }: { eyebrow: string; title: string; description: string; actions?: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
      <div>
        <div className="text-[11px] font-mono uppercase tracking-[0.2em] text-[var(--cyan)] mb-2">{eyebrow}</div>
        <h1 className="text-3xl font-display font-bold tracking-tight">{title}</h1>
        <p className="text-sm text-muted-foreground mt-1.5 max-w-2xl">{description}</p>
      </div>
      {actions && <div className="flex gap-2">{actions}</div>}
    </div>
  );
}
