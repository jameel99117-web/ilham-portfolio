# Ilham Shehzadi Jamil – Portfolio

Personal portfolio built with [Astro](https://astro.build), GSAP and Lenis.

## Run it locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open the address shown in the terminal (usually http://localhost:4321).

> Windows tip: keep the folder path short (for example `D:\portfolio`) and do not
> run `npm install` inside OneDrive. Very long paths make `npm install` fail with
> `TAR_ENTRY_ERROR` and then `astro is not recognized`.
> If that already happened, delete the `node_modules` folder and run `npm install` again.

Build for production with `npm run build` (output goes to `dist/`).
The site is static, so it deploys to Vercel, Netlify or GitHub Pages as-is.

## What to edit

Almost everything lives in **`src/data/site.js`**:

| What | Where |
| --- | --- |
| Name, email, GitHub, LinkedIn | `profile` |
| "Hire me" link in the header (switch to Upwork later) | `profile.hireUrl` |
| Projects: text, stack, live link, GitHub link, screenshots | `projects` |
| Certificates shown in the About section | `certificates` |
| The three big skill tiles | `skills` |

Other text lives in these components:

* `src/components/SAbout.astro` – About paragraphs
* `src/components/SHero.astro` – hero headline and the two strips
* `src/components/SiteHead.astro` – header line and typing messages
* `src/components/SMyWay.astro` – the "WRITE / CLEAN / SHIP / OFTEN" section

### Screenshots

Screenshots are loaded straight from your GitHub repos, so if you rename a repo or
move a file, update it in `src/data/site.js`.
To host them yourself instead, run `npm run screenshots` (downloads them into
`public/screenshots`) and set `SELF_HOST = true` in `src/data/site.js`.

### Colours

Theme colours are in `src/styles/variables-scss/_colors.scss`.
