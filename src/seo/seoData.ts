/**
 * D.Meyer's SEO Configuration
 * Updated: January 2026
 * Implements modern SEO best practices including:
 * - Enhanced structured data (Schema.org)
 * - OpenGraph and Twitter Card optimization
 * - Proper canonical URL handling
 * - Language alternates for multilingual support
 */

// ============================================
// Type Definitions
// ============================================

interface OpenGraphBasic {
  title: string;
  type: "website" | "article" | "profile" | "product";
  image: string;
  url?: string;
}

interface OpenGraphOptional {
  description?: string;
  siteName?: string;
  locale?: string;
  localeAlternate?: string[];
  audio?: string;
  video?: string;
  determiner?: "a" | "an" | "the" | "auto" | "";
}

interface OpenGraphImage {
  url?: string;
  secureUrl?: string;
  type?: "image/jpeg" | "image/png" | "image/webp" | "image/gif";
  width?: number;
  height?: number;
  alt: string;
}

interface OpenGraphArticle {
  publishedTime?: string;
  modifiedTime?: string;
  expirationTime?: string;
  authors?: string[];
  section?: string;
  tags?: string[];
}

interface OpenGraph {
  basic: OpenGraphBasic;
  optional?: OpenGraphOptional;
  image?: OpenGraphImage;
  article?: OpenGraphArticle;
}

type TwitterCardType = "summary" | "summary_large_image" | "app" | "player";

interface Twitter {
  card?: TwitterCardType;
  site?: string;
  creator?: string;
  title?: string;
  description?: string;
  image?: string;
  imageAlt?: string;
}

interface LanguageAlternate {
  hrefLang: string;
  href: string;
}

interface ExtendMeta {
  name?: string;
  property?: string;
  content: string;
  httpEquiv?: string;
}

interface ExtendLink {
  rel: string;
  href: string;
  hrefLang?: string;
  type?: string;
  crossorigin?: "" | "anonymous" | "use-credentials";
  prefetch?: boolean;
}

// ============================================
// Site Configuration
// ============================================

export const siteConfig = {
  name: "D.Meyer's",
  nameHebrew: "דותן מאיר",
  url: "https://www.dmeyers.pro",
  locale: "he_IL",
  language: "he",
  themeColor: "#1a365d", // Primary blue
  author: "דותן מאיר",
  phone: "052-427-0479",
  phoneInternational: "+972-52-427-0479",
  email: "d.meyers.cons@gmail.com",
  foundingDate: "2023",
  socialProfiles: {
    facebook: "https://www.facebook.com/dmeyers",
    instagram: "https://www.instagram.com/dmeyers.pro"
  }
};

// ============================================
// Default SEO Data
// ============================================

