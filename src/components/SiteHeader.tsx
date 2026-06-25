import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NAV_GROUPS, SITE, mailto } from "../data/site";

// Flattened list for the mobile menu: dropdown groups are expanded inline so
// the menu is a single simple vertical list (no nested menus on mobile).
const MOBILE_LINKS = NAV_GROUPS.flatMap((group) =>
  group.items ?? [{ label: group.label, to: group.to as string }],
);

const AUDIT_MAILTO = mailto("SEO and GEO audit request");

/**
 * Site header. Desktop (lg+) shows grouped dropdown menus; below lg a
 * hamburger button toggles a slide-down overlay with the flattened list.
 * The logo links home, so "Home" is intentionally not a nav item.
 */
export function SiteHeader() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Escape closes any open menu.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/95 text-white backdrop-blur">
      <div className="container-x flex min-h-20 items-center justify-between gap-5">
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="Eljones Digital home"
          onClick={() => setMobileOpen(false)}
        >
          <span className="grid h-10 w-10 place-items-center rounded-md bg-accent font-mono text-sm font-bold">
            ED
          </span>
          <span className="font-display text-lg font-bold">{SITE.name}</span>
        </Link>

        {/* Desktop navigation: grouped dropdowns */}
        <nav className="hidden items-center gap-1 text-sm font-semibold text-white/78 lg:flex" aria-label="Primary">
          {NAV_GROUPS.map((group) =>
            group.items ? (
              <div
                key={group.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(group.label)}
                onMouseLeave={() =>
                  setOpenMenu((current) => (current === group.label ? null : current))
                }
              >
                <button
                  type="button"
                  className="flex items-center gap-1 rounded-md px-3 py-2 transition-colors hover:text-white focus-visible:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  aria-haspopup="true"
                  aria-expanded={openMenu === group.label}
                  onClick={() =>
                    setOpenMenu((current) => (current === group.label ? null : group.label))
                  }
                >
                  {group.label}
                  <svg
                    className={`h-3 w-3 transition-transform ${openMenu === group.label ? "rotate-180" : ""}`}
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.5 4.5 6 8l3.5-3.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                <div
                  className={`absolute left-0 top-full min-w-52 rounded-lg border border-white/10 bg-navy p-2 shadow-xl shadow-black/30 ${
                    openMenu === group.label ? "block" : "hidden"
                  }`}
                  role="menu"
                >
                  {group.items.map((item) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      role="menuitem"
                      className="block rounded-md px-3 py-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:bg-white/10 focus-visible:text-white focus-visible:outline-none"
                      onClick={() => setOpenMenu(null)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={group.to}
                to={group.to as string}
                className="rounded-md px-3 py-2 transition-colors hover:text-white focus-visible:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {group.label}
              </Link>
            ),
          )}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <a className="btn-accent hidden px-5 py-2.5 text-sm sm:inline-flex" href={AUDIT_MAILTO}>
            Request audit
          </a>
          <button
            type="button"
            className="relative grid h-10 w-10 place-items-center rounded-md text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((open) => !open)}
          >
            <span
              className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-200 ${
                mobileOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-200 ${
                mobileOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute h-0.5 w-6 rounded-full bg-current transition-all duration-200 ${
                mobileOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu: slide-down overlay with a flattened vertical list */}
      <div
        id="mobile-menu"
        className={`max-h-[85vh] overflow-y-auto border-t border-white/10 bg-navy lg:hidden ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        <nav className="container-x flex flex-col gap-1 py-4" aria-label="Mobile">
          {MOBILE_LINKS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-md px-3 py-3 text-base font-semibold text-white/85 transition-colors hover:bg-white/10 hover:text-white"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <a
            className="btn-accent mt-3 flex w-full justify-center px-5 py-3 text-base"
            href={AUDIT_MAILTO}
            onClick={() => setMobileOpen(false)}
          >
            Request audit
          </a>
        </nav>
      </div>
    </header>
  );
}
