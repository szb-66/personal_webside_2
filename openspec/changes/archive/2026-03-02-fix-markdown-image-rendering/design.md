## Context

当前项目使用 `marked` 库将 Markdown 转换为 HTML。用户使用 `![[image.png]]` 语法（类似 Obsidian/Notion 风格）在文章中插入图片，但这种语法不被标准 Markdown 解析器支持，导致图片无法显示。

当前图片存储在 `src/content/` 目录中，文章通过 Vite 的 glob 导入读取。

## Goals / Non-Goals

**Goals:**
- 支持 `![[xxx]]` 语法渲染图片
- 图片路径正确解析

**Non-Goals:**
- 不修改现有文章 Markdown 文件内容
- 不支持其他非标准语法

## Decisions

### 方案选择

1. **方案一：在渲染前转换语法**
   - 在 `markdownToHtml` 函数中，使用正则表达式将 `![[xxx]]` 替换为 `](xxx)`
   - 优点：简单直接，不影响现有文章
   - 缺点：需要处理路径映射

2. **方案二：使用自定义 marked 渲染器**
   - 配置 marked 的 image 渲染器
   - 优点：更灵活，可以自定义渲染逻辑
   - 缺点：复杂度稍高

**选择方案一**，因为实现简单且足够满足需求。

### 图片路径处理

- 方案：图片文件放在 `public/images/` 目录
- 使用相对路径 `/images/xxx.png` 访问

## Risks / Trade-offs

- [风险] 图片路径需要用户手动确保正确 → 通过文档说明
- [风险] 如果图片不存在，HTML 中会显示破损图片 → 可接受
