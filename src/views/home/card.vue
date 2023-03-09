<template>
    <div class="card">
        <!-- 封面 -->
        <div class="cover">
            <img :src="article.cover" alt="封面图片" />
        </div>
        <!-- 文字内容 -->
        <div class="content">
            <h2>{{ article.title }}</h2>
            <div class="info">
                <!-- 标签 -->
                <div class="tags">
                    <span v-for="(tag, index) in article.tags" :key="index">{{ tag }}</span>
                </div>
                <!-- 发布日期 -->
                <div class="date">{{ article.date }}</div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { defineProps } from 'vue'

// 获取父级传过来的卡片数据
defineProps({
    article: Object
})

</script>
  
<style lang="less" scoped>
.card {
    border-radius: 16px;
    border: 1px solid #e3e8f7;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        border: 1px solid #576BF1;
        box-shadow: 0px 0px 20px rgba(66, 90, 239, 0.08);

        h2{
            color: #0A23CB;
        }
        .cover img {
            transform: scale(1.05);
            transform-origin: center;
        }
    }

    .cover {
        overflow: hidden;
        border-radius: 16px 16px 0 0;

        img {
            display: block;
            width: 100%;
            height: auto;
            // 缓入缓出动画
            transition: all 0.4s ease-in-out;


        }
    }
    .content {
        // 左对齐
        text-align: left;
        padding: 1rem;
    
        h2 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 1rem;
            // transition: all 0.5s ease-in;
        }
    
        .info {
            display: flex;
            // 左右分布
            justify-content: space-between;
        }
    
        .tags span {
            margin-right: 0.5rem;
        }
    }
}

</style>