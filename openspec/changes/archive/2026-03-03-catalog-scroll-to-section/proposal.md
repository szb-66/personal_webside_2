## Why

当前网站的目录功能存在点击后无法跳转到文章对应位置的问题。用户点击目录中的标题时，期望滚动到文章的对应章节，但实际上没有任何反应或跳转到错误位置。这影响了用户阅读体验，特别是长文章的导航体验。

## What Changes

- 修改 `parseCatalog` 函数，使生成的目录项 id 与 marked 渲染的 HTML heading id 保持一致
- 直接使用 Markdown 标题文本作为 id，而非之前的行号索引格式

## Capabilities

### New Capabilities
- `catalog-anchor-jump`: 点击目录标题时平滑滚动到文章对应位置

### Modified Capabilities
- 无

## Impact

- 修改文件：`src/utils/content.js` 中的 `parseCatalog` 函数
- 受影响组件：`Catalog2.vue`（已有点击跳转逻辑，只需修复 id 匹配问题）
