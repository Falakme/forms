# Copilot Instructions for Forms by Falak

## Project Overview

This is a Next.js 15 application that embeds Tally forms via dynamic routes, deployed to Cloudflare Workers using OpenNext. The app serves as a form proxy with custom metadata and dynamic title fetching.

## Architecture

- **Core Pattern**: Dynamic iframe embedding via `/[page]` route that maps to `https://tally.so/r/{page}`
- **Metadata Strategy**: Custom metadata generation per form with fallback titles from Tally API
- **Deployment**: Cloudflare Workers with OpenNext adapter, not traditional Vercel deployment
- **App Router**: Uses Next.js 15 App Router (not Pages Router)

## Key Files & Patterns

- `src/app/[page]/page.tsx` - Dynamic form embedding with client-side title updates
- `src/app/api/form-title/route.ts` - Server-side API to scrape form titles from Tally
- `open-next.config.ts` - OpenNext Cloudflare configuration (can enable R2 caching)
- `wrangler.jsonc` - Cloudflare Workers configuration with assets binding

## Development Workflow

```bash
npm run dev                    # Local development
npm run build                  # Next.js build + OpenNext transform
npm run preview                # Local preview of OpenNext build
npm run deploy                 # Deploy to Cloudflare Workers
npm run cf-typegen             # Generate Cloudflare types
```

## Cloudflare-Specific Patterns

- Use `getCloudflareContext()` for accessing Cloudflare bindings in development
- OpenNext transforms Next.js output for Workers compatibility
- Static assets served via Cloudflare's assets binding
- Uses `force-static` export for pre-rendering dynamic routes

## Component Conventions

- **Metadata**: Generate dynamic metadata in `generateMetadata()` for SEO
- **Scripts**: Use Next.js `Script` component with `afterInteractive` strategy
- **Fonts**: Geist Sans/Mono loaded via `next/font/google` with CSS variables
- **Styling**: Tailwind CSS v4 with inline theme configuration

## Form Integration

- Forms embed via iframe with `data-tally-src` attribute
- Client-side message listener updates page title dynamically
- Fallback title pattern: "Form {formId}" if API fails
- Full viewport iframe with `overflow: hidden` styling

## Deployment Notes

- Production URL: `https://forms.falak.me`
- Uses Cloudflare's nodejs_compat flag for Node.js compatibility
- Static export strategy for better Workers performance
- Observability enabled in wrangler.jsonc
