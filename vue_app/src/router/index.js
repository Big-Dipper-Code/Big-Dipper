import * as VueRouter from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/pages/index.vue'),
    redirect: '/algorithm',
  },
  {
    path: '/algorithm',
    component: () => import('@/pages/algorithm/index.vue')
  },
  {
    path: '/tests/if-block',
    component: () => import('@/pages/tests/if-block/index.vue')
  }
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
})

export default router