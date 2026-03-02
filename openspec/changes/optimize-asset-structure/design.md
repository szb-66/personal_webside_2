## Context

当前项目有三个地方存放图片资源：
- `dist/` - Vite 构建输出目录（包含优化后的资源）
- `src/assets/images/` - 源码中的图片，供 Vite 打包时处理
- `public/images/` - 静态资源目录，直接复制到构建输出

当前状态：
- `dist/` 和 `src/assets/images/` 图片几乎完全相同
- `public/images/` 包含额外内容（文章配图 ui-principles/）
- `dist/` 是构建产物，不应纳入版本控制

## Goals / Non-Goals

**Goals:**
- 清理重复资源，优化存储
- 建立清晰的资源存放规范
- 验证修改后网站正常运行

**Non-Goals:**
- 不修改代码中的资源引用路径

## Decisions

### 1. dist/ 目录处理
- **决策**: 删除 dist/ 目录
- **理由**: 这是构建产物，应通过 `.gitignore` 排除，不纳入版本控制
- **操作**: 确认 .gitignore 中已包含 dist/

### 2. 图片资源存放位置
- **选项 A**: 统一放在 `public/images/`
  - 优点：简单直观，Vite 会直接复制到 dist
  - 缺点：无法利用 Vite 的指纹哈希优化

- **选项 B**: 统一放在 `src/assets/images/`
  - 优点：Vite 会处理优化、哈希、懒加载
  - 缺点：大型文件可能影响首屏加载

- **选项 C**: 混合使用
  - 文章配图 → `public/images/`
  - UI 组件用图 → `src/assets/images/`

**决策**: 采用选项 C
- `public/images/` - 文章配图、用户上传内容
- `src/assets/images/` - UI 元素、组件图标

### 3. 需要清理的重复文件
对比 `src/assets/images/` 和 `public/images/`：
- 保留 `public/images/` 中的版本
- 考虑删除 `src/assets/images/` 中重复的部分

## Risks / Trade-offs

- [风险] 删除 src/assets/images 可能影响代码引用 → 需先检查引用
- [风险] 修改后需全面测试确保功能正常 → 建议本地验证后再提交
