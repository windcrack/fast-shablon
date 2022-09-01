import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('../views/Main.vue')
  },
  {
    path: '/add',
    name: 'Add',
    component: () => import('../views/AddForm.vue')
  },
  {
    path: '/req',
    name: 'ReqForm',
    component: () => import('../views/InfoReqForTick.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
