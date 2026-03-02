## Context

项目使用 Vue 3 + Vite 构建，本地开发使用 `npm run dev` 可以正常运行，但在 Vercel 线上部署执行 `npm run build` 时报错 "Could not resolve"。

**根本原因分析：**
- Vite 在开发模式下使用 esbuild 进行快速预览，对路径解析相对宽松
- Rollup（用于生产构建）对路径解析更严格
- 项目中不同深度的目录结构使用了不一致的相对路径写法

**受影响的目录结构：**
```
src/
├── components/     # 公共组件
├── views/
│   ├── home/       # 2层深度
│   ├── about/      # 2层深度
│   ├── New/        # 2层深度
│   ├── TagList/    # 2层深度
│   └── Base/
│       ├── index.vue           # 2层深度
│       └── content/
│           └── index.vue       # 3层深度
```

## Goals / Non-Goals

**Goals:**
- 修复所有导致线上构建失败的 import 路径问题
- 确保 `npm run build` 能够成功执行

**Non-Goals:**
- 不修改组件的功能逻辑
- 不引入新的依赖
- 不改变项目的架构

## Decisions

### 1. 修复方案选择：直接修正路径 vs 使用别名

**决定：直接修正相对路径**

理由：
- Vue 项目中相对路径是标准做法，简单直观
- Vite 配置别名会增加配置复杂度
- 当前问题仅涉及少量文件，手动修正更高效

### 2. 路径修复规则

**规则：**
- `src/views/home/` 下的文件引用 `src/components/` → `../../../components/`
- `src/views/New/` 下的文件引用 `src/components/` → `../../../components/`
- `src/views/TagList/` 下的文件引用 `src/components/` → `../../../components/`
- `src/views/Base/` 下的文件引用 `src/components/` → `../../../components/`
- `src/views/Base/content/` 下的文件引用 `src/components/` → `../../../components/`

## Risks / Trade-offs

- [风险] 手动修复后，未来新增文件可能再次出现相同问题 → [缓解] 建议在代码审查时注意路径一致性

## Open Questions

- 是否需要配置 Vite 别名 `@` 指向 `src/` 目录来简化路径？
