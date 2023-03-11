<template>
    <div class="jiNengMini" @click="goTo()">
        <img :src=data.src alt="false">
        <p>{{data.name}}</p>
    </div>
</template>

<script setup>
// 导入父级数据
import { defineProps } from 'vue'
const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})

function goTo(){
    window.open(props.data.url)
}

</script>

<style lang="less" scoped>
.jiNengMini{
    background-color: var(--bgc);
    border-radius: 100px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 2rem;
    padding-right: 1rem;
    border: 1px solid var(--border);
    margin-bottom: 0.5rem;

    // 过渡
    transition: all 0.3s;

    img{
        height: 100%;
    }

    &:hover{
        cursor: pointer;
        color: var(--white);
        background-color: var(--blue-op90);
    }
}

</style>