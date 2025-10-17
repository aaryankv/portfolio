# Aaryan K V — Portfolio

Live: https://aaryankv.github.io/portfolio/

A modern, animated portfolio to showcase projects, skills, certifications, education, and experience. Built with React + TypeScript + Vite, styled with Tailwind CSS, and sprinkled with motion using Framer Motion. Optimized for GitHub Pages deployment.

## Tech Stack

- React + TypeScript (Vite)
- Tailwind CSS
- Framer Motion (section/hero animations, modal transitions)
- React Icons
- GitHub Actions (auto-deploy to GitHub Pages)

## Features

- Responsive, modern design with light/dark theme toggle
- Animated hero with typewriter titles (rotates through roles)
- Clean sections: About, Skills, Experience, Education, Projects, Certificates, Testimonials, Blog, Awards, Contact
- Company/education logos with click-to-expand modal
- Certificates with issuer logos/images and modal preview
- SPA 404 fallback and `.nojekyll` (for GitHub Pages)
- Asset paths configured to work under repo subpath (`/portfolio/`)

## Project Structure

```
app/
├─ public/
│  ├─ profile.jpg
│  └─ resume.pdf
├─ src/
│  ├─ assets/images/         # logos/images for education, experience, certs
│  ├─ components/
│  │  ├─ Navbar.tsx
│  │  ├─ Footer.tsx
│  │  ├─ ImageModal.tsx
│  │  ├─ Section.tsx
│  │  ├─ Typewriter.tsx
│  │  └─ ProjectCard.tsx
│  ├─ sections/
│  │  ├─ Home.tsx
│  │  ├─ About.tsx
│  │  ├─ Skills.tsx
│  │  ├─ Experience.tsx
│  │  ├─ Education.tsx
│  │  ├─ Projects.tsx
│  │  ├─ Certificates.tsx
│  │  ├─ Testimonials.tsx
│  │  ├─ Blog.tsx
│  │  ├─ Awards.tsx
│  │  └─ Contact.tsx
│  ├─ data/
│  │  ├─ profile.ts          # name, summary, education, experience
│  │  ├─ projects.ts         # projects list
│  │  ├─ skills.ts           # skills/languages lists
│  │  └─ socialLinks.ts      # email, phone, github, linkedin, resumeUrl
│  ├─ index.css              # Tailwind layers + theme styles
│  ├─ App.tsx
│  └─ main.tsx
├─ index.html
├─ vite.config.ts            # base = '/portfolio/' for Pages
└─ .github/workflows/deploy.yml (at repo root)
```

## Getting Started

Prerequisites:
- Node.js 18+ (recommended 20+)
- npm

Install and run (from `app/` directory):
```bash
npm ci
npm run dev
```
Open http://localhost:5173

Build production:
```bash
npm run build
```
The output is generated in `app/dist/`.

## Deployment (GitHub Pages)

This repository is configured to auto-deploy to GitHub Pages via GitHub Actions.

Workflow file (root): `.github/workflows/deploy.yml`
- Installs dependencies in `app/`
- Builds to `app/dist`
- Copies SPA fallback: `dist/index.html` → `dist/404.html`
- Creates `dist/.nojekyll` (disables Jekyll)
- Uploads artifact and deploys with `actions/deploy-pages@v4`

One-time setup:
1. Push to `main` at least once.
2. In GitHub → `Settings` → `Pages`:
   - Set “Build and deployment → Source” to “GitHub Actions” (NOT “Deploy from a branch”).
3. After a push to `main`, check the `Actions` tab for “Deploy to GitHub Pages” run.
4. Live site: `https://aaryankv.github.io/portfolio/`

### Troubleshooting Pages

- Blank page:
  - Ensure `Settings → Pages → Source = GitHub Actions` (not “Deploy from a branch”).
  - The workflow must be the root `.github/workflows/deploy.yml`.
  - Hard refresh your browser (Ctrl+F5) after a successful run.
- 404 upon refresh:
  - SPA fallback is configured (`404.html` copied). If still failing, wait for cache to update.
- Images not showing:
  - For `public` assets, reference with `import.meta.env.BASE_URL`:
    ```tsx
    <img src={`${import.meta.env.BASE_URL}profile.jpg`} />
    ```
  - Ensure `vite.config.ts` has `base: '/portfolio/'`.
- If you rename the repository, update `vite.config.ts → base: '/<new-repo-name>/'`.

## Customization

- Profile (name, summary, experience, education):
  - `src/data/profile.ts`
- Social links + resume URL:
  - `src/data/socialLinks.ts` (resume is served from `public/resume.pdf`)
- Skills & Languages:
  - `src/data/skills.ts` (and UI in `sections/Skills.tsx`)
- Projects:
  - `src/data/projects.ts`
- Certificates:
  - `sections/Certificates.tsx` maps images from `src/assets/images/`
- Experience logos:
  - `sections/Experience.tsx` picks logos from `src/assets/images/` by company name
- Education logos:
  - `sections/Education.tsx` picks logos from `src/assets/images/` by institution name

### Hero (Home)
- Rotating titles (`Typewriter` words) and chips are in `sections/Home.tsx`
- Change icon set, titles, and chips as desired
- Resume button uses `BASE_URL` to work under Pages

### Theming & Styles
- Global styles in `src/index.css` (Tailwind layers and custom utilities)
- Dark/light theme toggle is handled by `ThemeToggle` and early-init script in `index.html`
- Navbar brand styling in `components/Navbar.tsx`

## Scripts

From `app/` directory:
```bash
# dev server
npm run dev

# type-check + build
npm run build
```

## Commit & Deploy

Push changes to `main` to auto-deploy:
```bash
git add -A
git commit -m "feat: update section X"
git push
```
Check deployment at `Actions` → “Deploy to GitHub Pages”.

## License

This project is open-sourced for educational/portfolio purposes.

## Contact

- Website: https://aaryankv.github.io/portfolio/
- GitHub: https://github.com/aaryankv
- LinkedIn: https://www.linkedin.com/in/aaryankv
- Email: kvaaryan@gmail.com

If you encounter any deployment issues or want additional enhancements (animations, parallax, SEO, analytics), feel free to open an issue or reach out.
