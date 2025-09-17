# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development

- `pnpm dev` - Start development server with hot module replacement
- `pnpm build` - Build production version
- `pnpm preview` - Preview production build locally

### Code Quality

- `pnpm check` - Run ESLint to check code quality
- `pnpm format` - Auto-fix ESLint issues

### Assets Generation

- `pnpm pwa-assets` - Generate PWA assets from public/favicon.svg

### Release

- `pnpm release` - Create a new release (managed by release-it)

## Architecture

This is a Vue 3 portfolio website for Marvin Heilemann built with:

### Tech Stack

- **Vue 3** with Composition API
- **TypeScript** with strict mode enabled
- **Vite** as build tool and dev server
- **Vue Router** for client-side routing
- **Tailwind CSS** for styling
- **Three.js** (v0.136.0) for 3D graphics
- **PWA** support via vite-plugin-pwa

### Project Structure

- `/src/components/` - Vue components (ArticleTag, FooterSection, HeaderSection, HeadlineTag, LogoBrand, NovaGlobe)
- `/src/pages/` - Page components (HomePage, ImprintPage)
- `/src/routes.ts` - Route definitions
- `/src/main.ts` - App entry point with router setup
- `/src/icons.ts` - FontAwesome icon imports

### Key Configuration

- TypeScript config uses ES2022 target with strict mode
- Tailwind configured with custom primary/secondary colors and Inter font
- Vite configured with:
  - PWA plugin for offline support
  - Manual chunks for optimized loading (Three.js and FontAwesome separately)
  - mkcert for local HTTPS development
  - HTML minification and injection

### Development Notes

- The project uses ESLint with TypeScript and Vue plugins for linting
- Git hooks are managed by lefthook
- Deployment is handled via Vercel
- Theme color is `#2a2c36`
- Version is exposed as `__APP_VERSION__` global
