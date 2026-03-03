## Context

当前 `src/utils/content.js` 中的 `convertObsidianImageSyntax` 函数将 `![[xxx]]` 转换为 `![](xxx)`，但没有处理路径前缀。Markdown 文件中的图片路径是 `public/images/xxx`，需要转换为浏览器可访问的 `/images/xxx`。

## Goals / Non-Goals

**Goals:**
- 修复 Vercel 部署后文章图片 404 问题

**Non-Goals:**
- 不修改图片存储位置
- 不添加图片优化或处理功能

## Decisions

### 方案：路径前缀替换

修改 `convertObsidianImageSyntax` 函数，使用正则表达式将 `public/images/` 替换为 `/images/`：

```javascript
function convertObsidianImageSyntax(markdown) {
  if (!markdown) return markdown
  return markdown.replace(/!\[\[([^\]]+)\]\]/g, (match, imagePath) => {
    const fixedPath = imagePath.replace(/^public\/images\//, '/images/')
    return `![](${fixedPath})`
  })
}
```

**备选方案：**
- 在 Vite 配置中添加 public 目录别名
- 缺点：需要修改构建配置，可能影响其他资源

## Risks / Trade-offs

无重大风险。这是一个简单的字符串替换，不会影响其他功能。
