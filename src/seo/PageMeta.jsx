import { Helmet } from "react-helmet-async";
import { SITE_ORIGIN } from "../config/site";

function canonicalUrl(path) {
  if (!path || path === "/") return `${SITE_ORIGIN}/`;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_ORIGIN}${p}`;
}

/**
 * Per-route SEO: title, description, canonical, OG/Twitter, keywords.
 * Defaults match ramacharya.me branding.
 */
export default function PageMeta({
  title,
  description,
  path = "/",
  keywords,
  ogImage = `${SITE_ORIGIN}/og-image.png`,
  ogImageAlt = "Ram Acharya — Full Stack Developer portfolio",
  robots = "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
}) {
  const canonical = canonicalUrl(path);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="author" content="Ram Acharya" />
      <meta name="robots" content={robots} />
      <meta name="geo.region" content="IN-GJ" />
      <meta name="geo.placename" content="Vadodara" />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Ram Acharya" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:locale" content="en_IN" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
