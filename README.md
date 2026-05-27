# vavanessa.dev

Personal developer site for Vanessa Depraute.

`vavanessa.dev` is the editorial and build-in-public home for open-source projects, practical software notes, and product experiments. It complements the formal CV site: this repo is for writing, demos, project context, RSS, and future launch surfaces.

## Stack

- Astro 5 for static-first pages.
- Content Collections with Markdown and MDX.
- TypeScript strict mode with Zod frontmatter validation.
- Tailwind CSS v4 through the Vite plugin.
- Fontsource for local fonts.
- `@astrojs/rss` for `/rss.xml`.
- `@astrojs/sitemap` for sitemap generation.
- React integration is intentionally deferred until interactive demos begin.

## Content Model

Posts live in `src/content/posts/`.

Projects live in `src/content/projects/`.

Schemas are defined in `src/content/config.ts`. The site is English-first for phase 1 because distribution is expected through GitHub, Twitter/X, Reddit, Hacker News, and dev.to. The `lang` field already accepts `en`, `fr`, and `zh` so selected posts can get French or Chinese translations later without forcing multilingual routing before the writing pipeline exists.

## Routes

- `/` home with latest notes, featured projects, and placeholders for later feeds.
- `/blog` public post index.
- `/blog/[slug]` post detail pages.
- `/blog/tags/[tag]` tag archive pages.
- `/projects` project index.
- `/projects/[slug]` project detail pages.
- `/about`, `/now`, `/uses`, `/newsletter` static editorial pages.
- `/rss.xml` RSS feed.

## Development

Install dependencies:

```bash
pnpm install
```

Run the dev server:

```bash
pnpm dev
```

Build and type-check:

```bash
pnpm build
```

Preview the production build:

```bash
pnpm preview
```

## Project Notes

The current implementation covers PRD phase 1 plus a light visual foundation. The site supports light, dark, and auto theme modes through Tailwind CSS v4 tokens that follow shadcn's CSS-variable naming conventions; auto is the default and follows the user's system preference. Deferred systems include React-powered demos, search, Giscus comments, analytics, newsletter provider integration, GitHub/npm live cards, Twitter/X feed automation, generated OG images, and richer project demos.
