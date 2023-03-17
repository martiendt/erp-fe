<template>
  <div class="main-content-container">
    <div class="main-content-header">
      <h2>User</h2>
      <component
        :is="Breadcrumb"
        :breadcrumbs="[{ name: 'master' }, { name: 'user', path: '/master/user' }, { name: form.username }]"
      />
    </div>
    <div class="card p-4 space-y-5">
      <form class="flex flex-col space-y-3" @submit.prevent="onSubmit()">
        <h4 class="font-bold">Authentication Data</h4>
        <label class="block space-y-1">
          <span>Username:</span>
          <input v-model="form.username" class="form-input" placeholder="Username" type="text" readonly />
        </label>
        <label class="block space-y-1">
          <span>Email:</span>
          <input v-model="form.email" class="form-input" placeholder="Email" type="text" />
        </label>
        <div>
          <hr class="my-3 border-slate-800/20" />
        </div>
        <h4 class="font-bold">User Data</h4>
        <label class="block space-y-1">
          <span>Full Name:</span>
          <input v-model="form.fullName" class="form-input" placeholder="Full Name" type="text" />
        </label>
        <div>
          <button type="submit" class="btn btn-base text-slate-100 bg-blue-500 hover:bg-blue-600">Update</button>
        </div>
      </form>
    </div>
    <div class="card p-4 space-y-5">
      <form class="flex flex-col space-y-3" @submit.prevent="onSubmitPassword()">
        <h4 class="font-bold">Authentication Data</h4>
        <label class="block space-y-1">
          <span>New Password:</span>
          <input v-model="form.password" class="form-input" placeholder="New Password" type="password" />
        </label>
        <div>
          <button type="submit" class="btn btn-base text-slate-100 bg-blue-500 hover:bg-blue-600">
            Update Password
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Breadcrumb from '@/components/breadcrumb.vue'
import axios from '@/axios'
import { useRoute } from 'vue-router'

const route = useRoute()

const form = ref({
  username: '',
  password: '',
  email: '',
  fullName: '',
})

onMounted(async () => {
  const result = await axios.get('/user/' + route.params.id)
  form.value.username = result.data.username
  form.value.email = result.data.email
  form.value.fullName = result.data.fullName
})

const onSubmit = async () => {
  await axios.patch('/user/' + route.params.id, {
    username: form.value.username,
    email: form.value.email,
    fullName: form.value.fullName,
  })
}

const onSubmitPassword = () => {}
</script>
