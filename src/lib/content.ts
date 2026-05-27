import type { CollectionEntry } from "astro:content";

/**
 * @file Content sorting and filtering helpers.
 * @description
 * 📖 Provides small, typed utilities for recurring content operations. Keeping
 * draft filtering and date sorting here makes page code easier to scan and keeps
 * RSS, blog indexes, and home sections aligned.
 *
 * @functions
 * - filterPublishedPosts → Removes drafts from public listings.
 * - sortPostsByDate → Orders posts newest first.
 * - sortProjectsByOrder → Orders projects by editorial priority.
 * - getUniqueTags → Creates a stable blog tag list.
 * @exports filterPublishedPosts, sortPostsByDate, sortProjectsByOrder, getUniqueTags
 */

export type PostEntry = CollectionEntry<"posts">;
export type ProjectEntry = CollectionEntry<"projects">;

export function filterPublishedPosts(posts: PostEntry[]): PostEntry[] {
  return posts.filter((post) => !post.data.draft);
}

export function sortPostsByDate(posts: PostEntry[]): PostEntry[] {
  return [...posts].sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime()
  );
}

export function sortProjectsByOrder(projects: ProjectEntry[]): ProjectEntry[] {
  return [...projects].sort((a, b) => {
    if (a.data.order === b.data.order) {
      return a.data.name.localeCompare(b.data.name);
    }

    return a.data.order - b.data.order;
  });
}

export function getUniqueTags(posts: PostEntry[]): string[] {
  return Array.from(new Set(posts.flatMap((post) => post.data.tags))).sort((a, b) =>
    a.localeCompare(b)
  );
}