export const seoData = {
  // Primary meta data
  title: "D.Meyer's - יועץ איטום מוסמך ומומחה לבדק בית | דותן מאיר",
  titleTemplate: "%s | D.Meyer's",
  titleDefault: "D.Meyer's - יועץ איטום מוסמך ומומחה לבדק בית | דותן מאיר",
  description:
    "דותן מאיר - יועץ איטום מוסמך ומומחה בבדק בית עם ניסיון של מעל 23 שנים. שירותי ייעוץ איטום מקצועי, בדיקות מבנה ופתרונות איטום מתקדמים לפרויקטים ציבוריים ופרטיים",
  charset: "UTF-8",

  // Robots directives
  noindex: false,
  nofollow: false,

  // Language configuration
  languageAlternates: [
    { hrefLang: "he", href: "https://www.dmeyers.pro" },
    { hrefLang: "x-default", href: "https://www.dmeyers.pro" }
  ] as LanguageAlternate[],

  // OpenGraph defaults
  openGraph: {
    basic: {
      title: "D.Meyer's - יועץ איטום מוסמך ומומחה לבדק בית",
      type: "website" as const,
      image: "https://www.dmeyers.pro/dmeyers-og.jpg",
      url: "https://www.dmeyers.pro"
    },
    optional: {
      description:
        "דותן מאיר - יועץ איטום מוסמך ומומחה בבדק בית. שירותי ייעוץ איטום מקצועי, בדיקות מבנה ופתרונות איטום מתקדמים",
      siteName: "D.Meyer's",
      locale: "he_IL"
    },
    image: {
      url: "https://www.dmeyers.pro/dmeyers-og.jpg",
      secureUrl: "https://www.dmeyers.pro/dmeyers-og.jpg",
      type: "image/jpeg" as const,
      width: 1200,
      height: 630,
      alt: "D.Meyer's - דותן מאיר יועץ איטום ובדק בית"
    }
  } as OpenGraph,

  // Twitter Card defaults
  twitter: {
    card: "summary_large_image" as TwitterCardType,
    site: "@dmeyers",
    creator: "@dmeyers",
    title: "D.Meyer's - יועץ איטום מוסמך ומומחה לבדק בית",
    description:
      "דותן מאיר - יועץ איטום מוסמך ומומחה בבדק בית. שירותי ייעוץ איטום מקצועי ופתרונות מתקדמים",
    image: "https://www.dmeyers.pro/dmeyers-og.jpg",
    imageAlt: "D.Meyer's - דותן מאיר יועץ איטום ובדק בית"
  } as Twitter,

  // Additional meta tags
  additionalMetaTags: [
    { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
    { name: "theme-color", content: "#1a365d" },
    { name: "author", content: "דותן מאיר - D.Meyer's" },
    {
      name: "robots",
      content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    },
    {
      name: "googlebot",
      content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    },
    { name: "bingbot", content: "index, follow" },
    { name: "format-detection", content: "telephone=no" },
    { name: "apple-mobile-web-app-capable", content: "yes" },
    { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
    { name: "mobile-web-app-capable", content: "yes" },
    { name: "geo.region", content: "IL" },
    { name: "geo.placename", content: "Israel" },
    { name: "content-language", content: "he" }
  ] as ExtendMeta[],

  // Additional link tags
  additionalLinkTags: [
    { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    { rel: "manifest", href: "/manifest.json" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" as const },
    { rel: "dns-prefetch", href: "https://www.googletagmanager.com" }
  ] as ExtendLink[]
};

// ============================================
// Structured Data Schemas
// ============================================

/**
 * Organization Schema - Used site-wide (internal)
 */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.name,
  alternateName: siteConfig.nameHebrew,
  url: siteConfig.url,
  logo: {
    "@type": "ImageObject",
    "@id": `${siteConfig.url}/#logo`,
    url: `${siteConfig.url}/dmeyers-og.jpg`,
    width: 1200,
    height: 630,
    caption: "D.Meyer's Logo"
  },
  image: `${siteConfig.url}/dmeyers-og.jpg`,
  email: siteConfig.email,
  telephone: siteConfig.phoneInternational,
  foundingDate: siteConfig.foundingDate,
  founder: {
    "@type": "Person",
    name: siteConfig.nameHebrew,
    jobTitle: "יועץ איטום ובדק בית",
    url: `${siteConfig.url}/about`
  },
  sameAs: Object.values(siteConfig.socialProfiles),
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phoneInternational,
    contactType: "customer service",
    email: siteConfig.email,
    areaServed: "IL",
    availableLanguage: ["Hebrew", "English"]
  }
};

/**
 * WebSite Schema - Used on homepage (internal)
 */
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: seoData.description,
  publisher: {
    "@id": `${siteConfig.url}/#organization`
  },
  inLanguage: siteConfig.language,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteConfig.url}/blog?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

/**
 * LocalBusiness Schema - Primary business schema (internal)
 */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}/#localbusiness`,
  name: `${siteConfig.nameHebrew} - יועץ איטום ובדק בית`,
  alternateName: siteConfig.name,
  description: seoData.description,
  url: siteConfig.url,
  telephone: siteConfig.phoneInternational,
  email: siteConfig.email,
  image: `${siteConfig.url}/dmeyers-og.jpg`,
  logo: `${siteConfig.url}/dmeyers-og.jpg`,
  priceRange: "₪₪₪",
  currenciesAccepted: "ILS",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IL",
    addressRegion: "ישראל"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "31.5",
    longitude: "34.75"
  },
  areaServed: {
    "@type": "Country",
    name: "Israel"
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "08:00",
      closes: "13:00"
    }
  ],
  founder: {
    "@type": "Person",
    name: siteConfig.nameHebrew,
    jobTitle: "יועץ איטום ובדק בית מוסמך",
    description: "מעל 23 שנות ניסיון בתעשיית הבניה",
    knowsAbout: ["איטום", "בדק בית", "ציפויי רצפות", "הנדסת בניין", "שיקום מבנים"]
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "שירותים מקצועיים",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "דוחות בדק בית למבנים",
          description: "בדיקות מקיפות למבנים כולל דוחות מפורטים והמלצות לתיקון"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "ייעוץ איטום",
          description: "ייעוץ מקצועי לאיטום לפרויקטים ציבוריים ופרטיים"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "ייעוץ לציפויי רצפות",
          description: "ייעוץ מקצועי לציפויי רצפות תעשייתיים ומסחריים"
        }
      }
    ]
  },
  sameAs: Object.values(siteConfig.socialProfiles)
};

// ============================================
// Page-Specific Schema Generators
// ============================================

/**
 * Generate BreadcrumbList schema (internal)
 */
function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

/**
 * Generate Article schema for blog posts (internal)
 */
function generateArticleSchema({
  title,
  description,
  url,
  image,
  publishedTime,
  modifiedTime,
  author = siteConfig.nameHebrew,
  section,
  tags,
  wordCount,
  timeRequired
}: {
  title: string;
  description: string;
  url: string;
  image?: string;
  publishedTime: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  wordCount?: number;
  timeRequired?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: title,
    description: description,
    image: image || `${siteConfig.url}/dmeyers-og.jpg`,
    url: url,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      "@type": "Person",
      name: author,
      url: `${siteConfig.url}/about`
    },
    publisher: {
      "@id": `${siteConfig.url}/#organization`
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    },
    ...(section && { articleSection: section }),
    ...(tags && tags.length > 0 && { keywords: tags.join(", ") }),
    ...(wordCount && { wordCount: wordCount }),
    ...(timeRequired && { timeRequired: timeRequired }),
    inLanguage: siteConfig.language
  };
}

