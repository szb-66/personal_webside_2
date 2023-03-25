<template>
    <!-- 分级目录 -->
    <div class="catalog" ref="fixedDiv" :class="{ fixed: isFixed }" :style="fixedStyle">
        <div class="catalog-title">
            目录
        </div>
        <!-- 目录内容 -->
        <div class="content">
            <tree-item v-for="item in data" :key="item.id" :item="item" @toggle-expand="toggleExpand(item)"></tree-item>
        </div>
    </div>
</template>
    
<script setup>
import { defineProps,onMounted,ref,computed  } from 'vue';
import TreeItem from './TreeItem.vue';

// 获取目录
const props = defineProps({
    data: Array,
    // visibleSectionId: String,
})

// 目录显示开关
const toggleExpand = (item) => {
    item.isExpanded = !item.isExpanded;
}

// 智能浮动
const fixedDiv = ref(null);
const isFixed = ref(false);
// 获取fixedDiv到顶部的距离

onMounted(function(){
    let divOffsetTop = fixedDiv.value.offsetTop+100;
    const onScroll = () => {
        if (!fixedDiv.value) return;
        // 获取滚动距离
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > divOffsetTop) {
            isFixed.value = true;
        } else {
            isFixed.value = false;
        }
    }
    window.addEventListener("scroll", onScroll)
})

// 让浮动菜单的宽度和左右位置保持不变
const fixedStyle = computed(() => {
  if (isFixed.value && fixedDiv.value) {
    const rect = fixedDiv.value.getBoundingClientRect();
    const computedStyle = window.getComputedStyle(fixedDiv.value);
    return {
      width: `${rect.width}px`,
      left: `${rect.left}px`,
      marginLeft: computedStyle.marginLeft,
      marginRight: computedStyle.marginRight,
    };
  } else {
    return {};
  }
});

</script>









<style lang="less" scoped>
.catalog {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    background-color: var(--white);
    .catalog-title {
        margin: 0 0 1rem 1rem;
        font-weight: 700;
    }
}
.fixed {
        position: fixed;
        top: 60px;
        // right: 0;
        z-index: 999;
    }

</style>
    
  