<template>
    <div>
        <ul class="nav">
            <li v-for="(item, index) in navItems" :key="index" @click="selectItem(index)"
                :class="{ active: selectedIndex === index }">{{ item }}</li>
        </ul>
        <div class="content">
            <p v-for="(article, index) in articles[selectedIndex]" :key="index">{{ article }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const navItems = ['项目复盘', '插画设计', '3D设计']
const selectedIndex = ref(0)
const articles = [
    ['文章1-1', '文章1-2', '文章1-3'],
    ['文章2-1', '文章2-2', '文章2-3'],
    ['文章3-1', '文章3-2', '文章3-3']
]

const selectItem = (index) => {
    selectedIndex.value = index
}
</script>

<style lang="less" scoped>
.nav {
    display: flex;
    text-align: left;
    height: 52px;
    line-height: 52px;
    background-color: #fff;
    border: 1px solid #E3E8F7;
    border-radius: 16px;
    padding: 0 12px;
    align-items: flex-start;
    gap: 0.5em;
    align-items: center;
    transition: all 0.25s;

    &:hover {
        border: 1px solid #646cff;
        box-shadow: 0px 0px 20px rgba(66, 90, 239, 0.08);
    }

    li {
        padding: 0.4em 1em;
        font-weight: 700;
        border-radius: 20px;
        line-height: 1rem;
        cursor: pointer;
        transition: all 0.25s;

        border: 1px solid transparent;
        background: rgba(255, 255, 255, 0);

        &:hover:not(.active) {
            border: 1px solid #646cff;
            background-color: #fff;
            color: #646cff;
        }

        &.active {
            // 设置选中状态的样式
            background-color: #646cff;
            color: #ffffff;
        }
    }
}
.content{
    margin-top: 1em;
    p{
        margin: 0;
        padding: 0.5em 0;
        border-bottom: 1px solid #E3E8F7;
    }
}
</style>