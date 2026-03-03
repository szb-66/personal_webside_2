## ADDED Requirements

### Requirement: Markdown 图片路径正确转换
文章中的 Markdown 图片路径 SHALL 被正确转换为浏览器可访问的绝对路径。

#### Scenario: Obsidian 语法图片转换
- **WHEN** Markdown 包含 `![[public/images/xxx.webp]]` 语法
- **THEN** 渲染为 `<img src="/images/xxx.webp">`

#### Scenario: 现有图片正常显示
- **WHEN** 部署到 Vercel 后访问文章页面
- **THEN** 所有文章内的图片都能正常加载，不返回 404 错误
