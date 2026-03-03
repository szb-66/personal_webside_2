## Context

当前 `src/utils/content.js` 中的 `parseArticle` 函数从 frontmatter 读取 `title` 属性作为文章标题。用户需要在 frontmatter 和文件名中重复输入相同的标题。

## Goals / Non-Goals

**Goals:**
- 使用文件名作为文章标题，消除重复输入

**Non-Goals:**
- 不修改文章内容渲染逻辑
- 不改变URL路由结构
- 不添加新的外部依赖

## Decisions

1. **直接使用 slug 作为 title**
   - 改动最小，只修改 `content.js` 第87行
   - 现有 `title: data.title || slug` 改为 `title: slug`

2. **保持向后兼容**
   - 不强制要求用户删除现有md文件的title字段
   - 代码不再读取title，但不影响现有文件

## Risks / Trade-offs

- [风险] 现有md文件已填写title的用户需要确认新行为
  - 解决：提前告知，或提供批量脚本移除title
