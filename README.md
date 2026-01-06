# Arpit Dahal - Portfolio

A premium, scroll-driven portfolio website built with Next.js, Tailwind CSS, and GSAP.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animation:** GSAP (ScrollTrigger) + Native CSS transitions
- **Language:** TypeScript
- **Icons:** Lucide React

## Local Development

1.  **Install Dependencies:**
    ```bash
    npm install
    ```

2.  **Run Development Server:**
    ```bash
    npm run dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment (Cloudflare Pages)

This project is configured for static export (`output: 'export'` in `next.config.js`), which is ideal for Cloudflare Pages.

1.  **Push to GitHub:**
    Ensure this code is pushed to your GitHub repository.

2.  **Create Project in Cloudflare Pages:**
    - Connect your GitHub account.
    - Select this repository.

3.  **Build Configuration:**
    - **Framework Preset:** Next.js (Static HTML Export)
    - **Build command:** `npm run build`
    - **Build output directory:** `out` (Next.js default for static export)
    - **Node.js Version:** Set an environment variable `NODE_VERSION` to `18` or `20` if needed (Cloudflare sometimes defaults to older versions).

## Project Structure

- `app/`: Next.js App Router pages and layout.
- `components/`: Reusable UI components and "Scene" sections.
- `content/`: Structured data for profile, projects, and skills.
- `lib/`: Utilities for GSAP, Tailwind, and Motion.
