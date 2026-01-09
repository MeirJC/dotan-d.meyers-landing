import type { APIRoute } from "astro";

const getRobotsTxt = (baseUrl: string) => {
  // Ensure baseUrl doesn't end with a slash
  const cleanBaseUrl = baseUrl.replace(/\/$/, "");

  // SEO Best Practices:
  // - Allow all crawlers full access
  // - Include sitemap for better discovery
  // - No crawl-delay (can hurt indexing, Google ignores it)
  return `User-agent: *
Allow: /

Sitemap: ${cleanBaseUrl}/sitemap.xml`;
};

export const GET: APIRoute = ({ site }) => {
  // Use site URL from Astro config if available, otherwise use localhost for development
  const baseUrl = site?.toString() || "http://localhost:4321";

  return new Response(getRobotsTxt(baseUrl), {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=3600" // Cache for 1 hour
    }
  });
};
