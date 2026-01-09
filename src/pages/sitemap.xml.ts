import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

function formatUrl(baseUrl: string, path: string = "") {
  const cleanBase = baseUrl.replace(/\/$/, "");
  const cleanPath = path.replace(/^\//, "");
  return cleanPath ? `${cleanBase}/${cleanPath}` : cleanBase;
}

async function generateSitemapXml(baseUrl: string) {
  const posts = await getCollection("blog");

  // Static pages with SEO-optimized priorities
  // Note: lastmod omitted for static pages (better than inaccurate dates)
  const staticPages = [
    { path: "", changefreq: "weekly", priority: 1.0 }, // Homepage - highest priority
    { path: "projects", changefreq: "weekly", priority: 0.9 }, // Portfolio work
    { path: "blog", changefreq: "weekly", priority: 0.8 }, // Blog listing
    { path: "about", changefreq: "monthly", priority: 0.7 }, // About page
    { path: "contact", changefreq: "monthly", priority: 0.6 } // Contact page
  ];

  // Sort blog posts by date (newest first) for sitemap
  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );

  const staticPagesXml = staticPages
    .map(
      (page) => `  <url>
    <loc>${formatUrl(baseUrl, page.path)}</loc>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
    )
    .join("\n");

  const blogPostsXml = sortedPosts
    .map((post) => {
      // Use updatedDate if available, otherwise pubDate
      const lastmod = post.data.updatedDate || post.data.pubDate;
      return `  <url>
    <loc>${formatUrl(baseUrl, `blog/${post.slug}`)}</loc>
    <lastmod>${lastmod.toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticPagesXml}
${blogPostsXml}
</urlset>`;
}

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site?.toString() || "http://localhost:4321";

  try {
    const sitemap = await generateSitemapXml(baseUrl);

    return new Response(sitemap, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=86400" // Cache for 24 hours
      }
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new Response("Error generating sitemap", { status: 500 });
  }
};
