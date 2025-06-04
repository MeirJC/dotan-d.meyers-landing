import type { APIRoute } from "astro";

const getRobotsTxt = (baseUrl: string) => {
  // Ensure baseUrl doesn't end with a slash
  const cleanBaseUrl = baseUrl.replace(/\/$/, "");

  return `# Allow all crawlers
User-agent: *
Allow: /

# Sitemap location
Sitemap: ${cleanBaseUrl}/sitemap.xml

# Crawl-delay for all bots
Crawl-delay: 10`;
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
