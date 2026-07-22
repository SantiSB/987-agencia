# Logo assets

These files are **placeholders** that reproduce the `978 / AGENCIA / MARKETING Y
PUBLICIDAD` lockup so the demo looks complete. Replace them with the official
brand assets before shipping.

| File            | Used for                          | Replace with                          |
| --------------- | --------------------------------- | ------------------------------------- |
| `logo.svg`      | Header / footer lockup (fallback) | Official vector logo (SVG preferred)  |
| `favicon.svg`   | Browser tab icon                  | Brand mark, square, 64×64+            |
| `og-cover.svg`  | Social share preview (Open Graph) | Branded 1200×630 PNG/JPG              |

## How to replace

1. Drop the official files into `public/logo/` keeping the same file names, **or**
2. Add new files and update the references in:
   - `src/layouts/BaseLayout.astro` — `favicon` + `og:image`
   - `src/config/site.ts` — `seo.ogImage`

The header/footer currently render the "978" wordmark with the `Anton` display
font (see `src/components/layout/Navbar.tsx` and `Footer.astro`); swap those for
an `<img src="/logo/logo.svg">` if you prefer the vector lockup.
