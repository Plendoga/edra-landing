# Edra Coworking — Next.js Website

Coworking e salas privativas para empresas modernas. Campo Grande, MS.

## Stack

- **Next.js 14** (App Router)
- **React 18**
- **TypeScript**
- **Tailwind CSS v3**
- **Lucide React** icons
- **Plus Jakarta Sans** (Google Fonts)

## Getting started

```bash
pnpm install     # or npm install / yarn
pnpm dev         # http://localhost:3000
```

## Deploy to Vercel

1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import the repo — Vercel auto-detects Next.js
4. Click **Deploy** — live in ~1 minute

## Project structure

```
app/
  layout.tsx        # Root layout + metadata
  page.tsx          # Home page (assembles all sections)
  globals.css       # Tailwind base + scroll animations CSS

components/
  Header.tsx        # Sticky nav with blur-on-scroll
  Hero.tsx          # Hero section with parallax image
  Features.tsx      # 6-card feature grid
  Rooms.tsx         # 3-card room gallery
  Pricing.tsx       # 3-tier pricing cards
  Contact.tsx       # Contact info + WhatsApp CTA
  Footer.tsx        # Dark footer
  ScrollEffects.tsx # Client component: scroll bar, parallax, counters, reveal

public/
  images/           # Logo + room photos

tailwind.config.ts  # EDRA color tokens (teal, edra-bg, etc.)
```

## Color tokens (Tailwind)

| Token | Value | Usage |
|-------|-------|-------|
| `teal` / `teal-hover` | `#4AABB5` / `#3C9AA4` | CTAs, icons, accents |
| `edra-bg` | `#FAFAF8` | Page background |
| `edra-bgAlt` | `#F4F3F1` | Alternating sections |
| `edra-fg` | `#1E1D1B` | Headings, dark text |
| `edra-fgMuted` | `#7A7873` | Body text, descriptions |
| `edra-border` | `#ECEAE8` | Card borders, dividers |

## Animations

All scroll animations use `data-reveal` attributes + CSS transitions (no JS animation library needed):

```html
<div data-reveal="up">        <!-- slides up -->
<div data-reveal="left">      <!-- slides from left -->
<div data-reveal="right">     <!-- slides from right -->
<div data-reveal="scale">     <!-- scales up -->
<div data-reveal-delay="2">   <!-- 0.2s delay -->
```

`ScrollEffects.tsx` handles the `IntersectionObserver` — works in both scroll directions (elements re-animate on scroll up).

## Contact

- WhatsApp: (67) 99920-3312
- Email: coworking.edra@gmail.com
- Instagram: [@edra.arquitetura_colab](https://www.instagram.com/edra.arquitetura_colab)
