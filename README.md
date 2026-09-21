# Portfolio — Imro Dhondt

Personal portfolio built with Vue 3, TypeScript and Vite. Dark, terminal-inspired, bilingual
(English and Dutch), and deployed as a static site to GitHub Pages.

## Commands

```bash
npm install      # install dependencies
npm run dev      # development server on http://localhost:5173
npm run build    # type check, production build, then the post-build step
npm run preview  # serve the production build locally
npm test         # run the content and filter tests
npm run typecheck
```

## Structure

```
src/
├── assets/styles/     tokens.css (design tokens) and base.css (reset, shared classes)
├── components/        layout, navigation, common, project, notes
├── composables/       useLocale, useSeo, useProjectFilters, useNoteFilters
├── data/              profile, capabilities, skills, tech registry, projects/, notes/
├── i18n/              en.json, nl.json and the vue-i18n setup
├── router/            locale-prefixed routes
├── types/content.ts   the content model
└── views/             one view per route
scripts/postbuild.mjs  writes dist/404.html and dist/sitemap.xml
tests/                 content rules and filter behaviour
```

## How content works

All visitor-facing content lives in `src/data`, not in components.

- **UI chrome** (navigation, buttons, filter labels) lives in `src/i18n/en.json` and `nl.json`.
- **Content** (project text, notes, skills) lives in typed data files, where every string is a
  `Localized` record: `{ en: '…', nl: '…' }`. A missing Dutch string is a compile error, which is
  what keeps the two languages in step.

### Adding a project

1. Create `src/data/projects/<slug>.ts` exporting a `Project`.
2. Register it in `src/data/projects/index.ts`.
3. Use only technology labels that exist in `src/data/tech.ts`, or add the label there first.
4. Fill in `evidence`. `limitations` may not be empty — a test enforces it.

### Adding a note

1. Create `src/data/notes/<slug>.ts` exporting a `Note`.
2. Register it in `src/data/notes/index.ts`.

The notes section is **built but not published**. Its routes, views and components exist and work,
but `NOTES` is deliberately absent from the navigation, the home page and the sitemap because there
is no real content yet. To publish it:

1. Write real notes in `src/data/notes/` and remove `about-these-notes.ts`.
2. Re-add the `notes` entry to `links` in `src/components/navigation/MainNav.vue`.
3. Re-add a recent-notes section to `HomeView.vue` and `/notes` paths to `scripts/postbuild.mjs`.

## Honesty rules

The brief for this site requires that nothing is overstated, so several of those rules are
enforced by tests in `tests/content.spec.ts` rather than left to memory:

- Every project must list its limitations, in both languages.
- Team work is labelled as team work, and Adria names explicitly what is not Imro's work.
- Skills above "familiar" must link to at least one project as evidence.
- No percentages anywhere in the skills data.
- Specific forbidden claims are asserted against: no Google Play release for Freeze or Sneeze, no
  production authentication for Howestprime, no frontend tests for Adria, no CI/CD for the QHSE
  platform, no verified production cloud deployment, no real-world QHSE validation.

If one of those facts changes, update the data **and** the corresponding test.

## Imagery

No real screenshots are committed. Each project card and detail page renders a generated abstract
cover derived from the project slug (`ProjectCover.vue`). A mocked-up interface would be a
fabricated screenshot, so the covers are deliberately abstract.

To use real screenshots later, add files under `src/assets/images/`, set `media.cover` and
`media.screenshots` on the project, and set `media.clearance` to `approved`. Check the sharing
permissions first: the QHSE platform is marked confidential.

## Deployment

`.github/workflows/deploy.yml` type checks, tests, builds and publishes to GitHub Pages on every
push to `main`.

The custom domain is `imrodhondt.be`, pinned by `public/CNAME`, which Vite copies to `dist/CNAME`
on every build. Set Settings → Pages → Source to "GitHub Actions", and point the DNS records for
`imrodhondt.be` at GitHub Pages.

`scripts/postbuild.mjs` writes `dist/sitemap.xml` for `https://imrodhondt.be`. Set a `SITE_URL`
environment variable only when building for a different host.

Routing uses history mode, so `dist/404.html` is a copy of `index.html`; GitHub Pages serves it for
deep links such as `/en/projects/howestprime`.

## Before publishing

- The QHSE platform is for internal company use. There is deliberately no public instance, demo
  URL or repository link, and a test asserts that `links` stays empty and `confidential` stays
  `true`.
- Adria's repository is private, so it is not linked. Its configuration credentials are noted as a
  limitation rather than a public exposure.
- Ghost Haunter Incremental has no public link yet. Add one to `links.live` once the game is
  playable.

## Accessibility and motion

Semantic landmarks, a skip link, one `h1` per page, visible focus rings, `aria-pressed` filter
buttons, a live region announcing result counts, and a full `prefers-reduced-motion` override in
`base.css`. Status is always carried by text, never by colour alone.

Fonts are loaded from Google Fonts with system fallbacks. Self-host them if you would rather not
depend on a third party.
