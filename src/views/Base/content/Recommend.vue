<template>
    <div class="recommend">
        <div class="Title">
            推荐文章
        </div>
        <el-row :gutter="16">
            <el-col :span="12" v-for="(article, index) in articles" :id="index" class="item">
                <Article :article="article"></Article>
            </el-col>
        </el-row>
    </div>
</template>




<script setup>
import { ref, onMounted, watch, reactive } from 'vue'
import axios from 'axios'
import Article from '../../components/Article.vue'

var options = {
    method: 'GET',
    url: 'https://szb.design:3000/api/articles/idArray',
    params: { idArray: '[489,141,475,487]' }
};

let articles = ref() //请求的数据

//请求数据
axios.request(options).then(function (response) {
    articles.value = response.data;
    console.log(articles);
}).catch(function (error) {
    console.error(error);
});

</script>




<style lang="less" scoped>
.recommend {
    background-color: var(--white);
    border: 1px solid var(--border);
    padding: 1rem;
    border-radius: 1rem;
    margin-bottom: 2rem;

    .Title {
        margin: 1rem;
        font-size: 1.5rem;
        font-weight: 600;
    }
    .item{
        margin-bottom: 1rem;
    }
}
</style>