<template>
  <div class="main-content-container">
    <div class="main-content-header">
      <h2>User</h2>
      <component
        :is="Breadcrumb"
        :breadcrumbs="[{ name: 'master' }, { name: 'user', path: '/master/user' }, { name: 'create' }]"
      />
    </div>
    <div class="card p-4 space-y-5">
      <form class="flex flex-col space-y-4" @submit.prevent="onSubmit()">
        <h4 class="font-bold">Authentication Data</h4>
        <label class="block space-y-1">
          <span class="font-semibold">Username:</span>
          <input v-model="form.username" class="form-input" placeholder="Username" type="text" />
        </label>
        <label class="block space-y-1">
          <span class="font-semibold">Email:</span>
          <input v-model="form.email" class="form-input" placeholder="Email" type="email" />
        </label>
        <label class="block space-y-1">
          <span class="font-semibold">Password:</span>
          <input v-model="form.password" class="form-input" placeholder="Password" type="password" />
        </label>
        <label class="block space-y-1">
          <span class="font-semibold">Role:</span>
        </label>
        <div>
          <hr class="my-3 border-slate-800/20" />
        </div>
        <h4 class="font-bold">User Data</h4>
        <label class="block space-y-1">
          <span class="font-semibold">Full Name:</span>
          <input v-model="form.fullName" class="form-input" placeholder="Full Name" type="text" />
        </label>
        <div>
          <button type="submit" class="btn btn-base text-slate-100 bg-blue-500 hover:bg-blue-600">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { watchDebounced } from '@vueuse/core'
import Breadcrumb from '@/components/breadcrumb.vue'
import axios from '@/axios'
import { useRouter } from 'vue-router'

const router = useRouter()
const isShowSelect = ref(false)
const form = ref({
  username: '',
  email: '',
  password: '',
  fullName: '',
  role: '',
})

const roles = ref<[]>([])
const isLoadingRoles = ref(false)

onMounted(async () => {
  isLoadingRoles.value = true
  // const result = await readAllRole()
  // roles.value = result.roles
  isLoadingRoles.value = false
})

const onSubmit = async () => {
  await axios.post('/user', form.value)
  router.push('/master/user')
}

const latestSelectedRole = ref()

const onBlurSelectRole = () => {
  if (!roles.value.some((el) => el.name === form.value.role)) {
    form.value.role = latestSelectedRole.value
  }
  isShowSelect.value = false
}

const choose = (text: string) => {
  if (roles.value.some((el) => el.name === text)) {
    latestSelectedRole.value = text
    form.value.role = text
  } else {
    form.value.role = ''
  }
  isShowSelect.value = false
}

const readAllRole = async () => {
  // return await roleApi.readAll(1, 10, form.value.role)
}

watchDebounced(
  form.value,
  async () => {
    // const result = await readAllRole()
    // roles.value = result.roles
  },
  { debounce: 500, maxWait: 1000 }
)
</script>
