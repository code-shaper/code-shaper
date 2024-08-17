# Changelog

All notable changes to this package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to
[Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2024-08-16

### Changed

- [Breaking change] Moved all `dependencies` to `peerDependencies` as
  recommended in ESLint's
  [Shareable Configs](https://archive.eslint.org/docs/developer-guide/shareable-configs)
  doc (legacy config system). The earlier config was resulting in unpredictable
  package installations resulting in build breaks. With this change, using
  `@code-shaper/eslint-config` would require installing the peer dependencies in
  your project. See [README](./README.md) for more information.

## [1.0.3] - 2024-04-20

### Changed

- Updated dependencies

## [1.0.2] - 2024-04-16

### Added

- Minor improvements to ESLint rules

## [1.0.1] - 2024-04-16

### Added

- Minor improvements to ESLint rules

## [1.0.0] - 2024-04-04

Initial version
