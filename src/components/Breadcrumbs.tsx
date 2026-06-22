import { Link } from "react-router-dom";
import { SITE } from "../data/site";

export interface Crumb {
  label: string;
  to: string;
}

/** Build a BreadcrumbList JSON-LD object for a trail of crumbs. */
export function breadcrumbLd(crumbs: Crumb[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: SITE.url + (c.to === "/" ? "/" : c.to),
    })),
  };
}

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-x pt-36 sm:pt-32">
      <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.74rem] text-muted">
        {crumbs.map((c, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={c.to} className="flex items-center gap-2">
              {last ? (
                <span aria-current="page" className="text-royal">
                  {c.label}
                </span>
              ) : (
                <Link to={c.to} className="transition-colors hover:text-accent">
                  {c.label}
                </Link>
              )}
              {!last && <span className="text-muted/45">/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
