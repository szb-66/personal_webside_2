## Context

当前项目使用 Vue 3 + Vite 构建，但文章数据依赖后端 API (szb.design:3000) 和 MongoDB。需要改为本地 Markdown 文件存储，实现纯静态部署。

**当前架构**:
- 前端: Vue 3 + Vite + Element Plus
- 数据: 后端 API (Node.js + Express + MongoDB)
- 部署: Vercel (前端) + 自建服务器 (后端)

**目标架构**:
- 前端: Vue 3 + Vite + Element Plus
- 数据: 本地 Markdown 文件
- 部署: Vercel / GitHub Pages (纯静态)

## Goals / Non-Goals

**Goals:**
- 实现纯静态部署，无需后端服务
- 保持现有页面结构和功能不变
- 文章用 Markdown 格式管理
- 图片存放在 public/images/ 目录

**Non-Goals:**
- 不保留原后端 API 接口
- 不迁移旧文章数据（重新开始）
- 不改变网站视觉设计

## Decisions

### 1. Markdown 解析库选择: marked

| 库 | 优点 | 缺点 |
|---|------|------|
| marked | 轻量、简单、无依赖 | 功能较少 |
| markdown-it | 功能全、插件多 | 体积较大 |

**决定**: 使用 **marked**，因为：
- 项目不需要复杂功能（代码高亮等）
- 轻量级，减少打包体积
- 配合 custom renderer 可以满足需求

### 2. Frontmatter 解析

使用 `gray-matter` 库解析 YAML frontmatter。

```javascript
import matter from 'gray-matter'
import { marked } from 'marked'

// 解析示例
const fileContent = `---
title: Vue 3 响应式原理
date: 2024-01-15
tags: [Vue, JavaScript]
---
# 内容...`

const { data, content } = matter(fileContent)
// data = { title: 'Vue 3 响应式原理', date: '2024-01-15', tags: ['Vue', 'JavaScript'] }
// content = '# 内容...'
```

### 3. 文章文件读取方式

使用 Vite 的 `import.meta.glob` 读取所有 Markdown 文件：

```javascript
// 获取所有文章
const modules = import.meta.glob('/src/content/**/*.md', { as: 'raw' })

// 批量读取
const articles = await Promise.all(
  Object.entries(modules).map(async ([path, loader]) => {
    const content = await loader()
    return parseMarkdown(content, path)
  })
)
```

### 4. 目录结构

```
src/
├── content/
│   ├── develop/           # 开发知识库
│   │   ├── vue-basics.md
│   │   └── css-tips.md
│   ├── design/            # 设计知识库
│   │   └── ui-principles.md
│   └── life/              # 生活随笔
│       └── daily.md
├── utils/
│   └── content.js         # 文章查询工具
└── ...

public/images/             # 文章图片
├── vue-basics/
│   ├── 1.jpg
│   └── 2.jpg
├── css-tips/
│   └── demo.png
└── ...
```

### 5. 图片引用规范

Markdown 中使用绝对路径：
```markdown
![截图](/images/vue-basics/1.jpg)
```

### 6. 文章 slug 规则

- 文件名即为 slug: `vue-basics.md` → slug: `vue-basics`
- 目录参与路由: `/content/develop/vue-basics`

## Risks / Trade-offs

- [风险] 图片多会导致仓库大 → [缓解] 使用 Git LFS 或考虑图床
- [风险] Vercel 有部署体积限制 (100MB) → [缓解] 图片多建议用图床
- [风险] 构建速度可能变慢 → [缓解] 考虑按需加载，不一次加载所有文章

## Open Questions

- 图片是否使用 Git LFS 管理？
- 部署平台选择 Vercel 还是 GitHub Pages？
