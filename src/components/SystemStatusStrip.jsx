const metrics = [
  "Portfolio Status: Operational (Hosted on Vercel)",
  "Database Layer: Supabase / MongoDB Active",
  "AI Voice Engine: Web Speech API Ready",
  "Latest Deploy: Production Build Passed (Success)",
];

export default function SystemStatusStrip() {
  return (
    <aside className="border-y border-white/10 bg-slate-950/80 px-4 py-3 text-white backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto">
        {metrics.map((metric) => (
          <div
            key={metric}
            className="flex shrink-0 items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-bold text-slate-200"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_14px_rgba(52,211,153,0.8)]" />
            {metric}
          </div>
        ))}
      </div>
    </aside>
  );
}
