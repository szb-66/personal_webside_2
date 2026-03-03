## ADDED Requirements

### Requirement: dist directory cleanup
The build output directory `dist/` SHALL be removed from version control as it can be regenerated.

#### Scenario: Verify dist is gitignored
- **WHEN** checking `.gitignore` file
- **THEN** it SHALL contain `dist/` entry

### Requirement: Clear asset storage locations
Static assets SHALL follow a clear organizational pattern:
- `public/images/` for article content and user assets
- `src/assets/images/` for UI components and app assets

#### Scenario: Article images location
- **WHEN** adding images for markdown articles
- **THEN** they SHALL be placed in `public/images/`

#### Scenario: UI component images
- **WHEN** adding images used by Vue components
- **THEN** they SHALL be placed in `src/assets/images/`

### Requirement: No duplicate images
The project SHALL NOT contain identical images in both `src/assets/images/` and `public/images/`.

#### Scenario: Duplicate check
- **WHEN** comparing images between `src/assets/images/` and `public/images/`
- **THEN** there SHALL be no files with identical content in both locations
