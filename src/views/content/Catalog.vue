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
import { ref, onMounted, defineProps } from 'vue';
import TreeItem from './TreeItem.vue';
import axios from 'axios';

// 获取属性传的id，用于获取对应目录
const props = defineProps({
    id: {
        type: String,
    }
})

const data = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get(`http://localhost:3000/api/articles/catalog/${props.id}`);
        data.value = buildTree(response.data);
        console.log('获取分级目录成功：', data.value);
    } catch (error) {
        console.error('获取分级目录时出现错误：', error);
    }
});

// 递归构建树
const buildTree = (data, parentLevel = 0) => {
    const result = [];

    while (data.length > 0) {
        const item = data.shift();

        if (item.level === parentLevel + 1) {
            result.push(item);
            item.children = buildTree(data, item.level);
        } else {
            data.unshift(item);
            break;
        }
    }

    return result;
};

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
    
  