Version 2.0 · Updated 2026-10-18 · Registry key: BRAND_TRIUMPH

# Triumph Web Works — Brand Guide

Companion files:
- `brand-tokens.css` — exact colour values, paper variables and component CSS. Copy it; don't retype it.
- Assets — repo `IsaacTriumph/triumphwebworks`, folder `public/brand/` (logos, linen textures) and `brand/affinity/` (documents).
- Visual reference — component kit: https://claude.ai/artifact/CArWvVrBPLTTJyAHknogg4 (also `brand/reference/kit/index.html`); document sample: https://claude.ai/artifact/Jd6yRmmuLAyZ5WzMLza2TF (also `brand/reference/documents/index.html`).

## 1. Positioning

Statement (approved 2026-09-29)

Triumph Web Works is a conversion-first web studio for businesses where every order, booking or enquiry has real value. We build and renovate websites around the numbers that matter: sales, direct bookings and qualified leads.

Who we serve

| Market | Who | What we fix first |
|---|---|---|
| Shopify brands | DTC and B2B stores, any category | Wholesale ordering on Shopify B2B; conversion leaks; replatforming to Shopify |
| Law firms | Small firms, family and estate law first | Intake, online booking, fee clarity |
| Boutique hotels and tour operators | Independent operators, hotels first | Direct bookings over OTAs: best-rate message, prices, reviews |
| HVAC | Small owner-run shops | Online booking, review proof, offers |

How we sell
- Entry: a fixed-fee conversion audit.
- Then: a fix sprint or renovation, scoped from the audit.
- Builds from scratch only when there's no workable site.
- Ongoing: a monthly optimization retainer once results are proven.

Voice
- Executive and editorial: calm, precise, confident. Not salesy.
- Lead with numbers and outcomes, not features or page counts.
- Avoid generic marketing-agency or SaaS-dashboard visual language.

Rules by market
- Law firm copy must follow law society rules: no results guarantees, no "specialist" or "expert" wording, no settlement amounts in Alberta. Client signs off all copy.

## 2. Material: the paper rule

Everything looks like real paper. Nothing defies real life.

The website and the dark parts of documents are built from four layers of the same dark linen board:

| Layer | Token | Hex | Used for |
|---|---|---|---|
| Bottom | `--recess` | #1B2027 | Seen only where the base is cut away: cut-out cards, inputs, inactive tabs, focus wells |
| Base | `--bg` | #222830 | The page |
| Top | `--surface` | #2A313B | Cards, header, tab panels, menus, tooltips' parent cards |
| Control | `--control` | #343C48 | Small pieces laid on top: secondary buttons, tooltips, badges. White text only. |

Each layer is a shade lighter than the one it sits on.

