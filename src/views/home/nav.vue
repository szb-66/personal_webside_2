<template>
    <div>
        <ul class="nav">
            <li v-for="(type, index) in types" :key="index" @click="getArticles(type, index)"
                :class="{ active: currentModule === index }">{{ type }}</li>
        </ul>

        <el-row :gutter="16">
            <el-col :span="12" v-for="(article, index) in articleList" :key="index" style="margin-bottom: 1rem;">
                <ArticleCard :article="article"></ArticleCard>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import ArticleCard from './card.vue'
import axios from 'axios'


const types = ref(null);// 文章类型
const articleList = ref([]);// 文章列表
const currentModule = ref(0)// 选中的id

onMounted(() => {
    getTypes();
});
// 获取分类
async function getTypes() {
    try {
        const response = await axios.get('https://szb.design:3000/api/types');
        types.value = response.data.map(item => item.type)
        // console.log('获取类型成功：', response.data);
    } catch (error) {
        console.error('获取类型失败：', error);
    }
}

// 获取分类中的文章信息
async function getArticles(type, index) {
    try {
        const response = await axios.get('https://szb.design:3000/api/articles/info', {
            params: { type }
        });
        articleList.value = response.data;

    } catch (error) {
        console.error('获取文章失败：', error);
    }
    if (types.value !== null) {
        currentModule.value = index
    }
}

// 刷新或进入页面自动获取已经选中的type数据
watch(() => types.value, (newValue) => {
    if (newValue !== null) {
        getArticles(newValue[0], 0);
    }
});

</script>





<style lang="less" scoped>
.nav {
    display: flex;
    text-align: left;
    height: 52px;
    line-height: 52px;
    background-color: var(--white);
    border: 1px solid var(--border);
    border-radius: 1rem;
    padding: 0 12px;
    margin-bottom: 1rem;
    align-items: flex-start;
    gap: 0.5em;
    align-items: center;
    transition: all 0.25s;

    &:hover {
        border: 1px solid var(--blue);
        box-shadow: var(--box-shadow);
    }

    li {
        padding: 0.4em 1em;
        font-weight: 700;
        border-radius: 1rem;
        line-height: 1rem;
        cursor: pointer;
        transition: all 0.25s;

        border: 1px solid transparent;

        &:hover:not(.active) {
            border: 1px solid var(--blue);
            color: var(--blue);
        }

        &.active {
            // 设置选中状态的样式
            background-color: var(--blue);
            color: var(--white);
        }
    }
}
</style>