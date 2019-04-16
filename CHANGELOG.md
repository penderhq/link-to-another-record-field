# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).


## [0.9.0] - 2019-04-16

### Changed

- Changed import from `@cmds/icons/es/` to `@cmds/icons/lib/`.


## [0.6.0] - 2019-01-26

### Changed

- Used `@cmds/record-list-item` package for displaying linked records.

### Added

- Support for unlinking records
- Support for linking records
- Support for editor role in recordDetail context


## [0.5.0] - 2018-11-19

### Fixed

- Typo. Pass `id` variable (record id) to fieldRenderer callback

## [0.4.0] - 2018-11-18

### Added

- onRecordClick callback props that gets triggered whenever a user clicks a linked record in the recordDetail context

## Fixed

- Added key prop to list of records in recordDetail context