<template>
    <!-- 分级目录 -->
    <div class="catalog">
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
import { defineProps } from 'vue';
import TreeItem from './TreeItem.vue';

// 获取目录
const props = defineProps({
    data: {
        // 数组
        type: Array,
    }
})
// 目录显示开关
const toggleExpand = (item) => {
    item.isExpanded = !item.isExpanded;
}

</script>

<style scoped>
.catalog {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 1rem;
    background-color: var(--white);
}

</style>
    
  