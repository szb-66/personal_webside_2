## Why

文章详情页中的 Markdown 图片使用 `![[image.png]]` 语法无法显示，只能看到文字。图片文件存在于 content 目录中，但未被正确渲染到页面。需要解决这个问题以提升文章可读性。

## What Changes

- 在解析 Markdown 内容前，将 `![[xxx]]` 语法转换为标准的 `![](xxx)` Markdown 图片语法
- 配置 marked 正确渲染 Markdown 图片
- 确保图片路径正确指向 public 或 content 目录

## Capabilities

### New Capabilities
- `markdown-image-rendering`: 支持 `![[image.png]]` 语法的图片渲染

### Modified Capabilities
- 无

## Non-Goals
- 不修改现有文章内容文件
- 不支持其他非标准的 Markdown 语法

## Impact

- 需要修改 `src/utils/content.js` 中的 `markdownToHtml` 函数
- 可能需要调整图片路径解析逻辑
