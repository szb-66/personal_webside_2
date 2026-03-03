## Why

文章内图片在本地开发环境正常显示，但部署到 Vercel 后返回 404 错误。原因是 Markdown 中的图片路径 `public/images/...` 没有被正确转换为浏览器可访问的绝对路径 `/images/...`。

## What Changes

- 修改 `src/utils/content.js` 中的 `convertObsidianImageSyntax` 函数
- 将 `public/images/` 前缀替换为 `/images/`

## Non-Goals

- 不修改图片文件位置
- 不更改文章渲染的其他逻辑
- 不添加新的图片处理功能

## Capabilities

### New Capabilities
无

### Modified Capabilities
无

## Impact

- 受影响的代码：`src/utils/content.js`
