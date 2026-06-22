// Single source of truth for global site metadata, navigation and shared copy.
// Email lives here only — footer, /contact, mailto links and Organization
// JSON-LD all read SITE.email, so swapping it is a one-line change.
export const SITE = {
  name: "Eljones Digital",
  url: "https://eljonesdigital.com",
  email: "info@eljonesdigital.com", // swap once Hostinger email is live
  tagline: "AI-Powered SEO & GEO Audits That Deliver a Real 0–100 Score",
  shortDesc:
    "Eljones Digital runs AI-powered SEO and GEO audits that score your website 0–100 across 24 dimensions, then hands you a prioritised, falsifiable action plan.",
  founder: "Errol Jones",
  foundingYear: 2026,
  sameAs: [
    "https://www.linkedin.com/company/eljones-digital",
    "https://x.com/eljonesdigital",
  ],
};

export function mailto(subject: string, body?: string): string {
  const enc = (s: string) => encodeURIComponent(s);
  const q = body ? `subject=${enc(subject)}&body=${enc(body)}` : `subject=${enc(subject)}`;
  return `mailto:${SITE.email}?${q}`;
}

export const NAV: { label: string; to: string }[] = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
  { label: "AI Strategy", to: "/ai-strategy" },
  { label: "AI Search", to: "/ai-search-optimization" },
  { label: "Proof", to: "/case-studies/sample-geo-audit" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export const STATS: { num: string; label: string }[] = [
  { num: "24", label: "Audit dimensions" },
  { num: "271", label: "Individual tests per audit" },
  { num: "10–15m", label: "Full audit turnaround" },
  { num: "0–100", label: "Verified score per site" },
];

export const BENEFITS: { title: string; body: string }[] = [
  {
    title: "A real 0–100 score, not a vague grade",
    body: "Every audit returns a weighted composite score across AI citability, brand authority, content quality, technical foundations and schema — so you know exactly where you stand and where you lose points.",
  },
  {
    title: "GEO + SEO in a single audit",
    body: "We optimise for Google rankings and for AI engines like ChatGPT, Perplexity and Gemini at the same time, because AI Overviews are grounded in the same indexation systems as classic search.",
  },
  {
    title: "Every finding is falsifiable",
    body: "Each recommendation ships with a “how would we know this failed?” check, so your team can verify a fix worked without taking our word for it. No black boxes, no vendor lock-in.",
  },
];

export const HIGHLIGHTS: { tag: string; title: string; body: string; to: string }[] = [
  {
    tag: "Full SEO Audit",
    title: "Audit your whole site across 24 dimensions",
    body: "25 specialist sub-skills run in parallel — technical health, content, schema, speed, mobile, links and AI visibility — producing a prioritised Critical → High → Medium fix list.",
    to: "/services",
  },
  {
    tag: "GEO / AI Search",
    title: "Get cited by ChatGPT, Gemini & Perplexity",
    body: "We score passage-level citability, open the right AI crawlers in robots.txt, and rewrite key pages to the 134–167 word answer standard AI engines quote from.",
    to: "/services",
  },
  {
    tag: "Schema & Technical",
    title: "Win rich results and fix Core Web Vitals",
    body: "We generate copy-paste JSON-LD for rich results and hand you exact code fixes for LCP, INP and CLS bottlenecks — most clients improve within 48 hours.",
    to: "/services",
  },
];

// Unattributed, illustrative scenarios — the type of problem an audit solves.
// These replace the previous named testimonials (no real, attributable client
// quotes exist yet) to stay within UK ASA/CAP advertising rules. Each card is
// self-contained so it reads correctly if an AI engine lifts it out of context.
export const SCENARIOS: { problem: string; detail: string }[] = [
  {
    problem:
      "A local business owner whose site stopped showing in Google Maps results after a redesign",
    detail:
      "An Eljones Digital audit checks the technical changes, local schema and Google Business Profile signals a redesign can quietly break, then lists the fixes that restore map-pack visibility.",
  },
  {
    problem:
      "An e-commerce store that cannot understand why competitors rank above it for the same products",
    detail:
      "The audit compares product schema, page speed, content depth and authority signals against those competitors, then shows which specific gaps are costing the store rankings.",
  },
  {
    problem:
      "A SaaS founder who wants to know whether ChatGPT and Perplexity will recommend their tool",
    detail:
      "A GEO audit scores citability, AI crawler access and brand mentions across the platforms AI models cite, then explains what to change so AI answers start including the product.",
  },
];

export const PROCESS: {
  step: string;
  title: string;
  what: string;
  time: string;
  input: string;
}[] = [
  {
    step: "01",
    title: "Discovery",
    what: "You share your website URL and tell us the main goal — more traffic, AI citations, local ranking or rich results. That single input is enough to scope the right audit, because the tools read your live site the same way Google and AI crawlers do.",
    time: "5 minutes",
    input: "URL + goal",
  },
  {
    step: "02",
    title: "Audit run",
    what: "We run the appropriate audit command and 25 sub-skills fire in parallel, covering technical health, content, schema, speed, mobile, links and AI visibility. Running them together is what makes full-site coverage possible in minutes rather than days.",
    time: "10–15 minutes",
    input: "None",
  },
  {
    step: "03",
    title: "Score & prioritisation",
    what: "AI agents cross-check the findings and sort them into Critical (this week), High (this month) and Medium (this quarter). Each item is ranked by business impact, so you always know what to fix first and why it matters.",
    time: "Instant",
    input: "None",
  },
  {
    step: "04",
    title: "Report delivery",
    what: "You receive a full markdown report, a PDF summary and a prioritised action plan, all on the same day. The report is written for three readers at once — a business owner, a marketer and a developer — so nobody is left guessing.",
    time: "Same day",
    input: "None",
  },
  {
    step: "05",
    title: "Walkthrough call",
    what: "We walk through the top three critical findings, explain the root cause of each and agree the fix plan together. The call keeps the work practical and makes sure the priorities match your commercial goals.",
    time: "30 minutes",
    input: "Your team",
  },
  {
    step: "06",
    title: "Fix implementation",
    what: "We implement the fixes — technical changes, schema code and content rewrites — or hand a clear brief to your own dev team. Either way, each change maps back to a specific finding in the report so nothing is done blindly.",
    time: "1–5 days",
    input: "Optional",
  },
  {
    step: "07",
    title: "Verification",
    what: "We re-run the audit after the fixes to confirm the score improved and close out each finding. This verification step is what turns the audit from a one-off opinion into a measurable, repeatable result.",
    time: "Same day",
    input: "None",
  },
];

export const FAQS: { q: string; a: string }[] = [
  {
    q: "What is a GEO audit and how is it different from a standard SEO audit?",
    a: "A GEO (Generative Engine Optimization) audit measures how likely your website is to be cited by AI tools like ChatGPT, Perplexity, Gemini and Google AI Overviews. A standard SEO audit focuses on Google rankings through traditional signals: technical health, backlinks and content relevance. A combined GEO + SEO audit covers both simultaneously. AI Overviews are grounded in the same indexation and ranking systems as traditional search, which means that fixing your SEO improves your AI search visibility too. The additional GEO-specific checks — citability scoring, AI crawler access, brand mention scanning and platform-specific optimisation — sit on top of standard SEO work and are included in our full audit.",
  },
  {
    q: "How long does a full website audit take to complete?",
    a: "A full AI-powered audit using our tool suite takes 10–15 minutes to run from the moment you share your URL to receiving a complete report. This includes 25 sub-skills executing in parallel: technical SEO, content quality, schema validation, AI citability scoring, crawler access, backlink analysis, local SEO signals, Core Web Vitals and image optimisation. By comparison, a senior SEO analyst performing a manual audit of the same depth takes 4–8 billable hours — and typically covers fewer dimensions. We deliver the audit as a full markdown report and professional PDF the same day. For multi-site or enterprise audits covering 50+ pages, turnaround is still same-day, and verification re-audits after fixes are typically completed within an hour.",
  },
  {
    q: "What does the 0–100 audit score mean and how is it calculated?",
    a: "The 0–100 score is a weighted composite across every audit dimension. For a GEO + SEO audit the breakdown is: AI Citability and Visibility (25%), Brand Authority Signals (20%), Content Quality and E-E-A-T (20%), Technical Foundations (15%), Structured Data and Schema (10%) and Platform-Specific Optimisation (10%). Each sub-dimension scores separately, so you can see exactly where you lose points. A score of 0–40 means critical problems are harming visibility now; 41–65 means a functioning but incomplete setup with specific gaps; 66–80 means solid foundations with clear opportunities; and 81–100 means comprehensive optimisation with competitive advantages in place. Every scoring decision is grounded in a first-principle observation and carries a falsifiability check you can verify yourself.",
  },
  {
    q: "Do I need to give you access to my website backend or Google account?",
    a: "No access to your backend or CMS is required to run a full audit. Our tools analyse your website from the outside — the same way Google and AI crawlers see it. We fetch pages, parse HTML and structured data, check robots.txt and sitemaps, measure load performance, and scan for schema markup without needing any login credentials. If you want deeper data — such as Google Search Console click data, GA4 organic traffic, or Core Web Vitals field data from real users — we can connect Google APIs using your own credentials. These are optional enrichments. The base audit runs with zero access and still covers 271 individual tests. For implementing fixes, your developer will need access to the codebase — but we never require it ourselves.",
  },
  {
    q: "How is brand mention scanning different from backlink analysis?",
    a: "Backlink analysis tracks hyperlinks pointing to your site. Brand mention scanning tracks where your business name appears online — with or without a link. Brand mentions correlate far more strongly with AI search visibility than backlinks do, because AI tools like ChatGPT and Perplexity build their knowledge of your business from text sources — Wikipedia, Reddit, YouTube, LinkedIn and Quora — not just link graphs. A business with strong backlinks but no Reddit discussions, no YouTube mentions and no Wikipedia presence will still be invisible to AI tools. Our brand scan covers seven or more AI-cited platforms, assessing both the volume and quality of brand mentions, entity recognition strength, and the gap between your brand presence and your top competitors.",
  },
];

export const COMPARE: { ours: string[]; theirs: string[] } = {
  ours: [
    "Full audit in 10–15 minutes",
    "271 individual tests per audit",
    "25 specialist sub-skills run in parallel",
    "Real 0–100 score with explanation",
    "Every finding has a falsifiability check",
    "GEO + SEO covered in one audit",
    "Same-day PDF report delivery",
    "No vendor lock-in — you own all files",
  ],
  theirs: [
    "4–8 hours senior SEO time per audit",
    "Manual checklist — coverage varies by analyst",
    "$2,000–$15,000+ per engagement",
    "1–3 weeks turnaround",
    "Recommendations rarely falsifiable",
    "GEO typically not covered",
    "Branded PDF takes extra days",
    "High dependency on retaining the agency",
  ],
};
