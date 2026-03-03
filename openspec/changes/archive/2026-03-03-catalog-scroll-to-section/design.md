## Context

当前目录功能存在 id 不匹配问题：
- `parseCatalog` 函数生成的 id 格式为 `h1-0`、`h2-10`（基于行号）
- marked 库渲染 Markdown 时，直接使用标题文本作为 id（如 `一、面向对象编程介绍`）
- 导致点击目录时 `document.getElementById()` 找不到对应元素

现有代码位置：
- 目录生成：`src/utils/content.js` 中的 `parseCatalog` 函数
- 目录组件：`src/views/Base/content/Catalog2.vue`（已有 `go` 函数使用 `scrollIntoView`）

## Goals / Non-Goals

**Goals:**
- 修复目录点击无法跳转的问题
- 保持目录高亮同步功能正常（当前可见章节的高亮）

**Non-Goals:**
- 不修改目录组件的 UI 样式
- 不添加新的目录功能（如三级目录的展开/折叠）

## Decisions

### 方案：直接使用标题文本作为 id

**选择理由：**
- marked 默认行为就是使用标题文本作为 id，最简单可靠
- 不需要额外引入 slugify 处理函数
- 兼容中文标题

**替代方案考虑：**
- slugify 转换：需要精确匹配 marked 的转换规则，容易出现偏差
- 行号索引：已确认与 marked 不匹配

## Risks / Trade-offs

**风险：** 无明显风险
- 这是一个单向修改，不会影响其他功能
- 目录高亮功能使用的是相同的 id 匹配逻辑，修复后应该同时正常工作

**权衡：**
- 标题文本作为 id 可能包含特殊字符，但在当前场景下（中文标题为主）是可以接受的
