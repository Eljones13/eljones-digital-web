import { Link, Outlet } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { Breadcrumbs, breadcrumbLd } from "./components/Breadcrumbs";
import { CTA, Section, SectionHeading } from "./components/Section";
import { Seo } from "./components/Seo";
import { ServiceCard } from "./components/ServiceCard";
import { ScoreGauge } from "./components/ScoreGauge";
import {
  BENEFITS,
  COMPARE,
  FAQS,
  HIGHLIGHTS,
  NAV,
  PROCESS,
  SCENARIOS,
  SITE,
  STATS,
  mailto,
} from "./data/site";
import { SERVICE_GROUPS, SERVICES } from "./data/services";

const routeMeta = [
  { path: "/", label: "Home", priority: 1 },
  { path: "/services", label: "Services", priority: 0.95 },
  { path: "/pricing", label: "Pricing", priority: 0.7 },
  { path: "/ai-strategy", label: "AI Strategy Audit", priority: 0.8 },
  { path: "/ai-search-optimization", label: "AI Search Optimization", priority: 0.96 },
  { path: "/case-studies/sample-geo-audit", label: "Sample GEO Audit Case Study", priority: 0.72 },
  { path: "/reports/example-seo-geo-audit", label: "Example SEO GEO Audit Report", priority: 0.72 },
  { path: "/industries/local-business-seo-geo", label: "Local Business SEO GEO", priority: 0.68 },
  { path: "/industries/ecommerce-ai-search", label: "Ecommerce AI Search", priority: 0.68 },
  { path: "/how-it-works", label: "How It Works", priority: 0.85 },
  { path: "/about", label: "About", priority: 0.75 },
  { path: "/contact", label: "Contact", priority: 0.8 },
  { path: "/blog", label: "Blog", priority: 0.7 },
  { path: "/blog/what-is-geo-seo", label: "What Is GEO SEO?", priority: 0.65 },
];

const blogCards: { title: string; desc: string; to: string }[] = [
  {
    title: "What is GEO SEO and why does it matter in 2026?",
    desc: "The difference between ranking on Google and being cited by ChatGPT or Perplexity — and why both matter for business visibility in 2026.",
    to: "/blog/what-is-geo-seo",
  },
  {
    title: "How AI search optimization helps ChatGPT cite your business",
    desc: "How to structure your content so AI tools treat your pages as a trustworthy, citable source rather than ignoring them entirely.",
    to: "/ai-search-optimization",
  },
  {
    title: "What should a sample SEO and GEO audit report include?",
    desc: "A walkthrough of what a real Eljones Digital audit report looks like — score breakdown, prioritised findings, and copy-paste fix examples.",
    to: "/reports/example-seo-geo-audit",
  },
  {
    title: "How to make service pages more citable by AI search",
    desc: "Why 134–167 word self-contained answer blocks, question-based headings, and direct factual statements get picked up by AI tools.",
    to: "/contact",
  },
  {
    title: "What should a technical SEO audit include?",
    desc: "The 9 technical checks that matter most — Core Web Vitals, crawlability, canonical chains, schema validation, and mobile performance.",
    to: "/contact",
  },
  {
    title: "How schema markup helps Google and AI engines trust your site",
    desc: "Why structured data in JSON-LD format helps both Google rich results and AI citation engines identify what your business actually does.",
    to: "/contact",
  },
];

const aiSearchMeasures = [
  "ChatGPT brand mentions and recommendation frequency",
  "Perplexity citations and source visibility",
  "Google AI Overview appearances for target topics",
  "Gemini and Copilot answer inclusion",
  "Brand sentiment and entity clarity across AI answers",
  "AI-driven referral traffic, leads and assisted conversions",
];

const seoGeoRows = [
  ["SEO", "Rank pages in search results", "Technical structure, content quality, links, local signals"],
  ["AEO", "Answer direct questions", "FAQ-style answers, snippets, voice search and clear definitions"],
  ["GEO", "Be cited and recommended by AI systems", "Entity clarity, answer-ready pages, authority mentions and AI visibility tracking"],
];

const proofLinks = [
  {
    to: "/case-studies/sample-geo-audit",
    title: "Sample GEO audit case study",
    body: "A realistic before-and-after example showing how audit findings become score improvements and client actions.",
  },
  {
    to: "/reports/example-seo-geo-audit",
    title: "Example SEO + GEO report",
    body: "A client-ready report structure with executive summary, category scoring, AI readiness and fix priorities.",
  },
  {
    to: "/industries/local-business-seo-geo",
    title: "Local business SEO + GEO",
    body: "How local companies can improve Google Map Pack visibility and show up in AI recommendation answers.",
  },
  {
    to: "/industries/ecommerce-ai-search",
    title: "Ecommerce AI search",
    body: "How stores can make product and category pages easier for AI shopping answers to understand and cite.",
  },
];

const premiumVisuals = [
  {
    src: "/audit-dashboard-visual.svg",
    alt: "SEO and GEO audit dashboard preview",
    title: "Live audit desk",
    body: "A scorecard view for technical health, content quality, schema, entity clarity and AI visibility gaps.",
  },
  {
    src: "/report-preview-visual.svg",
    alt: "SEO and GEO report preview",
    title: "Client-ready report",
    body: "A clean report format with executive summary, priority fixes and a score clients can understand quickly.",
  },
  {
    src: "/ai-visibility-map.svg",
    alt: "AI visibility map preview",
    title: "AI visibility map",
    body: "A practical map of where the brand appears, where it is cited and which trusted sources are missing.",
  },
];

function pageUrl(path: string) {
  return path === "/" ? `${SITE.url}/` : SITE.url + path;
}

function orgLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    email: SITE.email,
    foundingDate: String(SITE.foundingYear),
    founder: { "@type": "Person", name: SITE.founder },
    sameAs: SITE.sameAs,
    areaServed: "United Kingdom",
    description: SITE.shortDesc,
    serviceType: SERVICES.map((s) => s.tag),
  };
}

function websiteLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    publisher: { "@id": `${SITE.url}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE.url}/?s={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

function itemListLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE.url}/services#services`,
    name: "SEO and GEO audit services",
    itemListElement: SERVICES.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        "@id": `${SITE.url}/services#${service.slug}`,
        name: service.question,
        serviceType: service.tag,
        description: service.value,
        provider: { "@id": `${SITE.url}/#organization` },
      },
    })),
  };
}

function serviceLd(path: string, name: string, description: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}${path}#service`,
    name,
    description,
    provider: { "@id": `${SITE.url}/#organization` },
    serviceType: "AI Search Optimization",
    areaServed: "United Kingdom",
  };
}

function faqLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// Google removed How-to rich results in September 2023, so the seven-step
// process is published as an ItemList instead (still valid, AI-readable).
function processItemListLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": `${SITE.url}/how-it-works#process`,
    name: "How Eljones Digital delivers an SEO and GEO audit",
    description: "The seven step process Eljones Digital uses to audit, score, prioritise, fix and verify a website for search and AI visibility.",
    itemListElement: PROCESS.map((step, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: step.title,
      description: step.what,
    })),
  };
}

function personLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITE.url}/about`,
    mainEntity: {
      "@type": "Person",
      "@id": `${SITE.url}/about#person`,
      name: SITE.founder,
      image: `${SITE.url}/errol-jones-founder.png`,
      worksFor: { "@id": `${SITE.url}/#organization` },
      knowsAbout: ["SEO audits", "GEO", "AI search optimisation", "schema markup"],
    },
  };
}

function articleLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${SITE.url}/blog/what-is-geo-seo#article`,
    headline: "What Is GEO SEO?",
    description: "A practical guide to Generative Engine Optimisation and how it works with traditional SEO.",
    author: { "@type": "Person", name: SITE.founder, "@id": `${SITE.url}/about#person` },
    publisher: { "@id": `${SITE.url}/#organization` },
    datePublished: "2026-06-21",
    dateModified: "2026-06-21",
    mainEntityOfPage: pageUrl("/blog/what-is-geo-seo"),
  };
}

function FounderBio() {
  return (
    <aside className="mt-10 flex flex-col gap-5 rounded-lg border border-line bg-white p-6 sm:flex-row sm:items-center">
      <picture className="flex-none">
        <source srcSet="/errol-jones-founder.webp" type="image/webp" />
        <img
          src="/errol-jones-founder.png"
          alt="Errol Jones, founder of Eljones Digital"
          width={80}
          height={80}
          loading="lazy"
          className="h-20 w-20 flex-none rounded-md object-cover object-[50%_32%]"
        />
      </picture>
      <div>
        <p className="eyebrow mb-2">Expert author</p>
        <p className="leading-relaxed text-muted">
          Written and reviewed by <strong className="text-ink">{SITE.founder}</strong>, founder of Eljones Digital. Errol focuses on practical SEO, GEO, AI search visibility, schema and client-ready audit reporting for small and medium businesses.
        </p>
      </div>
    </aside>
  );
}

function MeasurementGrid() {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {aiSearchMeasures.map((item, i) => (
        <article key={item} className="card p-6">
          <p className="font-mono text-sm font-bold text-accent">{String(i + 1).padStart(2, "0")}</p>
          <h3 className="mt-3 text-lg font-bold text-navy">{item}</h3>
        </article>
      ))}
    </div>
  );
}

