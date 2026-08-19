# Sunila Maharjan — Portfolio

A responsive portfolio website built with **React + TypeScript + Vite**.

## Why this stack?

- **React + TypeScript**: modern, maintainable and useful for demonstrating front-end engineering skills.
- **Vite**: very fast local development and simple production builds.
- **Plain CSS**: no UI framework dependency, so the site is lightweight and easy to customise.
- **Hostinger-friendly**: the production build is static and can be uploaded to standard web hosting.

## Run in VS Code

1. Install Node.js (LTS) if you do not already have it.
2. Open this folder in VS Code.
3. Open **Terminal → New Terminal**.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local address printed by Vite, normally `http://localhost:5173`.

## Create the production version

```bash
npm run build
```

This creates a `dist` folder.

To preview the production build locally:

```bash
npm run preview
```

## Deploy to Hostinger

Run:

```bash
npm run build
```

Then upload the **contents of `dist`** into the domain's public web directory (commonly `public_html`) in Hostinger.

## Before publishing

Replace these placeholders in `src/App.tsx`:

- `your.email@example.com`
- `https://www.linkedin.com/`
- `https://github.com/`

You can also add project links, GitHub repositories, a CV download and a profile photo later.

## Suggested next improvements

- Add a downloadable CV button.
- Add real GitHub and LinkedIn URLs.
- Add screenshots for Easy Event and your AI projects.
- Add a dedicated project detail page for the Smart Glove project.
- Add a contact form if you want visitors to send messages directly.
