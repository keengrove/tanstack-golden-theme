## TanStack Start Mix Render Template

**English** | [简体中文](./README_zh-CN.md)

A hybrid rendering starter built with **TanStack Start** and **TanStack Router**, featuring SSR/SPA data-loading demos, server functions, and API routes, with **EdgeOne** adapter support.

## Features

- **Hybrid rendering demos**: SPA mode, full SSR, and data-only SSR examples.
- **Server Functions**: Simple todo write/read demo powered by `createServerFn`.
- **API routes**: Example API endpoint consumed by a client page.
- **File-based routing**: Routes generated from files in `src/routes`.
- **Modern stack**: Vite + React 19 + Tailwind CSS + TypeScript.

## Tech Stack

- **Framework**: TanStack Start + TanStack Router
- **Build tool**: Vite
- **UI**: React 19 + Tailwind CSS
- **Language**: TypeScript
- **Deployment adapter**: EdgeOne (`@edgeone/tanstack-start`)

## Quick Start

```bash
pnpm install
edgeone pages dev
```

The dev server runs on `http://localhost:3000`.

## Scripts (EdgeOne Pages)

- **Local development**: `edgeone pages dev`
- **Build**: `edgeone pages build`
- **Deploy**: `edgeone pages deploy`

## Pages Overview

- **/**: Home page showcasing TanStack Start highlights.
- **/demo/start/server-funcs**: Server Functions demo (todo list).
- **/demo/start/api-request**: Client request to API route.
- **/demo/api/names**: API route returning a static JSON list.
- **/demo/start/ssr**: SSR demo index page.
- **/demo/start/ssr/spa-mode**: SPA-only rendering (`ssr: false`).
- **/demo/start/ssr/full-ssr**: Full SSR with loader prefetch.
- **/demo/start/ssr/data-only**: Data-only SSR (`ssr: 'data-only'`).

## Adapter Configuration

The EdgeOne adapter is already integrated into `vite.config.ts`:

```ts
import edgeoneAdapter from "@edgeone/tanstack-start";

// In plugins array
plugins: [
  // ...
  edgeoneAdapter(),
],
```

## Adapter Usage

The EdgeOne adapter is already configured in `vite.config.ts`. To deploy to EdgeOne Pages, ensure you have the EdgeOne Pages CLI installed and logged in:

```bash
# Install EdgeOne Pages CLI
npm install -g @edgeone/cli

# Login to EdgeOne
edgeone login

# Deploy
edgeone pages deploy
```

For more details, see the [EdgeOne Pages Documentation](https://pages.edgeone.ai/document/edgeone-cli).

## Learn More

- **TanStack Start**: [Documentation](https://tanstack.com/start/latest)
- **TanStack Router**: [Documentation](https://tanstack.com/router/latest)
- **EdgeOne Pages**: [Documentation](https://pages.edgeone.ai/document/framework-tanstack-start)

## Deploy

Deploy this project to EdgeOne Pages with one click:

[![Deploy with EdgeOne Pages](https://cdnstatic.tencentcs.com/edgeone/pages/deploy.svg)](https://edgeone.ai/pages/new?from=github&template=tanstack-start-template)

More Templates: [EdgeOne Pages Templates](https://pages.edgeone.ai/templates)
