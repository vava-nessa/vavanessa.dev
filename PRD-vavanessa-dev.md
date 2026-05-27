# PRD : vavanessa.dev

**Auteur** : Vanessa Depraute (Chacha)
**Domaine** : vavanessa.dev
**Date** : Avril 2026
**Statut** : Draft v2

## 1. Vision

`vavanessa.dev` est l'espace personnel de Vanessa Depraute, développeuse full-stack et iOS, pour publier ses projets open source, ses articles et son activité de build in public.

Le site est complémentaire d'un CV pro hébergé ailleurs : le CV est formel et orienté clients/recruteurs, `vavanessa.dev` est éditorial, vivant, et destiné à la communauté dev.

## 2. Objectifs

1. Publier des articles de blog (projets, hot takes, retours d'expérience)
2. Présenter des projets open source avec démos interactives (Kandown, ModelRadar, free-coding-models, Pylz, Out Of Burn, nexTTY)
3. Centraliser l'activité publique : tweets, GitHub, npm, blog
4. Capturer une audience via newsletter (phase ultérieure)
5. Servir de hub pour les futurs lancements produits

### Non-objectifs

- Pas de monétisation directe
- Pas de section freelance / hire-me (vit sur le CV pro)
- Pas de backend custom, pas de DB, pas d'auth

## 3. Audience

- Devs (FR/international) découvrant les outils via Reddit, HN, Twitter, npm
- Communauté indie hacker / build in public
- Futurs utilisateurs des produits
- Visiteurs envoyés depuis le CV pro

Langue par défaut : à définir au build (anglais ou bilingue FR/EN).

## 4. Stack technique

```
Framework         : Astro 5
Contenu           : Content Collections + MD/MDX hybride
Styling           : Tailwind CSS v4
Composants        : Astro components par défaut + React (.tsx) pour interactif
Typage            : TypeScript strict + Zod pour frontmatter
Code highlighting : Shiki
Recherche         : Pagefind
Analytics         : Plausible (à confirmer)
Newsletter        : provider à choisir (Buttondown, ConvertKit, Resend, etc.)
Commentaires      : Giscus (GitHub Discussions)
Hosting           : Cloudflare Pages
DNS               : Cloudflare
CI/CD             : GitHub Actions + auto-deploy
RSS               : @astrojs/rss
Sitemap           : @astrojs/sitemap
Images            : <Image /> Astro
Fonts             : Fontsource ou self-hosted
```

## 5. Direction artistique

Esthétique inspirée de l'art asiatique classique, particulièrement des peintures chinoises anciennes : sobriété, espace négatif, élégance. L'opposé visuel des sites tech génériques.

Principes :
- Layout aéré, beaucoup d'espace blanc (ou crème, papier ancien)
- Typographie soignée, mélange serif élégant et sans-serif lisible
- Palette neutre et naturelle (encres, papiers, terres)
- Touches graphiques discrètes : motifs floraux, branches, nuages stylisés
- Décor en bas de page : illustrations de bambous
- Interactions subtiles, pas d'animations agressives
- Mode clair par défaut, mode sombre à envisager dans une logique cohérente (encre sur papier sombre)

Le détail visuel sera affiné pendant le build. Le PRD fixe l'intention, pas les valeurs précises (couleurs, polices, espacements).

## 6. Architecture du site

### 6.1 Pages principales

| Route | Description |
|---|---|
| `/` | Home : hero, derniers articles, projets phares, activity feed, CTA newsletter |
| `/blog` | Index des articles avec filtres tags |
| `/blog/[slug]` | Article (MD ou MDX) |
| `/blog/tags/[tag]` | Articles filtrés par tag |
| `/projects` | Index des projets |
| `/projects/[slug]` | Page projet (MDX, riche en interactivité React) |
| `/about` | Présentation perso |
| `/now` | Page "Now" (sur quoi je bosse en ce moment) |
| `/uses` | Stack et setup perso |
| `/newsletter` | Inscription + archive (phase ultérieure) |
| `/rss.xml` | Flux RSS |

### 6.2 Structure du repo

```
vavanessa-dev/
├── src/
│   ├── content/
│   │   ├── config.ts                # Schémas Zod
│   │   ├── posts/                   # Articles
│   │   └── projects/                # Fiches projets
│   ├── components/
│   │   ├── ui/                      # Astro components
│   │   ├── interactive/             # React components
│   │   └── mdx/                     # Composants MDX réutilisables
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   ├── PostLayout.astro
│   │   └── ProjectLayout.astro
│   ├── pages/
│   ├── lib/                         # Utilitaires (fetch GitHub, Twitter, etc.)
│   ├── data/                        # JSON committés (tweets cache, etc.)
│   └── styles/
├── public/
│   ├── fonts/
│   ├── og/
│   └── illustrations/               # Bambous, motifs asiatiques, etc.
├── astro.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## 7. Schémas de contenu (Zod)

### Posts (`src/content/posts/`)

```ts
{
  title: string,
  description: string,
  publishedAt: Date,
  updatedAt?: Date,
  tags: string[],
  ogImage?: string,
  draft?: boolean,
  relatedProject?: string,        // slug d'un projet lié
  lang?: 'en' | 'fr'
}
```

### Projects (`src/content/projects/`)

```ts
{
  name: string,
  tagline: string,
  status: 'active' | 'wip' | 'archived' | 'idea',
  stack: string[],
  repo?: string,
  demo?: string,
  npmPackage?: string,
  iosAppId?: string,
  featured: boolean,
  order: number,
  screenshots?: string[]
}
```

## 8. Composants à prévoir

### MDX (Astro)

| Composant | Rôle |
|---|---|
| `<Callout type>` | Encadré (info, warning, tip, hot-take) |
| `<CodeGroup>` | Tabs de code multi-langage |
| `<Figure>` | Image avec caption |
| `<Aside>` | Note de marge |

### Interactifs (React)

| Composant | Rôle | Source data |
|---|---|---|
| `<DemoBox>` | Wrapper pour démo embeddée | Inline ou iframe |
| `<GitHubFeed>` | Activité GitHub récente | Build-time fetch GitHub API |
| `<TwitterFeed>` | Derniers tweets | JSON committé via GitHub Action |
| `<GitHubCard>` | Carte d'un repo | Build-time fetch |
| `<NpmBadge>` | Stats package npm | Build-time fetch |
| `<NewsletterForm>` | Inscription newsletter | API du provider |
| `<ProjectDemo>` | Démo riche d'un projet | À définir par projet |

## 9. Intégrations externes

| Service | Usage | Mode d'intégration |
|---|---|---|
| GitHub API | Activity, stars, repos | Fetch au build |
| Twitter/X | Tweets | GitHub Action quotidienne → JSON committé |
| npm registry | Stats packages | Fetch au build |
| Plausible | Analytics | Script client |
| Giscus | Commentaires | Iframe par article |
| Newsletter provider | Inscriptions | API call client |

## 10. SEO et meta

- Sitemap auto via `@astrojs/sitemap`
- RSS feed `/rss.xml`
- OG images générées par article (via `satori` ou template SVG paramétrable)
- Schema.org : `Person`, `BlogPosting`, `SoftwareApplication`
- Twitter Card meta sur chaque page
- Canonical URLs
- `robots.txt` ouvert
- Cible Lighthouse : 95+ partout

## 11. Liste de tâches actionnables

### Phase 0 : initialisation

1. Créer le repo `vavanessa-dev` sur GitHub (privé ou public selon choix)
2. Initialiser un projet Astro 5 avec template minimal (`npm create astro@latest`)
3. Activer TypeScript en mode strict (`tsconfig.json`)
4. Installer Tailwind CSS v4 et configurer `tailwind.config.ts`
5. Installer l'intégration MDX (`@astrojs/mdx`)
6. Installer `@astrojs/sitemap` et `@astrojs/rss`
7. Configurer ESLint + Prettier (config au choix)
8. Connecter le repo à Cloudflare Pages
9. Configurer le DNS Cloudflare pour pointer `vavanessa.dev` vers Pages
10. Vérifier que le déploiement initial fonctionne sur le domaine

### Phase 1 : structure et content collections

11. Créer l'arborescence `src/content/`, `src/components/`, `src/layouts/`, `src/lib/`, `src/data/`, `src/styles/`
12. Créer `src/content/config.ts` avec les schémas Zod pour `posts` et `projects`
13. Créer le layout `BaseLayout.astro` avec `<head>` SEO complet (meta, OG, Twitter Card, canonical)
14. Créer `PostLayout.astro` pour les articles
15. Créer `ProjectLayout.astro` pour les pages projets
16. Implémenter la page `index.astro` (home) avec sections placeholder
17. Implémenter `pages/blog/index.astro` (liste articles)
18. Implémenter `pages/blog/[...slug].astro` (article unique)
19. Implémenter `pages/blog/tags/[tag].astro` (filtre par tag)
20. Implémenter `pages/projects/index.astro` (liste projets)
21. Implémenter `pages/projects/[...slug].astro` (projet unique)
22. Créer `pages/rss.xml.ts` (flux RSS)
23. Configurer le sitemap dans `astro.config.mjs`
24. Créer les pages statiques `about.astro`, `now.astro`, `uses.astro` avec contenu placeholder

### Phase 2 : design system

25. Définir la palette de couleurs dans `tailwind.config.ts` (tons papier, encres, naturels)
26. Choisir et installer les polices (serif élégant + sans-serif lisible + mono pour code)
27. Configurer les variables Tailwind (typo, espacements, breakpoints)
28. Créer `src/styles/global.css` avec les styles de base (typo, prose pour MD)
29. Configurer `@tailwindcss/typography` pour le rendu MD avec un thème custom
30. Créer le composant `Header.astro` (navigation principale)
31. Créer le composant `Footer.astro` avec les illustrations de bambous
32. Préparer les illustrations SVG (bambous, motifs) dans `public/illustrations/`
33. Configurer Shiki avec un theme cohérent avec l'identité visuelle
34. Tester le rendu responsive sur mobile, tablette, desktop

### Phase 3 : composants MDX

35. Créer `<Callout>` (Astro component, supporte plusieurs types)
36. Créer `<CodeGroup>` (Astro component, tabs)
37. Créer `<Figure>` (Astro component avec `<Image />`)
38. Créer `<Aside>` (Astro component)
39. Configurer `mdx` config pour rendre ces composants disponibles globalement (option : via `MDXComponents` prop, ou import explicite par article)
40. Documenter les composants dans un article de test

### Phase 4 : composants interactifs (React)

41. Activer l'intégration React (`@astrojs/react`)
42. Créer `<DemoBox>` (React component, simple wrapper)
43. Créer `src/lib/github.ts` (helpers fetch GitHub API au build)
44. Créer `<GitHubCard>` avec data fetched au build (Astro server component peut suffire si pas d'interactivité)
45. Créer `src/lib/npm.ts` (helpers fetch npm stats)
46. Créer `<NpmBadge>` avec data fetched au build
47. Créer `<GitHubFeed>` (affiche activité récente sur la home)
48. Hydrater les composants interactifs avec `client:visible` ou `client:load` selon le besoin

### Phase 5 : feed Twitter

49. Créer un workflow GitHub Action `.github/workflows/fetch-tweets.yml` (cron quotidien)
50. Écrire le script de fetch (méthode au choix : API X payante, Nitter, scraper headless, ou export manuel)
51. Le script écrit `src/data/tweets.json` et commit le résultat
52. Créer `<TwitterFeed>` qui lit `src/data/tweets.json` au build
53. Intégrer le feed sur la home et/ou page about

### Phase 6 : contenu seed

54. Écrire 2-3 articles de lancement (suggestion : un sur Kandown, un sur free-coding-models, un hot take au choix)
55. Créer les fiches projets pour Kandown, ModelRadar, free-coding-models, Pylz, Out Of Burn, nexTTY
56. Compléter `/about`, `/now`, `/uses` avec du vrai contenu
57. Préparer les images OG par défaut et les screenshots projets

### Phase 7 : recherche et commentaires

58. Installer et configurer Pagefind (`pagefind` package, ajout au build)
59. Créer un composant de recherche UI (modal ou page dédiée)
60. Configurer Giscus sur le repo GitHub (créer une catégorie Discussions dédiée)
61. Intégrer Giscus dans `PostLayout.astro`

### Phase 8 : SEO et finitions

62. Implémenter la génération automatique d'OG images (via `satori` ou template SVG)
63. Ajouter Schema.org JSON-LD aux pages (`Person`, `BlogPosting`, `SoftwareApplication`)
64. Vérifier les meta Twitter Card sur toutes les pages
65. Créer `public/robots.txt`
66. Auditer Lighthouse sur prod, viser 95+ partout
67. Tester l'accessibilité (contrastes, focus visible, navigation clavier, alt text)

### Phase 9 : analytics

68. Choisir le provider (Plausible, Umami self-hosted, ou autre)
69. Intégrer le script dans `BaseLayout.astro`
70. Configurer les events custom utiles (clics newsletter, downloads, etc.)

### Phase 10 : newsletter (différée)

71. Choisir le provider (Buttondown, ConvertKit, Resend, etc.)
72. Créer la page `/newsletter`
73. Créer `<NewsletterForm>` (React, validation, état succès/erreur)
74. Configurer le double opt-in (RGPD)
75. Préparer un template d'archive pour publier les anciens numéros sur le site

### Phase 11 : nice-to-haves (optionnel)

76. Mode sombre cohérent avec l'esthétique (encre sur papier sombre)
77. Webmentions (réponses Twitter/Mastodon affichées sous les articles)
78. Section `/labs` pour expérimentations
79. Crossposting auto vers dev.to / Hashnode via API
80. Mini-jeux ou expériences interactives en page dédiée

## 12. Métriques de succès

- 6 mois : 12+ articles, 5+ projets en page dédiée, audience newsletter en croissance
- Lighthouse 95+ en permanence
- SEO : top 3 sur "vanessa depraute" et "vavanessa"
- Engagement Giscus régulier
- Plaisir personnel : envie d'écrire sur le site chaque semaine

## 13. Risques et mitigations

| Risque | Mitigation |
|---|---|
| Maintenance feeds (API GitHub/Twitter) | Build statique + cache + fallback graceful |
| Spam Giscus | Modération via GitHub Discussions |
| RGPD newsletter | Double opt-in via le provider |
| Burn out blog | Pas d'objectif de fréquence rigide |
| API X payante | GitHub Action de scraping ou alternative |
| Coût hosting | Cloudflare Pages gratuit |

## 14. Décisions à trancher pendant le build

- [ ] Langue par défaut : EN seul, FR seul, ou bilingue
- [ ] Mode sombre : oui ou non
- [ ] Provider newsletter
- [ ] Provider analytics (Plausible vs alternatives)
- [ ] Stratégie tweets (API officielle, Nitter, scraping headless, export manuel)
- [ ] Polices exactes (à choisir parmi des serif élégants type Cormorant, Playfair, Spectral, et sans-serif type Inter, Geist, IBM Plex Sans)
- [ ] Inclure la double identité (médecin + dev) sur `/about` ou non
- [ ] Repo public ou privé
- [ ] Niveau de richesse des illustrations (SVG custom, banques d'images, illustrations originales)
