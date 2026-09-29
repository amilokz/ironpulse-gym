# IronPulse Fitness Studio — Demo Website

A high-energy demo website for **IronPulse Fitness Studio**, a fictional gym in
Bahria Town, Rawalpindi. Built as a portfolio demo for AKCLNT
([akclnt.com](https://akclnt.com)) to show prospective clients what a modern gym
website can look like.

## Tech

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first theme config in `app/globals.css`)
- Fonts via `next/font/google`: **Anton** (condensed display) + **Geist** (body)
- Zero heavy animation libraries — scroll reveals via `IntersectionObserver`,
  marquee/grain/hover effects in pure CSS

## Sections (single page)

1. Sticky navbar with mobile menu
2. Full-screen hero — "TRAIN LIKE A BEAST" + WhatsApp / Programs CTAs
3. Scrolling marquee strip
4. Stats strip (members, trainers, sq ft, years)
5. Programs grid (Strength, HIIT, Boxing, Yoga, Personal Training, Nutrition)
6. Class schedule table (Mon–Sat)
7. Trainers (4 cards, CSS-gradient avatars — no external images)
8. Pricing (3 PKR tiers: 5,000 / 12,000 / 40,000)
9. Testimonials (3 fictional members)
10. Contact/CTA + footer (Bahria Town, Rawalpindi · +92 300 1234567)

All CTAs and forms link to WhatsApp (`https://wa.me/923001234567`) — no backend.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (verified clean)
```

## Deploy

Push to GitHub and import into Vercel — no environment variables needed.
Fully static (`/` prerendered), no external image dependencies.
