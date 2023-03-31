<template>
    <div class="top">
        <img class="one" src="/images/xinXiTop.png" alt="地图">
        <div class="two">
            <span>现居地</span>
            <strong>中国</strong>
            <strong>杭州</strong>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.top{
    border-radius: 16px;
    border: 1px solid #e3e8f7;
    height: 100%;
    cursor: default;
    background-color: var(--white);
    overflow: hidden;
    position: relative;

    .one{
        width: 100%;
        height: 100%;
        // 图片不变形
        object-fit: cover;
        // move,贝塞尔弹性
        transition: all 1s cubic-bezier(0.25, 0.46, 0.45, 1.1);
    }
    .two{
        position: absolute;
        bottom: 0;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        height: 3rem;
        background-color: var(--white-op80);
        width: 100%;
        padding: 0 3rem;
        // 背景模糊
        backdrop-filter: blur(4px);
        // move
        transition: all 01s;
    }

    &:hover{
        .two{
            bottom: -3rem;
        }
        .one{
            transform: scale(1.3);
        }
    }
    
}

</style>