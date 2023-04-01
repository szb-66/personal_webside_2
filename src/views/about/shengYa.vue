<template>
    <div class="shengYa">
        <div class="one">生涯</div>
        <div class="two">无限进步</div>
        <div v-for="(item,i) in data" :key="i">
            <div class="three">
                <div class="circle" :style="{backgroundColor: item.color}"></div>
                <div>{{ item.name }}</div>
            </div>
        </div>
        <img src="/images/shengYaImg.png" alt="生涯图片">
    </div>
</template>

<script setup>
const data = [
    {
        name:"JMU，美术与设计学院",
        color:"#007CFF"
    },
    {
        name:"TANSUN，UI设计师",
        color:"#00D0FF"
    },
    {
        name:"BUKE，设计组长",
        color:"#FF0000"
    }
]

</script>

<style lang="less" scoped>
.shengYa{
    display: flex;
    position: relative;
    flex-direction: column;
    height: 100%;
    background-color: var(--white);
    border-radius: 16px;
    border: 1px solid var(--border);
    padding: 2rem 3rem;
    .one{
        font-size:0.8rem;
        color: var(--text-3);
        margin-bottom: 1rem;
    }
    .two{
        font-size: 2.5rem;
        font-weight: 600;
        color: var(--text-1);
        margin-bottom: 1rem;

    }
    .three{
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        color: var(--text-2);
        .circle{
            width: 0.5rem;
            height: 0.5rem;
            border-radius: 50%;
            margin-right: 10px;
        }
    }
    img{
        position: absolute;
        bottom: 3rem;
        left: 0;
        width: 100%;
    }
}
</style>