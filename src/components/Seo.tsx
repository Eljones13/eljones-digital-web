import { Head } from "vite-react-ssg";
import { SITE } from "../data/site";

export interface SeoProps {
  title: string;
  description: string;
  /** Route path, e.g. "/services". Use "/" for home. */
  path: string;
  image?: string;
  type?: "website" | "article" | "profile";
  /** When true, emit a noindex robots tag (e.g. the 404 page). */
  noindex?: boolean;
  /** JSON-LD objects baked into the static HTML. */
  jsonLd?: Record<string, unknown>[];
}

function canonical(path: string): string {
  if (path === "/") return `${SITE.url}/`;
  return SITE.url + path;
}

/** Renders one JSON-LD block directly into the prerendered HTML body. */
function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Baked into static HTML at build time so non-JS AI/SEO crawlers read it.
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

export function Seo({
  title,
  description,
  path,
  image = "/og-image.png",
  type = "website",
  noindex = false,
  jsonLd = [],
}: SeoProps) {
  const url = canonical(path);
  const img = image.startsWith("http") ? image : SITE.url + image;
  const fullTitle = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta
          name="robots"
          content={
            noindex
              ? "noindex, follow"
              : "index, follow, max-image-preview:large, max-snippet:-1"
          }
        />
        <meta property="og:site_name" content={SITE.name} />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:type" content={type} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={img} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={img} />
      </Head>
      {jsonLd.map((data, i) => (
        <JsonLd key={i} data={data} />
      ))}
    </>
  );
}
