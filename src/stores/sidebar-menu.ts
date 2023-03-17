import { defineStore } from 'pinia'

export interface ShortcutInterface {
  name: string
  meta: string
  icon: string
  menu: Array<MenuInterface>
  active?: boolean
  path?: string
  link?: string
}

export interface MenuInterface {
  name: string
  meta: string
  active?: boolean
  path?: string
  link?: string
  separator?: boolean
  submenu?: Array<SubmenuInterface>
}

export interface SubmenuInterface {
  name: string
  meta: string
  active?: boolean
  path?: string
  link?: string
  separator?: boolean
}

interface StateInterface {
  shortcut: Array<ShortcutInterface>
}

export const useSidebarMenuStore = defineStore('sidebar-menu', {
  state: (): StateInterface => ({
    shortcut: [menuMain],
  }),
})

const menuMain = {
  name: 'Main Menu',
  meta: 'main',
  icon: 'fa-regular fa-house',
  menu: [
    {
      name: 'Dashboard',
      meta: 'dashboard',
      path: '/',
    },
    {
      name: 'Master',
      meta: 'master',
      submenu: [
        {
          name: 'Item',
          meta: 'item',
          path: '/master/item',
        },
      ],
    },
  ],
}
