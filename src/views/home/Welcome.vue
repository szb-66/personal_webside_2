<template>
    <div class="welcome">
        <img src="/images/welcome_people.png" class="people">
        <div class="text">
            <img src="/images/welcome_text.png">
        </div>
        <img src="/images/welcome_bg.png" class="bg">
    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.welcome {
    position: relative; // 添加相对定位属性
    width: 100%;
    height: 100%;
    border-radius: 1rem;
    // background: url(../../assets/images/welcome_bg.png) no-repeat;
    background-size: cover;
    // 超出隐藏 
    overflow: hidden;
    box-shadow: var(--box-shadow);
    .bg{
        width: 100%;
        height: 100%;
    }
    .people {
        position: absolute; // 设置为绝对定位
        bottom: 0%; // 将底部与父元素对齐
        // 宽度自适应
        width: 100%;
        z-index: 1;
        // move
        transition: all 0.3s ease-in-out;
    }
    
    .text {
        // 水平居中，垂直居中
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 61, 142, 0.9);
        backdrop-filter: blur(18px);
        // 宽度自适应
        width: 70%;
        height: 50%;
        // move
        transition: all 0.3s ease-in-out;
        
        img {
            // 水平居中，垂直居中
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            // 宽度自适应
            width: 70%;
        }
    }

    &:hover {
        .people {
            bottom: -10%;
        }
        .text{
            top: 40%;
        }
    }
}
</style>