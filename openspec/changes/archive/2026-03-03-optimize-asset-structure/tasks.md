## 1. 检查和清理 dist 目录

- [x] 1.1 检查 .gitignore 中是否已包含 dist/
- [x] 1.2 删除本地 dist/ 目录

## 2. 分析图片使用情况

- [x] 2.1 对比 src/assets/images 和 public/images 的差异
- [x] 2.2 检查代码中图片引用路径

## 3. 整合重复资源

- [x] 3.1 确定需要保留的资源位置 (保持 src/assets/images/ 和 public/images/ 混合使用)

## 4. 验证

- [x] 4.1 运行 npm run build 确保构建正常
- [x] 4.2 删除 src/assets/images 目录，统一使用 public/images
