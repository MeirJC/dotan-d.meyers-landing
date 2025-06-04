// Define interfaces for SEO data types
interface OpenGraphBasic {
  title?: string;
  type?: string;
  image?: string;
  url?: string;
  description?: string;
  siteName?: string;
  locale?: string;
}

interface OpenGraphOptional {
  audio?: string;
  determiner?: string;
  video?: string;
}

interface OpenGraphImage {
  alt?: string;
  height?: number;
  width?: number;
  secureUrl?: string;
  type?: string;
}

interface OpenGraphArticle {
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
  section?: string;
}

interface OpenGraph {
  basic?: OpenGraphBasic;
  optional?: OpenGraphOptional;
  image?: OpenGraphImage;
  article?: OpenGraphArticle;
}

// Define Twitter card type
type TwitterCardType = "summary" | "summary_large_image" | "app" | "player";

interface Twitter {
  handle?: string;
  site?: string;
  creator?: string;
  card?: TwitterCardType;
  image?: string;
  title?: string;
  description?: string;
}

interface StructuredData {
  [key: string]: any;
}

interface SeoDataParams {
  title?: string;
  description?: string;
  canonical?: string;
  openGraph?: OpenGraph;
  twitter?: Twitter;
  structuredData?: StructuredData;
  noindex?: boolean;
  nofollow?: boolean;
}

