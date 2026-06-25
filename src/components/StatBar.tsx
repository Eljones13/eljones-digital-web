// Reusable STAT BAR, a horizontal bar showing a metric against a benchmark.
// Designed for dark backgrounds (navy / #0f3460 / #1a1a2e panels): the track is
// gray-700 and the label/value text is light. Used on the homepage "How we
// compare" block and the GEO Drift Protection service card.
export function StatBar({
  label,
  value,
  percent,
  color = "bg-accent",
}: {
  label: string;
  value: string;
  /** Bar fill width as a percentage (0–100). */
  percent: number;
  /** Tailwind background class for the fill, e.g. "bg-red-400" or "bg-emerald-400". */
  color?: string;
}) {
  const width = Math.max(0, Math.min(100, percent));
  return (
    <div className="flex items-center gap-3">
      <span className="w-28 flex-none text-sm text-gray-400 sm:w-40">{label}</span>
      <div className="h-2 flex-1 rounded-full bg-gray-700">
        <div className={`h-2 rounded-full ${color}`} style={{ width: `${width}%` }} />
      </div>
      <span className="w-24 flex-none text-right text-sm font-bold text-white sm:w-32">{value}</span>
    </div>
  );
}
