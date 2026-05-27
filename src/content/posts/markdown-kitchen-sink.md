---
title: "Markdown kitchen sink"
description: "A published fixture post that exercises headings, lists, code, tables, quotes, links, images, and HTML inside Markdown."
publishedAt: 2026-05-04
tags: ["test", "markdown", "content"]
lang: "en"
---

This post is a fixture for checking the Markdown renderer, the blog layout, and the prose styles. It intentionally uses many markup shapes in one page.

## Headings

### Third-level heading

#### Fourth-level heading

##### Fifth-level heading

###### Sixth-level heading

Paragraph text supports **bold**, _italic_, **_combined emphasis_**, `inline code`, ~~strikethrough~~, and a link to [Astro](https://astro.build/).

## Lists

- Unordered item
- Another unordered item with `code`
  - Nested unordered item
  - Nested item with **strong text**
- Final unordered item

1. Ordered item
2. Ordered item with a nested list
   1. Nested ordered item
   2. Another nested ordered item
3. Ordered item with a long sentence that wraps across lines so spacing and line height are easier to inspect in the final rendered article.

## Task List

- [x] Render checked tasks
- [ ] Render unchecked tasks
- [x] Keep alignment readable

## Quote

> Good fixtures are boring on purpose: they catch layout regressions before real writing does.
>
> This second paragraph checks multi-paragraph blockquote spacing.

## Code

Inline code should look distinct without overwhelming surrounding prose: `const mode = "auto"`.

```ts
type ThemePreference = "light" | "dark" | "auto";

function resolveTheme(preference: ThemePreference, systemPrefersDark: boolean): "light" | "dark" {
  if (preference === "auto") {
    return systemPrefersDark ? "dark" : "light";
  }

  return preference;
}
```

```bash
pnpm build
pnpm preview
```

## Table

| Feature | Markdown shape | Expected result |
| --- | --- | --- |
| Theme | `light`, `dark`, `auto` | Readable contrast |
| Code | Fenced blocks | Horizontal overflow if needed |
| Tables | Pipe table | Borders and cell padding |
| Links | Inline links | Inherit site color |

## Image

![Bamboo illustration](/illustrations/bamboo.svg)

## Definition-Like Content

Term
: This syntax may render as plain paragraph text depending on the Markdown plugins enabled. It stays here as a compatibility check.

## HTML Inside Markdown

<aside>
  This inline HTML block checks that raw HTML survives the Markdown pipeline.
</aside>

<details>
  <summary>Expandable details</summary>
  Details content should inherit the prose spacing and theme tokens.
</details>

## Horizontal Rule

---

Final paragraph after a rule. This checks vertical rhythm near the bottom of an article.
