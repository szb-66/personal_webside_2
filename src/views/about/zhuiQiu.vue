<template>
    <div class="card">
        <div class="one">追求</div>
        <div class="two">披荆斩棘，</div>
        <div class="two">源于热爱。</div>
        <!-- 盒子 -->
        <div class="reset">
            <!-- 滚动字 -->
            <div class="three" ref="threeRef">
                <div class="a">设计</div>
                <div class="b">体验</div>
                <div class="c">编程</div>
                <div class="d">产品</div>
                <div class="a">设计</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const threeRef = ref(null)
let count = 0

onMounted(() => {
    setInterval(() => {
        count++
        threeRef.value.style.transform = `translateY(-${count * 2 + 0.5 * count}rem)`
        if (count === 5) {
            count = 0
            // 将过渡时间设置为 0s，立即重置位置
            threeRef.value.style.transitionDuration = '0s'
            threeRef.value.style.transform = 'translateY(0)'
            // 恢复过渡时间
            setTimeout(() => {
                threeRef.value.style.transitionDuration = '1s'
            }, 50)
        }
    }, 2000)
})
</script>

<style lang="less" scoped>
.card {
    border-radius: 16px;
    border: 1px solid var(--border);
    padding: 0 3rem;
    height: 100%;
    cursor: default;
    background: var(--white);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;

    .one {
        color: var(--text-3);
        margin-bottom: 0.5rem;
        font-size: 0.8rem;
    }

    .two {
        font-size: 2rem;
        font-weight: 600;
    }

    .reset {
        // yinchang
        overflow: hidden;
        height: 2rem;
    }

    .three {
        display: flex;
        flex-direction: column;
        font-size: 2rem;
        font-weight: 600;
        transition-property: transform;
        transition-duration: 0.5s;
        gap: 0.5rem;

        .a {
            background: linear-gradient(180deg, #F6657B 0%, #FA7570 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .b{
            background: linear-gradient(255.96deg, #6B4BB0 0%, #8A7CFB 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .c{
            background: linear-gradient(255.96deg, #12CD72 0%, #18E198 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        .d{
            background: linear-gradient(255.96deg, #09AFF4 0%, #0ECFFE 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
    }

}
</style>