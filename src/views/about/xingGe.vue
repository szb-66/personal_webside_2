<template>
    <div class="xingGe">
        <div class="one">性格</div>
        <div class="two">建筑师</div>
        <div class="three">INTJ-A</div>
        <div class="four">
            <span>在</span>
            <span class="web" @click="goOne()">16spanersonalities</span>
            <span>了解更多关于</span>
            <span class="web" @click="goTwo()">建筑师</span>
        </div>
        <img class="five" src="src/assets/images/xingGeImg.png" alt="性格图片">
    </div>
</template>

<script setup>
// 网页跳转
function goOne() {
    window.open("https://www.16personalities.com/")
}
function goTwo() {
    window.open("https://www.16personalities.com/intj-personality")
}

</script>

<style lang="less" scoped>
.xingGe {
    display: flex;
    position: relative;
    flex-direction: column;
    height: 100%;
    background-color: var(--white);
    border-radius: 16px;
    border: 1px solid var(--border);
    padding: 2rem 3rem;
    cursor: default;
    overflow: hidden;

    .one {
        font-size: 0.8rem;
        color: var(--text-3);
        margin-bottom: 1rem;
    }

    .two {
        font-size: 2.5rem;
        font-weight: 600;
        color: var(--text-1);
        margin-bottom: 1rem;
    }

    .three {
        font-size: 2.5rem;
        font-weight: 600;
        color: #785D87;
        margin-bottom: 1rem;
    }

    .four {
        color: var(--text-3);
        font-size: 0.8rem;
        position: absolute;
        bottom: 2rem;
        display: flex;
        gap: 0.2rem;
        z-index: 1;

        .web {
            border-bottom: 1px solid transparent;
            &:hover {
                color: var(--blue);
                cursor: pointer;
                // 添加下划线
                border-bottom: 1px solid var(--blue);
            }
        }
    }

    .five {
        position: absolute;
        right: 3rem;
        top: 50%;
        transform: translateY(-50%);
        height: 80%;
        transition: all 0.5s;
    }

    &:hover {
        .five {
            transform: translateY(-30%) rotate(-5deg) scale(1.5);
        }
    }

}
</style>