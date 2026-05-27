# Changelog

## 2026-05-04

### Added

- Added light, dark, and auto theme support with auto as the default.
- Added shadcn-compatible semantic CSS variables and Tailwind CSS v4 theme mappings.
- Added a persistent header theme selector backed by localStorage and system preference detection.
- Added Markdown and MDX kitchen-sink blog fixture posts to exercise content rendering.

### Fixed

- Strengthened selected theme-toggle contrast in light and dark modes.

## 2026-04-25

### Changed

- Rebuilt the project from a Next.js waiting page into the Astro 5 phase 1 architecture described in `PRD-vavanessa-dev.md`.
- Switched the public site strategy to English-first content with schema support for future French and Chinese translated entries.
- Replaced the default template README with project-specific documentation.

### Added

- Astro configuration for MDX, sitemap, RSS, Tailwind CSS v4, and strict TypeScript checks.
- React intentionally deferred until the interactive demos phase to avoid unnecessary client JavaScript in the static phase 1 build.
- Content collections for blog posts and projects with Zod validation.
- Shared base, post, and project layouts with canonical URLs, Open Graph metadata, Twitter cards, and JSON-LD.
- Routes for home, blog index, post detail, tag archives, projects index, project detail pages, RSS, about, now, uses, and newsletter placeholder.
- Seed content for the first public note, one draft note, and six project pages.
- Local Fontsource fonts and a lightweight bamboo illustration.
- `robots.txt` for open crawling and sitemap discovery.
