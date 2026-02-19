# Contributing to 4o4

Welcome to **4o4**! This project is two things:

1. A **prank extension** that keeps the internet unpredictable.
2. A **developer playground** where you can experiment with new frameworks, libraries, or creative coding ideas by building custom "Error" pages.

Whether you are here to fix a bug in the extension core or show off your skills with a React/Three.js 404 page, we’d love your help.

## Table of Contents

1. [Branching Strategy](#1-branching-strategy)
2. [Pull Request Process](#2-pull-request-process)
3. [The "Golden Rule" for Pages](#3-the-golden-rule-for-pages)
4. [How to Add a New 404 Page](#4-how-to-add-a-new-404-page)
   - [Tech Stack & Frameworks](#tech-stack--frameworks)
   - [Folder Structure](#folder-structure)
   - [Registration](#registration)

5. [Security & Performance](#5-security--performance)
6. [Submission Checklist](#6-submission-checklist)

---

## 1. Branching Strategy

We use specific branch prefixes to keep the repo organized. Please name your branch based on the type of work you are doing:

| Type | Branch Name Format | Example |
| --- | --- | --- |
| **New 404 Page** | `page/[page-name]` | `page/4o4-matrix-rain` |
| **New Feature** | `feature/[feature-name]` | `feature/popup-ui` |
| **Bug Fix** | `fix/[bug-name]` | `fix/link-interceptor` |
| **Maintenance** | `chore/[task-name]` | `chore/update-wxt` |
| **Docs** | `docs/[topic]` | `docs/contributing-guide` |
---

## 2. Pull Request Process

1. Fork the repository.
2. Create a new branch using the correct naming convention.
3. Make your changes.
4. Open a Pull Request against `main`.
5. Fill out the Submission Checklist.

## 3. The "Golden Rule" for Pages

**All 404 page submissions must be themed around an "Error" concept.**

This is the only creative constraint. Your page should visually or thematically resemble a "Page Not Found," "System Crash," "Lost," or "Glitch" state.

- Encouraged: A "404 Not Found" page that is actually a playable game, a terminal simulation, or a beautiful 3D animation.
- Discouraged: A random page that just plays a video or displays text with no connection to the "Error" theme.

Use this as an opportunity to learn! Want to try building a 404 page in Svelte? Go for it. Want to try raw WebGL? Do it here.

---

## 4. How to Add a New 404 Page

All 404 pages must be submitted as **static assets** inside the `public/` directory.

We use WXT, which copies the `public/` folder directly into the final extension build. Because of this, your page cannot rely on a runtime build process.


### Tech Stack & Frameworks

You are free to use any technology (React, Vue, Three.js, vanilla JS, etc.) to build your page.

**Crucial Rule:** If you use a framework that requires a build step (like React or TypeScript):

1. Build your project locally.
2. **Only submit the output** (the static HTML/CSS/JS files).
3. Do **not** upload your `node_modules`, `package.json`, or uncompiled `.jsx/.vue` source files to the public folder.

### Folder Structure

1. Navigate to `public/4o4-pages/`.
2. Create a new folder. **It must start with `4o4-` and use kebab-case.**
3. Your entry file must be named `index.html`.

**Correct Example:**

- Folder: `public/4o4-pages/4o4-neon-glitch/`
- Files: `index.html`, `style.css`, `app.js`

**Incorrect Example:**

- `public/4o4-pages/my-react-page/` (Missing prefix)
- `public/4o4-pages/4o4_Page/` (Use kebab-case)

### Registration

Once your files are in place, you must tell the extension that your page exists.

1. Open `src/utils/constants.ts`.
2. Add your page's path to the `errorPagesArray` list.

```typescript
export const errorPagesArray = [
  // ... existing pages
  "/4o4-pages/4o4-neon-glitch/index.html",
];

```

---

## 5. Security & Performance

Since this extension runs in users' browsers, strict security and quality standards apply.

### 5.1 Security Requirements

- Self-Contained:
  Your page cannot rely on the internet. You cannot load fonts from Google Fonts or scripts from a CDN.
  **All assets (images, scripts, CSS) must be local files inside your folder.**

- No `eval()`:
  Never use `eval()` or any dangerous JavaScript execution methods.

---

### 5.2 Performance Requirements

- Optimize assets:
  Compress images, minify CSS/JS, and remove unused code.

- Avoid infinite loops:
  Do not include logic that could freeze or crash the browser.

- Heavy libraries:
  If you use a large library (e.g., Three.js), you must use the minified production version.

---

### 5.3 Content Policy

- No hate speech
- No political messaging
- No targeted harassment

---

## 6. Submission Checklist

Please copy/paste the relevant section into your Pull Request description.

### General (For all PRs)

* [ ] Branch Name: I used the correct convention (e.g., `fix/`, `feature/`, `page/`).
* [ ] Code Quality: I have tested my changes and they do not break existing features.

### Specific: New 404 Page

* [ ] Naming: My folder starts with `4o4-` and uses kebab-case (e.g., `4o4-retro-terminal`).
* [ ] Structure: My entry file is `index.html` and resides in `public/4o4-pages/[my-folder]/`.
* [ ] Static Only: I have only uploaded static files (HTML/CSS/JS/Images). I did not upload source code like `.jsx` or `node_modules`.
* [ ] Self-Contained: All assets are local (no CDNs) and I used relative paths (e.g., `./script.js`).
* [ ] Registration: I added my path to `src/utils/constants.ts`.
* [ ] Theme: My page follows the "Error/404" theme.