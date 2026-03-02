## ADDED Requirements

### Requirement: Obsidian-style image syntax rendering
The markdownToHtml function SHALL convert Obsidian-style image syntax `![[image.png]]` to standard Markdown image syntax `](image.png)` before parsing.

#### Scenario: Basic image syntax conversion
- **WHEN** markdown content contains `![[photo.png]]`
- **THEN** the rendered HTML SHALL contain `<img src="photo.png" alt="photo">`

#### Scenario: Image with path
- **WHEN** markdown content contains `![[images/screenshot.jpg]]`
- **THEN** the rendered HTML SHALL contain `<img src="images/screenshot.jpg" alt="screenshot">`

#### Scenario: Multiple images in content
- **WHEN** markdown content contains multiple `![[img1.png]]` and `![[img2.png]]` images
- **THEN** all images SHALL be converted and rendered in the HTML output

### Requirement: Image path accessibility
The converted image paths SHALL be accessible from the browser.

#### Scenario: Image in public folder
- **WHEN** an image is placed in `public/images/photo.png`
- **AND** markdown contains `![[images/photo.png]]`
- **THEN** the image SHALL be accessible at `/images/photo.png` in the browser
