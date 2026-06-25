// All 24 audit services. Single source of truth for the Services page and the
// ItemList JSON-LD. Question headings are kept verbatim for AI citability.
export type ServiceGroup =
  | "Core & Technical SEO"
  | "GEO & AI Search"
  | "Content & Authority"
  | "Local & E-commerce"
  | "Monitoring, Strategy & Reporting";

export interface Service {
  n: number;
  slug: string;
  group: ServiceGroup;
  tag: string;
  question: string;
  value: string;
  steps: string[];
}

export const SERVICE_GROUPS: ServiceGroup[] = [
  "Core & Technical SEO",
  "GEO & AI Search",
  "Content & Authority",
  "Local & E-commerce",
  "Monitoring, Strategy & Reporting",
];

export const SERVICES: Service[] = [
  {
    n: 1,
    slug: "full-website-seo-audit",
    group: "Core & Technical SEO",
    tag: "Core SEO",
    question: "What does a full website SEO audit cover?",
    value:
      "We run 25 specialist checks across your entire site in parallel: technical health, content quality, schema, speed, mobile, AI visibility and backlinks, producing a 0–100 score and a prioritised fix list. This replaces a 4–8 hour manual audit and delivers more coverage at a fraction of the cost.",
    steps: [
      "You share your website URL",
      "25 specialist agents fire simultaneously across your site",
      "AI agents cross-check findings and prioritise: Critical → High → Medium",
      "You receive a full markdown + PDF report with a real 0–100 score",
      "We walk you through the top 3 critical fixes to action first",
    ],
  },
  {
    n: 2,
    slug: "technical-seo",
    group: "Core & Technical SEO",
    tag: "Technical SEO",
    question: "How do we fix technical SEO problems slowing your site down?",
    value:
      "We audit Core Web Vitals (LCP, INP, CLS), page speed, mobile performance, crawlability, indexation, canonical chains, redirect loops, HTTPS, XML sitemaps and robots.txt, then give you exact code fixes. Most clients see a score improvement within 48 hours of actioning our report.",
    steps: [
      "Audit your site's technical foundations",
      "CrUX + PageSpeed data reveals real-world field performance vs lab estimates",
      "We identify LCP subpart bottlenecks (TTFB, load delay, render delay)",
      "We produce a fix list with exact code changes and priority order",
      "Your developer applies the exact code fixes from the prioritised list",
    ],
  },
  {
    n: 3,
    slug: "geo-ai-search-optimisation",
    group: "GEO & AI Search",
    tag: "GEO / AI Search",
    question: "How do we get your business cited by ChatGPT, Gemini, and Perplexity?",
    value:
      "We score how citable your pages are to AI engines, fix crawler access, and rewrite the key passages so ChatGPT, Gemini and Perplexity quote you as a source, not your competitors.",
    steps: [
      "Run a full GEO and AI search audit on your site",
      "Score citability: are your answer blocks 134–167 words, self-contained, and fact-rich?",
      "Check 14+ AI crawlers in robots.txt: GPTBot, ClaudeBot, PerplexityBot, Gemini, etc.",
      "Identify which AI platforms are or are not referencing your brand",
      "Rewrite key pages to meet AI citation standards: question-based headings, clear answers",
    ],
  },
  {
    n: 4,
    slug: "content-eeat-audit",
    group: "Content & Authority",
    tag: "Content",
    question: "How do we audit and improve your content's E-E-A-T signals?",
    value:
      "We grade every page for Experience, Expertise, Authoritativeness and Trust, then give you a page-by-page rewrite brief that satisfies Google's helpful-content system and reads well for humans.",
    steps: [
      "Audit your top 20 pages for content quality",
      "We detect: thin content, filler language, missing author bios, unverified claims",
      "We check helpfulness signals: Who wrote it? How do they know? Why should I trust it?",
      "Produce a page-by-page content brief with specific rewrites",
      "Your team applies the rewrites from the page-by-page brief",
    ],
  },
  {
    n: 5,
    slug: "schema-markup",
    group: "Core & Technical SEO",
    tag: "Schema",
    question: "How do we add schema markup that makes Google display rich results for your site?",
    value:
      "We detect, validate and generate JSON-LD so Google can display rich results: star ratings, FAQs, breadcrumbs and products, with copy-paste code blocks for each page type.",
    steps: [
      "Detect all JSON-LD, Microdata, and RDFa on your site",
      "Validate against Google's Rich Results Test + Schema Markup Validator",
      "Flag deprecated rich-result types (How-to removed Sept 2023, FAQ restricted Aug 2023)",
      "Generate missing schema: Article, Product, LocalBusiness, FAQ, BreadcrumbList, etc.",
      "Deliver copy-paste JSON-LD blocks for each page type",
    ],
  },
  {
    n: 6,
    slug: "local-seo",
    group: "Local & E-commerce",
    tag: "Local SEO",
    question: "How do we get your business into Google's local map pack?",
    value:
      "We audit your Google Business Profile, NAP consistency and reviews, then deliver the fixes and LocalBusiness schema that move you into the local map pack.",
    steps: [
      "Audit your business website for local SEO",
      "Audit Google Business Profile: categories, hours, photos, posts, attributes",
      "Check NAP consistency across 50+ major directories",
      "Analyse review ratings, sentiment trends, and response coverage",
      "Generate LocalBusiness JSON-LD schema with geo coordinates and opening hours",
    ],
  },
  {
    n: 7,
    slug: "ai-crawler-access",
    group: "GEO & AI Search",
    tag: "GEO / AI Search",
    question: "How do we ensure AI tools can actually read and index your website?",
    value:
      "We map exactly which AI crawlers can reach your site and produce a robots.txt that welcomes the ones that drive citations while keeping unwanted scrapers out.",
    steps: [
      "Scan your domain for AI crawler access",
      "Check robots.txt for GPTBot, ClaudeBot, PerplexityBot, Gemini, YouBot, and 9+ more",
      "Identify crawlers that are blocked, allowed, or missing from your rules",
      "Produce a recommended robots.txt diff: allow what benefits you, block scrapers",
      "Verify crawler access is live after changes are deployed",
    ],
  },
  {
    n: 8,
    slug: "brand-mention-signals",
    group: "GEO & AI Search",
    tag: "GEO / AI Search",
    question: "How do we build the brand signals that make AI tools recommend you?",
    value:
      "We measure where your brand is mentioned across the platforms AI models learn from, then build a plan to close the gap on your competitors and grow citations over time.",
    steps: [
      "Scan brand mentions across major AI-cited platforms",
      "Score entity presence on Wikipedia, Reddit, YouTube, LinkedIn, and Quora",
      "Identify platforms where competitors are mentioned but you are not",
      "Build a brand mention growth plan: PR, guest posts, community presence",
      "Track brand mention growth month-over-month against AI citation frequency",
    ],
  },
  {
    n: 9,
    slug: "backlink-analysis",
    group: "Content & Authority",
    tag: "Authority",
    question: "How do we analyse your backlink profile and find link building opportunities?",
    value:
      "We pull multi-source link data, score authority and toxicity, and hand you a ranked list of realistic link opportunities you can actually win.",
    steps: [
      "Analyse the backlink profile for your domain",
      "Pull link data from Moz, Bing Webmaster, and Common Crawl",
      "Score: domain authority spread, anchor diversity, toxic link ratio",
      "Check expired-domain heritage risk on acquired blog assets",
      "Deliver top 20 link opportunities ranked by authority and relevance",
    ],
  },
  {
    n: 10,
    slug: "keyword-clustering",
    group: "Content & Authority",
    tag: "Content",
    question: "How do we find the exact keyword clusters that drive revenue for your business?",
    value:
      "We build SERP-based keyword clusters mapped to your pages so you target the terms that actually drive revenue, not vanity search volume.",
    steps: [
      "Build a SERP-based keyword cluster from your target term",
      "Identify head terms, supporting terms, and long-tail variations",
      "Map clusters to existing pages: fill gaps, consolidate cannibalisation",
      "Produce a content calendar ranked by search volume and competition",
      "Optional: we write the cluster hub pages for you",
    ],
  },
  {
    n: 11,
    slug: "ecommerce-seo",
    group: "Local & E-commerce",
    tag: "E-commerce",
    question: "How do we optimise an e-commerce website to rank in Google Shopping and AI search?",
    value:
      "We validate product and category schema, check AI image compliance, and map the schema gaps that keep you out of Google Shopping and AI shopping answers.",
    steps: [
      "Audit your storefront for e-commerce SEO",
      "Validate Product schema: price, availability, reviews, shippingDetails, returnPolicy",
      "Check AI-generated product image compliance (IPTC TrainedAlgorithmicMedia)",
      "Audit category pages for E-E-A-T and thin content issues",
      "Map competitor schema gaps and deliver JSON-LD fixes per product type",
    ],
  },
  {
    n: 12,
    slug: "international-hreflang",
    group: "Core & Technical SEO",
    tag: "International",
    question: "How do we fix hreflang errors stopping your global site from ranking in each country?",
    value:
      "We find and fix the hreflang errors that quietly stop your global pages from ranking in the right country and language, and verify the fix after deployment.",
    steps: [
      "Audit all language and country variants for hreflang errors",
      "Detect: missing return tags, incorrect language codes, self-referencing errors",
      "Flag machine-translation quality issues per January 2025 QRG update",
      "Generate a corrected hreflang sitemap or inline tag implementation",
      "Verify live implementation post-deployment with a re-audit",
    ],
  },
  {
    n: 13,
    slug: "seo-monitoring",
    group: "Monitoring, Strategy & Reporting",
    tag: "Monitoring",
    question: "How do we monitor your SEO every week so you catch problems before they hurt traffic?",
    value:
      "We baseline your site, then run weekly drift checks and monthly GEO comparisons so regressions are caught and fixed before they cost you traffic.",
    steps: [
      "Capture a baseline of your current site state on Day 1 in SQLite",
      "Weekly drift checks detect any changes or regressions",
      "Monthly comparisons track GEO score and AI citation frequency over time",
      "You receive a monthly health-score email with trend data",
      "We flag and fix critical regressions within 24 hours",
    ],
  },
  {
    n: 14,
    slug: "competitor-analysis",
    group: "Monitoring, Strategy & Reporting",
    tag: "Strategy",
    question: "How do we reverse-engineer what your competitors are doing to outrank you?",
    value:
      "We score you against up to three competitors across every dimension and hand you a gap-closing plan ranked by impact and difficulty.",
    steps: [
      "Provide your URL and up to 3 competitor URLs",
      "Side-by-side scoring: technical, content, schema, backlinks, GEO",
      "Identify keyword and content gaps you can exploit immediately",
      "Map their backlink sources: find shared opportunities you have not targeted",
      "Deliver a gap-closing action plan ranked by impact and difficulty",
    ],
  },
  {
    n: 15,
    slug: "sitemap-indexation",
    group: "Core & Technical SEO",
    tag: "Technical SEO",
    question: "How do we fix sitemap errors that stop Google from indexing your pages?",
    value:
      "We diagnose the indexation blockers hiding in your sitemap and deliver a clean, production-ready XML sitemap that Google can fully crawl and index.",
    steps: [
      "Analyse your current sitemap state",
      "Check: non-canonical URLs, noindex pages, blocked resources, oversized files",
      "Generate a clean, production-ready XML sitemap with industry-standard structure",
      "Submit to Google Search Console and verify indexation status",
      "Re-check coverage after Google recrawls to confirm pages are indexed",
    ],
  },
  {
    n: 16,
    slug: "image-optimisation",
    group: "Core & Technical SEO",
    tag: "Technical SEO",
    question: "How do we optimise images to improve page speed and Google Image search rankings?",
    value:
      "We find the oversized images and missing modern formats slowing you down, audit alt text, then give you a compression brief with projected speed gains.",
    steps: [
      "Audit images across your top landing pages",
      "Identify oversized images, missing WebP alternatives, and lazy-load errors",
      "Audit alt text: descriptive, keyword-relevant, not keyword-stuffed",
      "Flag AI-generated product images missing IPTC TrainedAlgorithmicMedia metadata",
      "Deliver a compression + format conversion brief with projected speed gains",
    ],
  },
  {
    n: 17,
    slug: "programmatic-seo",
    group: "Content & Authority",
    tag: "Content",
    question: "How do we scale your content to rank for thousands of keywords automatically?",
    value:
      "We assess template uniqueness and site-reputation-abuse risk, then design a data model and rollout plan to scale programmatic content safely.",
    steps: [
      "Analyse your current template pages",
      "Score content uniqueness: flag template pages too similar to each other",
      "Identify parasite-SEO risk and site reputation abuse exposure",
      "Design a data model and template structure for new programmatic pages",
      "Produce a 90-day programmatic content rollout plan",
    ],
  },
  {
    n: 18,
    slug: "ai-citability",
    group: "GEO & AI Search",
    tag: "GEO / AI Search",
    question: "How do we make your content the passage that AI tools quote as their source?",
    value:
      "We score every passage on your key pages and rewrite the weak ones to the 134–167 word, self-contained citation standard AI engines prefer to quote.",
    steps: [
      "Score citability on your key service and content pages",
      "Score each passage block: length, self-containment, fact density, question alignment",
      "Flag passages that are too long, too vague, or missing a direct answer",
      "Rewrite low-scoring passages to meet 134–167 word citability targets",
      "Re-score to verify improvement before publishing",
    ],
  },
  {
    n: 19,
    slug: "platform-optimisation",
    group: "GEO & AI Search",
    tag: "GEO / AI Search",
    question: "How do we optimise your site differently for ChatGPT vs Google AI Overviews vs Perplexity?",
    value:
      "We optimise your site differently for each AI engine: ChatGPT, Perplexity, Gemini, Google AI Overviews and Claude, and measure the citation change after 30 days.",
    steps: [
      "Audit your domain's readiness across each AI platform",
      "Score platform readiness: ChatGPT, Perplexity, Gemini, Google AI Overviews, Claude",
      "Identify which platforms are referencing you and which are ignoring you",
      "Build platform-specific fixes: entity signals, citation formatting, structural data",
      "Re-audit after 30 days to measure platform citation change",
    ],
  },
  {
    n: 20,
    slug: "llms-txt",
    group: "GEO & AI Search",
    tag: "GEO / AI Search",
    question: "How do we create an llms.txt file that helps AI tools understand your site?",
    value:
      "We generate a production-ready llms.txt that tells AI systems exactly how your site is structured, who is behind it, and what they may use.",
    steps: [
      "Analyse any existing llms.txt on your domain",
      "Map your site structure: key pages, content categories, author information",
      "Generate a production-ready llms.txt with proper formatting and permissions",
      "Deploy to https://yourdomain.com/llms.txt",
      "Verify AI crawlers can access and parse the file correctly",
    ],
  },
  {
    n: 21,
    slug: "audit-reports",
    group: "Monitoring, Strategy & Reporting",
    tag: "Reporting",
    question: "How do we produce professional audit reports you can hand directly to your clients or board?",
    value:
      "We turn a full audit into a branded, client-ready PDF: executive summary, 0–100 score breakdown, charts and action plan, delivered within 24–48 hours.",
    steps: [
      "Run the full audit suite across your site",
      "Generate branded PDF report outputs",
      "Report includes: executive summary, 0–100 score breakdown, charts, action plan",
      "Customise cover page with your company logo and branding",
      "Deliver to client or board within 24–48 hours, ready to present",
    ],
  },
  {
    n: 22,
    slug: "web-to-app-strategy",
    group: "Monitoring, Strategy & Reporting",
    tag: "Strategy",
    question: "Should your website become a native mobile app, and what would it cost?",
    value:
      "We assess whether your website should become a native app, classify the build type, and deliver a costed recommendation with clear reasoning either way.",
    steps: [
      "Share your website URL",
      "We analyse business type, user behaviour, and revenue model",
      "Classify: Type A (service), B (content), C (member), or D (operational)",
      "Produce a client-ready strategy document: build recommendation + reasoning",
      "If yes: deliver a complete developer-ready app build specification",
    ],
  },
  {
    n: 23,
    slug: "geo-drift-protection",
    group: "Monitoring, Strategy & Reporting",
    tag: "GEO Drift Protection",
    question: "How does GEO Drift Protection keep your AI visibility from decaying after each model update?",
    value:
      "AI answer engines: Perplexity, ChatGPT, Google AI Overviews, update their crawler rules and citation weighting every 4–6 weeks. What earns you an AI citation today may not next month. GEO Drift Protection runs a monthly simulation of your AI visibility score, flags any algorithmic drift, and updates your llms.txt, schema, and citability blocks to stay ahead of each model update. This is not a traditional SEO retainer. It is continuous algorithmic adaptation.",
    steps: [
      "Month 1: baseline your AI visibility score and capture current citability state",
      "Each month: re-run the full audit and compare to baseline for drift",
      "Flag algorithmic drift the moment a model update changes your citation weighting",
      "Update llms.txt, schema and citability blocks to stay ahead of each model update",
      "Deliver a monthly drift report: visibility-score trend, what changed, and why",
    ],
  },
  {
    n: 24,
    slug: "seo-strategy-plan",
    group: "Monitoring, Strategy & Reporting",
    tag: "Strategy",
    question: "How do we build a 90-day SEO strategy tailored to your industry and business model?",
    value:
      "We build a 90-day, industry-specific roadmap aligned to your revenue keywords: technical foundations first, then content, then authority.",
    steps: [
      "Define your business type: SaaS, local, ecommerce, publisher, or agency",
      "Generate a type-specific strategic plan for your business type",
      "Align strategy to your top 5 revenue-generating keywords and pages",
      "Produce a 90-day roadmap: Weeks 1–4 (technical), 5–8 (content), 9–12 (authority)",
      "Optional: we execute the plan as an ongoing retainer",
    ],
  },
];
