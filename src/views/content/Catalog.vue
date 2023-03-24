<template>
    <div>
        <h1 @click="toggleCatalog">分级目录</h1>
        <ul v-show="isCatalogExpanded">
            <li v-for="header in headers" :key="header.id" :style="{ marginLeft: (header.level - 1) * 20 + 'px' }">
                <a :href="'#' + header.id">{{ header.text }}</a>
            </li>
        </ul>
    </div>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// 获取属性传的id
const props = defineProps({
  id:{
    type: String,
  }
})

const headers = ref([]);
const isCatalogExpanded = ref(false);

const toggleCatalog = () => {
    isCatalogExpanded.value = !isCatalogExpanded.value;
};

onMounted(async () => {
    try {
        const response = await axios.get(`http://localhost:3000/api/articles/catalog/${props.id}`);
        headers.value = response.data;
    } catch (error) {
        console.error('获取分级目录时出现错误：', error);
    }
});
</script>
  