<template>
    <div class="card">
        <!-- 第一行 -->
        <div class="one">你好！很高兴认识你</div>
        <!-- 第二行 -->
        <div class="two">我叫 施志标</div>
        <!-- 第三行 -->
        <div class="three">是一名 UI设计师、交互设计师</div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.card {
    border-radius: 16px;
    border: 1px solid #e3e8f7;
    padding: 0rem 3rem;
    height: 100%;
    cursor: default;
    background: linear-gradient(120deg, rgba(91, 39, 255, 1) 0%, rgba(0, 212, 255, 1) 100%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1rem;
    color: #fff;

    .two {
        font-size: 40px;
        font-weight: 600;
    }
    
    .one,
    .three{
        color: var(--white-op80);
    }
}
</style>