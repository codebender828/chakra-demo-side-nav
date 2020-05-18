import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/pages/about.vue')
  },
  {
    path: '/work',
    name: 'work',
    component: () => import('@/pages/work.vue')
  },
  {
    path: '/hobbies',
    name: 'hobbies',
    component: () => import('@/pages/hobbies.vue')
  }
]

export default new VueRouter({
  routes
})
