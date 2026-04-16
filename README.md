# Velvoix Website

This repository contains the public Velvoix marketing website for
`https://velvoix.com`.

It is a standalone repository with its own deployment path, Git history, and
release workflow.

Domain boundary:

- public website: `https://velvoix.com`
- product dashboard: `https://velvoix.app`
- backend API: `https://api.velvoix.app`

## Stack

- Astro
- Tailwind CSS
- static build output

## Repository Purpose

This repo is for the public-facing website only.

It should not be used for:

- backend application logic
- dashboard runtime behavior
- mobile workflows
- box-agent contracts

Cross-repo product or policy changes should be coordinated with the relevant
Velvoix repositories instead of being silently redefined here.

## Routes

- `/` Dutch
- `/en/` English
- `/de/` German
- `/es/` Spanish

## Local Development

```bash
npm install
npm run dev
```

## Quality Gates

Build:

```bash
npm run build
```

Locale smoke-check on a fresh build:

```bash
npm run verify:locales
```

Locale smoke-check on an existing build:

```bash
npm run smoke:locales
```

The smoke-check verifies that each locale route serves the expected:

- `html lang`
- page title
- hero heading
- locale-specific navigation markers

## Deployment Model

This repo uses a static deployment flow.

Important rule:

- `dist/` is intentionally committed in this repository for the current cPanel
  deployment workflow

Deployment artifact flow:

1. build the site with `npm run build`
2. commit the updated `dist/` output when the release flow requires it
3. cPanel deploy copies `dist/` into the live document root via `.cpanel.yml`

Deployment file:

- `.cpanel.yml`

## Repository Layout

- `src/`
  Astro pages, layouts, and components
- `public/`
  static public assets
- `scripts/locale-route-smoke.mjs`
  locale correctness guard for build output
- `dist/`
  committed deployment artifact for the current hosting model

## Contribution Rules

See:

- `CONTRIBUTING.md`

At a minimum:

- keep changes small and reviewable
- run the relevant website gates before merge
- keep copy changes semantically consistent across locales
- do not mix unrelated infrastructure or product logic into this repo

## Security

See:

- `SECURITY.md`

Do not commit:

- secrets
- hosting credentials
- private contact-form endpoints
- temporary local artifacts

## Support

See:

- `SUPPORT.md`

## Maintainer

- `@ricovsprang-ship-it`
