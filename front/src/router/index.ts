import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CoverView from '@/views/CoverView.vue'
import NotFoundPage from '@/views/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cover',
      name: 'cover',
      component: CoverView
    },
    {
      path: '/404',
      name: 'NotFoundPage',
      component: NotFoundPage
    },
    {
      path: '/:catchAll(.*)',
      redirect: (to) => {
        return { path: '/404', query: { from: to.fullPath } }
      }
    }
  ]
})

export default router
