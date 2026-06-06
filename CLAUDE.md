# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development

- `pnpm dev` - Start Vite development server
- `pnpm build` - Build production version
- `pnpm preview` - Preview the production build locally

### Code Quality

- `pnpm check` - Lint with oxlint and verify formatting with oxfmt
- `pnpm format` - Format with oxfmt and auto-fix oxlint issues

### Release

- `pnpm release` - Create a new release (managed by release-it)

## Architecture

This is a Vite single-page portfolio website for Marvin Heilemann built with:

### Tech Stack

- **Vite 8** (rolldown-based) for dev server and bundling
- **Preact 10** with `preact/compat` aliased as react (see `vite.config.ts`)
- **TanStack Router** with code-based routes defined in `src/main.tsx`
- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** for styling
- **Three.js** for the 3D particle globe
- **anime.js** for the SVG headline animation
- **oxlint + oxfmt** (OXC) for linting and formatting

### Project Structure

- `index.html` - SPA entry with meta tags and theme color
- `/src/main.tsx` - App entry: router setup, root layout, render
- `/src/globals.css` - Tailwind CSS v4 styles and custom utilities
- `/src/pages/` - Route components (`home.tsx`, `imprint.tsx`)
- `/src/components/` - Preact components
  - `header.tsx` - Site header with logo
  - `footer.tsx` - Site footer with imprint link and version
  - `logo-brand.tsx` - SVG logo component
  - `headline.tsx` - Animated "MARVIN" SVG with anime.js
  - `nova-globe.tsx` - Three.js particle globe (lazy-loaded)
  - `article.tsx` - Prose wrapper for content pages
- `/public/` - Static assets (favicons, og image, PWA icons)

### Key Configuration

- Toolchain versions (node, pnpm) are pinned in `.prototools` (proto)
- Formatting derives from `.editorconfig` (tabs, line width 94); `.oxfmtrc.json` only adds import, Tailwind class, and package.json sorting
- Linting is category-based in `.oxlintrc.json` (correctness/suspicious/perf) with react and import plugins
- React-ecosystem packages resolve to `preact/compat` via aliases in `vite.config.ts`

### Development Notes

- Deployment is handled via Vercel (SPA fallback rewrite in `vercel.json`)
- Theme color is `#04050b`
- Version is read from package.json in footer
- Git hooks are managed by lefthook (oxlint + oxfmt check on pre-commit, commitlint on commit-msg)
