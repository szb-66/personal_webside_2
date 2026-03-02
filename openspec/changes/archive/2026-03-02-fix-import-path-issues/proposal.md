## Why

项目在本地开发环境 (`npm run dev`) 可以正常运行，但在 Vercel 线上部署执行 `npm run build` 时报错 "Could not resolve"。这是因为 Vite/Rollup 的路径解析比本地开发环境更严格，某些 import 路径在本地能工作但在线上构建时无法解析。

## What Changes

1. 全面检查并修复 `src/views/` 目录下所有 Vue 组件的 import 路径，确保相对路径正确指向 `src/components/` 目录
2. 检查并修复 `src/router/index.js` 中的组件导入路径
3. 建立代码规范：确保所有 import 路径与文件实际位置一致

## Capabilities

### New Capabilities
- `import-path-validation`: 添加路径验证机制，确保所有组件 import 路径在构建时能被正确解析

### Modified Capabilities
- 无

## Impact

- 受影响文件：
  - `src/views/Base/content/index.vue`
  - `src/views/Base/content/Recommend.vue`
  - `src/views/Base/index.vue`
  - `src/views/New/index.vue`
  - `src/views/TagList/index.vue`
  - `src/views/home/index.vue`
  - `src/views/home/nav.vue`
  - `src/router/index.js`
- 无 API 变化
- 无依赖变化
