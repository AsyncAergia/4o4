# Contributing to 4o4

Welcome to **4o4**! This project is two things:

1. A prank extension that keeps the internet unpredictable.
2. A developer playground where you can experiment with new frameworks, libraries, or creative coding ideas by building custom "Error" pages.

Whether you are here to fix a bug in the extension core or show off your skills with a React/Three.js 404 page, we’d love your help.

## Table of Contents

1. [Branching Strategy](#1-branching-strategy)
2. [Pull Request Process](#2-pull-request-process)
3. [How to Add a New 404 Page](#3-how-to-add-a-new-404-page)
   - [The Golden Rule (Theme)](#31-the-golden-rule-theme)
   - [Architecture & Workflow](#32-architecture--workflow)
   - [Registration](#33-registration)
4. [Security & Performance](#4-security--performance)
5. [Submission Checklist](#5-submission-checklist)

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

---

## 3. How to Add a New 404 Page

### 3.1 The Golden Rule (Theme)
All 404 page submissions must be themed around an **"Error" concept.**
Your page should visually or thematically resemble a "Page Not Found," "System Crash," "Lost," or "Glitch" state.
- Encouraged: A playable 404 game, a terminal simulation, or a 3D glitch animation.
- Discouraged: Random pages (e.g., a simple cat video) with no connection to the "Error" theme.


### 3.2 Architecture & Workflow
You may use any framework (React, Vue, Three.js, etc.) as long as it compiles to static files. To keep the extension lightweight while keeping the source open, we use a dual-folder system:

1. **The Source Folder:** Create a folder in `4o4-pages-source/` for your raw code (JSX, TS, etc.). Run `npm init` here to manage dependencies. Do **not** commit `node_modules`.
2. **The Public Folder:** Build your project locally and copy only the final static output (HTML/CSS/JS) into `extension/public/4o4-pages/`. Your entry file must be named `index.html`.

**Required Directory Structure:**
```plaintext
├── 4o4-pages-source/
│   └── 4o4-neon-glitch/ (Source code, package.json, etc.)
└── extension/public/4o4-pages/
    └── 4o4-neon-glitch/ (Bundled index.html, assets only)

```


### 3.3 Registration

Once your files are in place, register the page by adding its path to the `errorPagesArray` in `extension/src/utils/constants.ts`:

```typescript
export const errorPagesArray = [
  // ... existing pages
  "/4o4-pages/4o4-neon-glitch/index.html",
];

```

---

## 4. Security & Performance
Since this extension runs in users' browsers, strict security and quality standards apply.

### 4.1 Security Requirements

- **Self-Contained:** Your page cannot rely on the internet. You cannot load fonts from Google Fonts or scripts from a CDN. All assets (images, scripts, CSS) must be local files inside your folder.
- **No `eval()`:** Never use `eval()` or any dangerous JavaScript execution methods.

### 4.2 Performance Requirements

- **Optimize assets:** Compress images, minify CSS/JS, and remove unused code.
- **Avoid infinite loops:** Do not include logic that could freeze or crash the browser.
- **Heavy libraries:** If you use a large library (e.g., Three.js), you **must** use the minified production version.

### 4.3 Content Policy
We want to keep this project fun and inclusive. Please ensure no submissions contain:

- Hate speech or targeted harassment.
- Political messaging or sensitive real-world propaganda.

---

## 5. Submission Checklist

Please copy/paste the relevant section into your Pull Request description.

### General (For all PRs)

* [ ] Branch Name: I used the correct convention (e.g., `fix/`, `feature/`, `page/`).
* [ ] Code Quality: I have tested my changes and they do not break existing features.

### Specific: New 404 Page

* [ ] Naming: My folder starts with `4o4-` and uses kebab-case (e.g., `4o4-retro-terminal`).
* [ ] Dual-Folder Structure: Raw source is in `4o4-pages-source/` and bundled files are in `extension/public/4o4-pages/`.
* [ ] No Node Modules: I have not committed any `node_modules` folders.
* [ ] Static Only: I ensured the `extension/public/` folder contains only compiled assets (HTML/CSS/JS) and no raw source files (JSX, TS, SASS).
* [ ] Self-Contained: All assets are local (no CDNs) and I used relative paths (e.g., `./script.js`).
* [ ] Registration: I added my path to `extension/src/utils/constants.ts`.
* [ ] Theme: My page follows the "Error/404" theme.