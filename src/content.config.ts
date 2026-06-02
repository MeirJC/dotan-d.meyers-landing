import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    /** Alt text for hero image (accessibility) */
    heroImageAlt: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    /** Mark as draft to exclude from production builds */
    draft: z.boolean().default(false),
    /** Featured articles appear prominently */
    featured: z.boolean().default(false),
    /** Article author */
    author: z.string().default("דותן מאיר"),
    /** Related article slugs */
    relatedPosts: z.array(z.string()).optional()
  })
});

export const collections = { blog };
