<template>
    <div class="header"
        :style="{ backgroundColor: isTop ? 'transparent' : '#fff', boxShadow: isTop ? 'none' : '0 0 5px rgba(0, 0, 0, 0.2)' }">
        <div class="main">
            <!-- 左边 -->
            <div class="left">
                <img src="../assets/images/head.png" style=" width: 32px;">
                <button @click="toPage('/home')">首頁</button>
                <button @click="toPage('/about')">关于我</button>
            </div>
            <!-- 右边 -->
            <div class="right">
                <img src="../assets/images/yejianmoshi.png" style=" height: 24px;" @click="open" class="kaiGuan">
                <a href="https://github.com/szb-66/personal-website" target="_blank" class="Github"></a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue';

const router = useRouter()
//创建点击跳转函数
function toPage(url) {
    router.push(url)
}

const scrollTop = ref(0);
const isTop = ref(true);
window.addEventListener('scroll', () => {
    scrollTop.value = document.documentElement.scrollTop;
    isTop.value = scrollTop.value === 0;
});



</script>


<style lang="less" scoped>
.header {
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    z-index: 2;
    background-color: var(--white);
    width: 100vw;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    z-index: 999;
    transition: all 0.3s;


    .main {
        display: flex;
        justify-content: space-between;
        padding: 0 1.5rem;
        line-height: 60px;
        font-weight: 700;

        max-width: 1440px;
        margin: 0 auto;
        text-align: center;

        .left {
            display: flex;
            align-items: center;
            gap: 8px;

            button {
                border-radius: 20px;
                border: 1px solid transparent;
                padding: 0.4em 1em;
                font-size: 1em;
                font-weight: 600;
                cursor: pointer;
                transition: all 0.25s;
                background: rgba(255, 255, 255, 0);
            }

            button:hover {
                background-color: var(--blue);
                color: var(--white);
            }
        }

        .right {
            display: flex;
            align-items: center;
            gap: 20px;

            .kaiGuan:hover {
                cursor: pointer;
            }

            .Github {
                width: 28px;
                height: 28px;
                background-image: url('../assets/images/GitHub.png');
                background-size: 28px 28px;
            }
        }
    }

}

@media(min-width:0px) {
    .main {
        flex-grow: 1;
    }
}

@media(min-width:1440px) {
    .main {
        width: 1440px;
    }
}

</style>