/**
 * Generate WebPage schema (internal)
 */
function generateWebPageSchema({
  title,
  description,
  url,
  type = "WebPage"
}: {
  title: string;
  description: string;
  url: string;
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "FAQPage";
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${url}#webpage`,
    url: url,
    name: title,
    description: description,
    isPartOf: {
      "@id": `${siteConfig.url}/#website`
    },
    about: {
      "@id": `${siteConfig.url}/#organization`
    },
    inLanguage: siteConfig.language
  };
}

// ============================================
// SEO Data Generator for Pages
// ============================================

interface GenerateSeoDataParams {
  title?: string;
  description?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  openGraph?: Partial<OpenGraph>;
  twitter?: Partial<Twitter>;
  article?: OpenGraphArticle;
}

export function generateSeoData({
  title,
  description,
  canonical,
  noindex = false,
  nofollow = false,
  openGraph,
  twitter,
  article
}: GenerateSeoDataParams) {
  const pageTitle = title ? seoData.titleTemplate.replace("%s", title) : seoData.titleDefault;
  const pageDescription = description || seoData.description;
  const pageUrl = canonical || siteConfig.url;
  const pageImage = openGraph?.basic?.image || seoData.openGraph.basic.image;

  return {
    title: pageTitle,
    titleTemplate: seoData.titleTemplate,
    titleDefault: seoData.titleDefault,
    description: pageDescription,
    canonical: pageUrl,
    noindex,
    nofollow,
    charset: seoData.charset,
    languageAlternates: seoData.languageAlternates,

    openGraph: {
      basic: {
        title: openGraph?.basic?.title || title || seoData.openGraph.basic.title,
        type: openGraph?.basic?.type || (article ? "article" : "website"),
        image: pageImage,
        url: pageUrl
      },
      optional: {
        description: pageDescription,
        siteName: seoData.openGraph.optional?.siteName,
        locale: seoData.openGraph.optional?.locale,
        ...openGraph?.optional
      },
      image: {
        url: pageImage,
        secureUrl: pageImage,
        type: seoData.openGraph.image?.type || "image/jpeg",
        width: seoData.openGraph.image?.width || 1200,
        height: seoData.openGraph.image?.height || 630,
        alt: openGraph?.image?.alt || `${title || seoData.openGraph.basic.title} - D.Meyer's`
      },
      ...(article && { article })
    },

    twitter: {
      card: twitter?.card || seoData.twitter.card,
      site: twitter?.site || seoData.twitter.site,
      creator: twitter?.creator || seoData.twitter.creator,
      title: twitter?.title || title || seoData.twitter.title,
      description: twitter?.description || pageDescription,
      image: twitter?.image || pageImage,
      imageAlt: twitter?.imageAlt || `${title || seoData.twitter.title} - D.Meyer's`
    },

    extend: {
      meta: seoData.additionalMetaTags,
      link: seoData.additionalLinkTags
    }
  };
}

// ============================================
// Combined Schema Generator for Pages
// ============================================

interface PageSchemaParams {
  pageType: "home" | "about" | "contact" | "projects" | "blog" | "article";
  title: string;
  description: string;
  url: string;
  breadcrumbs?: { name: string; url: string }[];
  articleData?: {
    publishedTime: string;
    modifiedTime?: string;
    image?: string;
    section?: string;
    tags?: string[];
    wordCount?: number;
    timeRequired?: string;
  };
}

export function generatePageSchema({
  pageType,
  title,
  description,
  url,
  breadcrumbs,
  articleData
}: PageSchemaParams) {
  const schemas: object[] = [];

  // Always include Organization
  schemas.push(organizationSchema);

  // Add WebSite schema on homepage
  if (pageType === "home") {
    schemas.push(websiteSchema);
    schemas.push(localBusinessSchema);
  }

  // Add page-specific schema
  const webPageType =
    pageType === "about"
      ? "AboutPage"
      : pageType === "contact"
        ? "ContactPage"
        : pageType === "projects" || pageType === "blog"
          ? "CollectionPage"
          : "WebPage";

  if (pageType !== "article") {
    schemas.push(
      generateWebPageSchema({
        title,
        description,
        url,
        type: webPageType as "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage"
      })
    );
  }

  // Add Article schema for blog posts
  if (pageType === "article" && articleData) {
    schemas.push(
      generateArticleSchema({
        title,
        description,
        url,
        publishedTime: articleData.publishedTime,
        modifiedTime: articleData.modifiedTime,
        image: articleData.image,
        section: articleData.section,
        tags: articleData.tags,
        wordCount: articleData.wordCount,
        timeRequired: articleData.timeRequired
      })
    );
  }

  // Add LocalBusiness schema on contact page
  if (pageType === "contact") {
    schemas.push(localBusinessSchema);
  }

  // Add BreadcrumbList if provided
  if (breadcrumbs && breadcrumbs.length > 0) {
    schemas.push(generateBreadcrumbSchema(breadcrumbs));
  }

  return schemas;
}
