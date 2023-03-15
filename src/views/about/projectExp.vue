<template>
  <div class="objectExp">
    <!-- 标题 -->
    <div class="exp-title">
      <div class="zhaungshi"></div>
      <div class="titleAll">项目经历</div>
    </div>
    <div v-for="(item, index) in items" :key="index" @mouseenter="expand(index)">
      <div class="title"
        :style="{ background: index % 3 === 0 ? 'linear-gradient(95.87deg, #2F7AFF -1.21%, #02D0FF 100%)' : index % 3 === 1 ? 'linear-gradient(94.84deg, #FF5472 0%, #FF7D06 100%)' : 'linear-gradient(90deg, #07CE98 0%, #06E4C4 100%)' }">
        <strong>{{ item.title }}</strong>
      </div>
      <div class="content" :style="{ height: item.expanded ? '10rem' : '0' }" @scroll="handleScroll">
        <div v-for="(contentItem, contentIndex) in item.content" :key="contentIndex">{{ contentItem }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import projectExp from '../../assets/data/projectExp.json'
const items = ref(projectExp)

const expand = (index) => {
  items.value[index].expanded = true
  items.value.forEach((item, i) => {
    if (i !== index) {
      item.expanded = false
    }
  })
}
// 默认只展开第一个
expand(0)


</script>

<style scoped lang="less">
.objectExp {
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  border: 1px solid var(--border);
  overflow: hidden;
  background-color: white;
  height: 100%;

  .exp-title {
    display: flex;
    gap: 12px;
    margin: 2rem 1rem 1rem 2rem;

    .titleAll {
      font-size: 20px;
      font-weight: 600;
      line-height: 20px;
    }

    .zhaungshi {
      width: 4px;
      height: 20px;
      background: #3278FF;
      border-radius: 32px;
    }
  }

  .title {
    height: 3rem;
    line-height: 3rem;
    padding: 0 2rem;
    margin: 0.5rem;
    border-radius: 1rem;
    color: var(--white);
    // 手指
    cursor: pointer;
  }

  .content {
    height: 0;
    overflow: auto;
    transition: all 0.5s;

    // 隐藏部分添加滚动条
    div {
      padding: 0.2rem 2rem;
      line-height: 150%;
      color: var(--text-2);
    }
  }
}

/* 隐藏默认滚动条 */
::-webkit-scrollbar {
  display: none;
}
</style>