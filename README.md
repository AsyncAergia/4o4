# 4o4

A prank browser extension that randomly hijacks your navigation. On every page change, there’s a 9% chance your destination gets swapped with one of the custom 4o4 pages included in this project. Inspired by Cenafy.

This project also serves as a public repository for people to submit their own creative versions of 404 pages.

## Table of Contents

* [Installation](#installation)
* [Building from Source](#building-from-source)
* [Roadmap](#roadmap)
* [CI/CD Automation](#cicd-automation)
* [Contributing](#contributing)
* [Credits](#credits)

## Installation

You can install 4o4 in several ways:

**1. Extension Stores**
You can download 4o4 directly from the Chrome Web Store or Firefox Add-ons (links coming soon).

**2. GitHub Releases**
You can go to the Releases tab on this repository, download the version for your preferred browser, and manually load it in your browser's developer extensions page.

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

- [ ] **Extension Popup:** Add a user interface so you can control the extension.
- [ ] **Adjustable Probability:** Let users choose their own prank percentage instead of the default 9%.
- [ ] **Page Toggles:** Allow users to blacklist or whitelist specific 404 pages from the rotation.
- [ ] **Preview Mode:** Add a way to try out and view each 404 page directly from the popup.
- [ ] **Store Automations:** Set up CI/CD to automatically publish new updates to the respective browser extension stores.

## Contributing

Everyone is welcome to contribute. Whether you want to add your own creative 404 page designs, suggest new features, or report bugs, your help is appreciated.

Please check the `CONTRIBUTING.md` file for more details on how to get started.

## CI/CD Automation

The repository is set up with automated workflows. Whenever a new version tag is pushed to the main branch, a GitHub Action is triggered to automatically build and publish a new release on the GitHub Releases page.

## Credits

Extension icons are provided by Iconscout.