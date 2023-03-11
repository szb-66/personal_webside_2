import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
  { path: "/", redirect: "/home", },
  { 
    path: '/home', 
    component: () => import('../views/home/index.vue') 
  },
  { 
    path: '/about', 
    component: () => import('../views/about/index.vue') 
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, 
})

// 切换页面，自动回顶部
router.afterEach((to, from) => {
  window.scrollTo(0, 0)
})

export default router