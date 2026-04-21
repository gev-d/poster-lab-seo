# PosterLab — SEO learning lab (plain HTML/CSS/JS)

A small, beginner-friendly website that looks like a creative SaaS product for posters, banners, and thumbnails. It uses **real separate HTML documents** (not a single-page app) so you can study SEO fundamentals before moving to SPAs, React, or Next.js.

## Folder structure

```text
posterlab-seo/
├── index.html
├── youtube-thumbnail.html
├── instagram-story-maker.html
├── pricing.html
├── blog-how-to-make-youtube-thumbnail.html
├── editor.html
├── README.md
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   └── editor.js
└── images/
    └── .gitkeep
```

> **Note:** Visual “previews” use CSS mock frames instead of bitmap images so the project stays lightweight. Add real assets under `images/` anytime.

## Why this is not a SPA

A **single-page application (SPA)** usually loads one HTML shell and swaps content with JavaScript. Crawlers and learning workflows both benefit from seeing **multiple documents** first:

- Each URL can expose a **unique `<title>`** and **meta description** in raw HTML.
- Each URL has its **own heading outline** (`<h1>`–`<h3>`) without client routing complexity.
- Internal links are normal `<a href="...">` anchors—easy to trace in DevTools and static hosting.

This project mirrors how many marketing sites still ship: **multi-page**, semantic HTML, and predictable navigation.

## Why separate pages matter for SEO learning

Separate pages help you practice patterns you will use at scale later:

- **Intent targeting:** homepage vs. use-case landing pages vs. pricing vs. editorial articles each answer different questions.
- **Crawlable paths:** search engines discover pages by following links; real HTML links (with useful anchor text) reinforce site structure.
- **On-page basics:** one clear `<h1>` per document, meaningful section headings, and non-duplicated titles/descriptions.

## What each page is meant to teach

| Page | Primary learning goal |
| --- | --- |
| `index.html` | Brand positioning, feature overview, internal links to deeper pages, homepage CTAs. |
| `youtube-thumbnail.html` | Intent-specific landing copy, FAQ content, editorial and commercial cross-links. |
| `instagram-story-maker.html` | Same pattern, different keyword theme—practice rewriting for another use case. |
| `pricing.html` | Commercial comparison layout, scannable tiers, `<table>` for feature comparison. |
| `blog-how-to-make-youtube-thumbnail.html` | Article structure, `<article>` semantics, checklist formatting, contextual internal links. |
| `editor.html` | App-like utility page with interactive controls while remaining a normal crawlable document. |

## Run locally

Because pages link to each other with **relative paths** (`css/style.css`, `js/main.js`), you can:

1. **VS Code Live Server:** open the project folder → right-click `index.html` → “Open with Live Server”.
2. **Python:** from the project folder run `python3 -m http.server 8000` then visit `http://localhost:8000/`.

Opening `index.html` directly as a `file://` URL can work for light testing, but a simple local server avoids browser quirks with modules and behaves closer to production.

## Scripts

- `js/main.js` — mobile navigation toggle, active nav state, footer year.
- `js/editor.js` — live preview and reset behavior for `editor.html` only.

---

Built for education: clean defaults, heavy comments in HTML/JS/CSS, and production-ish polish without frameworks.
