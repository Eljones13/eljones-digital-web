import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { mailto } from "../data/site";

const cx = (...a: (string | false | undefined)[]) => a.filter(Boolean).join(" ");

export function Section({
  id,
  surface,
  dark,
  className,
  children,
}: {
  id?: string;
  surface?: boolean;
  dark?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cx(
        "py-16 sm:py-24",
        surface && "bg-surface",
        dark && "bg-navy text-white",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center,
  light,
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={cx("max-w-3xl", center && "mx-auto text-center")}>
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2
        className={cx(
          "text-balance text-3xl font-bold sm:text-[2.5rem] sm:leading-[1.1]",
          light ? "text-white" : "text-navy",
        )}
      >
        {title}
      </h2>
      {intro && (
        <p className={cx("mt-5 text-lg leading-relaxed", light ? "text-white/70" : "text-muted")}>
          {intro}
        </p>
      )}
    </div>
  );
}

/** Conversion band reused at the foot of most pages. */
export function CTA({
  heading = "Ready to see your real SEO score?",
  sub = "Share your URL and we will run a full audit — 271 tests across 24 dimensions — and deliver your score and action plan the same day.",
}: {
  heading?: string;
  sub?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="dotgrid absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="absolute -right-32 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]"
        aria-hidden="true"
      />
      <div className="container-x relative py-20 text-center sm:py-24">
        <p className="eyebrow mb-4">Start your audit</p>
        <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold sm:text-[2.6rem] sm:leading-[1.1]">
          {heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">{sub}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            className="btn-accent"
            href={mailto(
              "SEO & GEO Audit Request",
              "Hi Eljones Digital,\n\nMy website URL is: \nMy main goal is: \n\nPlease run a full SEO + GEO audit and send my 0-100 score.",
            )}
          >
            Request your audit →
          </a>
          <Link className="btn-ghost" to="/how-it-works">
            See how it works
          </Link>
        </div>
      </div>
    </section>
  );
}
