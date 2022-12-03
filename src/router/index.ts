import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import modifier from '../components/modifier.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:  () => import('../views/list.vue')
    },
    {
      path: '/ajouter',
      name: 'list',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component:HomeView
    },
    {
      path: '/modifier/:id',
      name: 'modifier',
  
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: modifier
    }
  ]
})

export default router
