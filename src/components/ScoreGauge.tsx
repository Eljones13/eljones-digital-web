import { useEffect, useRef, useState } from "react";

interface Props {
  value?: number;
  size?: number;
  label?: string;
}

/**
 * Circular 0–100 score gauge — the signature brand motif.
 * Renders the final value into the static HTML (good for no-JS crawlers),
 * then sweeps the ring and counts the number up on the client.
 */
export function ScoreGauge({ value = 87, size = 260, label = "GEO + SEO Score" }: Props) {
  const pct = Math.max(0, Math.min(100, value));
  const stroke = 14;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const finalOffset = c - (pct / 100) * c;

  const [display, setDisplay] = useState(pct);
  const [run, setRun] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    setRun(true);
    if (reduce) return;
    let raf = 0;
    const dur = 1500;
    const t0 = performance.now();
    setDisplay(0);
    const tick = (t: number) => {
      const k = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - k, 3);
      setDisplay(Math.round(eased * pct));
      if (k < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [pct]);

  const keyframes = `@keyframes gaugeSweep{from{stroke-dashoffset:${c};}to{stroke-dashoffset:${finalOffset};}}`;

  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
      role="img"
      aria-label={`${label}: ${pct} out of 100`}
    >
      <style dangerouslySetInnerHTML={{ __html: keyframes }} />
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id="gaugeGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#2f7bed" />
            <stop offset="60%" stopColor="#0f3460" />
            <stop offset="100%" stopColor="#e94560" />
          </linearGradient>
        </defs>
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="rgba(255,255,255,0.10)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="url(#gaugeGrad)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={finalOffset}
          style={run ? { animation: "gaugeSweep 1.6s cubic-bezier(.22,1,.36,1)" } : undefined}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="font-mono text-[3.4rem] font-bold leading-none text-white tabular-nums">
          {display}
        </span>
        <span className="mt-1 font-mono text-sm text-white/45">/ 100</span>
        <span className="mt-3 max-w-[8rem] text-center font-mono text-[0.66rem] uppercase tracking-eyebrow text-azure-400">
          {label}
        </span>
      </div>
    </div>
  );
}
