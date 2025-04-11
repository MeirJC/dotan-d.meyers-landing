# SEO Management for Dotan

This directory contains the SEO configuration for the Dotan website using [astro-seo](https://github.com/jonasmerlin/astro-seo).

## Overview

The SEO setup consists of:

1. `seoData.ts` - Contains the default SEO data and a helper function to generate page-specific SEO data
2. Example usage in pages

## How to Use

### Basic Usage

In any Astro page, import the SEO component and use it in the `<head>` section:

```astro
---
import { SEO } from "astro-seo";
import { seoData, generateSeoData } from "../seo/seoData";

// Generate page-specific SEO data
const pageSeoData = generateSeoData({
  title: "Page Title",
  description: "Page description for SEO"
  // Add other SEO properties as needed
});
---

<html lang="en">
  <head>
    <SEO
      title={pageSeoData.title}
      description={pageSeoData.description}
      canonical={pageSeoData.canonical}
      noindex={pageSeoData.noindex}
      nofollow={pageSeoData.nofollow}
      openGraph={pageSeoData.openGraph}
      twitter={pageSeoData.twitter}
      extend={{
        meta: seoData.additionalMetaTags,
        link: seoData.additionalLinkTags
      }}
    />
    <script type="application/ld+json" set:html={JSON.stringify(pageSeoData.structuredData)} />
    <!-- Other head elements -->
  </head>
  <body>
    <!-- Page content -->
  </body>
</html>
```

### Available SEO Properties

The `generateSeoData` function accepts the following properties:

- `title` - Page title
- `description` - Page description
- `canonical` - Canonical URL
- `openGraph` - OpenGraph data for social media sharing
- `twitter` - Twitter Card data
- `structuredData` - Structured data (JSON-LD)
- `noindex` - Whether to prevent search engines from indexing the page
- `nofollow` - Whether to prevent search engines from following links on the page

### Default Values

The `seoData` object contains default values for all SEO properties. These values are used as fallbacks when specific properties are not provided in the `generateSeoData` function.

## Customization

To customize the default SEO data, edit the `seoData` object in `seoData.ts`. Make sure to replace placeholder values with your actual site information.

## Example

See `src/pages/example.astro` for a complete example of how to use the SEO component.
