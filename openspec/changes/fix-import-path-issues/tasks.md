## 1. 修复视图组件 Import 路径

- [ ] 1.1 修复 `src/views/home/index.vue` - 将 `../../components/` 改为 `../../../components/`
- [ ] 1.2 修复 `src/views/home/nav.vue` - 将 `../../components/Loading.vue` 改为 `../../../components/Loading.vue`
- [ ] 1.3 修复 `src/views/New/index.vue` - 将所有 `../../components/` 改为 `../../../components/`
- [ ] 1.4 修复 `src/views/Base/index.vue` - 将所有 `../../components/` 改为 `../../../components/`
- [ ] 1.5 修复 `src/views/Base/content/index.vue` - 将所有 `../../components/` 改为 `../../../components/`
- [ ] 1.6 修复 `src/views/Base/content/Recommend.vue` - 将 `../../components/Article.vue` 改为 `../../../components/Article.vue`
- [ ] 1.7 修复 `src/views/TagList/index.vue` - 将所有 `../../components/` 改为 `../../../components/`

## 2. 修复路由 Import 路径

- [ ] 2.1 修复 `src/router/index.js` - 将 `../views/content/index.vue` 改为 `../views/Base/content/index.vue`

## 3. 验证构建

- [ ] 3.1 运行 `npm run build` 验证构建成功
- [ ] 3.2 验证 Vercel 部署成功
