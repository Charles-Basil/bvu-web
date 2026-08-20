
# BVU — Business Visual Upgrade

A modern, polished landing page for **BVU (Business Visual Upgrade)** — a visual communication platform built to help Nigerian businesses access affordable, reliable, and professional branding solutions.

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind](https://img.shields.io/badge/Tailwind-4-cyan)
![React Icons](https://img.shields.io/badge/React_Icons-fa6-gray)

---

## Features

- **Modern landing experience** — smooth scroll-reveal animations, micro-interactions, and refined hover states across all interactive elements
- **Responsive design** — fully optimized layouts for desktop, tablet, and mobile with tailored spacing and typography
- **Contact form** — client-side enquiry form with validation and animated feedback states
- **FAQ accordion** — expandable Q&A section with smooth open/close transitions
- **WhatsApp integration** — floating and inline WhatsApp CTAs for direct client conversations
- **Social media presence** — styled social icon links with hover animations
- **Multi-section layout** — hero, services, model tracks, enterprise/Ajo section, client journey, visual showcase, and final CTA

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 16** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **React Icons** | Social and UI iconography |
| **CSS Animations** | Scroll reveals, transitions, and micro-interactions |

---

## Project Structure

```
bvu-web/
├── app/
│   ├── layout.tsx          # Root layout with fonts and global styles
│   ├── page.tsx            # Homepage with hero, sections, and CTAs
│   ├── faq/
│   │   └── page.tsx        # FAQ page with accordion
│   └── contact/
│       └── page.tsx        # Contact page with form and aside
├── components/
│   ├── ContactForm.tsx     # Enquiry form component
│   ├── FaqAccordion.tsx    # FAQ accordion component
│   ├── Footer.tsx          # Site footer with links and socials
│   ├── ScrollReveal.tsx    # Intersection Observer scroll animations
│   ├── WhatsAppCta.tsx     # WhatsApp button component
│   └── sections/
│       ├── AiSection.tsx
│       ├── EnterpriseSection.tsx
│       ├── JourneySection.tsx
│       ├── ShowcaseSection.tsx
│       └── WhyBvuSection.tsx
├── public/
│   ├── img/                # Images and brand assets
│   └── video/              # Hero showcase video
├── app/globals.css         # Global styles, animations, and utilities
└── package.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm (or your preferred package manager)

### Installation

```bash
git clone https://github.com/your-org/bvu-web.git
cd bvu-web
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

### Build for Production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Design & Animation Approach

The site maintains BVU's existing brand identity while elevating the experience through:

- **Scroll-triggered reveals** — sections and items fade/slide into view as users scroll
- **Hover micro-interactions** — cards lift, icons float, links translate
- **Smooth transitions** — buttons, dropdowns, and accordions use consistent easing curves
- **Performance-first** — animations use `transform` and `opacity` to avoid layout thrashing
- **Accessibility** — focus-visible states, semantic HTML, and reduced-motion considerations

No animation libraries were introduced; all interactions are implemented with vanilla CSS transitions and a lightweight `IntersectionObserver` hook.

---

## Deployment

This is a static Next.js site and can be deployed to:

- **Vercel** (recommended)
- **Netlify**
- **Any static host** supporting Node.js builds

Set the production build command to `npm run build` and the output directory to `.next`.

---

## License

Proprietary — BVU / FunTech Innovations
