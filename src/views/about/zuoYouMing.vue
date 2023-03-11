<template>
    <div class="zuoYouMing">
        <div class="one">座右铭</div>
        <div class="two">好学近乎知，</div>
        <div class="three">力行近乎仁，</div>
        <div class="four">知耻近乎勇。</div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.zuoYouMing {
    display: flex;
    // position: relative;
    flex-direction: column;
    height: 100%;
    background-color: var(--white);
    border-radius: 16px;
    border: 1px solid var(--border);
    padding: 2rem 3rem;
    cursor: default;
    overflow: hidden;

    // 不换行
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

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
        color: var(--text-2);
        margin-bottom: 1rem;
    }

    .four {
        font-size: 2.5rem;
        font-weight: 600;
        color: var(--text-3);
        margin-bottom: 1rem;
    }
}</style>