export const seoData = {
  // Basic SEO
  title: "D.Meyer's - פתרונות מתקדמים לתעשיית הבניה | דותן מאיר",
  description:
    "פתרונות מקצועיים לתעשיית הבניה בהובלת דותן מאיר: ייעוץ איטום מקצועי, ציפויי רצפה תעשייתיים, חיפויי גרניט ושיש, נגרות מותאמת אישית למגזר המוסדי וחיפויי קירות מתקדמים",
  canonical: "https://www.dmeyers.pro",

  // Language and localization
  language: "he",
  languageAlternates: [
    { hrefLang: "he", href: "https://www.dmeyers.pro" },
    { hrefLang: "en", href: "https://www.dmeyers.pro/en" }
  ],

  // Robots directives
  noindex: false,
  nofollow: false,

  // OpenGraph data for social media sharing
  openGraph: {
    basic: {
      title: "D.Meyer's - פתרונות מתקדמים לתעשיית הבניה | דותן מאיר",
      type: "website",
      image: "/dmeyers-og.jpg",
      url: "https://www.dmeyers.pro",
      description:
        "מובילים בפתרונות מקצועיים לתעשיית הבניה: ייעוץ איטום מקצועי, ציפויי רצפה, חיפויי גרניט ונגרות מוסדית. בהובלת דותן מאיר - מומחה לפתרונות איטום מתקדמים",
      siteName: "D.Meyer's",
      locale: "he_IL"
    },
    optional: {
      // Optional OpenGraph properties
      audio: "",
      determiner: "",
      video: ""
    },
    image: {
      // Image-specific properties
      alt: "D.Meyer's - פתרונות מתקדמים לתעשיית הבניה",
      height: 630,
      width: 1200,
      secureUrl: "https://www.dmeyers.pro/dmeyers-og.jpg",
      type: "image/jpeg"
    },
    article: {
      // Article-specific properties
      publishedTime: "",
      modifiedTime: "",
      authors: ["https://www.dmeyers.pro/about"],
      tags: [
        "דותן מאיר",
        "ייעוץ איטום",
        "חומרי איטום",
        "שיש למטבחים",
        "נגרות אומן",
        "חיפויי קירות",
        "אבן לחיפויי קירות",
        "מומחה לאיטום",
        "איטום",
        "ציפויי רצפה",
        "גרניט פורצלן",
        "נגרות מוסדית",
        "פתרונות בנייה",
        "די מאיירס",
        "תעשיית הבניה"
      ],
      section: "פתרונות בנייה"
    }
  },

  // Twitter Card data
  twitter: {
    handle: "@dmeyers",
    site: "@dmeyers",
    creator: "@dmeyers",
    card: "summary_large_image" as TwitterCardType,
    image: "/dmeyers-og.jpg",
    title: "D.Meyer's - פתרונות מתקדמים לתעשיית הבניה | דותן מאיר",
    description:
      "מובילים בפתרונות מקצועיים לתעשיית הבניה: ייעוץ איטום מקצועי, ציפויי רצפה, חיפויי גרניט ונגרות מוסדית. בהובלת דותן מאיר - מומחה לפתרונות איטום מתקדמים"
  },

  // Additional meta tags
  additionalMetaTags: [
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "theme-color", content: "#111827" },
    {
      name: "keywords",
      content:
        "דותן מאיר, ייעוץ איטום, חומרי איטום, שיש למטבחים, נגרות אומן, חיפויי קירות, אבן לחיפויי קירות, מומחה לאיטום, איטום, ציפויי רצפה, גרניט פורצלן, נגרות מוסדית, פתרונות בנייה, די מאיירס, תעשיית הבניה"
    },
    { name: "author", content: "דותן מאיר - D.Meyer's" },
    { name: "googlebot", content: "index, follow" },
    { name: "format-detection", content: "telephone=no" },
    { property: "og:locale", content: "he_IL" },
    { property: "og:site_name", content: "D.Meyer's" }
  ],

  // Additional link tags
  additionalLinkTags: [
    { rel: "icon", href: "/favicon.svg" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }
  ],

  // Structured data (JSON-LD)
  structuredData: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "דותן מאיר - יועץ איטום ובדק בית",
    alternateName: "D.Meyer's",
    image: "https://www.dmeyers.pro/dmeyers-og.jpg",
    description:
      "פתרונות מקצועיים לתעשיית הבניה בהובלת דותן מאיר: ייעוץ איטום מקצועי, בדק בית, ציפויי רצפה תעשייתיים, חיפויי גרניט ושיש וחיפויי קירות מתקדמים",
    url: "https://www.dmeyers.pro",
    telephone: "052-427-0479",
    email: "d.meyers.cons@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IL"
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
    priceRange: "₪₪₪",
    areaServed: "IL",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "שירותים מקצועיים",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "דוחות בדק בית למבנים",
            description: "בדיקות מקצועיות למבנים כולל דוחות מפורטים"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "יעוצי איטום",
            description: "ייעוץ מקצועי לאיטום לפרויקטים ציבוריים ופרטיים"
          }
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "יעוץ לציפויי רצפות",
            description: "ייעוץ מקצועי לציפויי רצפות לפרוייקטים שונים"
          }
        }
      ]
    },
    founder: {
      "@type": "Person",
      name: "דותן מאיר",
      jobTitle: "יועץ איטום ובדק בית",
      description:
        "דותן מאיר - יועץ איטום מוסמך ומומחה בבדק בית עם ניסיון של מעל 23 שנים בתעשיית הבניה",
      knowsAbout: ["איטום", "בדק בית", "ציפויי רצפות", "הנדסת בניין", "בטיחות בבנייה"]
    },
    sameAs: ["https://www.facebook.com/dmeyers", "https://www.instagram.com/dmeyers.pro"]
  },

  // Default values for dynamic pages
  defaults: {
    // These values will be used as fallbacks for dynamic pages
    titleTemplate: "%s | D.Meyer's",
    defaultTitle: "D.Meyer's - פתרונות מתקדמים לתעשיית הבניה | דותן מאיר",
    defaultDescription:
      "פתרונות מקצועיים לתעשיית הבניה בהובלת דותן מאיר: ייעוץ איטום מקצועי, בדק בית, ציפויי רצפה תעשייתיים, חיפויי גרניט ושיש וחיפויי קירות מתקדמים",
    defaultImage: "/dmeyers-og.jpg"
  }
};

// Helper function to generate SEO data for specific pages
export function generateSeoData({
  title,
  description,
  canonical,
  openGraph,
  twitter,
  structuredData,
  noindex = false,
  nofollow = false
}: SeoDataParams) {
  return {
    ...seoData,
    title: title
      ? seoData.defaults.titleTemplate.replace("%s", title)
      : seoData.defaults.defaultTitle,
    description: description || seoData.defaults.defaultDescription,
    canonical: canonical || seoData.canonical,
    noindex,
    nofollow,
    openGraph: {
      ...seoData.openGraph,
      ...openGraph,
      basic: {
        ...seoData.openGraph.basic,
        ...(openGraph?.basic || {}),
        title: title || seoData.defaults.defaultTitle,
        description: description || seoData.defaults.defaultDescription,
        image: openGraph?.basic?.image || seoData.defaults.defaultImage
      }
    },
    twitter: {
      ...seoData.twitter,
      ...twitter,
      title: title || seoData.defaults.defaultTitle,
      description: description || seoData.defaults.defaultDescription,
      image: twitter?.image || seoData.defaults.defaultImage
    },
    structuredData: structuredData || seoData.structuredData
  };
}
