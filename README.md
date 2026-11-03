# PR2 Website

React + Tailwind + Sanity, sister site to PR1 with a **services-first** structure and a wider international offer.

**PR2**: *Cross-border visibility for growing brands*

Sanity site value: `pr2` · Shared studio: https://pr-websites.sanity.studio/

```bash
npm install && npm run dev
```

Runs on **http://localhost:5174**

## How PR2 differs from PR1

| | PR1 (`PR`) | PR2 (`PR2`) |
|---|---|---|
| Focus | Platform / features-led | Services-led, international |
| Home layout | Full-bleed dark hero | Split hero + markets strip |
| Nav | Dark over hero | Sticky light header |
| Palette | Ink + lime | Forest + mint |
| Services | Core PR set | Broader (market entry, events, monitoring, …) |

## Deploy on Vercel

1. Import this repo in [Vercel](https://vercel.com/new) (Framework: Vite).
2. Environment variables:

| Name | Value |
|------|--------|
| `VITE_SANITY_PROJECT_ID` | `kyqpdwqu` |
| `VITE_SANITY_DATASET` | `production` |
| `VITE_SANITY_API_VERSION` | `2025-01-01` |
| `VITE_SANITY_WRITE_TOKEN` | *(optional)* |

3. `vercel.json` rewrites routes for React Router.
