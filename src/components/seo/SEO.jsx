import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { SEO_CONFIG } from "../../config/seo.config";

const isAbsoluteUrl = (value = "") => /^https?:\/\//i.test(value);

const normalizePath = (path = "/") => {
  if (!path || path === "/") {
    return "/";
  }

  const withLeadingSlash = path.startsWith("/") ? path : `/${path}`;
  const withoutTrailingSlash = withLeadingSlash.replace(/\/+$/, "");

  return withoutTrailingSlash || "/";
};

const toAbsoluteUrl = (pathOrUrl) => {
  if (!pathOrUrl) {
    return `${SEO_CONFIG.siteUrl}${SEO_CONFIG.defaultImage}`;
  }

  if (isAbsoluteUrl(pathOrUrl)) {
    return pathOrUrl;
  }

  const normalizedPath = normalizePath(pathOrUrl);

  return normalizedPath === "/"
    ? `${SEO_CONFIG.siteUrl}/`
    : `${SEO_CONFIG.siteUrl}${normalizedPath}`;
};

const getCanonicalUrl = ({ pathname, canonicalPath, canonicalUrl }) => {
  if (canonicalUrl) {
    return canonicalUrl;
  }

  const targetPath = canonicalPath ?? pathname;
  const normalizedPath = normalizePath(targetPath);

  return normalizedPath === "/"
    ? `${SEO_CONFIG.siteUrl}/`
    : `${SEO_CONFIG.siteUrl}${normalizedPath}`;
};

const SEO = ({
  title,
  description,
  canonicalPath,
  canonicalUrl,
  ogImage,
  ogType = "website",
  noindex = false,
}) => {
  const { pathname } = useLocation();
  const cleanTitle = (title || "").trim();

  const fullTitle = cleanTitle
    ? cleanTitle.includes(SEO_CONFIG.siteName)
      ? cleanTitle
      : `${cleanTitle} | ${SEO_CONFIG.siteName}`
    : SEO_CONFIG.defaultTitle;

  const metaDescription = description || SEO_CONFIG.defaultDescription;
  const canonical = getCanonicalUrl({ pathname, canonicalPath, canonicalUrl });
  const socialImage = toAbsoluteUrl(ogImage || SEO_CONFIG.defaultImage);
  const favicon = toAbsoluteUrl(SEO_CONFIG.defaultFavicon);
  const robots = noindex
    ? "noindex, nofollow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
    : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

  return (
    <Helmet prioritizeSeoTags>
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="robots" content={robots} />

      <link rel="canonical" href={canonical} />
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href={favicon} />

      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={SEO_CONFIG.siteName} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:image:alt" content={`${SEO_CONFIG.siteName} official preview`} />

      <meta name="twitter:card" content={SEO_CONFIG.twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={socialImage} />
    </Helmet>
  );
};

export default SEO;
