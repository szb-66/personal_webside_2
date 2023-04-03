<template>
    <div class="jiNeng" @mouseover="isHovering = true" @mouseleave="isHovering = false" @click="go()">
        <Transition name="fade">
            <div class="card-overlay" v-show="isHovering">
                        <div class="text3">随便逛逛</div>
                        <img src="../../assets/images/go.png" class="img2">
            </div>
        </Transition>
        <div class="text">探索边界</div>
        <div class="text2">szb.design</div>
        <div class="img">
            <img src="../../assets/images/app.png">
            <img src="../../assets/images/app.png">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter()

let isHovering = ref(false);
const randomId = ref(null);

function go() {
    axios.get(`https://szb.design:3000/api/randomId`)
        .then(res => {
            randomId.value = res.data[0].id;
            console.log(randomId.value);
            router.push({
                name: 'content',
                params: {
                    id: randomId.value
                }
            })
        })
        .catch(err => {
            console.log(err);
        })
}

</script>

<style lang="less" scoped>
.jiNeng {
    background-color: #fff;
    border-radius: 16px;
    text-align: left;
    padding: 2rem;
    position: relative;
    overflow: hidden;
    height: 100%;

    :hover {
        cursor: pointer;
    }

    .text {
        font-size: 3rem;
        font-weight: 700;
    }

    .text2 {
        margin-top: 1rem;
        color: rgba(153, 153, 153, 1);
        font-size: 1.2rem;
    }

    .img {
        display: flex;
        position: absolute;
        top: 85%;
        left: 50%;
        height: 100%;
        transform: translate(-50%, -50%) rotate(-30deg);
        animation: move 20s infinite linear;
    }

    @keyframes move {
        0% {
            transform: translate(-50%, -50%) rotate(-30deg) translateX(0%);
        }

        100% {
            transform: translate(-50%, -50%) rotate(-30deg) translateX(-25%);
        }


    }

    .card-overlay {
        position: absolute;
        top: 0;
        left: -40px;
        padding: 0 40px;
        width: 200%;
        height: 100%;
        background-color: var(--blue-op90);
        backdrop-filter: blur(8px);
        z-index: 1;
        pointer-events: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
  
        // transition: all 2s;
        .box{
            margin-left: 50px;
        }
        .text3 {
            z-index: 1;
            font-size: 5rem;
            font-weight: 700;
            color: white;
    
            margin-left: 2rem;
        }
    
        .img2 {
            z-index: 1;
            margin-left: 2rem;
            margin-top: 1rem;
        }
    }
    
    .fade-enter-active,
    .fade-leave-active {
        transition: all 0.3s cubic-bezier(0.445, 1.05, 0.55, 1.15);
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
        left: -200px;
    }

}
</style>