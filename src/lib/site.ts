/**
 * @file Site metadata and shared navigation.
 * @description
 * 📖 Keeps global identity, canonical URL construction, and top-level navigation
 * in one place. Layouts import this module instead of duplicating strings, which
 * avoids inconsistent SEO titles or stale links as the site grows.
 *
 * @functions
 * - createCanonicalUrl → Builds an absolute canonical URL from a route path.
 * @exports site, navigation, createCanonicalUrl
 */

export const site = {
  name: "vavanessa.dev",
  author: "Vanessa Depraute",
  title: "vavanessa.dev",
  description:
    "Vanessa Depraute's dev notebook for open-source projects, build-in-public notes, and practical software essays.",
  url: "https://vavanessa.dev",
  locale: "en_US",
  social: {
    github: "https://github.com/vava",
    twitter: "https://twitter.com/vavanessa_dev"
  }
} as const;

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/projects", label: "Projects" },
  { href: "/now", label: "Now" },
  { href: "/uses", label: "Uses" },
  { href: "/about", label: "About" }
] as const;

export function createCanonicalUrl(pathname: string): string {
  const normalizedPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return new URL(normalizedPath, site.url).toString();
}
