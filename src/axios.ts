import axios from 'axios'
import api from '@/config/api'
import cookie from '@point-hub/vue-cookie'

const instance = axios.create({
  baseURL: api.baseURL,
  timeout: api.timeout,
})

instance.defaults.headers.common['Authorization'] = `Bearer ${cookie.get('token')}`

export default instance
