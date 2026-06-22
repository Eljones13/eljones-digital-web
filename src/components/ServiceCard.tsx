import type { Service } from "../data/services";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="card group flex h-full flex-col p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lift sm:p-7">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="chip">{service.tag}</span>
        <span className="font-mono text-xs text-muted/70">
          {String(service.n).padStart(2, "0")}
        </span>
      </div>

      <h3 className="text-lg font-bold leading-snug text-navy">{service.question}</h3>

      <p className="mt-3 text-[0.95rem] leading-relaxed text-muted">{service.value}</p>

      <div className="mt-5 border-t border-line pt-5">
        <p className="eyebrow mb-3">How we do it</p>
        <ol className="space-y-2.5">
          {service.steps.map((step, i) => (
            <li key={i} className="flex gap-3 text-[0.9rem] leading-relaxed text-ink/80">
              <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-royal font-mono text-[0.68rem] font-bold text-white">
                {i + 1}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>

      {service.command && service.command.startsWith("/") && (
        <div className="mt-5 pt-1">
          <code className="inline-block rounded-md bg-navy px-2.5 py-1 font-mono text-[0.72rem] text-azure-400">
            {service.command}
          </code>
        </div>
      )}
    </article>
  );
}
