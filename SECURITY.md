# Security Policy

## Supported Branch

The supported branch is:

- `main`

## Reporting A Vulnerability

Do not open a public issue for a suspected vulnerability.

Report privately via:

- direct contact with `@ricovsprang-ship-it`

Include:

- affected page, component, or deployment file
- reproduction steps
- impact assessment
- whether secrets, forms, or hosting behavior are involved

## Security Scope In This Repo

This repository is sensitive around:

- public form behavior
- environment variables
- deployment artifacts in `dist/`
- hosting and cPanel deployment assumptions

## Rules

- never commit real credentials
- never commit secrets into `dist/`
- treat `public/.contact-mailer-config.php` and related files as sensitive
- keep generated build output aligned with source truth

## Response

Validated issues should be fixed with:

- a bounded patch
- updated docs if deployment or support behavior changes
