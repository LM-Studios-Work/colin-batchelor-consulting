# Colin Batchelor Consulting — Design System

This document records the approved UI rules currently implemented in `app/page.tsx` and `app/globals.css`. Future UI work must follow these rules and reuse the existing patterns rather than inventing new visual treatments.

## Color System

Defined in `:root`:

- `--background: #ffffff` — page background and the HTML background.
- `--foreground: #292827` — primary dark text.
- `--primary: #b5122b` — the single crimson brand color used for hero panels, rules, buttons, borders, arrows, bullets, metadata, and active accents.
- `--border: #dedede` — standard borders and dividers.
- `--muted-foreground: #666666` — secondary copy.
- `--radius: 0rem` — square-edged visual language.

Additional existing neutrals are `#fff`, `#f5f5f5`, `#dedede`, `#383838`, `#242424`, `#575550`, `#65635e`, `#6b6b6b`, `#45433f`, and `#e7e6e2`.

Usage rules:

- Keep the page primarily white.
- Use `var(--primary)` for crimson UI accents; do not introduce additional reds.
- Service and project cards use white backgrounds with light borders. Never apply a solid crimson background to an entire card.
- The service-card middle image may use `var(--primary)`; its detail panel remains white.
- The Value section and contact section are crimson blocks with white text.
- The footer is dark charcoal (`#242424`) with white and muted-grey text.
- Use crimson for interactive arrows, service bullets, FAQ chevrons, CTA backgrounds, and uppercase metadata.

## Typography

Two font families are used:

- Body/navigation: `Arial, sans-serif`.
- Display headings: `var(--font-display), 'Times New Roman', serif`, where `--font-display` is loaded with `Cormorant_Garamond` in `app/layout.tsx`.

Rules:

- Body defaults to `14px`, `line-height: 1.55`.
- Navigation uses `12px`, weight `600`, uppercase, and `letter-spacing: .06em`.
- Hero display heading uses `clamp(42px, 5vw, 68px)`, weight `600`, line-height `.94`, and tight negative letter-spacing.
- Section headings use `clamp(30px, 3vw, 44px)`, weight `600`, line-height `.98`.
- Project headings use `clamp(34px, 4vw, 56px)`.
- Card headings use `24px`; project card headings use `25px`.
- Supporting service/project metadata is small Arial, uppercase, bold, and crimson.
- Headings use the display serif; body copy, navigation, labels, buttons, and metadata use Arial.
- Keep editorial headings left-aligned unless the existing component explicitly centers them, such as the client-logo section heading.

## Component Library Standards

### Buttons

The primary Contact button uses:

- `background: var(--primary)`
- White text
- `padding: 12px 18px`
- `font-size: 11px`, weight `700`
- Uppercase text and `.08em` letter spacing
- Hover background `#8f0d21`
- Square corners

The projects CTA follows the same crimson/white button language, including the same typography and hover state, with a white right-facing chevron.

### Lists & Bullets

Service details use semantic `<ul>` and `<li>` elements with `list-style: disc`. The list has a crimson `::marker`, a top border, and compact Arial text. Do not replace semantic bullets with decorative arrows or text glyphs.

### Cards

Service and project cards:

- White background
- `1px solid var(--border)` border
- Square corners; no border radius
- No default shadow
- Equal grid columns at desktop
- Service cards use flex column layout, fixed image height, and a flexible detail panel.
- Project cards use flex column layout, equal minimum height, fixed image height, and a flexible metadata panel so titles and categories align.
- Image areas are separate from detail panels. Placeholder image areas may be neutral, crimson, or charcoal; placeholder copy should not be added.

### Icons and Controls

- Interactive chevrons use `var(--primary)`.
- Services navigation uses a small CSS chevron aligned inline with the label, raised slightly with `top: -2px`.
- FAQ uses an upright crimson down chevron when closed and an upright crimson up chevron when open; it is vertically centered on the right side of the summary row.
- Carousel arrows are square crimson buttons with white chevrons.
- Do not use tilted or diagonal substitute icons for dropdown controls.

## Navigation Structure

The header is a flex layout with the logo on the left, centered navigation, and Contact button on the right. Navigation uses compact uppercase Arial with evenly spaced options.

Required navigation labels:

- About
- Services
- Experience
- Reference Projects
- Testimonials
- Contact

Services is the only navigation dropdown and has exactly three top-level options:

1. Project Management
2. Interim Management
3. Business Development

The supplied service sub-items remain represented in the service content:

- Project Management: Water and Sanitation; Power Generation and Distribution; Expert Witness
- Interim Management: Short Term Assignments; Business Rescue; Non-Executive Director
- Business Development: Strategy; Marketing and Sales; Executive Mentorship

The Services dropdown is positioned below and centered on the Services label, uses a white panel with a crimson top rule, readable `13px` links, compact width, generous vertical spacing, and thin light divider lines between options. It must not have excessive unused whitespace on the right.

## Layout Standards

- Use Flexbox for one-dimensional alignment and CSS Grid for the service/project multi-column layouts.
- Desktop service and project grids use three equal columns with consistent gaps.
- The hero uses a two-column grid: crimson copy panel and industrial image panel.
- On mobile, grids collapse to one column and navigation is hidden while the Contact button remains visible.
- Preserve square, editorial blocks and generous section padding.

## DRY Code Directives

- Reuse the existing `services` data array and map it into service cards; do not duplicate service markup.
- Reuse existing button classes and token variables instead of creating one-off red values or utility combinations.
- Keep repeated card structures in mapped data-driven components or reusable components when the page is split further.
- Keep navigation dropdown behavior and FAQ disclosure behavior semantic with `<details>` and `<summary>` where applicable.
- Keep color, typography, spacing, and border decisions in the shared stylesheet rather than duplicating inline styles.
- Do not add a new font family, color, radius, gradient, shadow, or card background without updating this rulebook and receiving explicit design direction.
- Do not create pages for `/about` or `/projects` unless explicitly requested; current links may point to those routes.

## Current Content Guardrails

- The page uses the existing logo URL and headshot asset.
- The hero uses an industrial steel/infrastructure image, not a screenshot.
- Service card image areas are intentionally left for future supplied imagery.
- Keep the phrase “Leadership, recovery and growth — applied with judgement.” removed.
- Keep the FAQ helper sentence “A clear view of how Colin supports critical programmes.” removed.
- Keep all content and layout changes consistent with the white, crimson, charcoal, and editorial serif direction documented above.

## Shared Site Chrome

- `app/layout.tsx` owns the global shell: every route automatically renders the shared client list above the shared footer.
- Reuse `ClientsStrip` and `SiteFooter` from `components/site-chrome.tsx`; do not duplicate footer or client markup inside individual pages.
- FAQ disclosures must use the shared `.faq-summary` class so every item receives the same closed down-chevron and open up-chevron behavior.
- About-page CV downloads use the compact shared CTA treatment and link to `/cv.pdf` until a final CV asset is supplied.
- The shared site header is rendered from `app/layout.tsx`, remains sticky at the top while scrolling, and must not be duplicated inside route pages.
- Preserve the existing sponsor/client strip presentation: white background, compact spacing, centered editorial heading, and the five listed client names. Do not reinvent or replace it with a carousel or alternate treatment without explicit direction.
