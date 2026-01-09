import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { siteConfig } from "../seo/seoData";

export async function GET(context: APIContext) {
  const posts = await getCollection("blog", ({ data }) => {
    // Exclude drafts in production
    return import.meta.env.PROD ? !data.draft : true;
  });

  // Sort by publication date (newest first)
  const sortedPosts = posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  return rss({
    title: `${siteConfig.name} - בלוג מקצועי`,
    description: "מאמרים מקצועיים בנושאי איטום, בדק בית וציפויי רצפות מאת דותן מאיר",
    site: context.site || siteConfig.url,
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      categories: post.data.tags,
      author: post.data.author || siteConfig.author,
      ...(post.data.heroImage && {
        enclosure: {
          url: `${siteConfig.url}${post.data.heroImage}`,
          type: "image/webp",
          length: 0
        }
      })
    })),
    customData: `<language>he</language>
<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
<managingEditor>${siteConfig.email} (${siteConfig.author})</managingEditor>
<webMaster>${siteConfig.email} (${siteConfig.author})</webMaster>`
  });
}
