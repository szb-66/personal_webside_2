## 1. 环境准备

- [x] 1.1 安装依赖: npm install marked gray-matter
- [x] 1.2 创建 src/content/ 目录结构 (develop/, design/, life/)
- [x] 1.3 创建 public/images/ 目录

## 2. 核心工具开发

- [x] 2.1 创建 src/utils/content.js - 文章查询工具
- [x] 2.2 实现 getAllArticles() - 获取所有文章
- [x] 2.3 实现 getArticleBySlug(slug) - 获取单篇文章
- [x] 2.4 实现 getArticlesByKnowledgeBase(base) - 按知识库筛选
- [x] 2.5 实现 getArticlesByTag(tag) - 按标签筛选
- [x] 2.6 实现 getLatestArticles(limit) - 最新文章
- [x] 2.7 实现 getTags() - 获取标签列表
- [x] 2.8 实现 getTypes() - 获取分类列表
- [x] 2.9 实现 parseCatalog(content) - 解析目录结构
- [x] 2.10 实现 markdownToHtml(content) - Markdown 转 HTML

## 3. 组件改造

- [x] 3.1 改造 src/views/Base/index.vue - 知识库列表页
- [x] 3.2 改造 src/views/Base/content/index.vue - 文章详情页
- [x] 3.3 改造 src/views/Base/content/Recommend.vue - 推荐文章
- [x] 3.4 改造 src/components/RecentArticle.vue - 最新文章组件
- [x] 3.5 改造 src/components/Tags.vue - 标签列表组件
- [x] 3.6 改造 src/views/New/index.vue - 最新发布页
- [x] 3.7 改造 src/views/home/jiNeng.vue - 首页技能区随机文章
- [x] 3.8 改造 src/views/home/nav.vue - 导航文章列表
- [x] 3.9 改造 src/views/TagList/index.vue - 标签文章列表

## 4. 测试与验证

- [x] 4.1 创建示例文章测试数据
- [x] 4.2 运行 npm run dev 本地测试
- [x] 4.3 运行 npm run build 构建测试
- [ ] 4.4 验证 Vercel 部署

## 5. 清理

- [x] 5.1 移除 axios 依赖（文章相关）
- [x] 5.2 清理无用的后端相关代码
