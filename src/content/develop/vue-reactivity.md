---
title: Vue 3 响应式原理
date: 2024-01-15
tags: [Vue, JavaScript]
type: 技术
knowledge_base: develop
cover: /images/vue-reactivity/cover.jpg
description: 深入理解 Vue 3 的响应式系统
---

# Vue 3 响应式原理

## 什么是响应式

响应式是 Vue 的核心特性之一。当数据变化时，视图会自动更新。

## reactive vs ref

### reactive

```javascript
import { reactive } from 'vue'

const state = reactive({
  count: 0
})
```

### ref

```javascript
import { ref } from 'vue'

const count = ref(0)
```

## 总结

Vue 3 的响应式系统基于 ES6 Proxy 实现，性能更好。
