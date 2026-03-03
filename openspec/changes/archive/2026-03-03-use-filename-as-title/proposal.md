## Why

当前md文件的frontmatter中需要手动填写title属性，而文件名本身已经包含了标题信息，导致用户需要重复输入相同的标题。这增加了维护成本且容易出现不一致。

## What Changes

- 修改 `src/utils/content.js` 中的 `parseArticle` 函数
- 移除frontmatter中title属性的读取逻辑
- 改用文件名（slug）作为文章标题
- **BREAKING**: 现有md文件的frontmatter中的title字段将不再生效

## Capabilities

### New Capabilities
（此改动为实现优化，不涉及新能力）

### Modified Capabilities
- `article-title-source`: 标题来源从 frontmatter 改为文件名

## Impact

- `src/utils/content.js`: parseArticle 函数的title字段处理逻辑
- 现有md文件可移除frontmatter中的title字段（非必须，向后兼容）

## 非目标

- 不修改文章内容的渲染逻辑
- 不改变URL路由结构（slug保持不变）
