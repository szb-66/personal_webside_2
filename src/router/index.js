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

export default router