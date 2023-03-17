import { defineStore } from 'pinia'
import cookie from '@point-hub/vue-cookie'
import axios from '@/axios'
import { AxiosError } from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: {
      name: '',
    },
  }),
  actions: {
    login() {
      this.$state.user.name = 'johndoe'
    },
    async verifyToken(token: string) {
      try {
        const response = await axios.post('/auth/verify-token')
        this.$state.user.name = response.data.fullName
      } catch (error) {
        this.logout()
      }
    },
    logout() {
      this.$state.user.name = ''
      cookie.remove('token')
    },
    async isAuthenticated() {
      const token = cookie.get('token')
      if (this.$state.user.name === '' && !token) {
        return false
      }

      if (this.$state.user.name === '' && token) {
        await this.verifyToken(token)
      }
      return true
    },
  },
})
