# 4o4

4o4 is a browser extension that introduces a bit of creative chaos to the web. Every time you click a link, there is a small chance (default 9%) that you'll be redirected to a custom-designed "error" page instead of your destination.

While it works as a prank, the heart of this project is a community-driven gallery. It serves as a sandbox for developers to practice new frontend techniques—whether that’s a complex CSS animation, a Three.js scene, or a mini-app built in a new framework—and see it live in a real-world browsing context.

## Table of Contents

* [Why 4o4?](#why-4o4)
* [Installation](#installation)
* [Building from Source](#building-from-source)
* [Roadmap](#roadmap)
* [Contributing](#contributing)
* [Credits](#credits)

## Why 4o4?

Most of us learn new tech by building small, random pages that eventually just sit in a folder on our desktop. This repo is a place for those experiments to live.

* **For Users:** A fun, unpredictable browsing experience inspired by projects like Cenafy.
* **For Developers:** A low-stakes environment to test out a new library, practice a layout, or experiment with frontend algorithms. If it fits the "error" or "missing" theme, it belongs here.

## Installation

You can install 4o4 in several ways:

**1. Extension Stores**
You can download 4o4 directly from the Chrome Web Store or Firefox Add-ons (links coming soon).

**2. GitHub Releases**
Download the latest version from the [GitHub Releases](https://github.com/AsyncAergia/4o4/releases) page and load it into your browser via the developer extensions menu.

## Building from Source

If you want to run the code locally or tweak it yourself, you can build it from source.

1. Clone the repository to your local machine.
2. Install the dependencies:
```bash
npm ci
```


3. Build the extension for your target browser:
```bash
# For Chrome
npm run build

# For Firefox
npm run build:firefox
```


4. The compiled extension will be generated in the `dist/` directory, which you can then load manually into your browser.

## Roadmap

Here is what is currently planned for future updates:

- [ ] **Customization Popup:** Let users set their own prank probability and toggle specific 404 pages on/off.
- [ ] **Page Preview:** A way to view the gallery of 404 pages directly from the extension.
- [ ] **CI/CD Improvements:** Fully automate the publishing process to the web stores on every release.

## Contributing

We love seeing new creative pages. You don’t need to be an expert—this repo is specifically meant for practicing.

* Have a cool animation you just finished?
* Built a "Page Not Found" screen in a new framework?
* Found a bug in the extension logic?

Check out **[CONTRIBUTING.md](CONTRIBUTING.md)** for the technical requirements on how to add your own pages and register them in the project.

## Credits

* **Icons:** Sourced from Iconscout.
* **Inspiration:** Inspired by the chaotic energy of Cenafy.
* **Contributors:** Everyone who has added a creative error page to the gallery.