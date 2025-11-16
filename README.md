# Portfolio Website

Small, single-page portfolio built with React + TypeScript. The site displays an intro/hero, projects, skills, contact info and a footer. Content is driven by simple data files so it's easy to update.

## Features
- Responsive single-page layout with navigation.
- Projects and skills loaded from `src/data/`.
- Components split under `src/components/` for easy reuse.
- Quick customization: update or add projects/skills via data files.
- Simple local development and production build.

## Quick start
1. Install dependencies:
   ```sh
   npm install
   ```
2. Start development server:
   ```sh
   npm start
   ```
3. Create a production build:
   ```sh
   npm run build
   ```

## Live demo
- Live demo (replace with your URL): https://your-username.example.com
- Deploy to Vercel: https://vercel.com/docs
- Deploy to GitHub Pages: https://docs.github.com/en/pages

## Links
- Repository (this project): ./ (root)
- Source code:
  - App entry: [`src/index.tsx`](./src/index.tsx)
  - Main app: [`src/App.tsx`](./src/App.tsx)
  - Components: [`src/components/`](./src/components/)
  - Data: [`src/data/projects.ts`](./src/data/projects.ts), [`src/data/skills.ts`](./src/data/skills.ts)
- CI / Deployment suggestions:
  - Vercel quickstart: https://vercel.com/new
  - GitHub Pages with gh-pages: https://www.npmjs.com/package/gh-pages

## Where to edit content
- Projects: `src/data/projects.ts` — add or update project entries.
- Skills: `src/data/skills.ts` — edit skills categories and items.
- Page components: `src/components/*` (Hero, About, Projects, Skills, Contact, Footer)

## Recommended edits & tips
- Import `src/App.css` (if present) in `src/App.tsx` or `src/index.tsx` to enable any custom animations/styles.
- For visual variations (gradients, badges), add optional presentation fields in `src/data/projects.ts` to keep UI logic simple.
- To auto-highlight nav items while scrolling, add an IntersectionObserver in `App.tsx` or `Navbar.tsx`.

## Deployment
- Deploy the `build/` folder from `npm run build` to any static host (Vercel, Netlify, GitHub Pages, etc.).
- If deploying to GitHub Pages, ensure `homepage` in `package.json` is configured and use `gh-pages` or the platform integration.

## Tests
- Basic test setup exists (`src/setupTests.js`). Run tests with:
  ```sh
  npm test
  ```

## Contact
- Update with your contact link or email. Example:
  - Website / Live demo: https://jay-portfolio-liart.vercel.app/
  - Email: mailto:tatkondawar01@gmail.com
  - LinkedIn: www.linkedin.com/in/jay-tatkondawar-30ab09210

## License & Contact
- Update this file with your license and contact information as needed.

If you want, I can:
- Add a polished README with screenshots and example deployment steps for a specific host.
- Generate a small PR to import shared data and App.css automatically into relevant files.