import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

function formatDate(date: Date) {
  return date.toISOString();
}

function formatUrl(baseUrl: string, path: string = "") {
  const cleanBase = baseUrl.replace(/\/$/, "");
  const cleanPath = path.replace(/^\//, "");
  return cleanPath ? `${cleanBase}/${cleanPath}` : cleanBase;
}

async function generateSitemapXml(baseUrl: string) {
  console.log("Generating sitemap with base URL:", baseUrl);

  // Get all blog posts
  const posts = await getCollection("blog");
  console.log("Found blog posts:", posts.length);

  // Define static pages for better maintainability
  const staticPages = [
    { path: "", changefreq: "daily", priority: 1.0 },
    { path: "about", changefreq: "monthly", priority: 0.6 },
    { path: "blog", changefreq: "weekly", priority: 0.8 },
    { path: "contact", changefreq: "monthly", priority: 0.6 },
    { path: "projects", changefreq: "weekly", priority: 0.8 }
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Static Pages -->
  ${staticPages
    .map(
      (page) => `
  <url>
    <loc>${formatUrl(baseUrl, page.path)}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join("\n")}

  <!-- Blog Posts -->
  ${posts
    .map(
      (post) => `
  <url>
    <loc>${formatUrl(baseUrl, `blog/${post.slug}`)}</loc>
    <lastmod>${formatDate(post.data.pubDate)}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
    )
    .join("\n")}
</urlset>`;

  return xml.trim();
}

export const GET: APIRoute = async ({ site }) => {
  console.log("Site URL from Astro:", site);

  // Use site URL from Astro config if available, otherwise use localhost for development
  const baseUrl = site?.toString() || "http://localhost:4321";
  console.log("Using base URL:", baseUrl);

  try {
    const sitemap = await generateSitemapXml(baseUrl);
    console.log("Generated sitemap successfully");

    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600" // Cache for 1 hour
      }
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new Response("Error generating sitemap", { status: 500 });
  }
};
