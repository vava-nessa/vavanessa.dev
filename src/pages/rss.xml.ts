import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";
import { filterPublishedPosts, sortPostsByDate } from "@/lib/content";
import { site } from "@/lib/site";

/**
 * @file RSS feed endpoint.
 * @description
 * 📖 Publishes a static RSS feed from the posts collection. Drafts are filtered
 * out so RSS mirrors the public blog index.
 *
 * @functions
 * - GET → Returns the RSS XML response for published posts.
 * @exports GET
 */

export async function GET(context: APIContext) {
  const posts = sortPostsByDate(filterPublishedPosts(await getCollection("posts")));

  return rss({
    title: site.title,
    description: site.description,
    site: context.site ?? site.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishedAt,
      link: `/blog/${post.slug}`
    }))
  });
}
