## ADDED Requirements

### Requirement: Markdown to HTML conversion
系统 SHALL 将 Markdown 内容转换为 HTML。

#### Scenario: Parse markdown content
- **WHEN** 输入 markdown 字符串 `# Hello World`
- **THEN** 系统 SHALL 输出 `<h1>Hello World</h1>`

#### Scenario: Parse complex markdown
- **WHEN** 输入包含标题、列表、代码块的 markdown
- **THEN** 系统 SHALL 正确转换为对应的 HTML 标签

### Requirement: Extract article catalog
系统 SHALL 从文章内容中提取目录结构。

#### Scenario: Extract headings
- **WHEN** 文章内容包含多个标题 `# Title` `## Subtitle`
- **THEN** 系统 SHALL 返回目录数组，每项包含 id、text、level

#### Scenario: Build catalog tree
- **WHEN** 标题具有嵌套结构
- **THEN** 系统 SHALL 构建父子层级关系

### Requirement: Image path handling
系统 SHALL 处理文章中的图片路径。

#### Scenario: Convert relative image path
- **WHEN** markdown 包含 `![img](./1.jpg)`
- **THEN** 系统 SHALL 转换为绝对路径 `/images/{article-slug}/1.jpg`
