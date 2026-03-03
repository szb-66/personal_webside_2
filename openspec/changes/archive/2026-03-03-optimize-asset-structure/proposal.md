## Why

项目中存在重复的资源文件：`dist/`、`src/assets/images/` 和 `public/images/` 目录中包含大量相同的图片文件。这不仅占用额外空间，也增加了维护复杂度。需要分析并优化文件结构。

## What Changes

- 清理 `dist/` 目录（构建产物，可通过 `npm run build` 重新生成）
- 分析 `src/assets/images/` 和 `public/images/` 的使用场景，整合重复资源
- 确定静态资源的正确存放位置

## Capabilities

### New Capabilities
- `asset-structure-optimization`: 优化静态资源目录结构

### Modified Capabilities
- 无

## Non-Goals

- 不修改现有代码中的资源引用路径
- 不删除正在使用的文章配图

## Impact

- 影响 `dist/`、`src/assets/`、`public/` 目录结构
- 需要确认资源引用是否正常工作