function SeoGeoTable() {
  return (
    <div className="mt-10 overflow-hidden rounded-lg border border-line bg-white">
      <table className="w-full border-collapse text-left text-sm">
        <thead className="bg-navy text-white">
          <tr>
            <th className="p-4 font-mono text-xs uppercase tracking-[0.08em]">Type</th>
            <th className="p-4 font-mono text-xs uppercase tracking-[0.08em]">Primary goal</th>
            <th className="p-4 font-mono text-xs uppercase tracking-[0.08em]">What gets optimised</th>
          </tr>
        </thead>
        <tbody>
          {seoGeoRows.map(([type, goal, focus]) => (
            <tr key={type} className="border-t border-line">
              <td className="p-4 font-bold text-navy">{type}</td>
              <td className="p-4 text-muted">{goal}</td>
              <td className="p-4 text-muted">{focus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function VisualProofGrid({ items = premiumVisuals.slice(0, 3) }: { items?: typeof premiumVisuals }) {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-3">
      {items.map((item, index) => (
        <article key={item.src} className={`group ${index === 1 ? "lg:translate-y-8" : ""}`}>
          <div className="image-panel aspect-[1.22/1]">
            <img src={item.src} alt={item.alt} className="premium-img" loading="lazy" />
          </div>
          <h3 className="mt-5 text-xl font-bold text-navy">{item.title}</h3>
          <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
        </article>
      ))}
    </div>
  );
}

function Layout() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy/95 text-white backdrop-blur">
        <div className="container-x flex min-h-20 items-center justify-between gap-5">
          <Link to="/" className="flex items-center gap-3" aria-label="Eljones Digital home">
            <span className="grid h-10 w-10 place-items-center rounded-md bg-accent font-mono text-sm font-bold">
              ED
            </span>
            <span className="font-display text-lg font-bold">{SITE.name}</span>
          </Link>
          <nav className="hidden items-center gap-5 text-sm font-semibold text-white/78 lg:flex">
            {NAV.map((item) => (
              <Link key={item.to} to={item.to} className="transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </nav>
          <a className="btn-accent hidden px-5 py-2.5 text-sm sm:inline-flex" href={mailto("SEO and GEO audit request")}>
            Request audit
          </a>
        </div>
        <nav className="container-x flex gap-4 overflow-x-auto pb-3 font-mono text-[0.72rem] font-semibold uppercase tracking-[0.08em] text-white/70 lg:hidden">
          {NAV.map((item) => (
            <Link key={item.to} to={item.to} className="flex-none transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="border-t border-line bg-white">
        <div className="container-x grid gap-10 py-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="font-display text-2xl font-bold text-navy">{SITE.name}</p>
            <p className="mt-3 max-w-xl leading-relaxed text-muted">{SITE.shortDesc}</p>
            <a className="mt-5 inline-block font-semibold text-royal hover:text-accent" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm font-semibold text-muted">
            {NAV.map((item) => (
              <Link key={item.to} to={item.to} className="hover:text-accent">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="border-t border-line py-5">
          <div className="container-x flex flex-col gap-2 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
            <span>Copyright {SITE.name} 2026. All rights reserved.</span>
            <span>Built for SEO, GEO and AI crawler readability.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <Seo
        title="AI-Powered SEO and GEO Audits"
        description="Eljones Digital runs SEO and GEO audits that score your website 0-100 and show exactly how to improve Google rankings and AI search citations."
        path="/"
        jsonLd={[orgLd(), websiteLd()]}
      />
      <section className="relative overflow-hidden bg-navy pt-36 text-white sm:pt-40 lg:min-h-[720px]">
        <img
          src="/hero-office-team.svg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/94 to-navy/42" aria-hidden="true" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(233,69,96,0.22),transparent_28%),radial-gradient(circle_at_80%_18%,rgba(47,123,237,0.2),transparent_28%)]" aria-hidden="true" />
        <div className="dotgrid absolute inset-0 opacity-45" aria-hidden="true" />
        <div className="container-x relative grid items-center gap-10 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:pb-28">
          <div className="animate-fade-up">
            <p className="eyebrow mb-5">SEO + GEO audit agency</p>
            <h1 className="text-balance text-4xl font-bold leading-[1.03] sm:text-6xl">
              AI-powered SEO and GEO audits that deliver a real 0-100 score.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/72">
              We audit your website for search engines and AI answer engines at the same time, then give you the exact fixes that improve visibility, citations, schema trust and technical health.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a className="btn-accent" href={mailto("Audit my website", "Hi Eljones Digital,\n\nMy website is:\nMy main goal is:\n")}>
                Get my 0-100 score
              </a>
              <Link className="btn-ghost" to="/services">
                View all services
              </Link>
            </div>
          </div>
          <div className="animate-slow-float mx-auto w-full max-w-md rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-lift backdrop-blur">
            <ScoreGauge value={87} />
            <div className="mt-6 grid grid-cols-2 gap-3">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="font-mono text-2xl font-bold text-white">{s.num}</p>
                  <p className="mt-1 text-sm leading-snug text-white/60">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="container-x">
          <SectionHeading
            eyebrow="Why clients buy"
            title="How does Eljones Digital give businesses value fast?"
            intro="The value is simple: clarity, prioritisation and fixes clients can verify without trusting a black box."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {BENEFITS.map((b) => (
              <article key={b.title} className="card p-7">
                <h3 className="text-xl font-bold text-navy">{b.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section surface>
        <div className="container-x">
          <SectionHeading
            eyebrow="Deliverables"
            title="What does a premium audit feel like?"
            intro="Clients see the work in a polished dashboard, a readable report and an AI visibility map. The point is clarity: no vague screenshots, no mystery metrics."
          />
          <VisualProofGrid />
        </div>
      </Section>

      <Section surface>
        <div className="container-x">
          <SectionHeading
            eyebrow="Citation-ready answer"
            title="What problem does a GEO and SEO audit solve?"
          />
          <p className="answer-block mt-8">
            A GEO and SEO audit shows whether a website can be found, trusted and quoted by both traditional search engines and AI answer engines. Standard SEO checks technical foundations, content quality, links, local signals and structured data. GEO adds the newer visibility layer: can ChatGPT, Perplexity, Gemini, Claude and Google AI Overviews understand the business, access the pages, identify the entity and quote the content with confidence? Eljones Digital combines those checks into one score so a company can see what is blocking growth. The report separates urgent technical problems from content opportunities and brand authority gaps, then turns each finding into a practical fix. That gives business owners something more useful than a generic PDF: a ranked action plan that explains what to fix first, why it matters, and how to verify that the fix worked.
          </p>
        </div>
      </Section>

      <Section>
        <div className="container-x">
          <SectionHeading eyebrow="Core offers" title="Which services create the fastest uplift?" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {HIGHLIGHTS.map((h) => (
              <article key={h.title} className="card p-7">
                <p className="chip mb-5">{h.tag}</p>
                <h3 className="text-xl font-bold text-navy">{h.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{h.body}</p>
                <Link className="mt-5 inline-block font-semibold text-royal hover:text-accent" to={h.to}>
                  Learn more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section surface>
        <div className="container-x">
          <SectionHeading
            eyebrow="AI search visibility"
            title="How do we measure whether AI models recommend your business?"
            intro="The strongest GEO agencies prove the work with AI visibility signals, not just rankings. Eljones Digital tracks where your brand appears, how often it is cited, and whether that visibility turns into leads."
          />
          <MeasurementGrid />
          <Link className="btn-outline mt-10" to="/ai-search-optimization">
            Explore AI search optimization
          </Link>
        </div>
      </Section>

      <Section surface>
        <div className="container-x">
          <SectionHeading eyebrow="Proof style" title="Why do clients prefer this over a traditional agency audit?" />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <CompareList title="Eljones Digital" items={COMPARE.ours} />
            <CompareList title="Traditional audit" items={COMPARE.theirs} muted />
          </div>
        </div>
      </Section>

      <Section>
        <div className="container-x">
          <SectionHeading
            eyebrow="Common scenarios"
            title="What clients typically need from an audit"
            intro="Illustrative examples of the problems an Eljones Digital audit is built to diagnose and fix."
          />
          {/* TODO: replace with real client testimonial once available — e.g. from first paid audit engagement */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {SCENARIOS.map((s) => (
              <article key={s.problem} className="card p-7">
                <h3 className="text-lg font-bold leading-snug text-navy">{s.problem}</h3>
                <p className="mt-3 leading-relaxed text-muted">{s.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>
      <CTA />
    </>
  );
}

function CompareList({ title, items, muted }: { title: string; items: string[]; muted?: boolean }) {
  return (
    <div className={`card p-7 ${muted ? "opacity-80" : ""}`}>
      <h3 className="text-2xl font-bold text-navy">{title}</h3>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 leading-relaxed text-muted">
            <span className={`mt-2 h-2 w-2 flex-none rounded-full ${muted ? "bg-line" : "bg-accent"}`} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ServicesPage() {
  const crumbs = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/services" },
  ];
  return (
    <>
      <Seo
        title="24 SEO and GEO Audit Services"
        description="See all 24 Eljones Digital audit services, including technical SEO, GEO citability, schema, local SEO, AI crawler access and reporting."
        path="/services"
        jsonLd={[orgLd(), itemListLd(), faqLd(), breadcrumbLd(crumbs)]}
      />
      <Breadcrumbs crumbs={crumbs} />
      <PageHero
        eyebrow="Services"
        title="What can Eljones Digital do for companies you audit?"
        intro="Every service below turns an audit finding into a business outcome: more visibility, stronger AI citations, better trust signals, clearer reporting and fixes the client can act on."
      />
      <Section surface>
        <div className="container-x">
          <p className="answer-block">
            Eljones Digital gives value to audited companies by finding the exact reasons their website is not performing, ranking those reasons by business impact and turning them into practical fixes. A client does not only receive a technical checklist. They receive a score, a diagnosis and a step-by-step action plan for search visibility, AI visibility, content trust, local presence, structured data, speed and reporting. This is valuable because most companies know they need better SEO but cannot tell which work matters first. The audit removes guesswork. It identifies critical issues that should be fixed this week, high priority work for the month and medium priority improvements for the quarter. For business owners, that means less wasted agency spend, clearer decisions and a report they can give to a developer, marketing lead or board.
          </p>
          <FounderBio />
        </div>
      </Section>
      {SERVICE_GROUPS.map((group) => (
        <Section key={group}>
          <div className="container-x">
            <SectionHeading eyebrow={group} title={`Which ${group.toLowerCase()} services can clients buy?`} />
            <div className="mt-10 grid gap-5 lg:grid-cols-2">
              {SERVICES.filter((s) => s.group === group).map((service) => (
                <div id={service.slug} key={service.slug}>
                  <ServiceCard service={service} />
                </div>
              ))}
            </div>
          </div>
        </Section>
      ))}
      <Section surface>
        <div className="container-x">
          <SectionHeading eyebrow="FAQ" title="What questions should the services page answer for SEO and GEO?" />
          <div className="mt-10 grid gap-5">
            {FAQS.map((f) => (
              <article key={f.q} className="card p-7">
                <h3 className="text-xl font-bold text-navy">{f.q}</h3>
                <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>
      <Section>
        <div className="container-x">
          <SectionHeading
            eyebrow="Premium tier"
            title="Is your business prepared for AI disruption beyond your website?"
          />
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted">
            SEO and GEO audits improve how your website performs in search. But search visibility is only one piece of the picture. If your company's core service can be replicated by a 2-person AI-native team in 90 days, a higher-ranking website won't protect your revenue. Our ExO AI Strategy Audit — based on the ExO 3.0 Organizational Singularity framework by Salim Ismail and Peter Diamandis — scores your entire organisation's AI readiness and tells you exactly where your exposure is.
          </p>
          <Link className="btn-outline mt-8" to="/ai-strategy">
            Learn about ExO AI Strategy Audits →
          </Link>
        </div>
      </Section>
      <CTA />
    </>
  );
}

function AiSearchOptimizationPage() {
  const crumbs = [
    { label: "Home", to: "/" },
    { label: "AI Search Optimization", to: "/ai-search-optimization" },
  ];
  return (
    <>
      <Seo
        title="AI Search Optimization Services"
        description="AI Search Optimization services from Eljones Digital help businesses improve visibility in ChatGPT, Perplexity, Gemini, Copilot and Google AI Overviews."
        path="/ai-search-optimization"
        jsonLd={[
          serviceLd(
            "/ai-search-optimization",
            "AI Search Optimization Services",
            "AI search optimization, GEO and AEO audits that help businesses become easier for AI systems to understand, cite and recommend.",
          ),
          faqLd(),
          breadcrumbLd(crumbs),
        ]}
      />
      <Breadcrumbs crumbs={crumbs} />
      <PageHero
        eyebrow="AI search optimization"
        title="How do we help AI models understand, cite and recommend your business?"
        intro="We check what AI systems can crawl, what they can prove, which pages they can quote, and whether trusted sources mention your brand."
      />
      <Section surface>
        <div className="container-x">
          <p className="answer-block">
            AI Search Optimization starts with evidence, not guesswork. Eljones Digital checks whether your important pages can be crawled, indexed, quoted and connected to your brand entity. The audit reviews technical SEO, schema, service-page clarity, author signals, external brand mentions, review signals and answer quality across ChatGPT, Perplexity, Gemini, Copilot and Google AI Overviews. Each finding has a plain reason and a fix: unblock a crawler, rewrite a vague section, add schema, strengthen an author bio, improve a local page, or earn a third-party citation. The output is a 0-100 visibility score, a platform readiness table, and a fix list sorted by what should happen this week, this month and this quarter.
          </p>
          <FounderBio />
        </div>
      </Section>
      <Section>
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Evidence map"
              title="Show the proof, then recommend the fix."
              intro="The audit maps each platform separately so a client can see whether the issue is crawl access, content clarity, authority signals or missing third-party proof."
            />
            <Link className="btn-outline mt-8" to="/reports/example-seo-geo-audit">
              View report example
            </Link>
          </div>
          <div className="image-panel aspect-[1.42/1]">
            <img src="/ai-visibility-map.svg" alt="AI visibility map showing platform citation gaps" className="premium-img" loading="lazy" />
          </div>
        </div>
      </Section>
      <Section>
        <div className="container-x">
          <SectionHeading
            eyebrow="SEO vs AEO vs GEO"
            title="What is the difference between SEO, AEO and GEO?"
            intro="AI models reward the same foundations as search engines, but they also need clearer entities, direct answers and external trust signals."
          />
          <SeoGeoTable />
        </div>
      </Section>
      <Section surface>
        <div className="container-x">
          <SectionHeading
            eyebrow="Measurement"
            title="How do we measure AI search visibility?"
            intro="A good AI search programme tracks where the brand appears, how it is described, which sources are cited and whether visibility becomes business value."
          />
          <MeasurementGrid />
        </div>
      </Section>
      <Section>
        <div className="container-x">
          <SectionHeading eyebrow="Proof pages" title="Which examples help AI systems trust the service?" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {proofLinks.map((item) => (
              <article key={item.to} className="card p-7">
                <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{item.body}</p>
                <Link className="mt-5 inline-block font-semibold text-royal hover:text-accent" to={item.to}>
                  View page
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Section>
      <CTA heading="Want to know if AI can recommend your business?" />
    </>
  );
}

function HowItWorksPage() {
  const crumbs = [
    { label: "Home", to: "/" },
    { label: "How It Works", to: "/how-it-works" },
  ];
  return (
    <>
      <Seo
        title="How the SEO and GEO Audit Works"
        description="A seven step breakdown of how Eljones Digital audits, scores, reports, fixes and verifies a website for SEO and AI search."
        path="/how-it-works"
        jsonLd={[processItemListLd(), breadcrumbLd(crumbs)]}
      />
      <Breadcrumbs crumbs={crumbs} />
      <PageHero
        eyebrow="Delivery process"
        title="How do we create a client-ready SEO and GEO audit report?"
        intro="The process is designed for speed and proof: audit the site, score the findings, prioritise the work, deliver the report and verify the improvement."
      />
      <Section surface>
        <div className="container-x">
          <p className="answer-block">
            A client-ready SEO and GEO report starts with one clear input: the website URL. Eljones Digital runs a structured audit across technical SEO, content, schema, local signals, backlinks, AI crawler access, brand mentions and AI citability. Each finding is scored and sorted by urgency so the client can see what needs fixing this week, this month and this quarter. The report is then written in plain business language, with enough technical detail for a developer to implement the work. Every recommendation includes the reason it matters and a verification check. That matters because audit reports often fail when they are too vague to action. This process gives the client a board-friendly summary, a marketing-friendly growth plan and a developer-friendly fix list in one package.
          </p>
          <div className="mt-12 grid gap-5">
            {PROCESS.map((step) => (
              <article key={step.step} className="card grid gap-5 p-7 md:grid-cols-[7rem_1fr_9rem] md:items-start">
                <p className="font-mono text-4xl font-bold text-accent">{step.step}</p>
                <div>
                  <h3 className="text-2xl font-bold text-navy">{step.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{step.what}</p>
                  <p className="mt-3 font-mono text-xs uppercase tracking-eyebrow text-royal">Input: {step.input}</p>
                </div>
                <p className="rounded-md bg-surface px-4 py-3 text-center font-mono text-sm font-bold text-royal">{step.time}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>
      <CTA />
    </>
  );
}

function AboutPage() {
  const crumbs = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
  ];
  return (
    <>
      <Seo
        title="About Eljones Digital"
        description="Learn how Eljones Digital uses AI-powered SEO and GEO audit workflows to give small and medium businesses clearer visibility fixes."
        path="/about"
        type="profile"
        image="/errol-jones-founder.png"
        jsonLd={[personLd(), breadcrumbLd(crumbs)]}
      />
      <Breadcrumbs crumbs={crumbs} />
      <PageHero
        eyebrow="About"
        title="Why does Eljones Digital use AI-powered audit systems?"
        intro="Because modern search is too wide for a single manual checklist. AI lets the audit cover more ground, then human judgement turns the output into practical client value."
      />
      <Section surface>
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card overflow-hidden">
            <picture>
              <source srcSet="/errol-jones-founder.webp" type="image/webp" />
              <img
                src="/errol-jones-founder.png"
                alt="Errol Jones, founder of Eljones Digital"
                width={797}
                height={797}
                loading="eager"
                fetchPriority="high"
                className="aspect-[4/3] w-full object-cover object-[50%_32%]"
              />
            </picture>
            <div className="p-8">
              <p className="eyebrow mb-3">Founder</p>
              <h2 className="text-3xl font-bold text-navy">{SITE.founder}</h2>
              <p className="mt-4 leading-relaxed text-muted">
                Eljones Digital focuses on AI-powered audits for SEO, GEO, schema, technical visibility and client-ready reporting. The work is built around clear scoring and action plans that small teams can actually use.
              </p>
            </div>
          </div>
          <p className="answer-block">
            Eljones Digital uses AI-powered audit systems because search visibility now depends on more signals than one person can reliably inspect by hand in a short client engagement. A strong audit needs technical SEO checks, schema validation, content quality review, brand authority signals, local search factors, crawler access, AI citability and platform readiness. AI tools can run those checks quickly and consistently, while human judgement decides what matters commercially. That combination gives clients a better result than a generic automated score or a slow manual PDF. The client receives a clear 0-100 benchmark, a prioritised action plan and copy-paste fixes where possible. The goal is not to make SEO mysterious. The goal is to make it easier for business owners to see what is broken, what to fix first and how each fix can improve visibility.
          </p>
        </div>
      </Section>
      <Section>
        <div className="container-x">
          <SectionHeading
            eyebrow="Citation-ready answer"
            title="What makes Eljones Digital different from a traditional SEO agency?"
          />
          <p className="answer-block mt-8">
            Eljones Digital differs from a traditional SEO agency in four practical ways. First, speed: an AI-powered audit covers 24 dimensions in ten to fifteen minutes, where an equivalent manual review takes a senior analyst four to eight billable hours. Second, falsifiability: every finding ships with a verification check, so a client can confirm a fix worked instead of trusting a black box. Third, coverage: the audit scores GEO and AI search visibility — whether ChatGPT, Perplexity, Gemini and Google AI Overviews can understand and cite the business — alongside classic SEO, not as an afterthought. Fourth, access: Eljones Digital is run directly by Errol Jones, so clients speak to the person doing the work, with no account-manager layer or junior hand-off. The result is a faster, clearer and more accountable audit than a generic agency engagement, delivered as a prioritised action plan rather than a vague PDF.
          </p>
        </div>
      </Section>
      <Section surface>
        <div className="container-x">
          <SectionHeading eyebrow="Tools" title="What tools support the audit workflow?" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              {
                name: "claude-seo",
                desc: "Runs 25 specialist sub-skills in parallel covering technical SEO, content quality, schema validation, backlinks, local SEO, e-commerce, and international SEO. Produces a full audit report with a 0–100 score and a falsifiable priority list.",
              },
              {
                name: "geo-seo-claude",
                desc: "Runs 13 GEO-specific sub-skills focused on AI search visibility — citability scoring, AI crawler access, brand mention scanning across ChatGPT, Perplexity and Gemini, platform-specific optimisation, and llms.txt generation.",
              },
            ].map((tool) => (
              <article key={tool.name} className="card p-7">
                <h3 className="font-mono text-2xl font-bold text-navy">{tool.name}</h3>
                <p className="mt-3 leading-relaxed text-muted">{tool.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>
      <CTA />
    </>
  );
}

function ContactPage() {
  const crumbs = [
    { label: "Home", to: "/" },
    { label: "Contact", to: "/contact" },
  ];
  return (
    <>
      <Seo
        title="Contact Eljones Digital"
        description="Contact Eljones Digital to request a same-day SEO and GEO audit with a 0-100 score and prioritised fix list."
        path="/contact"
        jsonLd={[breadcrumbLd(crumbs)]}
      />
      <Breadcrumbs crumbs={crumbs} />
      <PageHero
        eyebrow="Contact"
        title="How can a business request an SEO and GEO audit?"
        intro="Send your website URL, your main business goal and any competitor sites you care about. We will turn that into a score and action plan."
      />
      <Section>
        <div className="container-x">
          <SectionHeading
            eyebrow="Citation-ready answer"
            title="How does requesting an SEO and GEO audit from Eljones Digital work?"
          />
          <p className="answer-block mt-8">
            Requesting an audit from Eljones Digital takes one short email. You send your website URL, the main outcome you want — more leads, stronger local ranking, product visibility or AI citations — and any competitor sites worth comparing. No CMS logins, passwords or analytics access are required, because the audit reads your site the same way Google and AI crawlers do. Errol Jones reviews the request, confirms the likely business type and the audit package that fits, then runs the full SEO and GEO audit. A complete run takes ten to fifteen minutes of processing, and the written report is typically returned the same business day. You receive a 0-100 score, a category breakdown across technical health, content, schema, authority and AI visibility, and a prioritised fix list sorted into critical, high and medium actions. Every finding includes the reason it matters and a check you can use to verify the fix worked.
          </p>
        </div>
      </Section>
      <Section surface>
        <div className="container-x grid gap-10 lg:grid-cols-[1fr_0.8fr]">
          <p className="answer-block">
            To request an audit, a company only needs to send its website URL and the outcome it wants: more leads, better local ranking, stronger product visibility, AI search citations or a cleaner technical foundation. Eljones Digital can run the audit from the public website without needing CMS access, passwords or a Google account. If the client later wants deeper reporting, Google Search Console and analytics data can be added as optional evidence. The first response should confirm the website, the likely business type and the audit package that fits best. From there, the work can move quickly: run the audit, create the score, prioritise the findings and send the PDF report. That low-friction process is useful for busy business owners because it removes the usual setup delay.
          </p>
          <aside className="card p-8">
            <p className="eyebrow mb-3">Email</p>
            <a className="break-words text-2xl font-bold text-navy hover:text-accent" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
            <p className="mt-5 leading-relaxed text-muted">
              Typical first response: same business day. Include your URL and the main outcome you want from search.
            </p>
            <a className="btn-accent mt-7 w-full" href={mailto("Audit request", "Hi Eljones Digital,\n\nWebsite URL:\nBusiness type:\nMain goal:\nCompetitors:\n")}>
              Start email
            </a>
          </aside>
        </div>
      </Section>
    </>
  );
}

function BlogPage() {
  const crumbs = [
    { label: "Home", to: "/" },
    { label: "Blog", to: "/blog" },
  ];
  return (
    <>
      <Seo
        title="SEO and GEO Blog"
        description="Practical articles from Eljones Digital on SEO audits, GEO, AI search visibility, schema markup and technical optimisation."
        path="/blog"
        jsonLd={[breadcrumbLd(crumbs)]}
      />
      <Breadcrumbs crumbs={crumbs} />
      <PageHero
        eyebrow="Blog"
        title="What should businesses learn before buying an SEO and GEO audit?"
        intro="Start with the basics: how AI search works, what makes a page citable and which fixes move the score fastest."
      />
      <Section surface>
        <div className="container-x grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogCards.map((card, i) => (
            <article key={card.title} className="card flex min-h-60 flex-col p-7">
              <p className="chip mb-5">Guide {String(i + 1).padStart(2, "0")}</p>
              <h2 className="text-xl font-bold leading-snug text-navy">{card.title}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-muted">{card.desc}</p>
              <Link className="mt-5 font-semibold text-royal hover:text-accent" to={card.to}>
                Read article
              </Link>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

function GeoSeoArticlePage() {
  const crumbs = [
    { label: "Home", to: "/" },
    { label: "Blog", to: "/blog" },
    { label: "What Is GEO SEO?", to: "/blog/what-is-geo-seo" },
  ];
  return (
    <>
      <Seo
        title="What Is GEO SEO?"
        description="Learn the difference between GEO and SEO, why AI citations matter, and how businesses can optimise pages for both Google and answer engines."
        path="/blog/what-is-geo-seo"
        type="article"
        jsonLd={[articleLd(), breadcrumbLd(crumbs)]}
      />
      <Breadcrumbs crumbs={crumbs} />
      <article>
        <PageHero
          eyebrow="Guide"
          title="What is GEO SEO, and how is it different from normal SEO?"
          intro="GEO helps AI answer engines understand and cite your business. SEO helps search engines crawl, rank and display your pages. The strongest strategy uses both."
        />
        <Section surface>
          <div className="container-x max-w-4xl">
            <p className="answer-block">
              GEO SEO is the practice of making a website easy for both search engines and generative AI systems to understand, trust and cite. Traditional SEO focuses on ranking pages in Google through crawlability, technical performance, content relevance, links, schema and user experience. GEO, or Generative Engine Optimisation, adds another layer: it asks whether AI tools such as ChatGPT, Perplexity, Gemini, Claude and Google AI Overviews can identify the business, access its content, understand its expertise and quote its pages as a reliable source. GEO does not replace SEO. It depends on SEO foundations because AI answers are often grounded in indexed web content. The practical goal is to create pages that rank, answer clear questions, include structured data, show expertise and contain concise passages that AI systems can safely cite.
            </p>
            <div className="prose-post mt-12">
              <p>
                Businesses are starting to notice a new kind of search behaviour. A customer no longer has to type a keyword into Google, open ten blue links and compare websites manually. They can ask an AI tool for the best provider, the safest product, the most credible explanation or the quickest local option. The AI tool then summarises the answer and may cite a small number of sources. If your business is not part of that answer, you can be invisible even if your website still looks fine in a traditional audit.
              </p>
              <h2>How does traditional SEO still matter?</h2>
              <p>
                SEO remains the foundation because AI systems need accessible, trustworthy source material. A website with blocked pages, weak internal links, slow performance, missing schema or thin content is harder for both Google and AI systems to use. Good SEO ensures the site can be crawled, indexed, understood and ranked. It also improves the evidence available to AI systems. That means technical SEO, content quality, local signals, backlinks and structured data still matter. GEO adds more precision to the way the content is written and presented.
              </p>
              <h2>What does GEO add on top?</h2>
              <p>
                GEO focuses on AI citation readiness. A page should answer specific questions clearly, use headings that match natural language queries and include self-contained answer blocks. Those answer blocks should define the topic, explain the context and make the useful point without forcing an AI system to stitch together information from five different sections. GEO also checks whether AI crawlers can access the site, whether the brand is mentioned on external platforms and whether the business entity is consistent across the web.
              </p>
              <h2>Why does citability matter?</h2>
              <p>
                Citability is the difference between being generally relevant and being useful enough to quote. AI systems prefer passages that are concise, clear and fact-rich. A service page that says "we help businesses grow" is not very citable because it is vague. A service page that explains the audit process, the inputs required, the output format, the scoring model and the expected turnaround is much easier to use as a source. This is why GEO often improves the clarity of the page for humans too.
              </p>
              <h2>How should a business start?</h2>
              <p>
                Start with the pages that already matter commercially: home, services, local landing pages, product categories and high-intent blog posts. Make sure each one has a clear purpose, a direct answer to the main customer question, useful supporting detail, schema markup and internal links to the next step. Then check robots.txt, sitemap.xml and llms.txt so crawlers can understand the site structure. Finally, compare the business against competitors in AI answers. If competitors are being cited and you are not, inspect what evidence they provide that you do not.
              </p>
              <h2>What is the simple takeaway?</h2>
              <p>
                GEO and SEO work best together. SEO makes the site technically eligible and competitively relevant. GEO makes the site easier for AI systems to understand and cite. A business that invests in both is more likely to appear in Google results, AI Overviews and answer engines. The work is not magic. It is a practical mix of crawl access, content clarity, structured data, brand evidence and measurable reporting.
              </p>
            </div>
            <FounderBio />
          </div>
        </Section>
      </article>
      <CTA heading="Want to know if your site is citable?" />
    </>
  );
}

function ProofPage({
  kind,
  title,
  intro,
  answer,
  bullets,
}: {
  kind: string;
  title: string;
  intro: string;
  answer: string;
  bullets: string[];
}) {
  const pathMap: Record<string, string> = {
    "Case Study": "/case-studies/sample-geo-audit",
    "Report Example": "/reports/example-seo-geo-audit",
    "Local Industry": "/industries/local-business-seo-geo",
    "Ecommerce Industry": "/industries/ecommerce-ai-search",
  };
  const path = pathMap[kind];
  const crumbs = [
    { label: "Home", to: "/" },
    { label: kind, to: path },
  ];
  return (
    <>
      <Seo
        title={title}
        description={intro}
        path={path}
        jsonLd={[breadcrumbLd(crumbs), serviceLd(path, title, intro)]}
      />
      <Breadcrumbs crumbs={crumbs} />
      <PageHero eyebrow={kind} title={title} intro={intro} />
      <Section surface>
        <div className="container-x">
          <p className="answer-block">{answer}</p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="image-panel aspect-[1.28/1]">
              <img src="/report-preview-visual.svg" alt="Example SEO and GEO audit report preview" className="premium-img" loading="lazy" />
            </div>
            <div className="image-panel aspect-[1.28/1] lg:translate-y-8">
              <img src="/audit-dashboard-visual.svg" alt="SEO and GEO audit dashboard preview" className="premium-img" loading="lazy" />
            </div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {bullets.map((item, i) => (
              <article key={item} className="card p-7">
                <p className="font-mono text-sm font-bold text-accent">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="mt-3 text-xl font-bold text-navy">{item}</h2>
              </article>
            ))}
          </div>
          <FounderBio />
        </div>
      </Section>
      <CTA />
    </>
  );
}

function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page not found"
        description="The page you are looking for does not exist or has moved. Return to the Eljones Digital homepage to keep exploring our SEO and GEO audit services."
        path="/404"
        noindex
      />
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-navy text-white">
        <div className="dotgrid absolute inset-0 opacity-50" aria-hidden="true" />
        <div
          className="absolute -right-32 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]"
          aria-hidden="true"
        />
        <div className="container-x relative py-24 text-center sm:py-28">
          <p className="eyebrow mb-4">Error 404</p>
          <p className="font-mono text-7xl font-bold text-accent sm:text-8xl">404</p>
          <h1 className="mx-auto mt-6 max-w-2xl text-balance text-4xl font-bold leading-[1.05] sm:text-5xl">
            Page not found
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            The link may be broken or the page may have moved. Head back to the homepage or jump straight to the services and contact pages.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link className="btn-accent" to="/">
              Back to homepage
            </Link>
            <Link className="btn-ghost" to="/services">
              Browse services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// --- /ai-strategy (ExO 3.0 AI readiness audit) page data ---------------------
// Premium tier, separate buyer (CEOs/founders) from the SEO/GEO audit line.
// Based on the ExO 3.0 / Organizational Singularity framework by Salim Ismail
// and Peter Diamandis (OpenExO). Kept as page-local data, mirroring the other
// page arrays above.

const aiDimensions: { n: string; name: string; desc: string }[] = [
  {
    n: "01",
    name: "Organisational Drag",
    desc: "How many approval layers does it take to get something done? Companies with 5+ approval steps for standard decisions score low — every layer is a workflow an AI-native competitor doesn't have.",
  },
  {
    n: "02",
    name: "AI Citizenship",
    desc: "Is AI a bolt-on tool or a first-class participant in how work gets done? We look for evidence of a Chief AI Officer role, AI in standard workflows, and active agent deployment — not just a ChatGPT subscription.",
  },
  {
    n: "03",
    name: "MTP Clarity",
    desc: "Does the company have a Massive Transformative Purpose clear enough for an AI agent to act on it? Vague mission statements can't guide autonomous systems.",
  },
  {
    n: "04",
    name: "Workflow Documentation",
    desc: "Are your core revenue-generating workflows written down prescriptively, or is the knowledge entirely in people's heads? Undocumented workflows can't be automated — they can only be replaced.",
  },
  {
    n: "05",
    name: "Intelligence Stack Readiness",
    desc: "Do you have a data lake, clean API architecture, and structured outputs — or are you running siloed ERP systems and manual Excel exports? The gap here determines how fast an AI-native twin could be built.",
  },
  {
    n: "06",
    name: "Governance Framework",
    desc: "When an AI agent makes a mistake, can you roll it back? Do you have agent passports, audit logs, and a human review queue? Governance isn't bureaucracy — it's what lets you deploy agents with confidence.",
  },
  {
    n: "07",
    name: "Talent Readiness",
    desc: "Are your people being retrained for oversight, exception handling, and apprenticeship roles — or are they still doing work AI can do faster and cheaper? The score here predicts your transition risk over the next 24 months.",
  },
];

const aiServices: { name: string; tag: string; desc: string; receive: string }[] = [
  {
    name: "ExO Quick Score",
    tag: "Quick Score",
    desc: "The fastest way to see where your company stands. We score all 7 dimensions in a single session and return a 1–10 on each with 3 prioritised actions per dimension. No preparation required — just your website, LinkedIn, and 45 minutes of your time.",
    receive: "1-page scorecard PDF with dimension scores and priority actions.",
  },
  {
    name: "Full ExO AI Readiness Audit",
    tag: "Full Audit",
    desc: "A deep audit across all 7 dimensions grounded in observable signals — your website, public filings, LinkedIn, job listings, and news — plus a structured interview with your leadership team. Every finding is scored honestly with a falsifiability check.",
    receive: "Full audit report (20–30 pages), 0–10 score per dimension, prioritised action plan, and C-suite presentation deck.",
  },
  {
    name: "Disruption Risk Analysis",
    tag: "Disruption",
    desc: "We identify which of your business lines a 2-person team with Claude and open-source AI could replicate in 60–90 days. Includes a week-by-week build simulation, a Day 90 product description, Month 6 projection, and a threat score per business line.",
    receive: "Disruption scenario report with defender response window and recommended countermeasures.",
  },
  {
    name: "Digital Twin Blueprint",
    tag: "Blueprint",
    desc: "A full technical and operational plan for building an AI-native twin of your highest-risk business line at the edge — before a competitor does. Covers tech stack, migration sequence, governance model, and 90-day sprint plan.",
    receive: "Digital twin architecture document and Claude Code kickoff prompt ready to hand to a developer.",
  },
  {
    name: "90-Day AI Roadmap",
    tag: "Roadmap",
    desc: "We work backwards from your AI-native future state to a concrete 90-day first sprint. Identifies the single highest-leverage workflow to automate first, the tools required, the team changes needed, and the metrics that prove it worked.",
    receive: "Backcasting roadmap document with weekly milestones and a decision framework for every tradeoff.",
  },
  {
    name: "Executive Pitch & Briefing Pack",
    tag: "Report",
    desc: "Translates any ExO audit output into plain language for a board, investors, or a leadership team that hasn't read the Organizational Singularity framework. Includes a word-for-word presentation script, pre-meeting brief, and objection handling.",
    receive: "Slide deck (10–12 slides), speaker script, and objection guide.",
  },
];

const aiDisruptionPoints: string[] = [
  "The cost of building software, running analysis and delivering professional services has dropped to near-zero with AI. What used to take a 10-person team now takes 2 people and a £50/month Claude subscription. That shift changes what a small team can build — and how fast they can build it.",
  "The companies most at risk are the ones with high-margin, process-heavy services built around human coordination — consulting, recruitment, auditing, legal, finance and marketing. These are exactly the workflows AI can execute in parallel. Where the value is mostly knowledge, documentation and coordination, it can be replicated.",
  "The audit doesn't tell you to fear this. It tells you exactly which of your business lines are exposed, how long you have before a competitor moves, and what to build at the edge before someone else does. The point is direction, not alarm.",
];

const aiGoodFit: string[] = [
  "Companies with 10–500 employees facing competitive pressure from AI-native startups",
  "Professional services firms — consulting, recruitment, legal, finance and marketing",
  "Founders who want to know how exposed their highest-margin service line is",
  "Leadership teams preparing an AI strategy for a board presentation",
  "Companies that have adopted AI tools but haven't redesigned their workflows around them",
];

const aiNotFit: string[] = [
  "Businesses looking for website SEO fixes — see our SEO and GEO audit services instead",
  "Pre-revenue startups with no established workflows to audit",
  "Companies that only want reassurance rather than honest disruption scoring",
  "Teams looking for a generic “AI readiness” tick-box exercise with no action plan",
];

const aiFaqs: { q: string; a: string }[] = [
  {
    q: "How is an ExO AI strategy audit different from a standard digital transformation report?",
    a: "An ExO AI strategy audit differs from standard digital transformation reports in three ways. First, every finding includes a falsifiability check — a specific test you can run to verify the finding is real, not a consultant's opinion. Second, it runs a live disruption simulation modelling how a 2-person AI-native team could replicate your most vulnerable business line in 60–90 days, with a week-by-week build plan. Third, it is grounded in the ExO 3.0 Organizational Singularity framework by Salim Ismail and Peter Diamandis, the same framework used by Singularity University and Fortune 500 strategy teams. It is delivered in days not months, costs a fraction of a traditional consulting engagement, and produces plain documents you own — no vendor lock-in, no ongoing dependency.",
  },
  {
    q: "Does my company need to have already adopted AI to benefit from this audit?",
    a: "No — an ExO AI strategy audit is most valuable before full AI adoption, because it prevents building the wrong things. If your Intelligence Stack Readiness scores low, we identify exactly which data infrastructure gaps to fix before spending money on AI agents. If your Organisational Drag score is high, we show which approval layers to cut before automation creates new bottlenecks. Companies that have already deployed AI tools benefit from the audit too — it assesses whether those tools are genuinely embedded in workflows or just cosmetic additions. The 7-dimension scoring works at any stage of AI adoption and produces a prioritised action plan regardless of your starting point.",
  },
  {
    q: "What makes the disruption simulation realistic rather than just theoretical?",
    a: "The disruption simulation is realistic because it is grounded in tools and costs that exist today, not hypotheticals. It uses the actual AI stack available right now — Claude, open-source models and no-code platforms — and real cost data, typically £50 to £200 per month for the full toolset. Timelines come from observed AI-native builds rather than optimistic guesses, and the work is broken down week by week so you can see what a competitor would ship and when. The simulation ends with a Day 90 product description written as if the replica already exists, plus a Month 6 projection. The goal is to make the threat concrete and actionable: you see which business line is exposed, how long your defender response window is, and which countermeasures to deploy first. It is designed to direct action, not to alarm you without a plan.",
  },
  {
    q: "How long does a full ExO AI readiness audit take to complete?",
    a: "A full ExO AI Readiness Audit takes three to five working days from receipt of your initial information. The faster ExO Quick Score is delivered in one day, and a standalone Disruption Risk Analysis takes about two days. Every output is delivered as plain documents you own — scorecards, reports, presentation decks and blueprints — with no retainer, no platform subscription and no ongoing dependency on us. There is no vendor lock-in: you keep everything and can act on it with your own team or developer. A 60-minute walkthrough call is included with both the Full Audit and the Disruption Risk Analysis, so we can present the findings directly to your leadership team and answer questions live. There is no obligation to continue beyond the delivered work.",
  },
];

function aiStrategyWebPageLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE.url}/ai-strategy#webpage`,
    url: `${SITE.url}/ai-strategy`,
    name: "AI Strategy & Disruption Audit | ExO 3.0 Framework | Eljones Digital",
    description:
      "ExO 3.0 AI readiness audits for businesses. 7-dimension scoring, disruption risk simulation, digital twin blueprints, and C-suite PDF reports.",
    isPartOf: { "@id": `${SITE.url}/#website` },
  };
}

function aiStrategyServiceLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE.url}/ai-strategy#service`,
    name: "ExO AI Strategy & Disruption Audit",
    provider: { "@id": `${SITE.url}/#organization` },
    description:
      "AI organisational readiness audits based on the ExO 3.0 Organizational Singularity framework by Salim Ismail and Peter Diamandis. Covers 7 scoring dimensions, disruption risk simulation, digital twin blueprints, and 90-day roadmaps.",
    areaServed: "Worldwide",
    serviceType: "AI Strategy Consulting",
  };
}

function aiStrategyFaqLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: aiFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

function AiStrategyPage() {
  const crumbs = [
    { label: "Home", to: "/" },
    { label: "AI Strategy Audit", to: "/ai-strategy" },
  ];
  return (
    <>
      <Seo
        title="AI Strategy & Disruption Audit | ExO 3.0 Framework"
        description="We audit your business against the ExO 3.0 Organizational Singularity framework — scoring AI readiness across 7 dimensions and identifying which of your business lines a 2-person AI startup could replicate in 90 days."
        path="/ai-strategy"
        jsonLd={[aiStrategyWebPageLd(), aiStrategyServiceLd(), aiStrategyFaqLd(), breadcrumbLd(crumbs)]}
      />

      {/* HERO — navy, premium tier. Breadcrumb rendered inline (light) so the
          section sits flush under the fixed header without a white seam. */}
      <section className="relative overflow-hidden bg-navy pt-32 text-white sm:pt-36">
        <div className="dotgrid absolute inset-0 opacity-40" aria-hidden="true" />
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(233,69,96,0.20),transparent_30%),radial-gradient(circle_at_85%_12%,rgba(47,123,237,0.18),transparent_30%)]"
          aria-hidden="true"
        />
        <div className="container-x relative pb-20 sm:pb-24">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-[0.72rem] text-white/55">
              <li>
                <Link to="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/30">
                /
              </li>
              <li>
                <span aria-current="page" className="text-accent">
                  AI Strategy Audit
                </span>
              </li>
            </ol>
          </nav>
          <div className="mt-10 max-w-3xl animate-fade-up">
            <p className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[0.72rem] font-medium uppercase tracking-eyebrow text-azure-400">
              AI Strategy Audit
            </p>
            <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.04] sm:text-6xl">
              How exposed is your business to a 2-person AI startup?
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/72">
              We score your company against the ExO 3.0 Organizational Singularity framework — 7 dimensions, an honest 1–10 score, and a week-by-week simulation of how a lean AI-native team could replicate your highest-margin service in 90 days.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              {["7 Scoring Dimensions", "90-Day Disruption Simulation", "C-Suite Ready PDF Report"].map((stat) => (
                <span
                  key={stat}
                  className="rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 font-mono text-sm text-white/80"
                >
                  {stat}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link className="btn-accent" to="/contact">
                Request your ExO audit →
              </Link>
              <a className="btn-ghost" href="#audit-services">
                See the 6 audit services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — Citability block (AI citation target) */}
      <Section surface>
        <div className="container-x">
          <SectionHeading
            eyebrow="Citation-ready answer"
            title="What is an ExO AI Strategy Audit and what does a business get from one?"
          />
          <p className="answer-block mt-8">
            An ExO AI Strategy Audit scores a company across seven dimensions — organisational drag, AI citizenship, MTP clarity, workflow documentation, intelligence stack readiness, governance framework and talent readiness — to measure how ready it is to operate as an AI-native business. Each dimension is scored from 1 to 10 with specific, falsifiable findings rather than vague opinion. The audit also runs a disruption simulation: it models how a 2-person team using Claude and open-source AI tools could replicate the company's most vulnerable, highest-margin business line in 60 to 90 days. The output is a prioritised action plan and a C-suite ready PDF report that tells leadership exactly where they are exposed and what to build at the edge first. It is based on the ExO 3.0 / Organizational Singularity framework developed by Salim Ismail and Peter Diamandis, applied with AI audit tooling for speed and depth.
          </p>
        </div>
      </Section>

      {/* SECTION 5 — Disruption risk framing */}
      <Section>
        <div className="container-x">
          <SectionHeading
            eyebrow="Disruption risk"
            title="Why does it only take 2 people and Claude to replicate your business?"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {aiDisruptionPoints.map((para, i) => (
              <article key={i} className="card p-7">
                <p className="font-mono text-sm font-bold text-accent">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-3 leading-relaxed text-muted">{para}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 6 — The 7 scoring dimensions */}
      <Section surface>
        <div className="container-x">
          <SectionHeading
            eyebrow="The 7 dimensions"
            title="What does an ExO AI readiness score measure?"
            intro="Each dimension is scored from 1 to 10 with a specific, falsifiable finding — so leadership can see exactly where the organisation is exposed."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {aiDimensions.map((d) => (
              <article key={d.n} className="card p-7">
                <p className="font-mono text-sm font-bold text-accent">{d.n}</p>
                <h3 className="mt-3 text-xl font-bold text-navy">{d.name}</h3>
                <p className="mt-3 leading-relaxed text-muted">{d.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 7 — The 6 audit services */}
      <Section id="audit-services">
        <div className="container-x">
          <SectionHeading
            eyebrow="Audit services"
            title="Which ExO AI strategy service does your business need?"
            intro="Six services, from a 45-minute Quick Score to a full Digital Twin Blueprint. Every output is a plain document you own."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {aiServices.map((s, i) => (
              <article key={s.name} className="card flex h-full flex-col p-7">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <span className="chip">{s.tag}</span>
                  <span className="font-mono text-xs text-muted/70">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="text-xl font-bold leading-snug text-navy">{s.name}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-muted">{s.desc}</p>
                <div className="mt-5 border-t border-line pt-5">
                  <p className="eyebrow mb-2">What you receive</p>
                  <p className="text-[0.9rem] leading-relaxed text-ink/80">{s.receive}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 8 — Framework attribution (required) */}
      <Section surface>
        <div className="container-x">
          <SectionHeading
            eyebrow="Framework"
            title="What is the ExO 3.0 Organizational Singularity framework?"
          />
          <p className="answer-block mt-8">
            ExO 3.0 is the third evolution of the Exponential Organizations framework developed by Salim Ismail and Peter Diamandis. First published in 2014, the framework was updated as ExO 2.0 in 2023 and evolved into ExO 3.0, the Organizational Singularity, in 2026. It defines how organisations transition from human-centred coordination models — where work moves through meetings, approvals and knowledge held in people's heads — to AI-native intelligence systems where agents execute and humans supervise. The framework is used by Singularity University, Fortune 500 strategy teams and independent consultants certified through OpenExO. It treats AI not as a bolt-on tool but as a first-class participant in how an organisation thinks, decides and delivers. Eljones Digital applies the ExO 3.0 framework using AI audit tooling to deliver the same depth of analysis as a traditional consulting engagement, at a fraction of the cost and in days rather than months.
          </p>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-muted">
            ExO 3.0 / Organizational Singularity framework developed by Salim Ismail and Peter Diamandis. Published through{" "}
            <a
              href="https://openexo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-royal underline decoration-accent/40 underline-offset-2 hover:text-accent"
            >
              OpenExO (openexo.com)
            </a>
            . Eljones Digital is an independent practitioner of this framework and is not affiliated with or endorsed by OpenExO.
          </p>
        </div>
      </Section>

      {/* SECTION 9 — Who this is for */}
      <Section>
        <div className="container-x">
          <SectionHeading
            eyebrow="Who this is for"
            title="Which businesses benefit most from an ExO AI strategy audit?"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="card p-7">
              <h3 className="text-2xl font-bold text-navy">✅ Good fit</h3>
              <ul className="mt-5 space-y-3">
                {aiGoodFit.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-muted">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="card p-7 opacity-80">
              <h3 className="text-2xl font-bold text-navy">❌ Not the right service</h3>
              <ul className="mt-5 space-y-3">
                {aiNotFit.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-muted">
                    <span className="mt-2 h-2 w-2 flex-none rounded-full bg-line" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* SECTION 10 — FAQ */}
      <Section surface>
        <div className="container-x">
          <SectionHeading eyebrow="FAQ" title="Questions about the ExO AI strategy audit" />
          <div className="mt-10 grid gap-5">
            {aiFaqs.map((f) => (
              <article key={f.q} className="card p-7">
                <h3 className="text-xl font-bold text-navy">{f.q}</h3>
                <p className="mt-3 leading-relaxed text-muted">{f.a}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* SECTION 11 — CTA (custom band; mirrors the shared CTA styling but with
          this page's specified buttons: /contact + /services). */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="dotgrid absolute inset-0 opacity-60" aria-hidden="true" />
        <div
          className="absolute -right-32 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]"
          aria-hidden="true"
        />
        <div className="container-x relative py-20 text-center sm:py-24">
          <p className="eyebrow mb-4">Start your audit</p>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold sm:text-[2.6rem] sm:leading-[1.1]">
            Ready to see how exposed your business really is?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            Share your website and we'll run the ExO Quick Score in 24 hours — 7 dimension scores and 3 priority actions per dimension, no preparation needed.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link className="btn-accent" to="/contact">
              Request your ExO audit →
            </Link>
            <Link className="btn-ghost" to="/services">
              See all SEO services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function pricingWebPageLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE.url}/pricing#webpage`,
    url: `${SITE.url}/pricing`,
    name: "Pricing | SEO, GEO & AI Strategy Audits | Eljones Digital",
    description:
      "Transparent pricing for SEO audits, GEO audits, and ExO AI Strategy audits. Solo operator, direct access, falsifiable findings. Based in the UK.",
    isPartOf: { "@id": `${SITE.url}/#website` },
  };
}

function PricingPage() {
  const crumbs = [
    { label: "Home", to: "/" },
    { label: "Pricing", to: "/pricing" },
  ];

  // SINGLE SOURCE OF TRUTH FOR ALL PRICES.
  // These are sample/indicative figures to be confirmed after competitor
  // research — changing one later is a one-line edit here, nowhere else.
  // No price string is hardcoded anywhere else on the page.
  const PRICING = {
    seoSnapshot: { label: "SEO + GEO Snapshot", price: "£249", note: "single report" },
    fullAudit: { label: "Full SEO + GEO Audit", price: "£497", note: "report + fix plan" },
    auditWithFixes: { label: "Audit + Implementation", price: "£897", note: "audit + fixes applied" },
    monthlyRetainer: { label: "Monthly Monitoring", price: "£197", note: "per month" },
    exoQuickScore: { label: "ExO Quick Score", price: "£497", note: "1-page scorecard" },
    exoFullAudit: { label: "Full ExO AI Readiness Audit", price: "£1,497", note: "full report + presentation" },
    exoDisruption: { label: "Disruption Risk Analysis", price: "£997", note: "simulation + defender plan" },
    exoRoadmap: { label: "90-Day AI Roadmap", price: "£1,197", note: "roadmap + weekly milestones" },
  };

  type PriceKey = keyof typeof PRICING;

  const seoCards: { key: PriceKey; desc: string }[] = [
    {
      key: "seoSnapshot",
      desc: "A fast, single-pass score of your site's SEO and GEO health with the most important issues called out. Ideal if you want a quick read on where you stand before committing to a full audit.",
    },
    {
      key: "fullAudit",
      desc: "A complete 0–100 audit across all 24 dimensions with a prioritised Critical → High → Medium fix list. You get the full report plus a clear action plan your team can implement.",
    },
    {
      key: "auditWithFixes",
      desc: "Everything in the full audit, plus the priority fixes implemented for you — technical changes, schema and content rewrites. The fastest route from finding to a measurable score improvement.",
    },
    {
      key: "monthlyRetainer",
      desc: "Ongoing weekly drift checks and a monthly GEO comparison so regressions are caught before they cost you traffic. Includes a monthly health-score report and priority fixes each cycle.",
    },
  ];

  const exoCards: { key: PriceKey; desc: string }[] = [
    {
      key: "exoQuickScore",
      desc: "All 7 ExO readiness dimensions scored 1–10 in a single session, with 3 prioritised actions per dimension. The fastest way to see how exposed your organisation is — no preparation required.",
    },
    {
      key: "exoFullAudit",
      desc: "A deep audit across all 7 dimensions grounded in observable signals plus a leadership interview, every finding scored with a falsifiability check. Includes the full report and a C-suite presentation deck.",
    },
    {
      key: "exoDisruption",
      desc: "We model how a 2-person team with Claude could replicate your highest-margin business line in 60–90 days, week by week. You receive a threat score per business line and a defender response plan.",
    },
    {
      key: "exoRoadmap",
      desc: "We work backwards from your AI-native future state to a concrete 90-day first sprint with weekly milestones. Identifies the highest-leverage workflow to automate first and the metrics that prove it worked.",
    },
  ];

  const included: { title: string; body: string }[] = [
    { title: "Direct access to Errol", body: "No account manager layer and no junior hand-off — you work directly with the person doing the audit." },
    { title: "Falsifiable findings", body: "Every issue ships with a verification check you can run yourself, so you never take a finding on trust." },
    { title: "Plain-language report", body: "No jargon. Written for business owners, not developers — clear enough to act on, with the technical detail there when you need it." },
  ];

  const PriceCard = ({ entry, desc }: { entry: { label: string; price: string; note: string }; desc: string }) => (
    <article className="card flex h-full flex-col p-7">
      <h3 className="text-xl font-bold leading-snug text-navy">{entry.label}</h3>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="font-mono text-4xl font-bold text-navy">{entry.price}</span>
        <span className="text-sm text-muted">{entry.note}</span>
      </div>
      <p className="mt-4 flex-1 leading-relaxed text-muted">{desc}</p>
      <Link className="btn-outline mt-6 self-start" to="/contact">
        Get a quote →
      </Link>
    </article>
  );

  return (
    <>
      <Seo
        title="Pricing | SEO, GEO & AI Strategy Audits | Eljones Digital"
        description="Transparent pricing for SEO audits, GEO audits, and ExO AI Strategy audits. Solo operator, direct access, falsifiable findings. Based in the UK."
        path="/pricing"
        jsonLd={[pricingWebPageLd(), breadcrumbLd(crumbs)]}
      />
      <Breadcrumbs crumbs={crumbs} />

      {/* HERO + amber indicative-pricing banner */}
      <section className="bg-white pb-12 pt-10 sm:pb-16">
        <div className="container-x">
          <p className="eyebrow mb-4">Pricing</p>
          <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1.05] text-navy sm:text-6xl">
            Simple, transparent pricing
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Every audit is delivered by Errol directly — no account managers, no hidden fees.
          </p>
          <div
            role="note"
            className="mt-8 flex max-w-2xl items-start gap-3 rounded-xl border border-amber-300 bg-amber-50 px-5 py-4 text-amber-900"
          >
            <svg viewBox="0 0 20 20" fill="currentColor" className="mt-0.5 h-5 w-5 flex-none" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 11-2 0 1 1 0 012 0zm-1 3a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-sm font-medium leading-relaxed">
              Prices shown are indicative and will be confirmed before any work begins.
            </p>
          </div>
        </div>
      </section>

      {/* SEO & GEO AUDITS */}
      <Section surface>
        <div className="container-x">
          <SectionHeading
            eyebrow="SEO / GEO"
            title="Website visibility audits"
            intro="Score and fix how your website performs in Google search and AI answer engines."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {seoCards.map((c) => (
              <PriceCard key={c.key} entry={PRICING[c.key]} desc={c.desc} />
            ))}
          </div>
        </div>
      </Section>

      {/* ExO AI STRATEGY */}
      <Section>
        <div className="container-x">
          <SectionHeading
            eyebrow="AI Strategy"
            title="Organisational AI readiness"
            intro="Score how exposed your business is to AI-native competition — and what to build before they do."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {exoCards.map((c) => (
              <PriceCard key={c.key} entry={PRICING[c.key]} desc={c.desc} />
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-muted">
            ExO AI Strategy services are based on the ExO 3.0 / Organizational Singularity framework by Salim Ismail and Peter Diamandis.{" "}
            <Link className="font-medium text-royal hover:text-accent" to="/ai-strategy">
              Learn more about ExO AI Strategy audits →
            </Link>
          </p>
        </div>
      </Section>

      {/* WHAT'S ALWAYS INCLUDED */}
      <Section surface>
        <div className="container-x">
          <SectionHeading eyebrow="What's included" title="Every engagement includes" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {included.map((item) => (
              <article key={item.title} className="card p-7">
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-full bg-accent/10 text-accent">
                  <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5" aria-hidden="true">
                    <path
                      d="M5 10.5l3.2 3.2L15 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA — mirrors the shared CTA band styling, with this page's button. */}
      <section className="relative overflow-hidden bg-navy text-white">
        <div className="dotgrid absolute inset-0 opacity-60" aria-hidden="true" />
        <div
          className="absolute -right-32 top-1/2 h-[28rem] w-[28rem] -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]"
          aria-hidden="true"
        />
        <div className="container-x relative py-20 text-center sm:py-24">
          <p className="eyebrow mb-4">Start here</p>
          <h2 className="mx-auto max-w-2xl text-balance text-3xl font-bold sm:text-[2.6rem] sm:leading-[1.1]">
            Not sure which audit you need?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            Share your website and I'll recommend the right starting point — no commitment required.
          </p>
          <div className="mt-9 flex items-center justify-center">
            <Link className="btn-accent" to="/contact">
              Get a recommendation →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="bg-white pb-14 pt-10 sm:pb-20">
      <div className="container-x">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="max-w-4xl text-balance text-4xl font-bold leading-[1.05] text-navy sm:text-6xl">{title}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">{intro}</p>
      </div>
    </section>
  );
}

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "pricing", element: <PricingPage /> },
      { path: "ai-strategy", element: <AiStrategyPage /> },
      { path: "ai-search-optimization", element: <AiSearchOptimizationPage /> },
      {
        path: "case-studies/sample-geo-audit",
        element: (
          <ProofPage
            kind="Case Study"
            title="Sample GEO audit case study: from invisible to AI-ready"
            intro="A realistic example of how Eljones Digital turns SEO and GEO findings into a clearer score, stronger AI visibility and a prioritised action plan."
            answer="This sample case study shows the audit logic without pretending to be a live client result. The example business has a working site but weak AI visibility: unclear service pages, limited schema, thin founder signals, few third-party mentions and no tracking for ChatGPT, Perplexity or Google AI Overview appearances. Eljones Digital audits the site, scores the gaps and groups the fixes by urgency. Phase one repairs crawlability, titles, internal links and schema. Phase two rewrites vague service copy into answer-ready sections and adds named expertise. Phase three builds authority through citations, reviews and brand mentions. The result is a clearer entity, better technical eligibility and a report the client can give to a developer or marketing team."
            bullets={["Baseline 0-100 SEO and GEO score", "Critical fixes for crawlability and schema", "Answer-ready service page rewrites", "AI visibility tracking after deployment"]}
          />
        ),
      },
      {
        path: "reports/example-seo-geo-audit",
        element: (
          <ProofPage
            kind="Report Example"
            title="Example SEO and GEO audit report structure"
            intro="See the sections a client-ready Eljones Digital audit report should include, from executive summary to AI platform readiness."
            answer="A useful SEO and GEO audit report should work for three people: the owner deciding what matters, the marketer planning the work and the developer making the changes. The executive summary names the commercial risk and the fastest opportunities. The scorecard breaks the site into technical foundations, content quality, structured data, authority signals, AI citability and platform readiness. The findings section separates critical, high and medium priority work. The technical appendix lists URLs, templates, schema issues and exact fixes. The AI visibility section records whether the brand appears in ChatGPT, Perplexity, Gemini, Copilot and Google AI Overviews. The final section explains how to verify each fix after publishing."
            bullets={["Executive summary and overall score", "Category score breakdown", "Critical, high and medium priorities", "AI platform readiness table"]}
          />
        ),
      },
      {
        path: "industries/local-business-seo-geo",
        element: (
          <ProofPage
            kind="Local Industry"
            title="Local business SEO and GEO audits"
            intro="How local companies can improve Google Map Pack visibility and become easier for AI tools to recommend."
            answer="Local businesses need SEO and GEO because customers increasingly ask search engines and AI tools for recommendations before they visit a website. A local audit checks Google Business Profile completeness, NAP consistency, local landing pages, reviews, LocalBusiness schema, service-area clarity and mobile performance. The GEO layer asks whether AI tools can understand who the business serves, where it operates, what makes it credible and which services it provides. Eljones Digital turns those checks into a local visibility plan: fix profile gaps, strengthen location pages, add clear service answers, mark up business details, improve review signals and track whether the brand appears in AI recommendations for local intent queries."
            bullets={["Google Business Profile review", "LocalBusiness schema and NAP checks", "Location and service page clarity", "AI recommendation prompt tracking"]}
          />
        ),
      },
      {
        path: "industries/ecommerce-ai-search",
        element: (
          <ProofPage
            kind="Ecommerce Industry"
            title="Ecommerce AI search optimization audits"
            intro="How online stores can make product and category pages clearer for Google, AI Overviews and AI shopping answers."
            answer="Ecommerce AI search optimization helps online stores make product and category pages easier for search engines and AI systems to understand. The audit checks product schema, price and availability data, review markup, category copy, image alt text, internal links, technical performance and merchant trust signals. The GEO layer focuses on whether AI systems can identify the product type, compare benefits, trust the store and cite useful buying information. Eljones Digital converts those findings into a practical roadmap: repair schema, enrich category pages, answer buying questions, improve product evidence, strengthen policies and monitor whether AI shopping and answer engines begin surfacing the store in product research journeys."
            bullets={["Product and category schema validation", "Buying-question content gaps", "Image and page speed improvements", "AI shopping visibility tracking"]}
          />
        ),
      },
      { path: "how-it-works", element: <HowItWorksPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "blog", element: <BlogPage /> },
      { path: "blog/what-is-geo-seo", element: <GeoSeoArticlePage /> },
      // Catch-all: renders the styled 404 and is prerendered to /404.html
      // (see includedRoutes in main.tsx + the onFinished hook in vite.config.ts).
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];

export { routeMeta };
