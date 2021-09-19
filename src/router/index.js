import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/careers',
    name: 'Careers',
    component: () => import('../views/Careers.vue')
  },
  // {
  //   path: '/swiper',
  //   name: 'Swiper',
  //   component: () => import('../views/Swiper.vue')
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
