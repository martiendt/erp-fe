import { useAuthStore } from '@/stores/auth'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

export const routes = {
  path: '/',
  component: () => import('@/layouts/full-layout.vue'),
  children: [
    {
      path: '',
      component: () => import('./module-index.vue'),
      children: [
        {
          path: 'signin',
          component: () => import('./views/signin.vue'),
        },
      ],
    },
  ],
}
