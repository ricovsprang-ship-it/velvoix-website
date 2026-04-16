# Contributing

## Purpose

This repository contains the public Velvoix website. Changes should stay
bounded, reviewable, and deployment-aware.

## Working Rules

- keep PRs small and thematic
- update all affected locales when copy or structure changes
- keep deployment assumptions explicit
- do not commit secrets or hosting credentials
- do not redefine backend, dashboard, or box-agent truth in website copy

## Expected Workflow

1. Work on a branch.
2. Keep the change limited to website concerns.
3. Run the relevant quality gates.
4. Describe what changed and whether `dist/` was intentionally updated.
5. Merge only after review.

## Required Checks

Run at least:

```bash
npm run build
npm run smoke:locales
```

When the build output is part of the release:

- verify that `dist/` reflects the actual source changes
- do not commit unrelated `dist/` noise

## Pull Request Expectations

Each PR should say:

- what changed
- why it changed
- whether source files, `dist/`, or both changed
- which commands were run
- whether any locale copy was intentionally left for follow-up
