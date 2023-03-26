<template>
    <div class="bottom">
        <div v-for="(item, i) in data" :key="i" :class="['item', { 'item2': activeIndex === i }]"
            @mouseover="activeIndex = i" @mouseleave="activeIndex = -1" :style="{ background: item.bgc }" @click="go()">
            <div class="text">{{ item.title }}</div>
            <div class="xian"></div>
            <img :src="item.imgSrc" class="img">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const activeIndex = ref(-1);

const data = [
    {
        title: "设计知识库",
        imgSrc: "src/assets/images/sheJi.png",
        bgc: "linear-gradient(90deg, #358CFF 0%, #25A7FF 100%)",
        url: ""
    },
    {
        title: "开发知识库",
        imgSrc: "src/assets/images/kaiFa.png",
        bgc: "linear-gradient(90deg, #FF6854 0%, #FF9147 100%)",
        url: ""
    },
    {
        title: "最新发布",
        imgSrc: "src/assets/images/recently.png",
        bgc: "linear-gradient(90deg, #18E7AF 0%, #1BE9CB 100%)",
        url: ""
    },
]

function go(){
    // 编程路由,名称跳转
    router.push({ name: 'ArticleList' });
}

</script>

<style lang="less" scoped>
.bottom {
    flex: 3;
    display: flex;
    gap: 1rem;

    .item {
        flex: 1;
        // background: linear-gradient(90deg, #358CFF 0%, #25A7FF 100%);
        transition: all 0.5s cubic-bezier(0.445, 1.05, 0.55, 1.15);
        border-radius: 1rem;
        padding: 1rem;

        display: flex;
        flex-direction: column;
        justify-content: center;

        position: relative;
        overflow: hidden;


        .text {
            font-size: 1rem;
            font-weight: 700;
            color: white;
            text-align: left;
            z-index: 2;
            // 文字不换行，超出部分显示省略号
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .xian {
            width: 40px;
            height: 4px;
            background: #FFFFFF;
            margin-top: 0.5rem;
            z-index: 2;
        }

        .img {
            position: absolute;
            right: -8.72%;
            top: 16.38%;
            transform: rotate(15deg);
            filter: blur(4px);
            height: 100%;
            transition: all 0.5s cubic-bezier(0.445, 1.05, 0.55, 1.15);
        }
    }

    .item2 {
        flex: 2;
        cursor: pointer;

        .img {
            right: 8.72%;
            top: 10%;
            height: 80%;
            transform: rotate(0);
            filter: blur(0);
        }
    }

}
</style>