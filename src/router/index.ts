import { createRouter, createWebHistory } from 'vue-router'
import { routes as authRoutes } from '@/modules/auth/routes'
import { routes as mainRoutes } from '@/modules/main/routes'
import { routes as masterUserRoutes } from '@/modules/user/routes'

const routes = [mainRoutes, masterUserRoutes, authRoutes]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

export default router
