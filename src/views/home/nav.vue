<template>
    <div>
        <ul class="nav">
            <li v-for="(module, index) in modules" :key="index" @click="currentModule = index"
                :class="{ active: currentModule === index }">{{ module.name }}</li>
        </ul>
        <el-row :gutter="16" class="content">
            <el-col :span="12" v-for="(article, index) in currentArticles" :key="index" style="margin-bottom: 1rem;">
                <ArticleCard  :article="article">
                </ArticleCard>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import articleList from '../../assets/data/articleList.json'
import ArticleCard from './card.vue'

const modules = [
    { name: '项目复盘', articles: articleList.module1 },
    { name: '插画设计', articles: articleList.module2 },
    { name: '3D设计', articles: articleList.module3 }
]

const currentModule = ref(0)
const currentArticles = computed(() => modules[currentModule.value].articles)

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

.content {
    margin-top: 1em;
}

</style>