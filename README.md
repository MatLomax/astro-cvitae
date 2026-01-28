# CV

Personal CV/resume website built with Astro, React, TypeScript, and Tailwind CSS.
Astro pages and React/TSX components keep the UI modular, while Tailwind and a
small set of global styles deliver a clean, print-friendly layout.

Content lives in typed data structures and renders consistently for web and PDF.
The build pipeline supports local development and a PDF export flow for sharing
a printable version.

## Tech Stack

- Astro for static site generation, routing, and builds
- React for component-based UI in TSX
- TypeScript for type-safe data and component props
- Tailwind CSS (via Vite integration) for utility-first styling
- @fontsource (Manrope, Source Sans 3) for self-hosted fonts
- Biome for linting and formatting
- Playwright for browser automation (used by the PDF export script)
- Node.js tooling with pnpm scripts for dev/build/preview/export
- Theme switcher for light/dark themes (yay, dark mode!)

## Project Structure

- `src/pages/` hosts the primary Astro entry page
- `src/components/` holds layout and resume entry components
- `src/data/` contains the typed CV content
- `src/styles/` includes global styles and theming helpers
- `scripts/` includes the PDF export script

## Scripts and Workflow

- `pnpm dev` runs the Astro dev server for local preview
- `pnpm build` generates the static site output
- `pnpm preview` serves the production build locally
- `pnpm pdf` builds the site and exports a PDF via Playwright
