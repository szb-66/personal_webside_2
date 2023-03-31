<template>
    <div class="main">
        <el-row :gutter="16">
            <!-- 左边 -->
            <el-col :span="19">
                <div class="articleList">
                    <img :src="url" class="titleImg">
                    <!-- 文章列表 -->
                    <div>
                        <Article v-for="(item, index) in showTableData" :key="index" :article="item">
                        </Article>
                    </div>
                    <!-- 分页器 -->
                    <el-pagination background layout="total, sizes, prev, pager, next, jumper"
                        @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageIndex"
                        :page-size="pageSize" :page-sizes="[2, 4, 6, 10]" :total="total">
                    </el-pagination>
                </div>
            </el-col>
            <!-- 右边 -->
            <el-col :span="5" class="right">
                <div class="right">
                    <About></About>
                    <Tags></Tags>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue'
import About from '../../components/about.vue'
import Tags from '../../components/tags.vue'
import { useRouter, useRoute } from 'vue-router'
import Article from '../../components/Article.vue'

// 接受路由传过来的id
const route = useRoute()
const base = route.params.base

const pageIndex = ref(1); // 第几页
const pageSize = ref(8); // 每页几条数据
const total = ref(0); // 总条目数
const allTableData = ref([]); // 所有的数据
const showTableData = ref([]); // 当前展示的数据

const url = ref('')

// 异步数据请求
onMounted(async () => {
    if (base === 'design') {
        await axios.get(`/szb-api/articles/knowledge_base`, {
            params: { knowledge_base: '设计知识库' }
        })
            .then(res => {
                allTableData.value = res.data;
                // 属性：id, title, type, tags, created_at, updated_at, cover_img_url (按updated_at排序)
            })
            .catch(err => {
                console.log(err);
            })
        url.value = '/images/baseSheJi.png'
    } else {
        await axios.get(`/szb-api/articles/knowledge_base`, {
            params: { knowledge_base: '开发知识库' }
        })
            .then(res => {
                allTableData.value = res.data;
                // 属性：id, title, type, tags, created_at, updated_at, cover_img_url (按updated_at排序)
            })
            url.value ='/images/baseKaiFa.png'

    }

    setTimeout(() => {
        // 3. 获取总条目数
        total.value = allTableData.value.length;
        // 4. 根据当前是第几页、每页展示几条，去截取需要展示的数据
        getShowTableData();
    }, 1000);



});

function getShowTableData() {
    // 5. 获取截取开始索引
    const begin = (pageIndex.value - 1) * pageSize.value;
    // 6. 获取截取结束索引
    const end = pageIndex.value * pageSize.value;
    // 7. 通过索引去截取，从而展示
    showTableData.value = allTableData.value.slice(begin, end);
}
// 8. 页数改变，重新截取
function handleCurrentChange(val) {
    pageIndex.value = val;
    getShowTableData();
}

// 9. 条目数改变，也重新截取
function handleSizeChange(val) {
    pageIndex.value = 1;
    pageSize.value = val;
    getShowTableData();
}
</script>

<style lang="less" scoped>
.main {
    max-width: 1440px;
    padding: 0 1.5rem;
    margin: 90px auto 0 auto;


    .articleList {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        background-color: var(--white);
        border: 1px solid var(--border);
        padding: 1rem;
        border-radius: 1rem;
        margin-bottom: 2rem;

        .newTitle {
            margin: 1rem;
            font-size: 1.5rem;
            font-weight: 600;
        }
    }

    .right {
        // padding: 0!;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

}
</style>