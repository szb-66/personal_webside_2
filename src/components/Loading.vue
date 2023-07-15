<template>
    <div class="loading">
        <!-- 半圆 -->
        <div class="loading-circle"></div>
        <div class="text">
            加载中...
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.loading {
    width: 100%;
    height: 100%;
    min-height: 280px;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--white);

    .loading-circle {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 4px solid rgb(108, 154, 255);
        border-top-color: transparent;
        animation: loading 1s infinite linear;
    }

    .text {
        color: var(--text-2);
    }

    @keyframes loading {
        0% {
            transform: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }
}
</style>