Edges. Every edge is the same, everywhere:
- Raised piece: a 1px line slightly darker than what's beneath (`--paper-edge`, black 22%), then a subtle shadow (`--paper-shadow`). Variable: `--paper-raised`.
- Cut-out: the same line and shadow inverted, on the inside top wall. Variable: `--paper-cut`.
- Only the edge colour may change (the CTA button uses `--cta-edge` #7A3622).
- No thick edges, no highlights, no reflections, no glow.

Cut-in marks. Step numbers and cut-in icons (`.blind`, `.etched`) are dark ink pressed into the card, with a shadowed top wall and a faint light lower lip. This lower lip is the only permitted light in the system, because it is the paper's own cut wall.

Creases. Dividers are a single 1px line, black 32%.

Inside a cut-out, a button sits one layer up (`--surface`), never two.

Radius: 2px everywhere. Header height on desktop includes the header's own edge, drawn as a separate layer so it falls across menus sliding out from under it.

Texture.
- Linen: `public/brand/textures/linen.png`, a 256px mid-grey tile from the approved swatch, applied with `background-blend-mode: overlay` over the paper colour. It shades the paper without changing its colour.
- Texture goes on dark paper only. Never on white or light paper.
- For tools without blend modes, use the pre-blended tiles: `linen-dark-tile.png` (#222830), `linen-surface-tile.png` (#2A313B), `linen-cutout-tile.png` (#1B2027).
- To rebuild the tile: take the approved swatch's alpha channel, centre it on mid-grey (128) and scale the deviation by 0.42.

## 3. Colour tokens

Text and accent colours (on dark paper)

| Token | Hex | Use | Contrast on base / top / cut-out |
|---|---|---|---|
| Body text | #FFFFFF | Primary text | 14.9 / 13.1 / 16.4 |
| Muted text | #9A9994 | Secondary text, captions, source labels | 5.2 / 4.6 / 5.7 |
| Kicker | #D9844B | Eyebrow labels only | 5.2 / 4.6 / 5.7 |
| CTA button | #A84B30 | Button fill only; white label (5.6:1) | — |
| Accent | #BCE2E7 | Data visuals and data rules only | 10.7 / 9.5 / 11.8 |
| Error text | #FF6E42 | Error messages as text with an icon; no banners or fills | 5.4 / 4.7 / 5.9 |
| Success | #4EC0C6 | Success states | 6.8 / 6.1 / 7.6 |

On the control layer (#343C48) only white text is allowed (9.9:1). Muted, kicker and error fail there.

Text colours on white documents (white documents only; the website keeps the values above)

| Role | Hex | On white |
|---|---|---|
| Body text | #222830 | 14.9 |
| Muted text | #5F5E59 | 6.5 |
| Kicker | #9C4A22 | 6.2 |

Rules
- CTA and kicker are separate tokens. Both read as copper; never swap or merge them.
- CTA button labels are always white (#FFFFFF). No border on buttons.
- Errors appear as vermilion text with an icon, never as banners or fills.
- Accent is for data only. Navigation, links and focus use white.
- Any new text colour must pass 4.5:1 on every surface it can sit on before use.

## 4. Typography

| Role | Font | Weights | Loading |
|---|---|---|---|
| Headings | Forum | Regular | next/font/google |
| Body | Inter | Regular, SemiBold, Italic, Bold | next/font/google |

Web scale: H1 44–84px, H2 32–52px, H3 26px, lede 17–20px, body 16px, kicker 12px SemiBold, uppercase, 0.16em tracking.
Print scale: H1 40/44pt, H2 26/30pt, kicker 8pt SemiBold caps tracking 160, body 10/15pt, small 8.5/12pt.

## 5. Logos

| File | Use |
|---|---|
| `public/brand/logo-light.svg` | Default. On dark paper. |
| `public/brand/logo-dark.svg` | White documents and light contexts only. |
| PNG versions | Only where SVG isn't supported. |

Sizes: header 28px tall on phones, 36px on desktop; footer 40px; never below 28px (keeps WEB WORKS legible).
Still needed: an icon-only mark.

## 6. Components

Built and specified in the component kit and in `brand-tokens.css`:
- Header (sticky, top layer) with desktop Markets submenu and mobile side drawer
- Buttons: primary (CTA), secondary (control layer), small; text links
- Cards: raised and cut-out text + icon cards (stacked and row), offer cards, process steps, market tabs (accordion on phones)
- Before/after result cards, testimonial cards, FAQ accordion, booking form (inputs, select, textarea, checkbox, radio)
- Split hero, inner page header with breadcrumbs, badges, notice slips, full footer, sticky mobile CTA bar
- Icon library: Lucide 0.453, outline, 1.5px stroke. White by default; cut-in (`class="etched"`) for decorative card icons only.

Card spacing: `--card-pad` (32px phone → 48px wide) for the card's padding and the gap between groups; `--card-tight` (12px) inside a group.

Retired: the Editorial Stat Plaque. Remove it from the live site when the new system goes in.

## 7. Motion

Motion follows paper. Pieces slide out from under the layer above; nothing fades, scales, bounces or counts up.

| Element | Movement | Duration |
|---|---|---|
| Mobile menu | Sheet slides in from the right, under the header | 0.45s in, 0.35s out |
| Desktop submenu | Sheet slides down from under the header strip | 0.4s in, 0.3s out |
| Accordions | Answer slides out from under its strip | 0.5s in, 0.35s out |
| Tooltip | Slip slides up out of a slot | 0.35s |
| Buttons | Lift 1px on hover; press 1px on click | 0.3s / 0.1s |
| Cards on scroll | Laid onto the page: start 8px up with a larger shadow, settle flat | 1s |
| Mobile CTA bar | Slides up from below the screen edge after the hero | 0.45s |

Library: GSAP. Easing: power2.out (closing uses power2.in). Respect prefers-reduced-motion always: every movement becomes instant. Content is always visible; nothing waits at zero opacity.

## 8. Focus and accessibility

- Focus is printed, not lit. No coloured focus rings.
- Buttons: pressed 1px into a 4px cut-out well, ringed by a white rule.
- Inputs, tabs, menu button: a white rule around the element.
- Links: a 2px white underline.
- Rule width `--focus-w`: 1px, or 0.5px on high-density screens.
- Cut-in icons and numbers are decorative; the text beside them must carry the meaning.
- Tap targets: buttons and fields 48px tall (40px for small header buttons).

## 9. Documents

- Covers, heading cards and feature cards: dark textured paper (#222830 with linen), using the site's text colours and the light logo.
- Everything else: plain white, no texture, using the white-document text colours.
- Cards on white keep paper edges without shadows: raised #2A313B with a line below; cut-out #1B2027 with a line on the inside top edge.
- Tool: Affinity Publisher (preferred) or Pages.
- Affinity kit (`brand/affinity/`): `.ase` palette, hex list, cover textures with 0.125in / 3mm bleed (Letter, A4), full-sheet card textures, tiles, logos.
- Cards in Affinity: rectangle with 1.5pt radius, card-sheet texture masked inside it. Raised edge: duplicate filled black 45%, moved down 0.75pt, sent behind. Cut-out edge: 0.75pt line, black 60%, along the inside top.
- Export: PDF/X-4, include bleed, fonts embedded.
- Pages can't print bleed: dark covers print with a white border, so keep dark covers for emailed PDFs.

## Change log
- 2026-09-29: v1.3, positioning approved.
- 2026-10-13: moved from claude/brand-guide.md to brands/triumph/; content unchanged.
- 2026-10-17: moved from brand-guide-triumph-v1.md to brand-guide.md; old status and location lines replaced by the stamp line and this change log; content unchanged.
- 2026-10-18: v2.0, paper design system. Background changed from #2B323C to #222830; added top (#2A313B), control (#343C48) and cut-out (#1B2027) layers; error text changed from #FF6850 to #FF6E42; accent limited to data; added material, motion, focus, components and documents sections; logos added; Editorial Stat Plaque retired. Positioning and market rules unchanged.
