# TrackSwap VR Documentation

This repository contains the TrackSwap VR documentation site built with VitePress.

## Local development

Requirements: Node.js 22 or newer.

```powershell
npm install
npm run dev
```

Open <http://127.0.0.1:5173/>. The development server reloads the page when files under `docs/` change.

On Windows, you can also drag `start-docs.bat` into a terminal and press Enter. It installs missing dependencies automatically and starts the development server.

## Production build

```powershell
npm run build
npm run preview
```

## GitHub Pages

Push the repository to GitHub with `main` as the default branch. In the repository settings, open **Pages** and set **Source** to **GitHub Actions**. Each push to `main` will then build and deploy the site.
