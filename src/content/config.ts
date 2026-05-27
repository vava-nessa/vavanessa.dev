import { defineCollection, z } from "astro:content";

/**
 * @file Content collection schemas for vavanessa.dev.
 * @description
 * 📖 Centralizes every frontmatter contract used by Astro content collections.
 * Posts and projects are validated at build time so drafts, project pages, RSS,
 * and SEO metadata all consume the same typed source of truth. The site ships in
 * English first, while `fr` and `zh` remain available for future translated
 * entries without forcing multilingual routing during phase 1.
 *
 * @functions
 * - posts → Validates article frontmatter for the blog and RSS feed.
 * - projects → Validates project frontmatter for index and detail pages.
 * @exports collections
 */

const languageSchema = z.enum(["en", "fr", "zh"]).default("en");

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    tags: z.array(z.string().min(1)).default([]),
    ogImage: z.string().optional(),
    draft: z.boolean().default(false),
    relatedProject: z.string().optional(),
    lang: languageSchema
  })
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string().min(1),
    tagline: z.string().min(1),
    status: z.enum(["active", "wip", "archived", "idea"]),
    stack: z.array(z.string().min(1)).default([]),
    repo: z.string().url().optional(),
    demo: z.string().url().optional(),
    npmPackage: z.string().optional(),
    iosAppId: z.string().optional(),
    featured: z.boolean().default(false),
    order: z.number().int().default(999),
    screenshots: z.array(z.string()).optional()
  })
});

export const collections = { posts, projects };
