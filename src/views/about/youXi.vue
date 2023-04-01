<template>
    <div class="youXi">
        <div class="one">爱好游戏</div>
        <div class="two">缺氧</div>
        <div class="three">STEAMID:1123051973</div>
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.youXi{
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

    background-image: url(/images/youXiImg.png);
    // 背景图片居中，宽高自适应，可以超出，但是要铺满，不变形
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;


    .one {
        font-size: 0.8rem;
        color: var(--white);
        margin-bottom: 1rem;
    }
    .two{
        font-size: 2.5rem;
        font-weight: 600;
        color: var(--white);
        margin-bottom: 1rem;
    }

    .three {
        color: var(--white);
        position: absolute;
        bottom: 2rem;
    }
}

</style>