<template>
    <div class="teChang">
        <div class="one">特长</div>
        <div class="two">地球村长点闪电工效专业户</div>
        <div class="three">学习能力MAX</div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.teChang{
    display: flex;
    // position: relative;
    flex-direction: column;
    height: 100%;
    background: linear-gradient(94.84deg, #FF5472 0%, #FF7D06 100%);
    border-radius: 16px;
    border: 1px solid var(--border);
    padding: 2rem 3rem;
    cursor: default;
    overflow: hidden;
    .one{
        font-size: 0.8rem;
        color: var(--white-op80);
        margin-bottom: 2rem;
    }
    .two{
        font-size: 2.5rem;
        font-weight: 600;
        color: var(--white);
        margin-bottom: 2rem;
        // 不换行
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

    }
    .three{
        font-size: 2.5rem;
        font-weight: 600;
        color: var(--white-op80);
        margin-bottom: 1rem;
    }

}

</style>