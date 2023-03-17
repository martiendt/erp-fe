import { useAuthStore } from '@/stores/auth'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'

export const routes = {
  path: '/master',
  component: () => import('@/layouts/app-layout.vue'),
  meta: {
    shortcut: 'main',
  },
  children: [
    {
      path: 'user',
      component: () => import('./module-index.vue'),
      meta: {
        shortcut: 'main',
        menu: 'master',
      },
      children: [
        {
          path: '',
          component: () => import('./views/index.vue'),
          meta: {
            shortcut: 'main',
            menu: 'master',
            submenu: 'user',
          },
        },
        {
          path: 'create',
          component: () => import('./views/create.vue'),
          meta: {
            shortcut: 'main',
            menu: 'master',
            submenu: 'user',
          },
        },
        {
          path: ':id/edit',
          component: () => import('./views/edit.vue'),
          meta: {
            shortcut: 'main',
            menu: 'master',
            submenu: 'user',
          },
        },
        {
          path: ':id',
          component: () => import('./views/show.vue'),
          meta: {
            shortcut: 'main',
            menu: 'master',
            submenu: 'user',
          },
        },
      ],
    },
  ],
}
