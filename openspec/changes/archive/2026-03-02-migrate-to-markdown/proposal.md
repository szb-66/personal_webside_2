## Why

当前网站依赖后端 API (szb.design:3000) 提供文章数据，导致部署依赖外部服务且需要维护 MongoDB 数据库。改为本地 Markdown 文件存储文章，实现纯静态部署。

## What Changes

1. 引入 Markdown 解析库 (marked)
2. 创建 src/content/ 目录存放 Markdown 文章
3. 创建文章数据查询工具 (src/utils/content.js)
4. 改造 9 个视图/组件的数据获取逻辑
5. 图片迁移到 public/images/ 目录
6. **移除后端 API 依赖** - 不再需要 szb.design:3000

## Capabilities

### New Capabilities
- `local-content`: 本地 Markdown 文章管理
- `markdown-parser`: Markdown 解析与目录提取

### Modified Capabilities
- 无

## Impact

- 新增 src/content/ 目录（文章 Markdown 文件）
- 新增 public/images/ 目录（文章图片）
- 新增 src/utils/content.js（文章查询工具）
- 修改 9 个 Vue 组件文件：
  - src/views/Base/index.vue
  - src/views/Base/content/index.vue
  - src/views/Base/content/Recommend.vue
  - src/components/RecentArticle.vue
  - src/components/Tags.vue
  - src/views/New/index.vue
  - src/views/home/jiNeng.vue
  - src/views/home/nav.vue
  - src/views/TagList/index.vue
- 移除 axios 依赖（文章相关）
