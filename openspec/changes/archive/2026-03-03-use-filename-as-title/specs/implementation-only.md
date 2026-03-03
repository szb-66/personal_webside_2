## Summary

此改动为实现优化，不涉及新的功能需求变更。

**改动内容：**
- 修改 `src/utils/content.js` 中的 `parseArticle` 函数
- 标题来源从 frontmatter 的 title 字段改为使用文件名（slug）

**影响范围：**
- 仅涉及单个文件的代码修改
- 不改变系统行为（只是标题来源变化）
- 不涉及 API、数据库或外部依赖变更
