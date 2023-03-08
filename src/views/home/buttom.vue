<template>
    <div class="bottom">
        <div v-for="i in 3" :key="i" :class="['item', { 'item2': activeIndex === i }]" @mouseover="activeIndex = i"
            @mouseleave="activeIndex = 0">
            <div class="text">设计知识库</div>
            <div class="xian"></div>
            <img src="../../assets/images/sheJi.png" class="img">

        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const activeIndex = ref(0);


</script>

<style lang="less" scoped>
.bottom {
    flex: 3;
    display: flex;
    gap: 20px;

    .item {
        flex: 1;
        background: linear-gradient(90deg, #358CFF 0%, #25A7FF 100%);
        transition: all 0.5s cubic-bezier(0.445, 1.05, 0.55, 1.15);
        border-radius: 16px;
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
        .img{
            right: 8.72%;
            top: 10%;
            height: 80%;
            transform: rotate(0);
            filter: blur(0); 
        }
    }

}
</style>