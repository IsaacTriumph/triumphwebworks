# Triumph Web Works brand files

Assets and references for the paper design system. No site code depends on these yet.

| Path | What it is |
|---|---|
| `public/brand/logo-light.svg`, `logo-dark.svg` (+ PNG) | Logo. Light on dark stock (default), dark on white only. |
| `public/brand/textures/linen.png` | 256px mid-grey linen tile. Use with `background-blend-mode: overlay` over the paper colour. |
| `public/brand/textures/linen-*-tile.png` | Linen pre-blended onto each paper layer (base `#222830`, surface `#2A313B`, cutout `#1B2027`) for tools without blend modes. |
| `brand/affinity/` | Affinity Publisher kit: `.ase` palette, hex list, cover textures with bleed (Letter, A4), card texture sheets, logos. |
| `brand/reference/kit/index.html` | Component kit and homepage draft. Open in a browser (loads Tailwind, Lucide, GSAP from CDNs). |
| `brand/reference/documents/index.html` | Document style sample: dark textured cover and heading cards, plain white body. |
| `brand/brand-guide.md` | Brand guide v2.0 (Registry key BRAND_TRIUMPH). Replaces v1.3 in the Project files. |
| `brand/brand-tokens.css` | Exact tokens, paper variables and component CSS from the kit. |
| `brand/icons/` | 98 Lucide icons used in the kit, exported as SVG at 1.5px stroke. |
| `brand/document-components.css` | Document page styles and components (key message, statement band, steps, quotes, options, flow, chart, images, footnotes). |

Live versions of the references:
- Component kit: https://claude.ai/artifact/CArWvVrBPLTTJyAHknogg4
- Document sample: https://claude.ai/artifact/Jd6yRmmuLAyZ5WzMLza2TF
