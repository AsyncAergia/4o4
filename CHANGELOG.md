# Changelog

All notable changes to this project will be documented in this file.

## [1.0.1] - 2026-02-22

### Added
- Added a `privacy.md` policy file to the project root to comply with Chrome Web Store and Firefox Add-ons requirements.
- Configured explicit `data_collection_permissions` telemetry opt-out for Firefox Add-ons (AMO) compliance.

### Fixed
- Fixed icon file names in the `public/` directory to accurately reflect their true dimensions.
- Resolved missing Add-on ID error for Firefox builds by conditionally injecting Gecko metadata in `wxt.config.ts`.