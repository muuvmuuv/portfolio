# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build production version
- `pnpm start` - Start production server locally

### Code Quality

- `pnpm check` - Run Biome to check code quality
- `pnpm format` - Auto-fix Biome issues

### Release

- `pnpm release` - Create a new release (managed by release-it)

## Architecture

This is a Next.js portfolio website for Marvin Heilemann built with:

### Tech Stack

- **Next.js 15** with App Router
- **React 19** with Server and Client Components
- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** for styling
- **Three.js** for 3D particle globe graphics
- **Biome** for linting and formatting

### Project Structure

- `/app/` - Next.js App Router pages and layouts
  - `layout.tsx` - Root layout with metadata, fonts, analytics
  - `page.tsx` - Home page with globe and headline
  - `imprint/page.tsx` - Legal imprint page
  - `globals.css` - Tailwind CSS v4 styles and custom utilities
- `/components/` - React components
  - `header.tsx` - Site header with animated logo
  - `footer.tsx` - Site footer with copyright and version
  - `logo-brand.tsx` - SVG logo component
  - `headline.tsx` - Animated "MARVIN" SVG with anime.js
  - `nova-globe.tsx` - Three.js particle globe (client component)
  - `article.tsx` - Prose wrapper for content pages
- `/public/` - Static assets (favicons, og image, PWA icons)

### Key Configuration

- TypeScript uses ES2022 target with strict mode
- Tailwind CSS v4 with custom primary/secondary colors and Inter font
- Next.js configured with Turbopack for development
- FontAwesome icons loaded via @fortawesome/react-fontawesome

### Development Notes

- Client components are marked with "use client" directive
- NovaGlobe is dynamically imported with ssr: false (Three.js)
- Deployment is handled via Vercel
- Theme color is `#04050b`
- Version is read from package.json in footer
- Git hooks are managed by lefthook
