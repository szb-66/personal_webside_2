<template>
    <div class="jiNeng" @mouseover="isHovering = true" @mouseleave="isHovering = false">
        <Transition name="fade">
            <div class="card-overlay" v-show="isHovering">
                <JiNengMini v-for="(item, i) in jiNengLine" :key="i" :data="item"></JiNengMini>
                <p style="height: 2rem;">...</p>
            </div>
        </Transition>
        <div class="text">技能</div>
        <div class="text2">无限可能</div>
        <div class="img">
            <img src="/images/app.png">
            <img src="/images/app.png">
        </div>
    </div>
</template>




<script setup>
import { ref } from 'vue';
import JiNengMini from '../jiNeng/jiNengMini.vue'

let isHovering = ref(false);


const jiNengLine = [
    {
        "name": "HTML5",
        "src": "/images/logo/html5.png",
        "url":"https://www.w3school.com.cn/html/html5_intro.asp"
    },
    {
        "name": "CSS3",
        "src": "/images/logo/css3.png",
        "url":"https://developer.mozilla.org/zh-CN/docs/Web/CSS"
    },
    {
        "name": "JavaScript",
        "src": "/images/logo/js.png",
        "url":"https://developer.mozilla.org/zh-CN/docs/learn/JavaScript"
    },
    {
        "name": "Vue3",
        "src": "/images/logo/vue3.png",
        "url":"https://cn.vuejs.org/guide/introduction.html"
    },
    {
        "name": "Photoshop",
        "src": "/images/logo/ps.png",
        "url":"https://www.adobe.com/cn/products/photoshop.html"
    },
    {
        "name": "Sketch",
        "src": "/images/logo/sketch.png",
        "url":"https://www.sketch.com/"
    },
    {
        "name": "Figma",
        "src": "/images/logo/figma.png",
        "url":"https://www.figma.com/"
    },
    {
        "name": "Illustrator",
        "src": "/images/logo/ai.png",
        "url":"https://www.adobe.com/cn/products/illustrator.html"
    },
    {
        "name": "Cinema 4D",
        "src": "/images/logo/c4d.png",
        "url":"https://www.maxon.net/cn/"
    },
    {
        "name": "After Effects",
        "src": "/images/logo/ae.png",
        "url":"https://www.adobe.com/cn/products/aftereffects.html"
    },
    {
        "name": "Js Design",
        "src": "/images/logo/jsdesign.png",
        "url":"https://js.design/"
    },
    {
        "name": "Principle",
        "src": "/images/logo/principle.png",
        "url":"https://principleformac.com/"
    },
    {
        "name": "Marvelous Designer",
        "src": "/images/logo/md.png",
        "url":"https://www.marvelousdesigner.com/"
    },
    {
        "name": "Experience Design",
        "src": "/images/logo/xd.png",
        "url":"https://www.adobe.com/cn/products/xd.html"
    }
]

</script>




<style lang="less" scoped>
.jiNeng {
    background-color: #fff;
    border-radius: 16px;
    border: 1px solid var(--border);
    text-align: left;
    padding: 2rem 3rem;
    position: relative;
    overflow: hidden;
    height: 100%;

    &:hover {
        // 指针普通样式
        cursor: default;
    }

    .text {

        color: var(--text-3);
        font-size: 0.8rem;
    }

    .text2 {
        margin-top: 1rem;
        font-size: 2.5rem;
        font-weight: 700;
    }

    .img {
        display: flex;
        position: absolute;
        top: 62%;
        left: 50%;
        height: 65%;
        transform: translate(-50%, -50%) rotate(-30deg);
        animation: move 40s infinite linear;
    }

    @keyframes move {
        0% {
            transform: translate(-50%, -50%) rotate(0) translateX(0%);
        }

        100% {
            transform: translate(-50%, -50%) rotate(0) translateX(-25%);
        }
    }

    .card-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 2rem 3rem 3rem 3rem;
        height: 70%;
        width: 100%;
        background-color: var(--white);
        z-index: 1;
        display: flex;
        align-items: flex-start;
        gap:0.5rem;
        flex-wrap: wrap;

    }

    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.3s;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
        bottom: -10px;
    }

}
</style>